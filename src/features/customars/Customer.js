import { useSelector } from "react-redux";

function Customer() {
  const customar = useSelector((store) => store.customar.fullName);
  return <h2>👋 Welcome, {customar}</h2>;
}

export default Customer;
