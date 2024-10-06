import { useNavigate, useParams } from "react-router-dom";
import { useDeletePartyMutation, useGetPartyQuery } from "/partySlice";

export default function PartyDetails() {
  const { partyId } = useParams();
  const { data: party, isLoading, error } = useGetPartyQuery(partyId);

  const navigate = useNavigate();

  const [deleteParty] = useDeletePartyMutation();
  async function removeParty() {
    try {
      await deleteParty(party.id);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  }

  if (isLoading) return <p>Loading party...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>
        {party.name} #{party.id}
      </h1>
      <time dateTime={party.date}>{party.date}</time>
      <address>{party.location}</address>
      <p>{party.description}</p>
      <button onClick={removeParty}>Delete Party</button>
    </>
  );
}
