import { useState } from "react"
import { AppContext } from "./AppContext"

const AppProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedTraining, setSelectedTraining] = useState(null)

  return (
   <AppContext.Provider value={{
  selectedPlan,
  setSelectedPlan,
  selectedTraining,
  setSelectedTraining,
}}>

      {children}
    </AppContext.Provider>
  )
}

export default AppProvider