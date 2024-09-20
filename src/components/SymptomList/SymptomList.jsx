import { useState, useEffect } from "react";
import "./SymptomList.scss";
import axios from "axios";

export default function SymptomList({ symptoms, patient }) {
  const [newDesease, setNewDeasease] = useState("");
  const [secondPrompt, setSecondPrompt] = useState("");

  useEffect(() => {
    setSecondPrompt("");
  }, []);

  const getResponse = async (prompt) => {
    if (!prompt) {
      console.error("The query is empty or undefined.");
      return;
    }

    console.log("Sending query to API:", prompt);

    try {
      const result = await axios.post(
        "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/api/get-response",
        { prompt }
      );
      console.log("API response received:", result.data);
      setNewDeasease(result.data.choices[0].message.content);
    } catch (error) {
      console.error(
        "Error fetching response:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll("input:checked");

    let str = "";

    inputs.forEach((input) => {
      console.log("Checked symptom:", input.value);
      str += ` ${input.value}`;
    });

    if (str.trim() === "") {
      console.error("No symptoms selected.");
      return;
    }

    const query = `
    We are Lloyds Bank. We are focused in accessibility for our costumers.
    Generate a list of short questions for the costumer I am currently speaking with that can allow me to: ${str.trim()}
    This are his/hers current circunstances: ${patient.diagnosis}
    My goal is to be empathetic, show interest and be helpful.
    Do not directly mention their circunstances.
    Remmember we are a bank and our goal is mainly to help our costumer have easy access to our services while being mindfull of their
    financial state and decitions.
    Whenever possible and pertinent mention specific services that can address this costumer's needs.
    Respond only with the top 5 most relevant questions and nothing else.`;

    console.log("Generated query:", query);

    getResponse(query);
  };

  return (
    <section className="symptoms">
      <form className="symptoms__form" onSubmit={submitHandler}>
        {symptoms.length > 0 ? (
          symptoms.map((symptom) => (
            <label key={symptom} className="symptoms__symptom">
              <input
                className="symptoms__checkbox"
                type="checkbox"
                value={symptom}
                name={`input_${symptom}`}
              />
              {symptom}
            </label>
          ))
        ) : (
          <p>Click to get personalized tips to ensure costumer satisfaction.</p>
        )}
        <button className="symptoms__cta" type="submit">
          Generate follow up questions
        </button>
      </form>
      <div>{newDesease}</div>
    </section>
  );
}
