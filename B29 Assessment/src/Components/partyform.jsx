import { useNavigate } from "react-router-dom";
import { useAddPartyMutation } from "./partySlice";
import { useState } from "react";

export default function PartyForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
  });

  const navigate = useNavigate();
  const [addParty] = useAddPartyMutation();
  async function postParty(event) {
    event.preventDefault();

    const isoDate = new Date(formData.date).toISOString();
    try {
      const party = await addParty({
        ...formData,
        date: isoDate,
      }).unwrap();
      navigate(`/parties/${party.id}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={postParty}>
      <h2>Add a Party</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
      </label>
      <button>Add Party</button>
    </form>
  );
}
