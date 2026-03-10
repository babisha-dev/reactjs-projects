import { useState } from "react";
import EventCard from "./components/EventCard";


function Section({title, color, children}){
    return (
        <div style={{
            background:"white", borderRadius:12, padding:20,
            borderLeft: `4px solid ${color}`,marginBottom:16,
             boxShadow: "0  2px 8px rgba(0,0,0,0.06)"
        }}>
            <h3 style={{
                margin :"0 0 14px", color: "#1e293b", fontSize: 15
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
export default function App(){
    return <div style={{backgroundColor: "blue"}}>
        <h1> State Deep Dive Playground</h1>
        <p> Interact with every type of state</p>
        <div style={ {margin:"4px" }}>
            <Section title="1.  Number State" color="#6366f1"> 
             <NumberState />
            </Section>
            <Section title="2.  Boolean State" color="#22c55e">
          <BooleanState />
        </Section>

        <Section title="3.  String State" color="#f59e0b">
          <StringState />
        </Section>

        <Section title="4.  Array State" color="#ef4444">
          <ArrayState />
        </Section>

        <Section title="5.  Object State" color="#8b5cf6">
          <ObjectState />
        </Section>

        </div>
    </div>
}