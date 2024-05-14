
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const FAQsection = () => {
    return (
        <div className="mt-20 px-10">
            <h1 className="text-center text-5xl font-lato">Frequently Asked Questions</h1>
            <div className="flex flex-row-reverse lg:flex-row justify-between gap-2 items-center mt-10">
                <div className="flex-1" data-aos="slide-right"  data-aos-offset="" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-medium text-2xl  font-lato">
                    How do I join a study group?
                    </div>
                    <div className="collapse-content">
                        <p className=" font-roboto">To join a study group, simply sign up for an account on our website and browse through the available groups. Once you find one that matches your interests or course, you can request to join. Group admins will then approve your request, and you'll be able to participate in group activities.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title  font-medium text-2xl  font-lato">
                    Can I create my own study group?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! You can create your own study group by clicking on the "Create Group" button and filling out the necessary information. Be sure to provide details about the subject, study goals, and any specific requirements for group members. Once created, you can invite others to join your group.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title  font-medium text-2xl  font-lato">
                    What kind of study materials are available?
                    </div>
                    <div className="collapse-content">
                        <p>Our platform offers a wide range of study materials, including shared documents, discussion boards, video lectures, and interactive quizzes. You can also upload and share your own study resources with your group members.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-medium text-2xl  font-lato">
                    How do I communicate with my study group?
                    </div>
                    <div className="collapse-content">
                        <p>Communication within study groups primarily takes place through our built-in messaging system and discussion boards. You can also schedule virtual study sessions using video conferencing tools integrated into the platform.</p>
                    </div>
                </div>
               
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title  font-medium text-2xl  font-lato">
                    Is there a way to track my progress within the study group?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, our platform includes features to track your progress, such as completion trackers for shared tasks or assignments, discussion participation metrics, and personal study logs. You can monitor your own progress and compare it with your group members'.</p>
                    </div>
                </div>
            </div>
            <div data-aos="slide-left"  data-aos-offset="" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <img className="w-[600px] rounded-md" src="https://i.ibb.co/PtQYMsF/character-standing-near-letters-using-smart-phone-laptop-question-answer-illustration-126608-44.jpg" alt="" />
            </div>
            </div>
        </div>
    );
};

export default FAQsection;