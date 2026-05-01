import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";



const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="hero-gradient min-h-[80vh] flex flex-col items-center justify-center gap-5 px-6">
      <p className="text-primary">- EST. 2026 -</p>
      <h1 className="text-8xl text-center  text-white font-display">LION FITNESS</h1>
      <p className=" text-primary">UNLEASH YOUR INNER BEAST</p>
      <div className="flex flex-col gap-5">
      <Button text="Ver Planes" onClick={()=>navigate("/plans")} />
      <Button text="Descubrir entrenamientos" onClick={()=>navigate("/Training")}/>
      </div>
     
    </section>
  );
};

export default Hero;