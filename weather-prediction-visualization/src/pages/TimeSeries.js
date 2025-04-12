export const TimeSeries = () => (
  <div>
    <h1>Time Series Analysis</h1>
    <p>Visualizations related to monthly precipitation forecasting using AR, MA, and ARMA models:</p>

    <img src="/time_series/PrecipitationOverTime.png" alt="Precipitation Over Time" />
    <img src="/time_series/MonthlyPrecipitationDecomposition.png" alt="Monthly Decomposition" />

    <h3>Model Performance</h3>
    <img src="/time_series/ARvsActual.png" alt="AR vs Actual" />
    <img src="/time_series/MAvsActual.png" alt="MA vs Actual" />
    <img src="/time_series/ARMAvsActual.png" alt="ARMA vs Actual" />

    <h3>Autocorrelation</h3>
    <img src="/time_series/MonthlyPrecipitationPACF.png" alt="PACF" />
    <img src="/time_series/MonthPrecipitationACF.png" alt="ACF" />

    <p>
      You can also view the source code {' '}
      <a
        href="/time_series/time_series.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#90ee90', fontWeight: 'bold' }}
      >
        here
      </a>
    </p>

    <nav>
      <a href="/">← Back to Home</a>
    </nav>
  </div>
);
