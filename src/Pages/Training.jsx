import { useState } from "react"
import Card from "../components/ui/Card"
import { trainings } from "../data/training"
import TrainingModal from "../components/modal/TrainingModal"

const TrainingCard = ()=>{
  const [selectedTraining, setSelectedTraining] = useState(null)
    return (
<section className="bg-bg py-20">

  <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center gap-10">

    <p className="text-primary font-display">
      Entrena como nunca
    </p>

    <h1 className="text-white font-body text-3xl">
      Entrenamientos
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">

      {trainings.map((item) => (
        <Card key={item.id} {...item} SeeMore={() => setSelectedTraining(item)} />
      ))}

    </div>

  </div>
   {selectedTraining && (
        <TrainingModal
          training={selectedTraining}
          onClose={() => setSelectedTraining(null)}
        />
      )}

</section>
       
        
        
    )
}



export default TrainingCard