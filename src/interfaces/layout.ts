export interface SidebarItemProps {
    icon: React.ElementType;
    text: string;
    selected?: boolean;
    onClick?: () => void;
}
export interface LayoutProps {
    selectedItem: string;
    onSidebarItemClick: (text: string) => void;
    children: React.ReactNode;
}
export interface SidebarProps {
    selectedItem: string;
    onSidebarItemClick: (text: string) => void;
}
