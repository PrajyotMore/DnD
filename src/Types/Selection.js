import React from 'react'
import { Select } from "@chakra-ui/react"
function Selection() {
    return (
        <div>
            <Select placeholder="Select option" p={5} size="md">
               <option value="option1">Option 1</option>
            </Select>
        </div>
    )
}

export default Selection
