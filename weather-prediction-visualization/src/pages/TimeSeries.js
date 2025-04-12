import { useEffect, useState } from 'react';

export const TimeSeries = () => {
  const [arSummary, setArSummary] = useState('');
  const [maSummary, setMaSummary] = useState('');
  const [armaSummary, setArmaSummary] = useState('');

  useEffect(() => {
    fetch('/time_series/ar_results_summary.txt').then((res) => res.text()).then(setArSummary);
    fetch('/time_series/ma_results_summary.txt').then((res) => res.text()).then(setMaSummary);
    fetch('/time_series/arma_results_summary.txt').then((res) => res.text()).then(setArmaSummary);
  }, []);

  const summaryBlock = (text) => (
    <pre
      style={{
        backgroundColor: '#111',
        color: '#0f0',
        padding: '1rem',
        borderRadius: '8px',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        marginTop: '1rem',
      }}
    >
      {text || 'Loading...'}
    </pre>
  );

  return (
    <div>
      <h1>Time Series</h1>

      <p>
        We originally tried to perform time series analysis for individual days, but our dataset did not
        contain enough rainy days (about 500 entries out of 41,000, surprisingly), so our secondary approach
        was to group by month and predict the total amount of precipitation by month.
      </p>

      <p>
        We used AR, MA, and ARMA models, whose predictions are visualized and summarized below.
      </p>

      <img src="/time_series/PrecipitationOverTime.png" alt="Precipitation Over Time" />
      <img src="/time_series/MonthlyPrecipitationDecomposition.png" alt="Monthly Decomposition" />

      <h3>Autocorrelation</h3>
      <img src="/time_series/MonthlyPrecipitationPACF.png" alt="PACF" />
      <img src="/time_series/MonthPrecipitationACF.png" alt="ACF" />

      <h2>AR Model</h2>
      <img src="/time_series/ARvsActual.png" alt="AR vs Actual" />
      {summaryBlock(arSummary)}

      <h2>MA Model</h2>
      <img src="/time_series/MAvsActual.png" alt="MA vs Actual" />
      {summaryBlock(maSummary)}

      <h2>ARMA Model</h2>
      <img src="/time_series/ARMAvsActual.png" alt="ARMA vs Actual" />
      {summaryBlock(armaSummary)}

      <p>
        You can also view the full interactive HTML report{' '}
        <a
          href="/time_series/time_series.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#90ee90', fontWeight: 'bold' }}
        >
          here
        </a>
        .
      </p>

      <nav>
        <a href="/">← Back to Home</a>
      </nav>
    </div>
  );
};
