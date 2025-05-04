import React, { Component } from "react";

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
            gap: "20px"
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


class PredictionsAndUncertainty extends Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    render() {

        var topLevelWrapperStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "30px",
            marginTop: "50px",
            marginLeft: "50px"
        };

        var infoBlockStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems:"left",
            gap: "20px",
            maxWidth: "750px"
        };

        var textStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems:"left",
            gap: "10px"
        };

        var titleStyle = {
            // fontFamily: "'Open Sans', sans-serif",
            fontSize: "150%",
            textAlign: "left"
        };

        var spacerStyle = {
            height: "200px"
        };

        var importantInfoStyle = {
            color: "red"
        };

        var altImage = require("./profile-alt.png");

        return (
            <div style={topLevelWrapperStyle}>
                
                <div style={titleStyle}> Workshop on Predictions and Uncertainty</div>

                <div style={infoBlockStyle}>
                    <div style={textStyle}>
                        <div><b>Venue</b></div>

                        <div>First day of <a href="https://learningtheory.org/colt2025/">COLT 2025</a>: June 30, 2025 in Lyon, France</div>
                    </div>
                </div>

                <div style={infoBlockStyle}>
                    <div style={textStyle}>
                        <div><b>Overview</b></div>

                        <div>Here is what we think the workshop will be about, though it is impossible to know for sure.  
                        Predictions from machine learning systems are increasingly being used as inputs to 
                        downstream algorithms and decision-making tasks. However, these predictions can be 
                        unreliable, and often suffer from biases or overconfidence, highlighting the need 
                        for rigorous approaches to modeling their uncertainty. Uncertainty quantification 
                        has a rich history in statistics and decision sciences. Recent lines of work in 
                        statistics and computer science have developed methods and techniques to handle 
                        uncertainty in challenging new settings.</div>

                        <div>The goal of the workshop is to bring together researchers from across these different 
                        communities to learn about these exciting developments and explore connections between 
                        these emerging lines of research. Topics of interest include </div>
                        
                        <ul>
                            <li><i>Conformal Prediction</i>, which constructs statistically valid confidence 
                            sets while using minimal assumptions on the data.   </li>

                            <li><i>Algorithms with Predictions</i>, where algorithms have to decide whether 
                            to rely on potentially untrusted predictions</li>

                            <li><i>Robust Statistics</i>, that develops methods that are robust to outliers 
                            in the dataset, even in challenging high-dimensional settings</li>

                            <li><i>Risk-Averse Decision Making</i>, which explicitly accounts for uncertainty 
                            to enable safe (conservative) decisions.</li>
                        </ul>

                        <div>These topics have each seen significant progress in recent years, and continue to be 
                        active areas of research. At the same time, uncertainty quantification is of great practical 
                        importance in settings where reliability is essential. This workshop would come at an opportune 
                        moment to connect these separate topics, and improve the foundations of predictions and 
                        uncertainty. </div>
                    </div>
                </div>

                <div style={infoBlockStyle}>
                    <div style={textStyle}> 
                        <div><b>Program</b></div>

                        <div>We are inviting submissions for our poster session.  Submissions do not necessarily have 
                        to be related to one of the four highlighted areas in the overview, but should include a short 
                        description of how the work relates to quantifying the uncertainty of untrusted/unreliable 
                        predictions. 
                        </div>

                        <div style={importantInfoStyle}>Poster submission form: <a href="https://forms.gle/3BGYKZbR68k6tbS88"><b>here</b></a></div>

                        <div style={importantInfoStyle}>Poster submission deadline: <b>May 26, 2025 AoE</b></div>

                        <div style={importantInfoStyle}>Poster acceptance notification: <b>June 1, 2025</b></div>

                        <div>The schedule of invited talks is coming soon!</div>
                    </div>
                </div>

                <div style={infoBlockStyle}>
                    <div><b>Organizers</b></div>

                    <Person personName="Jessica Hullman"
                            homepage="http://users.eecs.northwestern.edu/~jhullman/"
                            affiliation="Northwestern University"
                            img={altImage}
                            bio="Jessica is Ginni Rometty Professor of Computer Science and a Fellow at the Institute for Policy Research 
                            at Northwestern University. Her research focuses on decision-making from data, drawing on rational models 
                            of inference and spanning topics like inferential and predictive uncertainty quantification, AI-assisted 
                            decision-making, and human-AI complementarity." />

                    <Person personName="Vaidehi Srinivas"
                            homepage="https://vaidehi8913.github.io/"
                            affiliation="Northwestern University"
                            img={altImage}
                            bio="Vaidehi is a 4th year PhD student in Computer Science at Northwestern University.  She has been working on 
                            problems on predictions and uncertainty including work in conformal prediction in high-dimensional and 
                            online settings, and in algorithms with predictions." />

                    <Person personName="Aravindan Vijayaraghavan"
                            homepage="https://users.cs.northwestern.edu/~aravindv/" 
                            affiliation="Northwestern University" 
                            img={altImage}
                            bio="Aravindan is an Associate Professor of Computer Science, and (by courtesy) Industrial Engineering and 
                            Management Sciences at Northwestern University. He also co-directs the NSF Institute for Data, Econometrics,
                            Algorithms and Learning (IDEAL). His research interests are broadly in the theory of algorithms and machine 
                            learning, and often uses beyond worst-case paradigms to provide algorithmic guarantees for challenging 
                            algorithmic problems involving high-dimensional data. " />

                </div>

                <div style={spacerStyle}/>

            </div>
        );
    }
}

export default PredictionsAndUncertainty; 