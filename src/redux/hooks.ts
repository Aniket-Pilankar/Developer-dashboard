import { useDispatch } from "react-redux";
import { AppDispatch } from "./developer-redux/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
