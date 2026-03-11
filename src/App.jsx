import { useState } from "react";
import EventCard from "./components/EventCard";


function Section({title, color, children}){
    return (
        <div style={{
            background:"white", borderRadius:12, padding:20,
            borderLeft: `4px solid ${color}`,marginBottom:16,marginLeft:20,marginRight:20,
             boxShadow: "0  2px 8px rgba(0,0,0,0.06)"
        }}>
            <h3 style={{
                margin :"10px 10px 14px 10px", color: "#1e293b", fontSize: 15
            }}>{title}</h3>
            {children}
        </div>
    )
}
function Badge({label, color="#6366f1"}){
    return (
        <span style={{ background: color +"20", color, border: `1px solid ${color}`,
    borderRadius:6, padding: "2px 10px", fontSize: 13, fontWeight: 600, marginRight:6  }}> {label}</span>
    )
}
function Btn({onClick, children, color="#6366f1"}){
    return (
        <button onClick={onClick} style={{background:color, color:"white", borderRadius:8, padding:"7px 16px", cursor:"pointer",border:"none", fontWeight:600, fontSize:13, marginRight:6,marginTop:4 }}> {children}</button>
    )
}

function NumberState(){
    const [count,setCount]=useState(0);
    return (
        
        <div>
        <p style={{margin:"0 0 0px", fontSize:13, color: "#64748b" }}><code style={{background: "#f1f5f9", padding: "2px 6px", borderRadius: 4}}>const [count, setCount] = useState(0)</code></p>
        <div>{count} </div>
        <Btn onClick={()=> setCount(c=> c+1) } color="#ef4444">Increment</Btn>
        <Btn onClick={()=>setCount(0)} color="#94a3b8"> Reset</Btn>
        <Btn onClick={()=> setCount(c=>c-1)}  color="green">Decrement</Btn>
        </div>
    )
}
function BooleanState(){
   const[isOn,setIsOn] = useState(false);
   const[isShowSecret, setShowSecret]=useState(false);
    return (
        <div>
      <div>
     <p style={{margin:"0 0 0px", fontSize:13, color: "#64748b" }}><code style={{background: "#f1f5f9", padding: "2px 6px", borderRadius: 4}}>const [isOn, setIsOn] = useState(false)</code></p>
   <div style={{ display: "flex", gap:16, alignItems:"center"}}>

    <div style={{borderRadius:25, backgroundColor:isOn?"#dbe95d":" #d2cdcd", width:50,height:30, marginTop:15, position:"relative"}}>
        <div onClick={() =>  setIsOn(v => !v)} style={{width:25, height:25,borderRadius:50,backgroundColor:isOn?"yellow":"white",alignItems:"center", position:"absolute",top:2, left:isOn ?24:2,cursor:"pointer", transition:"left 0.2s"}}/>

        </div>
    
    <span style={{marginTop:10}}>Light Is<Badge label={isOn? "ON" :"OFF"} color={isOn ? "#22c55e" : "#94a3b8"}></Badge></span>
   
   </div>

   <div>
    <Btn  style={{}} onClick={()=>setShowSecret(v=>!v)}>{isShowSecret? "Hide":"Reveal"}</Btn>
    {isShowSecret && <p style={{backgroundColor:"#dccb89", fontWeight:300,  borderRadius:15,width:500, padding:15 }}> This is the Secret</p>}
   </div>
      </div>
        </div>
    )
}

function StringState(){
    const [name,setName] =useState("");
    const [color,setColor] =useState("green");
    return(
        <div>
        
            <input style={{width:500,padding:5,height:30, borderRadius:10,border:"2px solid ", borderColor:" #dfd9d9", color:"#9d9999"}} placeholder={"Type your name..."} value={name} onChange={e => setName(e.target.value)}/ >
        
        <div style={{display:"flex",marginTop:10, gap:8}}> 
            {["green", "yellow","orange", "blue" , "red"].map(c=>
                (
                    <div key={c} onClick={()=>setColor(c)} style={{width:24,height:24, borderRadius:50,backgroundColor:c,cursor:"pointer",border:color  ===c ? "2px solid black" : "2px solid transparent",
                    }} /> 
                   )  )}
                    </div>
                    {name && (<p style={{
          marginTop: 12, fontSize: 22, fontWeight: 700, color,
          transition: "color 0.2s",
        }}>
          Hello, {name}! 👋
        </p>)} 
                
           
       
        </div>
            )

}
export default function App(){
    return <div style={{minHeight:"100vh", paddingRight:20,paddingLeft:20, margin:0}}>
    <div style={{backgroundColor: "#e5edf6c7",  minHeight:"100vh"}}>
        <h1 style={{textAlign: "center", marginTop:0, paddingTop:20}}> State Deep Dive Playground</h1>
        <p style={{textAlign:"center"}}> Interact with every type of state</p>
        <div style={ {margin:"4px" }}>
            <Section title="1.  Number State" color="#6366f1"> 
             <NumberState />
            </Section>
            <Section title="2.  Boolean State" color="#22c55e">
          <BooleanState />
        </Section>
        <Section title="3. String State" color="#f0aa28">
            <StringState />
        </Section>

     

        </div>
    </div>
    </div>
}