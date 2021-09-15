import React from 'react'
import { Checkbox,CheckboxGroup ,Stack } from "@chakra-ui/react"

function CheckBox() {
    return (
        <div>
            <Stack spacing={10} direction="row" p={5}>
            <Checkbox colorScheme="blue" defaultIsChecked>
                Checkbox
            </Checkbox>
            <Checkbox colorScheme="blue" defaultIsChecked>
                Checkbox
            </Checkbox>
            </Stack>
        </div>
    )
}

export default CheckBox
