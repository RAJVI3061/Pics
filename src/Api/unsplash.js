import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2CFeO3M-wycoQBbJNvEaikJHDChrr27GI5uourCdi2c",
  },
});
