import SidePanel from "./components/side-panel";
import UserNav from "./components/user-nav";

export default function DadhboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside className="w-64 bg-green-400"><SidePanel/></aside>
      <div className=" bg-gray-500 flex flex-1 flex-col">
        <header className="bg-white flex h-16 items-center justify-between gap-4 border-b px-6 shadow-sm ">
          <h1 className="text-2xl font-bold text-blue-800 ">Mflix Dashboard</h1>
          <UserNav />
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 ">
          {children}
        </main>
      </div>
    </div>
  );
}
