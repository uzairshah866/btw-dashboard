import { TableData, TableHeadCell } from "../interfaces";
import { AppsOutlinedIcon, DashboardIcon, VrpanoIcon, ShoppingBasketIcon, CreditCardIcon } from "./icons";
/** side bar menu items */
export const SIDEBAR_ITEMS = [
    { icon: DashboardIcon, text: "Dashboard", navigate: '/' },
    { icon: VrpanoIcon, text: "Orders", navigate: '/orders' },
    { icon: AppsOutlinedIcon, text: "Reviews", navigate: '/reviews' },
    { icon: ShoppingBasketIcon, text: "Monitoring", navigate: '/monotoring' },
    { icon: CreditCardIcon, text: "Billing & Payment", navigate: '/payment' },
];
/** Review table headings */
export const TABLE_HEAD_CELLS: readonly TableHeadCell[] = [
    {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Business Name",
    },
    {
        id: "review",
        numeric: true,
        disablePadding: false,
        label: "Review Rating",
    },
    {
        id: "email",
        numeric: false,
        disablePadding: false,
        label: "Business Email",
    },
    {
        id: "phone",
        numeric: false,
        disablePadding: false,
        label: "Business Pho",
    },
];
/** create table data funciton */
function createData(
    id: number,
    name: string,
    review: number,
    email: string,
    phone: string
): TableData {
    return {
        id,
        name,
        review,
        email,
        phone,
    };
}
/** Review table data */
export const TABLE_DATA = [
    createData(1, "KFC", 3, "kfc@gmail.com", "+972993993"),
    createData(2, "KFC", 4, "kfc@gmail.com", "+972993993"),
    createData(3, "Abc", 2, "abc@gmail.com", "+972993993"),
    createData(4, "Abc", 1, "abc@gmail.com", "+972993993"),
    createData(5, "Abc", 3, "abc@gmail.com", "+972993993"),
    createData(6, "KFC", 4, "kfc@gmail.com", "+972993993"),
    createData(7, "KFC", 2, "kfc@gmail.com", "+972993993"),
    createData(8, "Abc", 3, "abc@gmail.com", "+972993993"),
    createData(9, "Abc", 5, "abc@gmail.com", "+972993993"),
    createData(10, "Abc", 3, "abc@gmail.com", "+972993993"),
];
/** dashboard profile tabs */
export const PROFILE_TABS = [
    "GMB 1 Profile",
    "GMB 2 Profile",
    "GMB 3 Profile",
    "GMB 4 Profile",
    "GMB 5 Profile",
    "GMB 6 Profile",
]