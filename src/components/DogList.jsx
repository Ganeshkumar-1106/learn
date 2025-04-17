import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gsap from 'gsap';

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // GSAP animation for the heading
    gsap.fromTo(
      '.dog-heading', // Target the element with the class "dog-heading"
      {
        opacity: 0, // Initial opacity
        y: 50, // Initial position (from 50px below)
      },
      {
        opacity: 1, // Final opacity
        y: 0, // Final position (move to original position)
        duration: 1.5, // Duration of animation
        ease: 'power4.out', // Ease function for a smooth animation
      }
    );
  }, []);

  useEffect(() => {
    axios.get('http://localhost:9090/getDogs')
      .then(res => setDogs(res.data))
      .catch(err => console.error("Error while getting the dog details API", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="dog-heading text-3xl font-bold text-center mb-6 text-stone-600">Dog List</h2>

      {dogs.length === 0 ? (
        <p className="text-center text-gray-500">No Dogs Available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <div
              key={dog.dogId}
              className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{dog.name}</h3>
              <p className="text-gray-600"><span className="font-medium">Breed:</span> {dog.breedName}</p>
              <p className="text-gray-600"><span className="font-medium">Color:</span> {dog.color}</p>
              <p className="text-gray-600"><span className="font-medium">Age:</span> {dog.age} years</p>
              <p className="text-gray-600">
                <span className="font-medium">Vaccinated:</span>{' '}
                <span className={dog.vacination ? 'text-green-600' : 'text-red-600'}>
                  {dog.vacination ? 'Yes ✅' : 'No ❌'}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogList;
