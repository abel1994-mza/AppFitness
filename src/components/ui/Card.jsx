

import Button from "./Button"
import { Dumbbell,Zap,Flame, Timer,BarChart, SportShoe } from "lucide-react"

const Card = ({title,description,duration, level,icon,SeeMore})=>{
    const icons = {
  dumbbell: Dumbbell,
  flame: Flame,
  zap: Zap,
  time: Timer,
  barChart:BarChart,
  sportShoe: SportShoe,
};
const Icon =   icons[icon?.toLowerCase()]
console.log(icon);

const levelColor = {
    "Para todos": "text-green-400",
    "Intermedio": "text-yellow-400",
    "Avanzado": "text-red-400",
  };
    return (
       
     <div className="bg-surface min-w-90 aspect-[4/3] p-6 rounded-xl border border-border  scale-105 hover:scale-[1.03] hover:border-primary hover:shadow-[0_0_20px_rgba(223,155,61,0.3)] transition-all duration-300">
      <div className="text-4xl mb-4 text-primary">
        {Icon && < Icon size={32} className="" />
        }        
      </div>
      <h3 className="text-2xl text-text mb-2 font-display">
        {title}
      </h3>
      <p className="text-text-secondary mb-6">
        {description}
      </p>
        <div className="flex justify-between text-sm text-muted mb-6">
         <span className="flex items-center gap-2">
          <Timer size={16} />  {duration} 
        </span>
        <span className={`flex items-center gap-2 ${levelColor[level]}`}>
          <BarChart size={16} /> {level}
        </span>

      </div>
     <button onClick={SeeMore} className="text-white border border-primary p-1 rounded-sm  hover:bg-primary ">Ver mas</button>

    </div>
  
        
       
    )
}



export default Card