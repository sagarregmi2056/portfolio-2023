import React from 'react'
import { Button } from "../atoms/ui/button"
import { Input } from "../atoms/ui/input"
import { Label } from "../atoms/ui/label"
import { AiOutlineLinkedin,AiFillFolderOpen } from "react-icons/ai";
import { BiLogoReact,BiLogoJavascript,BiLogoCss3 ,BiSolidFolderOpen,BiLogoGit, BiLogoNodejs,BiCopyright} from "react-icons/bi";
import { VscFolderActive } from "react-icons/vsc";




import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../atoms/ui/accordion"




import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../atoms/ui/sheet"

const Middlecom = () => {

    const fontStyles = {color: 'blue',fontSize: '25px', padding:'2px',margin: '5px'};
    const nodeStyles = {color: 'green',fontSize: '25px', padding:'2px',margin: '5px'};
    const publicStyles = {color: 'blue',fontSize: '25px', padding:'2px',margin: '5px'};
    const gitStyles = {color: 'red',fontSize: '25px', padding:'2px',margin: '5px'};
    
    
  return (
    <div className='text-slate-200'>
    
    


   

 


{/* node modules ko part */}

    <Accordion type="single" collapsible className="w-3/12">
    <AccordionItem value="item-1">
        <AccordionTrigger><AiFillFolderOpen style={nodeStyles}/>node_modules</AccordionTrigger>
        <AccordionContent>
         No NO please dont push me to the github😄
        </AccordionContent>
         </AccordionItem>
          </Accordion>


{/* public section */}

    <Accordion type="single" collapsible className="w-11/12">
    <AccordionItem value="item-1">
        <AccordionTrigger><BiSolidFolderOpen style={publicStyles}/>public</AccordionTrigger>
        <AccordionContent>
         
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='border-none'><BiLogoReact  style={fontStyles}/>Aboutme.tsx</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>


  <br />
    
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=' border-none'><BiLogoJavascript style={fontStyles}/>Projects.js</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-slate-200'>Hey nice to meet you👋</SheetTitle>
          <SheetDescription className='text-slate-200'>
           
           
           <a href="#" target="_blank" rel="noopener noreferrer">
        Visit me on LinkedIn <AiOutlineLinkedin/>
      
      </a>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
        
             


          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Click here to know more</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <br />

        
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=' border-none'><BiLogoCss3 style={fontStyles}/>Resume.css</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-slate-200'>Hey nice to meet you👋</SheetTitle>
          <SheetDescription className='text-slate-200'>
           
           
           <a href="#" target="_blank" rel="noopener noreferrer">
        Visit me on LinkedIn <AiOutlineLinkedin/>
      
      </a>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
        
             


          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Click here to know more</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>



        </AccordionContent>
      </AccordionItem>
    </Accordion>



    <Accordion type="single" collapsible className="w-11/12">
    <AccordionItem value="item-1">
        <AccordionTrigger><VscFolderActive style={ nodeStyles}/>src</AccordionTrigger>
        <AccordionContent>
         

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=' border-none'><BiLogoReact  style={fontStyles}/>ContactMe.jsx</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-slate-200'>Hey nice to meet you👋</SheetTitle>
          <SheetDescription className='text-slate-200'>
           
           
           <a href="#" target="_blank" rel="noopener noreferrer">
        Visit me on LinkedIn <AiOutlineLinkedin/>
      
      </a>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
        
             


          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Click here to know more</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

        </AccordionContent>
         </AccordionItem>
          </Accordion>

          <Button variant="outline" className=' border-none'><BiLogoGit style={gitStyles}/>.gitignore</Button>
          <br />
          <Button variant="outline" className=' border-none'>< BiLogoNodejs style={nodeStyles}/>package.json</Button>

        


         
          
       

         
    
    </div>
  )
}

export default Middlecom;