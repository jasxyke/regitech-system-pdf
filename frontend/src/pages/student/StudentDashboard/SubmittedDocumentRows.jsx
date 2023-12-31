import DeleteDocumentModal from "./DeleteDocumentModal";
import TableCss from "./StudentDashboard.module.css";
import ViewDocumentModal from "./ViewDocumentModal";

const getStatusColor = (status) => {
  if (status === "Verified") {
    return "#00a651";
  } else if (status === "Rejected") {
    return "#790000";
  } else {
    return "#f68e56"; // Default color for "Pending"
  }
};

const SubmittedDocumentRows = ({ submittedDocuments, deleteDocument }) => {
  const tableRows = submittedDocuments.map((document, index) => (
    <tr key={document.id}>
      <td>{document.document_type.name}</td>
      <td>
        <button
          disabled
          className={TableCss.status + " fw-bold w-75 rounded-pill border-0"}
          style={{
            backgroundColor: getStatusColor(document.document_status.name),
          }}
        >
          {document.document_status.name}
        </button>
      </td>
      <td>
        <div className={TableCss.actionsContainer}>
          <ViewDocumentModal document={document} />
          <DeleteDocumentModal
            documentId={document.id}
            handleDeleteDocument={deleteDocument}
          />
        </div>
      </td>
    </tr>
  ));

  return <>{tableRows}</>;
};

export default SubmittedDocumentRows;
