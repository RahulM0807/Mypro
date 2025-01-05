// import React from 'react';
// import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

// // This component now receives the icon as a prop
// const IconPage = ({ icon }) => {
//   // Example data for displaying when an icon is clicked
//   const imagesAndText = [
//     { id: 1, imageUrl: 'https://via.placeholder.com/150?text=Image1', text: 'Image 1 description' },
//     { id: 2, imageUrl: 'https://via.placeholder.com/150?text=Image2', text: 'Image 2 description' },
//     { id: 3, imageUrl: 'https://via.placeholder.com/150?text=Image3', text: 'Image 3 description' },
//     { id: 4, imageUrl: 'https://via.placeholder.com/150?text=Image4', text: 'Image 4 description' },
//     { id: 5, imageUrl: 'https://via.placeholder.com/150?text=Image5', text: 'Image 5 description' },
//     { id: 6, imageUrl: 'https://via.placeholder.com/150?text=Image6', text: 'Image 6 description' },
//     { id: 7, imageUrl: 'https://via.placeholder.com/150?text=Image7', text: 'Image 7 description' },
//     { id: 8, imageUrl: 'https://via.placeholder.com/150?text=Image8', text: 'Image 8 description' },
//     { id: 9, imageUrl: 'https://via.placeholder.com/150?text=Image9', text: 'Image 9 description' },
//     { id: 10, imageUrl: 'https://via.placeholder.com/150?text=Image10', text: 'Image 10 description' },
//   ];

//   return (
//     <div style={{ paddingTop: '20px' }}>
//       <Grid container spacing={3}>
//         {imagesAndText.map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item.id}>
//             <Card sx={{ boxShadow: 3, transition: 'transform 0.3s ease' }}>
//               <CardMedia
//                 component="img"
//                 alt={`Image ${item.id}`}
//                 height="140"
//                 image={item.imageUrl}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {`Image ${item.id}`}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.text}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default IconPage;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import Img1 from '../assets/Img1/pass';  // Import images locally
// import Img2 from '../assets/images/image2.jpg';  // Import images locally
// import Img3 from '../assets/images/image3.jpg';  // Import images locally
// import Img4 from '../assets/images/image4.jpg';  // Import images locally
// import Img5 from '../assets/images/image5.jpg';  // Import images locally
// import Img6 from '../assets/images/image6.jpg';  // Import images locally
// import Img7 from '../assets/images/image7.jpg';  // Import images locally
// import Img8 from '../assets/images/image8.jpg';  // Import images locally
// import Img9 from '../assets/images/image9.jpg';  // Import images locally
// import Img10 from '../assets/images/image10.jpg';  // Import images locally

// // Example icon details data (now using local images)
// const iconDetailsData = {
//   1: [
//     { imageUrl: Img1, text: 'Image 1 description' },
//     { imageUrl: Img2, text: 'Image 2 description' },
//     { imageUrl: Img3, text: 'Image 3 description' },
//     { imageUrl: Img4, text: 'Image 4 description' },
//     { imageUrl: Img5, text: 'Image 5 description' },
//     { imageUrl: Img6, text: 'Image 6 description' },
//     { imageUrl: Img7, text: 'Image 7 description' },
//     { imageUrl: Img8, text: 'Image 8 description' },
//     { imageUrl: Img9, text: 'Image 9 description' },
//     { imageUrl: Img10, text: 'Image 10 description' },
//   ],
//   // Add more icon details with local images for other icons here...
// };

// const IconDetail = () => {
//   const { id } = useParams(); // Get icon id from URL params
//   const iconDetails = iconDetailsData[id]; // Get the corresponding details for the selected icon

//   if (!iconDetails) {
//     return <div>Icon not found!</div>; // Handle case where icon id does not exist
//   }

//   return (
//     <div style={{ paddingTop: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Icon {id} Details
//       </Typography>
//       <Grid container spacing={3}>
//         {iconDetails.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ boxShadow: 3, transition: 'transform 0.3s ease' }}>
//               <CardMedia
//                 component="img"
//                 alt={`Image ${index + 1}`}
//                 height="140"
//                 image={item.imageUrl}  // Using the local image import
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {`Image ${index + 1}`}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.text}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default IconDetail;



