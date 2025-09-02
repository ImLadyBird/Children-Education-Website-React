import BenefitScetionCards from "./BenefitScetionCards";
import SectionHeaders from "./SectionHeaders";
import IconOne from "../images/Icon1.png";
import IconTwo from "../images/Icon2.png";
import IconThree from "../images/Icon3.png";
import './BenefitSectionStyle.css';

export default function BenefitSection(){
    return(
        <div>
            <SectionHeaders
            buttonText="Children Deserve Bright Future" 
            title="Our Benefits" 
            description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." 
            />
            <div className="benefitCintainer">
                <BenefitScetionCards
                imgSrc={IconOne}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
                <BenefitScetionCards
                imgSrc={IconTwo}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
                <BenefitScetionCards
                imgSrc={IconThree}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
            </div>
            <div className="benefitCintainer">
                <BenefitScetionCards
                imgSrc={IconOne}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
                <BenefitScetionCards
                imgSrc={IconTwo}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
                <BenefitScetionCards
                imgSrc={IconThree}
                title="Holistic Learning Approach" 
                description="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
                />
            </div>
        </div>
    )
}