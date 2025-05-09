import React, { Component } from "react";
import "./PredictionsAndUncertainty.css";

class Person extends Component {
    /* PROPS:
        imgSource: string of img filename
        personName: string of person's name
        affiliation: string of affiliation
        homepage: url of homepage
        bio: information to put in bio
    */

    render() {
        var outsideWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "20px",
            padding: "10px"
        };

        var textBlockStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "5px"
        };

        var imageStyle = {
            width: "100px",
            height: "100px",
            // maxWidth: "100px",
            // maxHeight: "100px",
            borderRadius: "50%"
        };

        var innerStyle = {
            // maxWidth: "750px"
        };

        // var imgSource = require(this.props.imgSource);

        return (
            <div style={outsideWrapperStyle}>
                <img src={this.props.img} alt={this.props.personName} style={imageStyle}/>
                <div style={textBlockStyle}>
                    <div style={innerStyle}> 
                        <i><a href={this.props.homepage}> {this.props.personName}</a>, {this.props.affiliation}</i>
                    </div>

                    <div style={innerStyle}>
                        {this.props.bio}
                    </div>
                </div>
            </div>
        );
    }
}

Person.defaultProps = {
    img: require("./profile-alt.png")
};


class PredictionsAndUncertainty extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDesktop: false 
        }

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 850 });
        // console.log("new width: " + window.innerWidth );
        // console.log("what? " + window.innerWidth > 500);
        // console.log("isDesktop: " + this.state.isDesktop);
    }

    // render() {

    //     var lightGreen = "#75b855";
    //     var lightRed = "#db6161";
    //     var darkGreen = "#157241";
    //     var darkRed = "#ad3838";
    //     var backgroundWhite = "#f9f6f4";

    //     var gradientBox = {
    //         // marginTop: this.state.isDesktop ? "50px" : "10px",
    //         // marginBottom: this.state.isDesktop ? "50px" : "10px",
    //         // marginLeft: this.state.isDesktop ? "50px" : "10px",
    //         // marginRight: this.state.isDesktop ? "50px" : "10px",
    //         background: 'linear-gradient(to bottom, #75b855, #db6161)',
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "center"
    //     };

    //     var innerWhiteBox = {
    //         background: '#FFFFFF',
    //         // marginTop: this.state.isDesktop ? "50px" : "10px",
    //         marginLeft: this.state.isDesktop ? "50px" : "10px",
    //         marginRight: this.state.isDesktop ? "50px" : "10px",
    //         // marginBottom: this.state.isDesktop ? "50px" : "10px"
    //         // padding: this.state.isDesktop ? "50px" : "10px", 
    //         maxWidth: "750px",
    //         background: backgroundWhite
    //     };

    //     var topLevelWrapperStyle = {
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "left",
    //         gap: "30px",
    //         // marginTop: this.state.isDesktop ? "50px" : "10px",
    //         marginLeft: this.state.isDesktop ? "100px" : "10px",
    //         marginRight: this.state.isDesktop ? "100px" : "10px"
    //     };

        // var infoBlockStyle = {
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "left",
        //     alignItems:"left",
        //     // gap: "20px",
        //     // maxWidth: "750px"
        // };

    //     var textStyle = {
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "left",
    //         alignItems:"left",
    //         // gap: "10px"
    //     };

    //     var titleStyle = {
    //         // fontFamily: "'Open Sans', sans-serif",
    //         fontSize: "150%",
    //         textAlign: "center"
    //     };

    //     var spacerStyle = {
    //         height: this.state.isDesktop ? "50px" : "10px"
    //     };

    //     var smallSpacerStyle = {
    //         height: this.state.isDesktop ? "10px" : "10px"
    //     };

    //     var importantInfoStyle = {
    //         color: "red"
    //     };

        // var altImage = require("./profile-alt.png");

        // var AVimage = require("./AV-profile.jpg");
        // var VSimage = require("./VS-profile.jpg");
        // var JHimage = require("./JH-profile.jpg");

    //     return (
    //         <div style={gradientBox}>
    //         <div>
    //             <div style={spacerStyle}/>
    //         <div style={innerWhiteBox}>
    //         <div style={topLevelWrapperStyle}>

    //             <div style={smallSpacerStyle}/>
                
    //             <div style={titleStyle}><b>Workshop on <font color={lightGreen}>Predictions</font> and <font color={lightRed}>Uncertainty</font></b></div> 

    //             <header>
    //                <div class="container">
    //                <h1>Workshop on Predictions and Uncertainty</h1>
    //                </div>
    //             </header>

    //             <div style={infoBlockStyle}>
    //                 <div style={textStyle}>
    //                     <div><b>Venue</b></div> 

    //                     <div>First day of <a href="https://learningtheory.org/colt2025/">COLT 2025</a>: June 30, 2025 in Lyon, France</div> 
                    
    //                 </div>
    //             </div>

    //             <div style={infoBlockStyle}>
    //                 <div style={textStyle}>
    //                     <div><b>Overview</b></div>

    //                     <div>{/*Here is what we think the workshop will be about, though it is impossible to know for sure.*/}  
    //                     Predictions from machine learning systems are increasingly being used as inputs to 
    //                     downstream algorithms and decision-making tasks. However, these predictions can be 
    //                     unreliable, and often suffer from biases or overconfidence, highlighting the need 
    //                     for rigorous approaches to modeling their uncertainty. Uncertainty quantification 
    //                     has a rich history in statistics and decision sciences. Recent lines of work in 
    //                     statistics and computer science have developed methods and techniques to handle 
    //                     uncertainty in challenging new settings.</div>

    //                     <div>The goal of the workshop is to bring together researchers from across these different 
    //                     communities to learn about these exciting developments and explore connections between 
    //                     these emerging lines of research. Topics of interest include </div>
                        
    //                     <ul>
    //                         <li><i>Conformal Prediction</i>, which constructs statistically valid confidence 
    //                         sets while using minimal assumptions on the data,  </li>

    //                         <li><i>Algorithms with Predictions</i>, where algorithms have to decide whether 
    //                         to rely on potentially untrusted predictions,</li>

    //                         <li><i>Robust Statistics</i>, that develops methods that are robust to outliers 
    //                         in the dataset, even in challenging high-dimensional settings,</li>

    //                         <li><i>Risk-Averse Decision Making</i>, which explicitly accounts for uncertainty 
    //                         to enable safe (conservative) decisions,</li>

    //                         <li> and other approaches for estimating and propagating uncertainty 
    //                         in statistical and algorithmic applications.</li>
    //                     </ul>

    //                     <div>These topics have each seen significant progress in recent years, and continue to be 
    //                     active areas of research. Uncertainty quantification is also of great practical 
    //                     importance in settings where reliability is essential. This workshop comes at an opportune 
    //                     moment to connect these separate topics, and improve the foundations of predictions and 
    //                     uncertainty. </div>
    //                 </div>
    //             </div>

    //             <div style={infoBlockStyle}>
    //                 <div style={textStyle}> 
    //                     <div><b>Program</b></div>

    //                     <div>We are inviting submissions for our poster session.  Submissions do not necessarily have 
    //                     to be related to one of the four highlighted areas in the overview, but should include a short 
    //                     description of how the work relates to quantifying the uncertainty of untrusted/unreliable 
    //                     predictions. 
    //                     </div>

    //                     <div style={importantInfoStyle}>Poster submission form: <a href="https://forms.gle/3BGYKZbR68k6tbS88"><b>here</b></a></div>

    //                     <div style={importantInfoStyle}>Poster submission deadline: <b>May 26, 2025 AoE</b></div>

    //                     <div style={importantInfoStyle}>Poster acceptance notification: <b>June 1, 2025</b></div>

    //                     <div>The schedule of invited talks is coming soon!</div>
    //                 </div>
    //             </div>

    //             <div style={infoBlockStyle}>
    //                 <div><b>Organizers</b></div>

                    // <Person personName="Jessica Hullman"
                    //         homepage="http://users.eecs.northwestern.edu/~jhullman/"
                    //         affiliation="Northwestern University"
                    //         img={JHimage}
                    //         bio="Jessica is Ginni Rometty Professor of Computer Science and a Fellow at the Institute for Policy Research 
                    //         at Northwestern University. Her research focuses on decision-making from data, drawing on rational models 
                    //         of inference and spanning topics like inferential and predictive uncertainty quantification, AI-assisted 
                    //         decision-making, and human-AI complementarity." />

                    // <Person personName="Vaidehi Srinivas"
                    //         homepage="https://vaidehi8913.github.io/"
                    //         affiliation="Northwestern University"
                    //         img={VSimage}
                    //         bio="Vaidehi is a 4th year PhD student in Computer Science at Northwestern University.  She has been working on 
                    //         problems on predictions and uncertainty including work in conformal prediction in high-dimensional and 
                    //         online settings, and in algorithms with predictions." />

                    // <Person personName="Aravindan Vijayaraghavan"
                    //         homepage="https://users.cs.northwestern.edu/~aravindv/" 
                    //         affiliation="Northwestern University" 
                    //         img={AVimage}
                    //         bio="Aravindan is an Associate Professor of Computer Science, and (by courtesy) Industrial Engineering and 
                    //         Management Sciences at Northwestern University. His research interests are broadly in the theory of algorithms 
                    //         and machine learning." />

    //             </div>

    //             <div style={spacerStyle}/>

    //             </div>
    //             </div>
    //                 <div style={spacerStyle}/>
    //             </div>

    //             <div>
    //                 <header>
    //                     <div class="container">
    //                     <h1>Predictions and Uncertainty</h1>
    //                     <p>Workshop at COLT 2025</p>
    //                     </div>
    //                 </header>

    //                 <main>
    //                     <section class="about">
    //                     <div class="container">
    //                         <h2>About the Workshop</h2>
    //                         <p>[Insert the original workshop description here.]</p>
    //                     </div>
    //                     </section>

    //                     <section class="details">
    //                     <div class="container">
    //                         <h2>Workshop Details</h2>
    //                         <ul>
    //                         <li><strong>Date:</strong> [Insert Date]</li>
    //                         <li><strong>Location:</strong> [Insert Location]</li>
    //                         <li><strong>Organizers:</strong> [Insert Organizer Names]</li>
    //                         </ul>
    //                     </div>
    //                     </section>

    //                     <section class="image">
    //                     <div class="container">
    //                         <img src="path-to-your-image.jpg" alt="Workshop Image" />
    //                     </div>
    //                     </section>
    //                 </main>

    //                 <footer>
    //                     <div class="container">
    //                     <p>&copy; 2025 Predictions and Uncertainty Workshop</p>
    //                     </div>
    //                 </footer>
    //             </div>
    //         </div>
    //     );
    // }


    // Jessica ChatGPT code
    // render() {
    //     return(
    //     <div>
    //         <header>
    //             <div class="container">
    //             <h1>Predictions and Uncertainty</h1>
    //             <p>Workshop at COLT 2025</p>
    //             </div>
    //         </header>

    //         <main>
    //             <section class="about">
    //             <div class="container">
    //                 <h2>About the Workshop</h2>
    //                 <p>[Insert the original workshop description here.]</p>
    //             </div>
    //             </section>

    //             <section class="details">
    //             <div class="container">
    //                 <h2>Workshop Details</h2>
    //                 <ul>
    //                 <li><strong>Date:</strong> [Insert Date]</li>
    //                 <li><strong>Location:</strong> [Insert Location]</li>
    //                 <li><strong>Organizers:</strong> [Insert Organizer Names]</li>
    //                 </ul>
    //             </div>
    //             </section>

    //             <section class="image">
    //             <div class="container">
    //                 <img src="path-to-your-image.jpg" alt="Workshop Image" />
    //             </div>
    //             </section>
    //         </main>

    //         <footer>
    //             <div class="container">
    //             <p>&copy; 2025 Predictions and Uncertainty Workshop</p>
    //             </div>
    //         </footer>
    //     </div>
    //     );
    // }

    // Styled website with content
    render() {

        var infoBlockStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems:"left",
            // gap: "20px",
            // maxWidth: "750px"
        };

        var altImage = require("./profile-alt.png");

        var AVimage = require("./AV-profile.jpg");
        var VSimage = require("./VS-profile.jpg");
        var JHimage = require("./JH-profile.jpg");

        return(
        <div>
            <header>
                <div class="container">
                <h1>Predictions and Uncertainty</h1>
                <p>Workshop at COLT 2025</p>
                </div>
            </header>

            <main>

                <section class="details">
                <div class="container">
                    <h2>Workshop Details</h2>
                    <ul>
                    <li><strong>Date:</strong> June 30, 2025 </li>
                    <li><strong>Location:</strong> <a href="https://learningtheory.org/colt2025/">COLT 2025</a> in Lyon, France </li>
                    {/* <li><strong>Organizers:</strong> [Insert Organizer Names]</li> */}
                    </ul>
                </div>
                </section>

                <section class="about">
                <div class="container">
                {/* <div style={infoBlockStyle}> */}
                    <h2>About the Workshop</h2>
                    <p>{/*Here is what we think the workshop will be about, though it is impossible to know for sure.*/}  
                         Predictions from machine learning systems are increasingly being used as inputs to 
                         downstream algorithms and decision-making tasks. However, these predictions can be 
                         unreliable, and often suffer from biases or overconfidence, highlighting the need 
                         for rigorous approaches to modeling their uncertainty. Uncertainty quantification 
                         has a rich history in statistics and decision sciences. Recent lines of work in 
                         statistics and computer science have developed methods and techniques to handle 
                         uncertainty in challenging new settings.</p>

                         <p>The goal of the workshop is to bring together researchers from across these different 
                         communities to learn about these exciting developments and explore connections between 
                         these emerging lines of research. Topics of interest include </p>
                        
                         <ul>
                             <li><i>Conformal Prediction</i>, which constructs statistically valid confidence 
                             sets while using minimal assumptions on the data,  </li>

                             <li><i>Algorithms with Predictions</i>, where algorithms have to decide whether 
                             to rely on potentially untrusted predictions,</li>

                             <li><i>Robust Statistics</i>, that develops methods that are robust to outliers 
                             in the dataset, even in challenging high-dimensional settings,</li>

                             <li><i>Risk-Averse Decision Making</i>, which explicitly accounts for uncertainty 
                             to enable safe (conservative) decisions,</li>

                             <li> and other approaches for estimating and propagating uncertainty 
                             in statistical and algorithmic applications.</li>
                         </ul>

                         <p>These topics have each seen significant progress in recent years, and continue to be 
                         active areas of research. Uncertainty quantification is also of great practical 
                         importance in settings where reliability is essential. This workshop comes at an opportune 
                         moment to connect these separate topics, and improve the foundations of predictions and 
                         uncertainty. </p>
                </div>
                </section>

                <section class="program">
                <div class="container">
                    <h2>Program</h2>
                    <p> We are inviting submissions for our poster session.  Submissions do not necessarily have 
                        to be related to one of the four highlighted areas in the overview, but should include a short 
                        description of how the work relates to quantifying the uncertainty of untrusted/unreliable 
                        predictions.</p>
                    
                    <ul>
                    <li><strong>Poster submission form:</strong> <a href="https://forms.gle/3BGYKZbR68k6tbS88">here</a> </li>
                    <li><strong>Poster submission deadline:</strong> May 25, 2025 AoE </li>
                    <li><strong>Poster acceptance notification:</strong> June 1, 2025 </li>
                    </ul>

                    <p>Please feel free to reach out to <a href="mailto:vaidehi@u.northwestern.edu">vaidehi@u.northwestern.edu</a> with any questions regarding poster submissions.</p>

                    <p>The schedule of invited talks is coming soon!</p>
                </div>
                </section>

                <section class="organizers">
                <div class="container">
                    <h2>Organizers</h2>
                    <Person personName="Jessica Hullman"
                            homepage="http://users.eecs.northwestern.edu/~jhullman/"
                            affiliation="Northwestern University"
                            img={JHimage}
                            bio="Jessica is Ginni Rometty Professor of Computer Science and a Fellow at the Institute for Policy Research 
                            at Northwestern University. Her research focuses on decision-making from data, drawing on rational models 
                            of inference and spanning topics like inferential and predictive uncertainty quantification, AI-assisted 
                            decision-making, and human-AI complementarity." />

                    <Person personName="Vaidehi Srinivas"
                            homepage="https://vaidehi8913.github.io/"
                            affiliation="Northwestern University"
                            img={VSimage}
                            bio="Vaidehi is a 4th year PhD student in Computer Science at Northwestern University.  She has been working on 
                            problems on predictions and uncertainty including work in conformal prediction in high-dimensional and 
                            online settings, and in algorithms with predictions." />

                    <Person personName="Aravindan Vijayaraghavan"
                            homepage="https://users.cs.northwestern.edu/~aravindv/" 
                            affiliation="Northwestern University" 
                            img={AVimage}
                            bio="Aravindan is an Associate Professor of Computer Science, and (by courtesy) Industrial Engineering and 
                            Management Sciences at Northwestern University. His research interests are broadly in the theory of algorithms 
                            and machine learning." />
                </div>
                </section>

            </main>

            <footer>
                <div class="container">
                {/*<p>&copy; 2025 Predictions and Uncertainty Workshop</p>*/}
                </div>
            </footer>
        </div>
        );
    }
}

