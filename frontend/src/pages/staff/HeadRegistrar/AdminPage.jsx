import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import GreetingsHeader from "../../../components/GreetingsHeader";
import StaffTable from "./StaffTable";

const AdminPage = () => {
  return (
    <div className="container">
      <GreetingsHeader name={"Sean"} />
      <MainNavButtons />
      <StaffTable />
    </div>
  );
};

export default AdminPage;
