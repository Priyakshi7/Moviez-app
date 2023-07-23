import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  /* ... (styles remain unchanged) */
`;

// ... (other styled components remain unchanged)

const MovieComponent = ({ movie, onMovieSelect }) => {
  const { Title, Year, imdbID, Type, Poster } = movie;

  return (
    <MovieContainer
      onClick={() => {
        onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;
