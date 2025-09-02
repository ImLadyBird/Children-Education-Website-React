import ImgCountainerMobile from '../images/ImageContainer.png';
import ImgCountainerDesktop from '../images/ImageContainer2.png';
import './HeaderStyle.css';

export default function Header() {
    return(
        <div className='headerCountainr'>
            <div className='headerImageContainer'>
                <img src={ImgCountainerMobile} alt="Header image" className='headerImage mobile'/>
                <img src={ImgCountainerDesktop} alt="header image" className='headerImage desktop'/>
            </div>
            <div className='headerTextContainer'>
               <h3>Welcome to Little Learners Academy</h3>
               <h1>Where Young Minds Blossom and <span className='orange'>Dreams Take Flight.</span></h1>
               <p>
               Our kinder garden school provides a nurturing and stimulating
               environment, fostering a love for learning that lasts a lifetime. Join
               us as we embark on an exciting educational journey together!
               </p>
            <div class="header-numbers">
            <div>
              <h2>+7000</h2>
              <p>Students Passed Out</p>
            </div>
            <div>
              <h2>+37</h2>
              <p>Awards & Recognitions</p>
            </div>
            <div>
              <h2>+15</h2>
              <p>Experience Educators</p>
            </div>
          </div>
          </div>

        </div>
    )
}