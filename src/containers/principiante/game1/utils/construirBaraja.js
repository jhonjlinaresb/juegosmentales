import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const NUMERO_DE_CARTAS = 12; // Numero de cartas que se van a jugar

export default () =>  {
  console.log(FontAwesomeClasses);
  const fontAwesomeClasses = FontAwesomeClasses();
  let cartas = [];

  while (cartas.length < NUMERO_DE_CARTAS) {
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);
    const carta = {
      icono: fontAwesomeClasses.splice(index, 1)[0],
      fueAdivinada: false
    };

    cartas.push(carta);
    cartas.push({...carta});
  }

  return shuffle(cartas);
};
