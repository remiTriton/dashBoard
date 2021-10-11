import axios from "axios";
import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/users/" + localStorage.getItem("id"))
        .then((response) => {
          console.log(response.data.email);
          setProfile(response.data);
        });
    },[]);
  
  return (<div>If you this, GG BRO

      {profile.map((e) => e.username )}
  </div>)
}

export default Profile;