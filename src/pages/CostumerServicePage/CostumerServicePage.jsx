import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import patients from "../../data/patients.json";
import CostumerCard from "../../components/CostumerCard/CostumerCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import SymptomList from "../../components/SymptomList/SymptomList";

const apiUrl = "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/";

export default function CostumerServicePage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [currentPatientId, setCurrentPatientId] = useState(0);
  const [symptoms, setSymtoms] = useState([]);

  const patient = patients[currentPatientId];

  useEffect(() => {
    if (response) {
      const array = response.split(",").filter((item) => item.trim() !== "");
      if (array.length > 0) {
        setSymtoms(array);
      } else {
        console.error("No valid symptoms received");
      }
    }
  }, [response]);

  useEffect(() => {
    setPrompt(
      `
      We are Lloyds Bank. We are focused in accessibility for our costumers.
      Considering:
      A vulnerable consumer is someone who, due
      to their personal circumstances, is especially
      susceptible to detriment, particularly when a firm
      is not acting with appropriate levels of care.
      Considering our definition of harm coul be one or more of these 7:

      - Financial exclusion
      - Difficulty accessing services
      - Disengagement with the market/exclusion
      - Inability to manage a product/service
      - Over indebtedness
      - Buying inappropriate products/services
      - Scams/financial abuse

      Considering the following personal circumstance of a client of our bank:
      ${patient.diagnosis}
      And considering I am a costumer service provider of the bank currently speaking to a vulnerable costumer of the bank.
      Give me a list of 5 specific things to consider while speaking to the costumer in order to provide personalized, caring, empathetic,
      taylored, individualized support.
      Avoid general, obvious or generic advice. Be specific.
      Your response must be a list of sentences without commas but each sentence should be separated form the rest by a comma.
      Do not capitalize anything. Do not say anything else.`
    );
  }, [currentPatientId]);

  const getResponse = async () => {
    try {
      const result = await axios.post(
        "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/api/get-response",
        { prompt }
      );
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(
        "Error fetching response:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleInputChange = (event) => {
    const idNum = event.target.value;
    const patientFound = patients.find((patient) => patient.id === idNum);
    if (idNum === "") {
      return;
    }
    if (patientFound) {
      setCurrentPatientId(idNum);
    } else {
      console.log("ID does not match any patient.");
    }
  };

  return (
    <div>
      <div className="search-container">
        <SearchBar handleInputChange={handleInputChange} />
      </div>
      <CostumerCard patient={patient}></CostumerCard>
      <button onClick={getResponse}>Get tips</button>
      <SymptomList symptoms={symptoms} patient={patient} />
    </div>
  );
}
