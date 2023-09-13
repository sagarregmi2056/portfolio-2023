import React from 'react'
import { Button } from "../atoms/ui/button"
import '../assets/css/global.css'
import { BiLogoReact ,BiSolidPhone,BiLogoGmail, BiLogoGithub,BiLogoFacebookCircle,BiLogoLinkedinSquare,BiCamera} from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiExpress,SiNestjs ,SiTypescript,SiMongodb ,SiPostgresql,SiMysql } from "react-icons/si";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../atoms/ui/card"
  import { Label } from "../atoms/ui/label"
  import { FaAddressBook } from "react-icons/fa6";

  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../atoms/ui/tabs"
  import myphoto from '../images/sagar.jpg'
  import MonacoEditor from 'react-monaco-editor';
  


const Info = () => {

    const emailAddress = 'sagarregmi2056@gmail.com';
    const fontStyles = {color: 'blue',fontSize: '25px', padding:'2px',margin: '5px'};
    const fontStylestech = {color: 'white',fontSize: '35px', padding:'2px',margin: '3px'};


    const initialCode = `

    function unleashPotential() {
        console.log("╭━━━━━━━━━╮");
        console.log("┃  Let's   ┃");
        console.log("┃  Unleash  ┃  === JavaScript Inspiration ===");
        console.log("┃  Your    ┃");
        console.log("┃Potential!┃");
        console.log("╰━━━━━━━━━╯");
      
        const keywords = [
          "creativity",
          "innovation",
          "passion",
          "dedication",
          "hard work",
          "perseverance",
        ];
      
        const getRandomKeyword = () =>
          keywords[Math.floor(Math.random() * keywords.length)];
      
        const inspire = () => {
          const keyword = getRandomKeyword();
          console.log("🚀 Ignite your $ {keyword} and code with purpose!");
        };
      
        setInterval(inspire, 3000); // Display inspirational messages every 3 seconds
      }
      
      unleashPotential();`;
    
      // Monaco Editor options
      const editorOptions = {
        selectOnLineNumbers: true,
        fontSize: 14,
        automaticLayout: true,
      };
    
      // Handle code changes
      const handleCodeChange = (newCode:any) => {
        console.log('Code changed:', newCode);
      };

  return (
    <div className='text-white grid grid-cols-3 divide-x pl-11 ml-11  '>
        <div> <Tabs defaultValue="account" className="w-[390px]  bg-inherit">
      <TabsList className="grid w-full grid-cols-2 pb-4 mb-0 bg-inherit">
        <TabsTrigger value="account" ><BiLogoReact  style={fontStyles}/>Info.jsx</TabsTrigger>
        <TabsTrigger value="password"><BiLogoReact  style={fontStyles}/>Contact.jsx</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className='bg-transparent'>
          <CardHeader>
            <CardTitle className='text-indigo-600'>Tech Stack</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col">
            <div className="space-y-1  text-white flex flex-col-2">
            <BiLogoReact style={fontStylestech}/>
            <Label htmlFor="name" className='pt-2'>ReactJs,Typescript</Label>
           
            </div>
            <div className="space-y-1 text-white flex flex-col-2">
            <DiNodejs style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2' >Nodejs</Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
                <SiExpress style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2' >ExpressJS</Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
            <SiNestjs style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>Nest</Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">

            <SiTypescript style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>Typeorm</Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">

            <SiMongodb style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>Mongodb</Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
            <SiPostgresql style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>postgresql</Label>
             
            </div>


            <div className="space-y-1  text-white flex flex-col-2">
           
            < SiMysql style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>sql</Label>
             
            </div>
          </CardContent>
          <CardFooter>
            <Button>wanna know more? click the Contact.jsx Tab</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className='bg-transparent'>
          <CardHeader>
            <CardTitle className='text-indigo-600'>Contact Details</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col">
            <div className="space-y-1  text-white flex flex-col-2">
            <BiLogoLinkedinSquare style={fontStylestech}/>
            <Label htmlFor="name" className='pt-2'><a href="https://www.linkedin.com/in/sagar-regmi-60b377216/">Linkedin</a></Label>
           
            </div>
            <div className="space-y-1 text-white flex flex-col-2">
            <BiLogoFacebookCircle style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2' ><a href="https://www.facebook.com/sagar.regmi.167/">Facebook</a></Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
                <BiLogoGithub style={fontStylestech}/>
               
              <Label htmlFor="username" className='pt-2' ><a href=" https://github.com/sagarregmi2056">Github</a></Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
                <BiLogoGmail style={fontStylestech}/>
               
              <Label htmlFor="username" className='pt-2' ><a href={`mailto:${emailAddress}`}>{emailAddress}</a></Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">
                <BiSolidPhone style={fontStylestech}/>
               
              <Label htmlFor="username" className='pt-2' ><a href="#">phone:9804228593</a></Label>
             
            </div>
            <div className="space-y-1  text-white flex flex-col-2">

            <FaAddressBook style={fontStylestech}/>
              <Label htmlFor="username" className='pt-2'>Bharatpur 14,chitwan Nepal</Label>
             
            </div>

           
           


            
          </CardContent>
         
        </Card>
      </TabsContent>
    </Tabs></div>

       <div className='ml-10 m-10'>
       <div> <Tabs defaultValue="account" className="w-[700px] bg-inherit">
      <TabsList className="grid w-full grid-cols-4 pb-4 mb-4 bg-inherit">
        <TabsTrigger  value="account" >OUTPUT</TabsTrigger>
        <TabsTrigger value="terminal">TERMINAL</TabsTrigger>
        <TabsTrigger value="ports">About me</TabsTrigger>
        <TabsTrigger value="gitlens">Photo</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className='bg-transparent '>
          <CardHeader>
            <CardTitle className='text-white'> </CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <MonacoEditor
      width="600"
      height="320"
      language="javascript"
      theme="vs-dark" // You can change the theme here (e.g., 'vs' for light theme)
      value={initialCode}
      options={editorOptions}
      onChange={handleCodeChange}
    />

        
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="terminal">
        <Card className='bg-transparent pl-2 '>
        <div className="bg-gray-900 p-4">
      <div className="fake-terminal p-2">
        <pre className="text-green-400">&gt; git status</pre>
        <pre className="text-blue-300">On branch main</pre>
        <pre className="text-blue-300">Your branch is up to date with 'origin/main'.</pre>
        <pre className="text-red-400">Changes not staged for commit:</pre>
        <pre className="text-red-400">  (use "git add file..." to update what will be committed)</pre>
        <pre className="text-red-400">  (use "git checkout -- file..." to discard changes in working directory)</pre>
        <pre className="text-yellow-400">You have untracked files:</pre>
    <pre className="text-yellow-400">  (use "git add file..." to include in what will be committed)</pre>
    <pre className="text-yellow-400">         file-1.txt</pre>
    <pre className="text-yellow-400">         file-2.txt</pre>
    <pre className="text-blue-300">Commit your changes:</pre>
    <pre className="text-blue-300">&gt; git commit -m "Initial commit"</pre>
    <pre className="text-green-400">[main b3a425a] Initial commit</pre>
    <pre className="text-green-400">1 file changed, 0 insertions(+), 0 deletions(-)</pre>
    <pre className="text-blue-300">Push to remote repository:</pre>
    <pre className="text-blue-300">&gt; git push origin main</pre>
    <pre className="text-green-400">Enumerating objects: 3, done.</pre>
    <pre className="text-green-400">Counting objects: 100% (3/3), done.</pre>
        {/* More output lines can be added here */}
      </div>
    </div>
      
        </Card>
      </TabsContent>


      
      <TabsContent value="ports">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
  <p className="font-semibold">Web Developer: Sagar Regmi</p>
  <p>Proficient in:</p>
  <ul className="list-disc pl-6">
    <li>TypeScript</li>
    <li>Node.js</li>
    <li>React.js</li>
    <li>JavaScript</li>
    <li>TypeORM</li>
    <li>PostgreSQL</li>
    <li>MongoDB</li>
  </ul>
  <p>Create unique and innovative web solutions with passion and expertise!</p>
</div>
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </TabsContent>




      
      <TabsContent value="gitlens">
        <Card className='bg-transparent w-0 h-0'>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
            

<BiCamera style={fontStylestech}/>
<img className="max-w-sm rounded border bg-white  dark:border-neutral-700 dark:bg-neutral-800" src={myphoto} alt="BigCo Inc. logo "/>
 

            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 ">
          
     
          </CardContent>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs></div>
       </div>
      
   
        
        </div>
  )
}

export default Info