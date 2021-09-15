import React, { useState } from 'react'
import { Textarea, Text} from "@chakra-ui/react";

function LongText() {
    let [value, setValue] = useState("")

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
        <div>
            <Text mb="8px" p={5}>TextArea</Text>
             <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Enter the text... "
                size="sm"
                type="text"
            />
        </div>
    )
}

export default LongText
