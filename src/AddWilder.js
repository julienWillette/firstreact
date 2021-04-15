import axios from 'axios'
import { useState } from 'react'

function AddWilder() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const result = await axios.post(
                "http://localhost:3000/api/wilder/create",
                {
                    name,
                    city,
                }
            );
            console.log(result);
            if (result.data.success) {
                setError("");
            }
          }catch (error) {
              if (error.response) {
                  setError(error.response.data.message);
              }else {
                  setError(error.message);
              }
          }
        }}
      >
        <label htmlFor="name-input">Name :</label>
        <input
          id="name-input"
          type="text"
          placeholder="Type the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="city-input">City :</label>
        <input
          id="city-input"
          type="text"
          placeholder="Type the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error !== "" && <p>{error}</p>}
        <button>Add</button>
      </form>
    );
};
  export default AddWilder;