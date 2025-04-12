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
        marginBottom: '2rem',
      }}
    >
      {text || 'Loading...'}
    </pre>
  );

  const iframeStyle = {
    width: '100%',
    border: '2px solid white',
    borderRadius: '8px',
    backgroundColor: 'white',
    marginBottom: '2rem'
  };

  const iframeHeights = {
    default: '500px',
    decomposition: '816px',
    small: '416px'
  };

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

      <h2>Monthly Precipitation</h2>
      <iframe
        src="/time_series/PrecipitationOverTime.html"
        title="Precipitation Over Time"
        style={{ ...iframeStyle, height: iframeHeights.default }}
      />

      <h2>Decomposition</h2>
      <iframe
        src="/time_series/MonthlyPrecipitationDecomposition.html"
        title="Decomposition"
        style={{ ...iframeStyle, height: iframeHeights.decomposition }}
      />

      <h3>Autocorrelation</h3>
      <iframe
        src="/time_series/MonthPrecipitationACF.html"
        title="ACF Plot"
        style={{ ...iframeStyle, height: iframeHeights.small }}
      />

      <h3>Partial Autocorrelation</h3>
      <iframe
        src="/time_series/MonthlyPrecipitationPACF.html"
        title="PACF Plot"
        style={{ ...iframeStyle, height: iframeHeights.small }}
      />

      <h2>AR Model</h2>
      <iframe
        src="/time_series/ARvsActual.html"
        title="AR vs Actual"
        style={{ ...iframeStyle, height: iframeHeights.default }}
      />
      {summaryBlock(arSummary)}

      <h2>MA Model</h2>
      <iframe
        src="/time_series/MAvsActual.html"
        title="MA vs Actual"
        style={{ ...iframeStyle, height: iframeHeights.default }}
      />
      {summaryBlock(maSummary)}

      <h2>ARMA Model</h2>
      <iframe
        src="/time_series/ARMAvsActual.html"
        title="ARMA vs Actual"
        style={{ ...iframeStyle, height: iframeHeights.default }}
      />
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
