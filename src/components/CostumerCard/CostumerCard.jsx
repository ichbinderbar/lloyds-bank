import "./CostumerCard.scss";

export default function CostumerCard({ patient }) {
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <article className="patient">
      <header className="patient__header">
        <div className="patient__image-container">
          <img
            className="patient__image"
            src={patient.image}
            alt={`${patient.name}'s profile`}
          />
        </div>
      </header>
      <section className="patient__details">
        <div className="patient__info-container">
          <p className="patient__info-label">
            <strong>Name:</strong>
            <span className="patient__info-data"> {patient.name}</span>
          </p>
          <p className="patient__info-label">
            <strong>Age:</strong>
            <span className="patient__info-data"> {patient.age}</span>
          </p>
          <p className="patient__info-label">
            <strong>Costumer since:</strong>
            <span className="patient__info-data">
              {" "}
              {patient["record-start-date"]}
            </span>
          </p>
          <p className="patient__info-label">
            <strong>Current circunstances:</strong>
            <span className="patient__info-data"> {patient.diagnosis}</span>
          </p>
        </div>
      </section>
    </article>
  );
}
