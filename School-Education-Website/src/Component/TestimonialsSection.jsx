import SectionHeaders from "./SectionHeaders";
import TestimonialsSectionCards from "./TestimonialsSectionCards";
import personOne from "../images/person1.png";
import personTwo from "../images/person2.png";
import personThree from "../images/person3.png";
import './TestimonialsSectionStyle.css';

export default function TestimonialsSection(){
    return(
        <div>
            <SectionHeaders
                buttonText="Their Happy World" 
                title="Our Testimonials" 
                description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." 
            />
            <div className="TestimonialCardsContainer">
                <TestimonialsSectionCards 
                className="testimonialCards"
                imgSrc={personOne}
                title="Jenifer B"
                description="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
                />
                <TestimonialsSectionCards 
                className="testimonialCards testimobile"
                imgSrc={personTwo}
                title="Jenifer B"
                description="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
                />
                <TestimonialsSectionCards 
                className="testimonialCards testimobile"
                imgSrc={personThree}
                title="Jenifer B"
                description="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
                />
            </div>
        </div>
    )
}