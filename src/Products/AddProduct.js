import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const theme = createTheme();

export default function Product() {
  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            
    console.log({
      title: data.get('title'),
      price: data.get('price'),
      description: data.get('description'),
      // image: data.get('image'),
      category: data.get('category'),
    });
  };

  const navigate = useNavigate();
  const [error, setError] = useState('');
   const handleSubmit = async (event) => {
    // console.log("hhhhhhh")
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      id: data.get('id'),
      title: data.get('title'),
      price: data.get('price'),
      description: data.get('description'),
      // image: data.get('image'),
      category: data.get('category')
    };
    try {
      await axios.post("https://fakestoreapi.com/products", form).then((res) => {
        console.log("response", res)
      });
      navigate('/Productlist')
    }
    catch (error) {
      setError('please fill data or user already exits');
      console.log("error", error)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                />
              </Grid>
              
               <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  id="description"
                  autoComplete="description"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              {/* <Grid item xs={12}> */}
                {/* <TextField
                  required
                  fullWidth
                  name="image"
                  label="Image"
                  // type="image"
                  id="image"
                  autoComplete="new-image"
                /> */}
              {/* </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="category"
                  label="Category"
                  type="category"
                  id="category"
                  autoComplete="new-category"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}