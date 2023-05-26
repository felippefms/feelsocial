'use client'
import Header from "@/components/Header";
import ColorThemeSwitcher from "@/components/ColorThemeSwitcher";

const Settings = () => {
  return (
    <div className="flex flex-col h-full w-full bg-[#F0F2F5] dark:bg-[#18191A]">
      <Header></Header>
      <div className="flex flex-col h-full mx-10 my-4 items-center rounded-lg bg-[#FFFFFF]">
        <p>teste</p>
        <button className="bg-gray-500 rounded-full px-4" onClick={ColorThemeSwitcher}>
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Settings;