import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Icon.css';
// Import images from the src/assets folder
import icon1 from '../assets/afPass.jpg';
import icon2 from '../assets/American Football - Tackle.png';
import icon3 from '../assets/American Football - Blitz.png';
import icon4 from '../assets/American Football - Punt.png';
import icon5 from '../assets/American Football - Fumble Recovery.png';
import icon6 from '../assets/American Football - Interception.png';
import icon7 from '../assets/American Football - End Around.png';
import icon8 from '../assets/American Football - Touchdown.png';
import icon9 from '../assets/American Football - Touchdown.png';
import icon10 from '../assets/American Football - End Around.png';

import icon11 from '../assets/Baseball Fastball.png';
import icon12 from '../assets/Baseball Pitch.png';
import icon13 from '../assets/Baseball Pitching.png';
import icon14 from '../assets/Baseball Swing.png';
import icon15 from '../assets/Bunt in baseball.png';
import icon16 from '../assets/Catch in baseball.png';
import icon17 from '../assets/Changeup in baseball.png';
import icon18 from '../assets/Curveball in baseball.png';
import icon19 from '../assets/Double Play in baseball.png';
import icon20 from '../assets/Home Run in baseball.png';
import icon21 from '../assets/Opposite Field in baseball.png';
import icon22 from '../assets/Pull in baseball.png';
import icon23 from '../assets/Slide in baseball.png';
import icon24 from '../assets/Slider in baseball.png';
import icon25 from '../assets/Steal in baseball.png';
import icon26 from '../assets/Strikeout in baseball.png';

import icon27 from '../assets/Badminton Smash.png';				
import icon28 from '../assets/Badminton Backhand.png';				
import icon29 from '../assets/Badminton Clear.png';				
import	icon30	from '../assets/Badminton Drive.png'
import	icon31	from '../assets/Badminton Drop Shot.png'
import	icon32	from '../assets/Badminton Feint.png'
import	icon33	from '../assets/Badminton Forehand.png'
import	icon34	from '../assets/Badminton Lift.png'
import	icon35	from '../assets/Badminton Net Shot.png'
import	icon36	from '../assets/Badminton Push.png';

import	icon37	from '../assets/Strikeout in baseball.png';
import	icon38	from '../assets/Strikeout in baseball.png';
import	icon39	from '../assets/Strikeout in baseball.png';
import	icon40	from '../assets/Strikeout in baseball.png';
// import	icon41	from '../assets/Strikeout in baseball.png';
// import	icon42	from '../assets/Strikeout in baseball.png';
// import	icon43	from '../assets/Strikeout in baseball.png';
// import	icon44	from '../assets/Strikeout in baseball.png';
// import	icon45	from '../assets/Strikeout in baseball.png';
// import	icon46	from '../assets/Strikeout in baseball.png';
// import	icon47	from '../assets/Strikeout in baseball.png';
// import	icon48	from '../assets/Strikeout in baseball.png';
// import	icon49	from '../assets/Strikeout in baseball.png';
// import	icon50	from '../assets/Strikeout in baseball.png';
// import	icon51	from '../assets/Strikeout in baseball.png';
// import	icon52	from '../assets/Strikeout in baseball.png';
// import	icon53	from '../assets/Strikeout in baseball.png';
// import	icon54	from '../assets/Strikeout in baseball.png';
// import	icon55	from '../assets/Strikeout in baseball.png';
// import	icon56	from '../assets/Strikeout in baseball.png';
// import	icon57	from '../assets/Strikeout in baseball.png';
// import	icon58	from '../assets/Strikeout in baseball.png';
// import	icon59	from '../assets/Strikeout in baseball.png';
// import	icon60	from '../assets/Strikeout in baseball.png';
// import	icon61	from '../assets/Strikeout in baseball.png';
// import	icon62	from '../assets/Strikeout in baseball.png';
// import	icon63	from '../assets/Strikeout in baseball.png';
// import	icon64	from '../assets/Strikeout in baseball.png';
// import	icon65	from '../assets/Strikeout in baseball.png';
// import	icon66	from '../assets/Strikeout in baseball.png';
// import	icon67	from '../assets/Strikeout in baseball.png';
// import	icon68	from '../assets/Strikeout in baseball.png';
// import	icon69	from '../assets/Strikeout in baseball.png';
// import	icon70	from '../assets/Strikeout in baseball.png';



