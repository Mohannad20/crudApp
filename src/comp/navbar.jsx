import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Navbar = () => {
  
  return (
    <div className="bg-gray-800 p-4">
      <Menubar className="flex space-x-4">
        <MenubarMenu>
          <MenubarTrigger className="text-primary hover:bg-gray-700 px-3 py-2 rounded-md">Home</MenubarTrigger>
          {/* <MenubarContent className="bg-gray-700 text-white">
            <MenubarItem className="hover:bg-gray-600 px-3 py-2">Home Page</MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-primary hover:bg-gray-700 px-3 py-2 rounded-md">Add</MenubarTrigger>
          {/* <MenubarContent className="bg-gray-700 text-white">
            <MenubarItem className="hover:bg-gray-600 px-3 py-2">Add New Item</MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default Navbar