import React from 'react';
import Post from './Public';
import './PostPage.css'

const diana_image = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png";
const ukraineImage = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Ukraine.jpg";

const PostPage = () => {

   return (
      
         <div className='posts__container'>
            <Post author={{
               name: 'Bukliv Diana',
               photo: diana_image,
               nickname: '@bukliv_diana',
            }}
               content=" Слава Україні!"
               image={ukraineImage}
               data={'31 липня'} />
            
         </div>
     
   );
};

export default PostPage;