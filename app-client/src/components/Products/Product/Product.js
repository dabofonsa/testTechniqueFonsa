import React from 'react';

import { Card, CardActions, CardContent, 
  Button, Typography, Table, TableBody, 
  TableCell, TableContainer, TableHead, 
  TableRow, Paper 
} from '@material-ui/core/';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeProduct, deleteProduct } from '../../../actions/actionProducts.js';
import useStyles from './styles.js';

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card key={product._id} className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">{moment(product.createdAt).fromNow()}</Typography>
      </div>
      
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Propiétés Produit</TableCell>
                <TableCell>Valeur</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>{product._id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rating</TableCell>
                <TableCell>{product.rating}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Warranty Years</TableCell>
                <TableCell>{product.warranty_years}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Available</TableCell>
                <TableCell>{product.available}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button color="primary" size="small" onClick={() => dispatch(likeProduct(product._id))}>
          <ThumbUpAltIcon fontSize="small" /> Aimer 
        </Button>

        <Button  color= "primary" size="small" onClick={() => setCurrentId(product._id)}>
          <MoreHorizIcon fontSize="small" />Modifier
        </Button>

        <Button color="secondary" size="small" onClick={() => dispatch(deleteProduct(product._id))}>
          <DeleteIcon fontSize="small" /> Supprimer
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
