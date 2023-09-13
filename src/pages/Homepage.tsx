import  { Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,}  from "../atoms/ui/menubar"
    import Middlecom from "./Middlecom"
    import Info from "./Info"

import React from 'react'
import vscodelogo from '../images/vscode.png'
import { FiArrowLeft,FiArrowRight} from "react-icons/fi";
import { TbBoxAlignLeftFilled ,TbTableFilled} from "react-icons/tb";
import { AiOutlineMinus,AiOutlineSetting } from "react-icons/ai";
import { PiCopySimpleBold } from "react-icons/pi";
import {RxCross2} from "react-icons/rx";
import { BsFiles,BsThreeDots } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import {DiGitBranch } from "react-icons/di";
import {RxAvatar } from "react-icons/rx";
import { BiLogoReact,BiLogoJavascript,BiLogoCss3 ,BiSolidFolderOpen,BiLogoGit, BiLogoNodejs,BiCopyright} from "react-icons/bi";





import { VscExtensions,VscVmConnect,VscGithub,VscLiveShare} from "react-icons/vsc";
import { FaCodeBranch } from "react-icons/fa6";
import { RiSignalTowerFill} from "react-icons/ri";





const Homepage = () => {

    const fontStyles = {color: 'white',fontSize: '22px', padding:'2px',margin: '20px'};

    const fontStylesSide= {color: 'rgb(100 116 139)',fontSize: '30px', padding:'2px',margin: '20px' };
    const fontStyleslow= {color: 'rgb(100 116 139)',fontSize: '20px', padding:'2px',margin: '0px' };
  return (


    <>
    
     <div className="flex  pl-2 pb-2 pt-2  bg-slate-900 color-white ">
        <img style={{ width: 30, height: 40 }} src={vscodelogo} alt="react logo" />
    
<Menubar className="ml-2 pl-1 pb-2 bg-slate-900 text-white  ">

   
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Selection</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>view</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
  

      <MenubarMenu>
        <MenubarTrigger>Go</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Back</MenubarRadioItem>
            <MenubarRadioItem value="benoit">forward</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Lastedit</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>



      <MenubarMenu>
        <MenubarTrigger>Run</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Start Debugging </MenubarRadioItem>
            <MenubarRadioItem value="benoit">forward</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Lastedit</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>



      
      <MenubarMenu>
        <MenubarTrigger>Terminal</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Start Debugging </MenubarRadioItem>
            <MenubarRadioItem value="benoit">forward</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Lastedit</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>



      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Start Debugging </MenubarRadioItem>
            <MenubarRadioItem value="benoit">forward</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Lastedit</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>


      <FiArrowLeft/>

      <FiArrowRight/>

    <div >
   <input className=" rounded-lg ml-20 w-96 border-solid" name="search" type="text"/>
   </div>
   <div className="flex flex-wrap ml-10">
     
   <TbBoxAlignLeftFilled  style={fontStyles}/><TbTableFilled style={fontStyles}/><AiOutlineMinus style={fontStyles}/><PiCopySimpleBold style={fontStyles}/><RxCross2 style={fontStyles}/>
   </div>

    </Menubar>

   
    
    </div>
    

    <br />
    <div className="flex">
     <div className="flex flex-col  pt-0 mt-0 bg-slate-900">
     <BsFiles  style={fontStylesSide}/>
     <LiaSearchSolid  style={fontStylesSide}/>
     <FaCodeBranch style={fontStylesSide}/>
     <VscExtensions style={fontStylesSide}/>
     <VscVmConnect style={fontStylesSide}/>
     <VscGithub style={fontStylesSide}/>
     <BsThreeDots style={fontStylesSide}/>
     <RxAvatar style={fontStylesSide}/>
     <AiOutlineSetting style={fontStylesSide}/>
     
   
     
   
      </div>
     
      <Middlecom/>
      <Info/>
      <div className="text-slate-400 flex  pt-5 mr-20 items-end justify-end align-bottom text-xs"> 
      <BiCopyright style={fontStyleslow}/>sagarregmi
      </div>
      
      
      </div>
     
     
    
 </>




    
  )
}

export default Homepage