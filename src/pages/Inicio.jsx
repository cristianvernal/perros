import React from "react";
import "../css/Inicio.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Inicio() {
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const [showModal, setShowModal] = useState(false);


  //Aca llamamos a los datos que estan en la API.
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

  //Aca llamamos a las fotos que tiene cada raza.
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

  //LLamamos a una imagen aleatoria de las razas o sub razas.
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

  //Dropwdown con las razas.
  const handleBreedChange = (event) => {
    const breed = event.target.value;
    setSelectedBreed(breed);
    setSelectedSubBreed(""); 
    fetchImages(breed);
    fetchSubBreeds(breed);
  };

  //Dropdown con las sub razas, si es que la tiene.
  const handleSubBreedChange = (event) => {
    const subBreed = event.target.value;
    setSelectedSubBreed(subBreed);
    fetchImages(selectedBreed, subBreed);
  };

  //Aca llamamos a las sub razas.
  const fetchSubBreeds = async (breed) => {
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
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBreed("");
    setSelectedSubBreed("");
    setCurrentImage("");
  };

  const handleClear = () => {
    setSelectedBreed("");
    setSelectedSubBreed("");
    setCurrentImage("");
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3" style={{ color: "white" }}>
        Listado de razas y sub-razas encontrados en la BD{" "}
      </h2>

      <div className="mb-3">
        <label
          htmlFor="breedSelect"
          className="form-label"
          style={{ color: "white" }}
        >
          Selecciona la raza:
        </label>
        <select
          id="breedSelect"
          className="form-select"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          <option value="">Raza</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      {selectedBreed && subBreeds.length > 0 && (
        <div className="mb-3">
          <label htmlFor="subBreedSelect" className="form-label">
            Selecciona la sub-raza:
          </label>
          <select
            id="subBreedSelect"
            className="form-select"
            value={selectedSubBreed}
            onChange={handleSubBreedChange}
          >
            <option value="">Sub-raza</option>
            {subBreeds.map((subBreed) => (
              <option key={subBreed} value={subBreed}>
                {subBreed}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="mb-3">
        <Button
          variant="primary"
          onClick={handleSearch}
          disabled={!selectedBreed}
          style={{ color: "white" }}
        >
          buscar
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={handleClear}
          disabled={!selectedBreed}
        >
          Limpiar
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: "#aec3b0" }}>
          <Modal.Title style={{ color: "white" }}>
            Informacion del Perro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#aec3b0", color: "white" }}>
          <h5>Raza: {selectedBreed}</h5>
          {selectedSubBreed && <p>Sub Raza: {selectedSubBreed}</p>}
          {currentImage && (
            <div>
              <img
                src={currentImage}
                alt="Dog"
                className="img-fluid mb-3"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </div>
          )}
          <Button
            variant="primary"
            onClick={fetchRandomImage}
            disabled={!selectedBreed}
            style={{ color: "white" }}
          >
            Otra foto
          </Button>
        </Modal.Body>
        <Modal.Footer style={{ background: "#aec3b0" }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ color: "white" }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        {" "}
        <div className="row justify-content-center">
          {" "}
          <div className="col-md-6">
            {" "}
            <Image
              src="https://news.harvard.edu/wp-content/uploads/2023/11/dog_brains_2500.png"
              className="img-fluid"
              alt="Dog Brains"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
