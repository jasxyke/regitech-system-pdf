import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import GreetingsHeader from "../GreetingsHeader";
import StaffTable from "./StaffTable";

// MAIN FUNCTION OF THE ADMIN PAGE, INCLUDING THE NAVIGATION, 
// STAFF TABLE AND MODALS

function AdminPage() {
  return (
    <div className="container">
      <GreetingsHeader name={"Sean"} />
      <MainNavButtons />
      <StaffTable />
    </div>);
};

export default AdminPage;
