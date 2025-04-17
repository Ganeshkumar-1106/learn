import React, { useState } from 'react';
import axios from 'axios';

const AddDog = () => {
  const [dog, setDog] = useState({
    name: '',
    breedName: '',
    color: '',
    vacination: false,
    age: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDog((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9090/saveDog', dog)
      .then(() => {
        setMessage('🎉 Dog saved successfully!');
        setDog({ name: '', breedName: '', color: '', vacination: false, age: '' });
      })
      .catch((err) => {
        console.error(err);
        setMessage('❌ Error saving dog.');
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Add a New Dog</h2>
      {message && (
        <div className="mb-4 text-center font-medium text-green-600">{message}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={dog.name}
          onChange={handleChange}
          placeholder="Dog Name"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <input
          type="text"
          name="breedName"
          value={dog.breedName}
          onChange={handleChange}
          placeholder="Breed"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <input
          type="text"
          name="color"
          value={dog.color}
          onChange={handleChange}
          placeholder="Color"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <input
          type="number"
          name="age"
          value={dog.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          step="0.1"
          required
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="vacination"
            checked={dog.vacination}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="vacination" className="text-gray-700">Vaccinated</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Dog
        </button>
      </form>
    </div>
  );
};

export default AddDog;
