import { Link } from "react-router-dom";

import { useGetPartiesQuery } from "/partySlice";

export default function PartyList() {
  const { data: parties = [] } = useGetPartiesQuery();

  return (
    <>
      <h1>Upcoming Parties</h1>
      <ul>
        {parties.map((p) => (
          <li key={p.id}>
            <h2>
              {p.name} #{p.id}
            </h2>
            <address>{p.location}</address>
            <Link to={`/parties/${p.id}`}>See details</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
