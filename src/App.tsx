import "./App.css";
import Layout from "./components/Layout";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <>
      <Layout>
        <main>
          {/* Your page content goes here */}
          <UsersTable />
        </main>
      </Layout>
    </>
  );
}

export default App;
