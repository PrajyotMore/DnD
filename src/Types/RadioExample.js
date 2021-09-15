import React, { useState } from 'react'
import { Stack } from "@chakra-ui/layout"
import { Radio, RadioGroup } from "@chakra-ui/radio"

function RadioExample() {
    const [value, setValue] = useState("1")
    return (
      <RadioGroup onChange={setValue} value={value} p={5}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export default RadioExample