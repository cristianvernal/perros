import React from 'react'
import "../components/Inicio.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Inicio() {
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  const fetchImages = async (breed, subBreed = "") => {
    try {
      let url = `https://dog.ceo/api/breed/${breed}`;
      if (subBreed) {
        url += `/${subBreed}`;
      }
      url += "/images";
      const response = await fetch(url);
      const data = await response.json();
      const images = data.message;
      setCurrentImage(images[0]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchRandomImage = async () => {
    try {
      let url = `https://dog.ceo/api/breed/${selectedBreed}`;
      if (selectedSubBreed) {
        url += `/${selectedSubBreed}`;
      }
      url += "/images/random";
      const response = await fetch(url);
      const data = await response.json();
      setCurrentImage(data.message);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };

  const handleBreedChange = event => {
    const breed = event.target.value;
    setSelectedBreed(breed);
    setSelectedSubBreed(""); // Reset sub breed when main breed changes
    fetchImages(breed);
    fetchSubBreeds(breed);
  };

  const handleSubBreedChange = event => {
    const subBreed = event.target.value;
    setSelectedSubBreed(subBreed);
    fetchImages(selectedBreed, subBreed);
  };

  const fetchSubBreeds = async breed => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
      const data = await response.json();
      const subBreedList = data.message;
      setSubBreeds(subBreedList);
    } catch (error) {
      console.error("Error fetching sub breeds:", error);
    }
  };

  const handleSearch = () => {
    setShowCard(true);
  };

  const handleClear = () => {
    setShowCard(false);
    setSelectedBreed("");
    setSelectedSubBreed("");
    setCurrentImage("");
  };

  return (
    
    <div className="container">
      <h2 className="mt-4 mb-3">Dog Breed Images</h2>
      <div className="mb-3">
        <label htmlFor="breedSelect" className="form-label">Select Breed:</label>
        <select
          id="breedSelect"
          className="form-select"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          <option value="">Select Breed</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      {selectedBreed && subBreeds.length > 0 && (
        <div className="mb-3">
          <label htmlFor="subBreedSelect" className="form-label">Select Sub Breed:</label>
          <select
            id="subBreedSelect"
            className="form-select"
            value={selectedSubBreed}
            onChange={handleSubBreedChange}
          >
            <option value="">Select Sub Breed</option>
            {subBreeds.map(subBreed => (
              <option key={subBreed} value={subBreed}>{subBreed}</option>
            ))}
          </select>
        </div>
      )}
      <div className="mb-3">
        <Button
          variant="primary"
          onClick={handleSearch}
          disabled={!selectedBreed}
        >
          Search
        </Button>{' '}
        <Button
          variant="secondary"
          onClick={handleClear}
          disabled={!showCard}
        >
          Clear
        </Button>
      </div>
      {showCard && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Breed: {selectedBreed}</Card.Title>
            {selectedSubBreed && (
              <Card.Subtitle className="mb-2 text-muted">Sub Breed: {selectedSubBreed}</Card.Subtitle>
            )}
            {currentImage && (
              <div>
                <Card.Img variant="top" src={currentImage} style={{ maxWidth: "300px", maxHeight: "300px" }} />
              </div>
            )}
            <Button
              variant="primary"
              onClick={fetchRandomImage}
              disabled={!selectedBreed}
            >
              Random Image
            </Button>
          </Card.Body>
        </Card>
      )}
      
    </div>
    
  );
}
export default Inicio
