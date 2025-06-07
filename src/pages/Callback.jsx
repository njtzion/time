import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      // This is where the Fyers auth code would be handled
      console.log('Authorization code:', code);
    }
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">Redirecting...</h2>
      <p>Please wait while we complete authentication.</p>
    </div>
  );
};

export default Callback;