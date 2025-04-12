export const Home = () => (
  <div>
    <h1>Weather Prediction</h1>
    <p>
      We collected a Kaggle dataset of the hourly weather forecast in Boston, MA every day from the start of 2020 to the end of 2023.
      We used two machine learning methods, MLP and Time Series, to perform weather prediction.
    </p>
    <p>
      Explore the tabs below to learn more!
    </p>
    <nav>
      <a href="/mlp">MLP</a>
      <a href="/timeseries">Time Series</a>
      <a
        href="/data.csv"
        download
      >
        Download CSV
      </a>
    </nav>
  </div>
);
