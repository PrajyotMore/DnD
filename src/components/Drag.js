import { ListItem } from '@chakra-ui/layout'
import React from 'react'
import { useDrag } from 'react-dnd'
import LongText from '../Types/LongText';


// getting props from app.js like item,type,index,onDropSection
function Drag({item,type,index,onDropSection}) {

    // useDrag hook for dragging elements
    const[{isDragging},draggRef] = useDrag({
        type:type,
        item:()=> ({...item,index}),            // Dragging Items with index
        end:(item,monitor)=>{
            const dropResult = monitor.getDropResult();  //returns the item object 
            console.log(dropResult)             
            if(dropResult && item) {
                onDropSection(item);            //onDropSection getting through by props
            }
        },
        collect:(monitor)=> ({
            isDragging:monitor.isDragging(),
        })
    })

    return (
        <React.Fragment>
            <ListItem p="4" boxShadow="md" borderRadius="md" textAlign="center" ref={draggRef}>
            {/* bg={
                isDragging ? (type ==="item" ? "yellow.600" : "teal.400") : "white" */} 
                {item.name}       
            </ListItem>
        </React.Fragment>
    )
}

export default Drag

