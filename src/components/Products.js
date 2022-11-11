import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import dayjs from 'dayjs';

const SingleProduct = ({product}) => {
  return (
    <Grid item xs={12} md={3} lg={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={product.name}
          subheader={dayjs(product.createdAt).format('MMMM DD, YYYY h:m:s A')}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.photoURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SynagogueIcon />
          </IconButton>
        </CardActions>
      </Card>
      </Grid>
  );
};

// if we're on a desktop pc, lets do like 6 per row
// tablet lets do 4 per row
// phone lets do 1 per row

export const Products = ({products, loading}) => {
  if (loading) return <CircularProgress />

  return (
    <Grid container spacing={3} style={{padding: '0 24px'}}>
      {products.map(product => (
        <SingleProduct product={product} />
      ))}
    </Grid>
  )
}

// the most important part of css is 'layout'
// putting things next to each other
// putting things on the left of a container
// types of layouts
// flexbox!
// grid

// spacing means 'multiply by 8px'
// lg = pc
// md = tablet
// sm = phone
// xs = small phone
