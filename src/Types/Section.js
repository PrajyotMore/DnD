import React from 'react'
import { Input, Stack } from "@chakra-ui/react"
function Section() {
    return (
        <div>
        <Stack spacing={3}>
        <Input variant="outline" placeholder="Enter section..." p={5}/>
        </Stack>
        </div>
    )
}

export default Section
