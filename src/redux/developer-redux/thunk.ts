import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeveloperActivity = createAsyncThunk(
  "developer-activity/fetch/all",
  async () => {
    const response = await axios.get(
      `https://developer-dashboard-json.vercel.app/data`
    );
    return response.data;
  }
);
