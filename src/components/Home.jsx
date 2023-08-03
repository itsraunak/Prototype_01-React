import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all Your Problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphic" />
                <div>
                    <p>
                        We are your one and only solution to the tech problem
                        you face every day. We are leading tech company whose
                        aim is to increase the problem solving ability in
                        children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit quo ut suscipit sequi vitae, quam nisi
                        numquam ea dolore, voluptatem blanditiis maxime porro
                        eius eaque ratione debitis ad vel at. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Alias quod autem
                        deserunt labore maxime sunt eveniet itaque debitis
                        impedit, odio pariatur, blanditiis sequi sapiente
                        explicabo quasi eum optio sit! Nostrum! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit.
                        Perspiciatis ea harum enim aut dicta commodi porro
                        temporibus, mollitia incidunt neque vel quam quo nihil
                        asperiores assumenda quaerat distinctio debitis autem!
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1.25",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1.75s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "2s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;
