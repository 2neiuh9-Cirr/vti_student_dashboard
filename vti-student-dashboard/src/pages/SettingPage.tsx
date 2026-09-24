import SideBar from '../components/SideBar';

const SettingPage = () => {
  return (
    <div className="flex h-screen w-full flex-row">
      
      <SideBar/>
      <div className="flex-1 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>This is the main content area of the home page.</p>
      </div>

    </div>
  )
}

export default SettingPage