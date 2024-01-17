import axios from "axios";

export const customFetch = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
