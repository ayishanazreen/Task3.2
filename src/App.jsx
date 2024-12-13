import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [faq, setFaq]= useState([
    {
      id:"1",
      title: "React",
      content: "Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content."
  
    },
    {
      id:"2",
      title: "JavaScript",
      content: "Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content."
  
    },
    {
      id:"3",
      title: "Django",
      content: "Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content."
  
    },
  ])
  const [activeId, setActiveId]= useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
};
  return (
    <>
    <div className='img-container'>
    <img src='baneer.png' alt='banner'/>
    <h3>FAQ</h3>
    </div>
    <div className='accordion-container'>
      {faq.map(({id,title,content})=>(
        <Accordion id={id} title={title} content={content} activeId={activeId} toggleAccordion={toggleAccordion} />
      ))}
    </div>
    </>
  )
}

export default App
