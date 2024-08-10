import React, { useState } from "react";
import { 
    FormGroup,
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    styled
} from "@mui/material";




const FormGroupStyled = styled(FormGroup)({
    padding: 20,
    paddingTop: 40,
    boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
    gap: '40px'
})

const ButtonStyled = styled(Button)({
    margin: 0,   
    padding: 0,
    align: 'left',
    width: '100px'
})


export default function AddUser({ onAddUser, users }) {

    const [newUser, setNewUser] = useState({
        fullName: '',
        userName: '',
        email: '',
    });


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewUser({ ...newUser, [id]: value });
    };
    
    const handleSubmit = () => {
        const emailExists = users.some(user => user.email === newUser.email);

        if (newUser.fullName && newUser.userName &&  newUser.email) {
            if (emailExists) {
                alert("This email is already in use.");
            } else {
                onAddUser(newUser);
                setNewUser({ fullName: '', userName: '', email: '' }); // Reset form
            }
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        
        <FormGroupStyled>
            <FormControl>
                <InputLabel htmlFor="full-name">Full Name</InputLabel>
                <Input id="fullName" value={newUser.fullName} onChange={handleInputChange} required/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="userName" value={newUser.userName} onChange={handleInputChange}  required/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" value={newUser.email} onChange={handleInputChange}  required/>
            </FormControl>
            <FormControl>
                <ButtonStyled>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </ButtonStyled>
            </FormControl>
        </FormGroupStyled>
        
    );
}