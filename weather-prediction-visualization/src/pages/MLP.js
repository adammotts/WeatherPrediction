export const MLP = () => (
  <div>
    <h1>MLP</h1>
    <p>
      The graph below shows how error changed over training epochs for the multilayer perceptron model.
    </p>
    <img
      src="/mlp/error_over_time.png"
      alt="MLP Error Over Time"
      style={{
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          display: 'block',
          marginBottom: '1rem',
      }}
    />

    <p>
      You can also view the source code {' '}
      <a
        href="/mlp/mlp_prediction.html"
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
