import {
  Container,
  Stack,
  Flex,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { useDrop } from "react-dnd";
import "./App.css";
import Drag from "./components/Drag";
import LongText from "./Types/LongText";
import Section from "./Types/Section";
import RadioExample from "./Types/RadioExample";
import Checkbox from "./Types/CheckBox";
import Selection from "./Types/Selection";



function App() {

   //Items to be stored
  const [item, setItem] = useState([
    { 
      "type":"text",
      "name": "Section",
      "label": "Section",
      "className": "form-control",
    },
    {
      "name": "Longtext",
      "type": "text",
      "label": "Longtext",
      "className": "form-control",
    },
    { 
      "name": "Yes/No",
      "type":"Yes/No",
      "label":"Yes/No",
    },
    { 
      "name": "Selection",
      "type": "selection",
      "label": "Selection",
      "className": "form-control",
    },
    { "name": "Multi-option"},
    { 
      "name": "Date/time",
      "type": "Date",
      "label": "Date/Time",
      "className": "form-control",
    },
    { 
      "name": "Date",
      "type": "Date",
      "label": "Date",
      "className": "form-control",
    },
    { 
      "name": "Radio-selection",
      "type": "radio-selection",
      "label": "Radio-selection"
    },
    { 
      "name": "Checkbox",
      "type": "checkbox",
      "label": "Checkbox"
    }
  ]);

  
  // for storing dropped items 
  const [droppeditem, setDroppedItem] = useState([]); 

  // For monitoring on item
  //isOver Returning boolean value
  const [{ isOver }, addToDropSectionRef] = useDrop({
    accept: "item",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log("inside isOver",isOver);

  // function to move the item into dropable section
  const moveItemToDropSection = (item) => {
    console.log(item);
    setDroppedItem((prev) => [...prev, item]);
  };

  const handleRLDDChange = (reorderedItems) => {
    // console.log('Example.handleRLDDChange');
    this.setState({ items: reorderedItems });
    console.log("displaying recorded list of items ", reorderedItems)
  };


  return (
    <Container maxW="1500px" p="5">
      <Flex justifyContent="space-between" height="90vh" align="center">
        {/* Items */}

        <Stack width="300px" mr="5">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center">
            Items
          </Heading>
          <List
            p="10"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            border="1px"
            borderColor="gray.200"
            bgGradient={"linear(to-b, blue.100, blue.300)"}
            className="addField"
            fontSize="xl"
            fontFamily='Segoe UI'
            
          >

            {item?.map((item, index) => {
              return (
                <Drag
                  key={item.name}
                  item={item}
                  type="item"
                  index={index}
                  onDropSection={moveItemToDropSection}
                />
              );
            })}
            
          </List>
        </Stack>

        {/* Drop-Section */}

        <Stack width="1000px">
          <Heading fontSize="3xl" color="green.800" textAlign="center">
            Drop-Section
          </Heading>
          <List
            p="5"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            ref={addToDropSectionRef}
            bgGradient={"linear(to-b, gray.100, gray.300)"}
            border="3px dashed grey"
          >
            {/* {droppeditem.map((data,index) => {
              return <p key={index}>{data.name}</p>;
            })} */}
            {
              droppeditem.map((data,index) => {
                switch(data.name) {
                  case "Section" :  
                          return <Section/>
                  case "Longtext" :  
                         return <LongText/> 
                  case "Radio-selection" : 
                        return <RadioExample/>
                  case "Checkbox" : 
                        return <Checkbox/>
                  case "Selection" : 
                        return <Selection/>
                  default:
                    return null;     
                }
            } )}
  
          </List>
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;


{/* <div>
              {data?.name == "Longtext" ? <LongText item={item}/> : <div/>}
              </div> */}