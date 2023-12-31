import React, { FunctionComponent, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import PokemonTable from "./components/Table";
import { styled } from "styled-components";
import Options from "./components/Options";
import Footer from "./components/Footer";

const App: FunctionComponent = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handleRowClick = (navigate: any, pokemonName: string) => {
    const newPath = `/Pokemons/${pokemonName}`;
    setSelectedPokemon(pokemonName);
    navigate(newPath);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <Header />
      <Wrapper>
        <Options handleSearch={handleSearch} />
        <StickyWrapper />
        <PokemonTable
          searchTerm={searchTerm}
          selectedPokemon={selectedPokemon}
          handleRowClick={handleRowClick}
        />
      </Wrapper>
      <Footer />
    </Router>
  );
};

export default App;

const Wrapper = styled.section`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 0.375rem;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media (min-width: 768px) {
    height: calc(100vh - 215px);
  }

  @media screen and (max-width: 768px) {
    height: calc(100vh - 215px);
  }
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 50px;
  overflow: hidden;
`;
