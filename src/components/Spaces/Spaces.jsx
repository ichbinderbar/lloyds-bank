import "./Spaces.scss";

export default function Spaces() {
  return (
    <section className="spaces">
      <article className="spaces__card">
        <img src="" alt="" className="spaces__card-icon" />
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Everyday</h3>
          <p className="spaces__card-text">
            Stay on top of your finance with our tools and insights
          </p>
        </div>
      </article>

      <article className="spaces__card">
        <img src="" alt="" className="spaces__card-icon" />
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Save & Invest</h3>
          <p className="spaces__card-text">
            Build your financial future and track your growth
          </p>
        </div>
      </article>

      <article className="spaces__card">
        <img src="" alt="" className="spaces__card-icon" />
        <div className="spaces__card-content">
          <h3 className="spaces__card-header">Borrow</h3>
          <p className="spaces__card-text">
            Check your credit score and see your borrowing options
          </p>
        </div>
      </article>
    </section>
  );
}
