import './Cards.css';
import Card from './Card';


function Cards(props) {

  const data = props.data

  const card = data.map(x => {
    return <Card data={x} planning={props.planning}/>

  })

  return (
    <div className="cards">
      {card}
    </div>
  );
}

export default Cards;