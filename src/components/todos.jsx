import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const e = useLoaderData();
  console.log(e);
  return <>ok</>;
};

export default Todos;