export default PredictionsAndUncertainty; 


// CHAT GPT CODE 
// import React, { Component } from "react";
// import './PredictionsAndUncertainty.css';
// import AVimage from "./AV-profile.jpg";
// import VSimage from "./VS-profile.jpg";
// import JHimage from "./JH-profile.jpg";
// import AltImage from "./profile-alt.png";


// function Person({ img, personName, affiliation, homepage, bio }) {
//     return (
//         <div className="person-card">
//             <img src={img} alt={personName} />
//             <div className="person-info">
//                 <div><a href={homepage}>{personName}</a>, {affiliation}</div>
//                 <div>{bio}</div>
//             </div>
//         </div>
//     );
// }


// class PredictionsAndUncertainty extends Component {
//     render() {
//         return (
//             <div className="page-wrapper">
//                 <header className="header">
//                     <div className="header-title">
//                         Workshop on <span className="green">Predictions</span> and <span className="red">Uncertainty</span>
//                     </div>
//                 </header>

//                 <section className="section">
//                     <h2>Venue</h2>
//                     <p>First day of <a href="https://learningtheory.org/colt2025/">COLT 2025</a>: June 30, 2025 in Lyon, France</p>
//                 </section>

//                 <section className="section">
//                     <h2>Overview</h2>
//                     <p>
//                         Predictions from machine learning systems are increasingly being used as inputs to downstream algorithms and
//                         decision-making tasks...
//                     </p>
//                     <ul>
//                         <li><i>Conformal Prediction</i> — builds valid confidence sets with minimal assumptions</li>
//                         <li><i>Algorithms with Predictions</i> — chooses whether to rely on potentially untrusted predictions</li>
//                         <li><i>Robust Statistics</i> — handles outliers and high-dimensional data</li>
//                         <li><i>Risk-Averse Decision Making</i> — enables conservative, safe decisions</li>
//                     </ul>
//                 </section>

//                 <section className="section">
//                     <h2>Program</h2>
//                     <p>We are inviting submissions for our poster session...</p>
//                     <p className="important">
//                         Poster submission form: <a href="https://forms.gle/3BGYKZbR68k6tbS88">here</a><br />
//                         Deadline: May 26, 2025 AoE<br />
//                         Notification: June 1, 2025
//                     </p>
//                 </section>

//                 <section className="section">
//                     <h2>Organizers</h2>
//                     <Person personName="Jessica Hullman" homepage="http://users.eecs.northwestern.edu/~jhullman/" affiliation="Northwestern University" img={JHimage} bio="Jessica is Ginni Rometty Professor..." />
//                     <Person personName="Vaidehi Srinivas" homepage="https://vaidehi8913.github.io/" affiliation="Northwestern University" img={VSimage} bio="Vaidehi is a 4th year PhD student..." />
//                     <Person personName="Aravindan Vijayaraghavan" homepage="https://users.cs.northwestern.edu/~aravindv/" affiliation="Northwestern University" img={AVimage} bio="Aravindan is an Associate Professor..." />
//                 </section>
//             </div>
//         );
//     }
// }

// export default PredictionsAndUncertainty;