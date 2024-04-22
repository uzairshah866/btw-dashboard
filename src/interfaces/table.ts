export interface TableData {
    id: number;
    name: string;
    review: number;
    email: string;
    phone: string;
}
export interface TableHeadCell {
    disablePadding: boolean;
    id: keyof TableData;
    label: string;
    numeric: boolean;
}
export interface EnhancedTableProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}