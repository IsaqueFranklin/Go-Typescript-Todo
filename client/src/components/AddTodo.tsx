import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { Button, Group, Modal } from "@mantine/core";

const AddTodo = () => {

    const [open, setOpen] = useState<any>()
    const form = useForm({
        initialValues:{
            title: "",
            body: "",
        },
    });

    return (
        <>
            <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
            
            </Modal>
    
            <Group justify="center">
                <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                    Add todo
                </Button>
            </Group>
        </>
    )
}

export default AddTodo