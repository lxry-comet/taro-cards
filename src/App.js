
import Section from './components/Section';
import './index.css';

//? Taro
import TaroList from './components/TaroList';
import taro from './json/taro.json';

export default function App() {
  return (
    <div>
      <Section title="Колекція карт Таро">
        <TaroList items={taro} />
      </Section >
    </div>
  );
};
