import './gallery.css';
import Character from "../../types/Character";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterList from "../../types/CharacterList";


export default function Gallery(props: CharacterList) {
    return (
        <section>
            {props.characterList && props.characterList.map((character: Character) => {
                return <CharacterCard key={character.id}
                                      name={character.name}
                                      image={character.image}
                                      location={character.originName}
                                      gender={character.gender}
                                      status={character.status}/>
            })}
            {!!props.characterList && <p> Search didn't find a matching character, try again! </p>}
        </section>

    );
}