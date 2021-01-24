import axios from "axios";

export const fetchShops = async () => {
  try {
    const response = await axios.get("http://localhost:3000/data/shops.json");
    return response;
  } catch (error) {}
};
