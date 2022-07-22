import './gallery.css';
import Character from "../../types/Character";
import CharacterCard from "../CharacterCard/CharacterCard";

export default function Gallery({...props}) {
    return (
        <section>
            {props.characterList && props.characterList

                .filter((character: Character) => {
                    const charCheck = [character.name, character.origin.name, character.gender, character.status]
                    let returnValue: number = 0;
                    charCheck.forEach(element => {
                        if (element.toString().toLowerCase().includes(props.searchText.toString().toLowerCase())) {
                            returnValue++;
                        }
                    })
                    return returnValue > 0;
                })
                .map((character: Character) => {
                    return <CharacterCard key={character.id}
                                          name={character.name}
                                          image={character.image}
                                          originName={character.origin.name}
                                          gender={character.gender}
                                          status={character.status}/>
                })}
        </section>

    );
}