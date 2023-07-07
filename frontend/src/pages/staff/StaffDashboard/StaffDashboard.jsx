import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import { useUser } from "../../../context/UserContext";
import GreetingsHeader from "../../../components/GreetingsHeader";
import VerificationRequestTable from "./VerificationRequestTable";
import css from "./StaffDashboard.module.css";
import DLbtn from "./DLbtn";
import downloadfile from "../../../assets/downloadfile.png";
import excelfile from "../../../assets/excelfile.png";

const StaffDashboard = () => {
  const user = useUser();

  return (
    <div className="mt-5">
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavbButtons />
      <div className={css.title}>
        <h4 className="fw-bold">Verification Requests</h4>
        {/*
        <div className={css.search_sort}>
          <input type="text" placeholder="Search" />
          <select>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="document">Document Submitted</option>
          </select>
        </div>
        */}
      </div>
      <VerificationRequestTable />
      <div className={css.dl_title}>
        <h4 className="fw-bold">Download Documents</h4>
        <div className={css.dl_btns}>
          <DLbtn icon={downloadfile} label={"Download Masterlist"} />
          <DLbtn icon={excelfile} label={"Download Student Document Report"} />
        </div>
      </div>
    </div>
  );  
};

export default StaffDashboard;
