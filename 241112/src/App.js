import './App.css';
import ConditionalComponent from './ConditionalComponent';

const App = () => {
  return (
    <div>
      <h1>Toggle Component</h1>
      <ConditionalComponent isActive={true} />
    </div>
  );
};
export default App;

