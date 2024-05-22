import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeveloperActivity = createAsyncThunk(
  "developer-activity/fetch/all",
  async () => {
    const response = await axios.get(`http://localhost:8000/data`);
    return response.data;
  }
);
