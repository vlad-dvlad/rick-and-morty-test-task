import { Route, Routes } from 'react-router';
import Characters from './components/characters';
import SingleCharacter from './components/single-character';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/chracter/:id" element={<SingleCharacter />} />
    </Routes>
  );
};

export default App;
