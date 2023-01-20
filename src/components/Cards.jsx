import Card from "./Card";
function Cards({ characters, onClose }) {
  //const { characters } = props;
  return (
    <div>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}
export default Cards;

//ya lo copie en el otro
