import { useEffect } from 'react';
import Button from './components/Button/Button';

function App() {
  useEffect(() => {
    console.log('App loaded');
  }, []);

  return (
    <div>
      this is a react app <Button />
      <img src={window.location.href + 'svgs/external-link.svg'} alt="external-link" />
    </div>
  );
}

export default App;
