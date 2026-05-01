import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-white flex items-center gap-2"
    >
      <ArrowLeft size={18} />
      Volver
    </button>
  );
};

export default BackButton;