// Example data for displaying when an icon is clicked
const iconDetailsData = {
  1: [
    { imageUrl: icon1, text: 'Pass: The quarterback throwing the ball to a receiver.' },
    { imageUrl: icon2, text: 'Tackle: A defensive player bringing an offensive player down.' },
    { imageUrl: icon3, text: 'Blitz: A defensive strategy where players rush the quarterback.' },
    { imageUrl: icon4, text: 'Punt: Kicking the ball downfield after a failed offensive play.' },
    { imageUrl: icon5, text: 'Fumble Recovery: A player recovering a ball dropped by an opponent.' },
    { imageUrl: icon6, text: 'Interception: A defensive player catching a pass intended for an offensive player.' },
    { imageUrl: icon7, text: 'End Around: A running play where a receiver runs behind the quarterback to take the ball.' },
    { imageUrl: icon8, text: 'Touchdown: Carrying the ball into the end zone for six points.' },
    { imageUrl: icon9, text: 'Image 9 description' },
    { imageUrl: icon10, text: 'Image 10 description' },
  ],
//   Repeat this structure for other icon ids
  2: [
    { imageUrl: icon11, text: 'Icon 2 Image 1 description' },
    { imageUrl: icon12, text: 'Icon 2 Image 2 description' },
    { imageUrl: icon13, text: 'Icon 2 Image 1 description' },
    { imageUrl: icon14, text: 'Icon 2 Image 2 description' },  
    { imageUrl: icon15, text: 'Icon 2 Image 1 description' },
    { imageUrl: icon16, text: 'Icon 2 Image 2 description' },
    { imageUrl: icon17, text: 'Icon 2 Image 1 description' },
    { imageUrl: icon18, text: 'Icon 2 Image 2 description' },
    { imageUrl: icon19, text: 'Icon 2 Image 1 description' },
    { imageUrl: icon20, text: 'Icon 2 Image 2 description' },
    { imageUrl: icon21, text: 'Icon 2 Image 2 description' },  
    { imageUrl: icon22, text: 'Icon 2 Image 2 description' },  
    { imageUrl: icon23, text: 'Icon 2 Image 2 description' },  
    { imageUrl: icon24, text: 'Icon 2 Image 2 description' }, 
    { imageUrl: icon25, text: 'Icon 2 Image 2 description' }, 
    { imageUrl: icon26, text: 'Icon 2 Image 2 description' },  
  ],
  3: [
    {imageUrl:	icon27	, text: 'Icon 2 Image 1 description' },		
    {imageUrl:	icon28	, text: 'Icon 2 Image 1 description' },		
    {imageUrl:	icon29	, text: 'Icon 2 Image 1 description' },	
    {imageUrl:	icon30	, text: 'Icon 2 Image 1 description' },		
    {imageUrl:	icon31	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon32	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon33	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon34	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon35	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon36	, text: 'Icon 2 Image 1 description' },
    
  ],
  4:[
    {imageUrl:	icon37	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon38	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon39	, text: 'Icon 2 Image 1 description' },
    {imageUrl:	icon40	, text: 'Icon 2 Image 1 description' },

  ]    
//   ... other icon details here
};

const IconDetail = () => {
  const { id } = useParams(); // Get icon id from URL params
  const iconDetails = iconDetailsData[id]; // Get the corresponding details for the selected icon

  if (!iconDetails) {
    return <div>Icon not found!</div>; // Handle case where icon id does not exist
  }

  return (
    <div style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Icon {id} Details
      </Typography>
      <Grid container spacing={3}>
        {iconDetails.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, transition: 'transform 0.3s ease' }}>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="330"
                image={item.imageUrl}  // Local image reference from assets
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {`Image ${index + 1}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default IconDetail;
