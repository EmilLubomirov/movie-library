import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchSection = () => {

    return (
        <div>
            <TextField style={{margin: "auto 10px"}}
                       id="outlined-basic"
                       label="Search by movie title..."
                       variant="outlined" />
            <Button style={{margin: "10px"}} variant="contained" color="lightgreen">Search</Button>
        </div>
    )
};

export default SearchSection;