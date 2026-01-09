import './App.css';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <>
      <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:block lg:w-[20%]">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="w-full lg:w-[80%] flex flex-col">
        <Header />

        {/* Scrollable dashboard */}
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
