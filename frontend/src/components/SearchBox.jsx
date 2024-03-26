import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      setKeyword("");
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          type="submit"
          variant="outline-light"
          className="p-2 mx-2"
          style={{
            border: "none",
            backgroundColor: "inherit",
            display: "flex",
          }}
        >
          <BsArrowBarLeft
            style={{ color: "black", display: "flex", marginTop: "6px" }}
          />
          Search
        </button>
      </div>
    </Form>
  );
};

export default SearchBox;
