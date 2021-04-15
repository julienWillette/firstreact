import axios from 'axios'
import { useState, loadIcon } from 'react'
import { Container, CardRow, Input, Form, Label, Button, Error} from "./styles/elements";

function AddWilder() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
              setLoading(true);
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
          } finally {
              setLoading(false);
          }
        }}
      >
        <Label htmlFor="name-input">Name :</Label>
        <Input
          id="name-input"
          type="text"
          placeholder="Type the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="city-input">City :</Label>
        <Input
          id="city-input"
          type="text"
          placeholder="Type the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error !== "" && <Error>{error}</Error>}
        <Button showLoading={loading}>
        {loading ? (
            <img src={loadIcon} alt="loading" />
        ) : (
            "Add"
        )}
        </Button>
      </Form>
    );
};
  export default AddWilder;