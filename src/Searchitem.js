import { useState } from "react";

const Searchitem = ({ search, setSearch }) => {
  const [colour, Newcolour] = useState(" ");

  return (
    <>
      <form
        className="Search"
        onSubmit={(e) => {
          e.preventDefault();
          setSearch("");
        }}
      >
        <label htmlFor="colour"> Colour Name</label>
        <input
          id="Colour"
          type="text"
          value={colour}
          onChange={(e) => Newcolour(e.target.value)}
        ></input>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          role="Searchbox"
          placeholder="Search Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>

      <div style={{ height: 50, width: 200, backgroundColor: colour }}>
        {" "}
        {colour}
      </div>
      <form className="colour">
        <label> </label>
      </form>
    </>
  );
};

export default Searchitem;
