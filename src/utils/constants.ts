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
/** reviews chart data */
export const REVIEWS_CHART_DATA = {
    chart: {
        type: "donut",
    },
    labels: ["star 1", "star 2", "star 3", "star 4", "star 5"],
    plotOptions: {
        pie: {
            colors: ["#FF902A", "#FACF55", "#FF0000", "#6758F3", "#34AA44"],
            donut: {
                size: "70%",
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: "",
                        formatter: () => "100%",
                    },
                },
            },
        },
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
    fill: {
        colors: ["#FF902A", "#FACF55", "#FF0000", "#6758F3", "#34AA44"],
    },
    colors: ["#FF902A", "#FACF55", "#FF0000", "#6758F3", "#34AA44"],
    dataLabels: {
        enabled: false,
    },
}
/** ratings chart data */
export const RATINGS_CHART_DATA = {
    chart: {
        type: "donut",
    },
    labels: ["current percentage", "overall percentage"],
    plotOptions: {
        pie: {
            colors: ["#D39890", "#E3E3E3"],
            donut: {
                customScale: 0.8,
                offsetX: -30,
                size: "70%",
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: "",
                        formatter: () => "4.1",
                    },
                },
            },
        },
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
    fill: {
        colors: ["#D39890", "#E3E3E3"],
    },
    colors: ["#D39890", "#E3E3E3"],
    dataLabels: {
        enabled: false,
    },
}