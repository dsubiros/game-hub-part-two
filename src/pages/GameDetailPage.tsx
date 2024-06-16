import { useLocation, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <div>GameDetailPage ({id})</div>
  )
}

export default GameDetailPage