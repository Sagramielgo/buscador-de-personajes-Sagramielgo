import '../stylesSheets/App.scss';
import CharacterList from './characters/CharacterList';
import getDataFromApi from './services/Api';
import Filters from './filters/Filters';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './characters/CharacterDetail';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('all');
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setData(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
    } else if (inputChange.key === 'planet') {
      const indexPlanet = planets.indexOf(inputChange.value);
      if (indexPlanet === -1) {
        setPlanets([...planets, inputChange.value]);
      } else {
        const newPlanets = [...planets];
        newPlanets.splice(indexPlanet, 1);
        setPlanets(newPlanets);
        console.log(newPlanets);
      }
    }
  };
  console.log(planets);
  const filteredCharacters = data
    .filter((character) => {
      return character.name.toUpperCase().includes(name);
    })
    .sort((characterA, characterB) =>
      characterA.name > characterB.name ? 1 : -1
    )
    .filter((character) => {
      return specie === 'all' ? true : character.specie === specie;
    })
    .filter((character) => {
      return planets.length === 0 ? true : planets.includes(character.planet);
    });
  //no pintar los repetidos
  const getPlanetOptions = () => {
    const planetsArray = data.map((character) => character.planet);
    const planets = new Set(planetsArray);
    return Array.from(planets);
  };

  const handleReset = () => {
    console.log('estoy borrando');
    setData(data);
    setName('');
    setSpecie('all');
    setPlanets([]);
  };

  const renderCharacterDetail = (props) => {
    const clickedCharacter = parseInt(props.match.params.id);
    const foundCharacter = data.find((character) => {
      return character.id === clickedCharacter;
    });
    return <CharacterDetail characterInfo={foundCharacter} />;
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <>
            <header className="app__header">
              <Filters
                handleFilter={handleFilter}
                handleReset={handleReset}
                name={name}
                specie={specie}
                planetOptions={getPlanetOptions()}
                planets={planets}
              />
            </header>
            <main className="app__main">
              <CharacterList charactersInfo={filteredCharacters} />
            </main>
          </>
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
      <h5 className="copy">By Sagra Mielgo copy 2021</h5>
    </div>
  );
};
export default App;
