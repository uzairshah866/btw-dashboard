import React from "react";
import Layout from "./components/layout";
import styles from "./global.module.scss";
import Dashboard from "./components/dashboard";
import Review from "./components/management/reviews";
import ComingSoon from "./components/shared/comingSoon";

function App() {
  const [selectedItem, setSelectedItem] = React.useState<string>("Dashboard");

  const handleSidebarItemClick = (text: string) => {
    setSelectedItem(text);
  };
  return (
    <main className={styles.main}>
      <Layout
        selectedItem={selectedItem}
        onSidebarItemClick={handleSidebarItemClick}
      >
        <div className={styles.children}>
          {selectedItem === "Dashboard" ? (
            <Dashboard />
          ) : selectedItem === "Reviews" ? (
            <Review />
          ) : (
            <ComingSoon />
          )}
        </div>
      </Layout>
    </main>
  );
}

export default App;
