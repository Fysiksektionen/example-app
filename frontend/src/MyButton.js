import React, { useState } from 'react';
import axios from 'axios';

const MyButton = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://f.kth.se/example-app/api/data');
      setData(response.data);
    } catch (err) {
      setError('Något gick fel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Laddar...' : 'Hämta Data'}
      </button>
      {data && (
        <div>
          <h3>Resultat:</h3>
          <pre>{data.message}</pre>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default MyButton;
