import { useContext } from "react";
import { UseContext } from "@/contexts/userContext";


export function useUser () {
  const context = useContext(UseContext)

  if(!context) {
    throw Error("User must be used using a user Provider.")
  }
  return context
}