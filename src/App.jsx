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