import React from 'react'
import useStyles from './styles'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
// import PlaceDetails from '../PlaceDetails/placeDetails'
import PlaceDetail from '../PlaceDetails/PlaceDetail'

function Sidebar() {
  const classes = useStyles()
  const [type, setType] = React.useState('restaurants')
  const [rating, setRating] = React.useState('')  
  const places = [
    { name: 'Cool Place',
      price: '$$',
      rating: 4.5,
     },
    { name: 'Best Beer',
      price: '$$',  
      rating: 4.5, },
    { name: 'Best Steak' ,
      price: '$$$',
      rating: 4.5, }, 
    { name: 'Cool Place',
      price: '$$',
      rating: 4.5,
     },
    { name: 'Best Beer',
      price: '$$',
      rating: 4.5, }, 
    { name: 'Best Steak' ,
      price: '$$$',
      rating: 4.5, },

    { name: 'Cool Place',
      price: '$$',
      rating: 4.5, },
    { name: 'Best Beer',
      price: '$$',
      rating: 4.5, },
    { name: 'Best Steak' },
  ]


  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
        </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetail place={place} />
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid> */}
          


    </div>
  )
}

export default Sidebar
