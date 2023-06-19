import { SearchOutlined } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { categories } from "../../data";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [cat, setCat] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);

  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    navigate(`/product?search=${searchQuery}`);
    setIsSubMenuOpen1(false);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
          borderRadius: "15px",
          height: "40px",
        }}
      >
        <FormControl
          sx={{
            marginLeft: "auto",
            borderRadius: "15px",
            height: "auto",
            width: "15%",
          }}
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            fullWidth
            sx={{ marginLeft: "auto", borderRadius: "15px", height: "40px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map(({ id, title }) => (
              <MenuItem value={title} key={id}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search SN Electrical"
          inputProps={{ "aria-label": "SNEsearch" }}
          onChange={handleSearchInputChange}
          value={searchQuery}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearchButtonClick();
            }
          }}
        />
        <Button
          sx={{
            marginLeft: "auto",
            borderRadius: "15px",
            height: "40px",
            marginRight: "0",
            paddingRight: "0",
            borderRight: "0",
          }}
          variant="contained"
          startIcon={<SearchOutlined />}
          onClick={handleSearchButtonClick}
        ></Button>
      </Paper>
    </>
  );
};

export default SearchBar;
