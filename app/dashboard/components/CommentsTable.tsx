import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Comment } from "../fetchData";

const cardContainer = `
  bg-[#F7EBD5]
  border border-[#9B9381]
  w-full
  max-w-full
  rounded-[13px]
  overflow-x-auto
  overflow-y-auto
  relative
`;

const tableClass = `
  w-full
`;

const rowStyle = `
  border-b border-[#9B9381]
`;

const columnHeader = `
  bg-[#EED7A6]
  border-b border-[#9B9381]
  text-center
  text-[clamp(18px,2vw,24px)]
  h-[clamp(30px,4vw,54px)]
  min-w-40
`;

const columnCell = `
  text-[clamp(12px,2vw,22px)]
  text-left 
  px-3
`;

const actionCell = `
  text-[clamp(12px,2vw,22px)]
  text-center
`;

const actionButton = `
  rounded-[8px]
  px-3 py-1
  bg-red-500/80
  hover:bg-red-600
  outline-none
  border-none
  ring-0
  transition
`;

const columnsConfig = [
  { field: "name", header: "Name", width: "20%" },
  { field: "email", header: "Email", width: "25%" },
  { field: "body", header: "Comment", width: "45%" },
];

type CommentsTableProps = {
  data: Comment[];
  onDelete: (id: number) => void;
};

function ActionBodyTemplate(rowData: Comment, onDelete: (id: number) => void) {
  return (
    <button
      type="button"
      className={actionButton}
      onClick={() => onDelete(rowData.id)}
    >
      delete
    </button>
  );
}

export default function CommentsTable({ data, onDelete }: CommentsTableProps) {
  return (
    <div className={cardContainer}>
      <DataTable
        value={data}
        className={tableClass}
        tableStyle={{ minWidth: "100%" }}
        scrollable
        scrollHeight="clamp(390px,30vw,580px)"
        emptyMessage={
          <span className="text-[clamp(12px,2vw,22px)] mx-[clamp(5px,1vw,14px)]">
            No comments yet
          </span>
        }
        rowClassName={() => rowStyle}
        paginator
        rows={25}
        rowsPerPageOptions={[10, 25, 50]}
        paginatorClassName="custom-paginator"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      >
        {columnsConfig.map((col, i) => (
          <Column
            key={i}
            field={col.field as any}
            header={col.header}
            style={{ width: col.width }}
            headerClassName={columnHeader}
            className={columnCell}
          />
        ))}
        <Column
          header="Actions"
          style={{ width: "10%" }}
          headerClassName={columnHeader}
          className={actionCell}
          body={(rowData) => ActionBodyTemplate(rowData as Comment, onDelete)}
        />
      </DataTable>
    </div>
  );
}
