import React, { Component } from "react";
import "./PredictionsAndUncertainty.css";
import linPoster from "./lin-poster.pdf";
import sheshukovaPoster from "./sheshukova-poster.pdf";

class Person extends Component {
    /* PROPS:
        imgSource: string of img filename
        personName: string of person's name
        affiliation: string of affiliation
        homepage: url of homepage
        title: talk title (optional)
        abstract: talk abstract (optional)
        bio: information to put in bio
        hideInfo: place abstract into a dropdown button
    */

    constructor(props) {
        super(props);

        this.state = {
            dropDown: false,
            hovering: false,
            posterHovering: false
        }

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.posterOnMouseEnter = this.posterOnMouseEnter.bind(this);
        this.posterOnMouseLeave = this.posterOnMouseLeave.bind(this);
    }

    onClick(e) {
        var isDropped = this.state.dropDown;
        this.setState({dropDown: !isDropped});
    }

    onMouseEnter(e) {
        this.setState({hovering: true});
    }    

    onMouseLeave(e) {
        this.setState({hovering: false});
    }

    posterOnMouseEnter(e) {
        this.setState({posterHovering: true});
    }    

    posterOnMouseLeave(e) {
        this.setState({posterHovering: false});
    }

    render() {

        var permanentBoxStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between"
        }

        var dropDownBox = null;

        var invertColorScheme = this.state.dropDown || this.state.hovering;

        var foregroundColor = "#004080"; //this.props.buttonColor ? this.props.buttonColor : "black";
        var backgroundColor = "#f9f9f9";

        // var mainColor = invertColorScheme ? null : "black";
        // var textColor = invertColorScheme ? "black" : "#fffcf0";
        var mainColor = invertColorScheme ? null : foregroundColor;
        var textColor = invertColorScheme ? foregroundColor : backgroundColor;

        var posterMainColor = this.state.posterHovering ? null : foregroundColor;
        var posterTextColor = this.state.posterHovering ? foregroundColor : backgroundColor;

        var feedbackButtonStyle = {
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
            backgroundColor: mainColor,
            margin: "15px",
            color: textColor,
            fontSize: "65%",
            fontWeight: "bold",
            borderColor: foregroundColor, //"black",
            borderWidth: "3px",
            borderStyle: "solid"
        };

        var posterButtonStyle = {
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
            backgroundColor: posterMainColor,
            margin: "15px",
            color: posterTextColor,
            fontSize: "65%",
            fontWeight: "bold",
            borderColor: foregroundColor, //"black",
            borderWidth: "3px",
            borderStyle: "solid"
        };


        var outsideWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "20px",
            padding: "10px"
        };

        var buttonWrapperStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            // gap: "5px",
            // padding: "10px"
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

        var nameAffiliation = <i> {this.props.homepage ? <a href={this.props.homepage}> {this.props.personName}</a> : this.props.personName} 
                                  {this.props.affiliation ? ", " + this.props.affiliation : null}</i>

        var title = this.props.title ? 
                    <div style={innerStyle}>
                        <b>{this.props.title}</b>  
                    </div>
                    : null;

        var abstract = this.props.abstract ? 
                    <div style={innerStyle}>
                        <b>Abstract:</b> {this.props.abstract}
                    </div>
                    : null;

        var bio = this.props.bio ?
                  <div style={innerStyle}>
                        {this.props.title ? <b>Bio:</b> : ""} {this.props.bio}
                  </div>
                  : null;

        if (this.state.dropDown || !this.props.hideInfo) {
            dropDownBox = <div>{abstract} {bio}</div>;
        }

        if (!this.state.dropDown && this.props.hideBio) {
            dropDownBox = <div>{abstract}</div>;
        }

        

        return (

            <div style={permanentBoxStyle}> 
                <div style={outsideWrapperStyle}>
                    <img src={this.props.img} alt={this.props.personName} style={imageStyle}/>
                    <div style={textBlockStyle}>

                        {title}

                        <div style={innerStyle}> 
                            {/* <i><a href={this.props.homepage}> {this.props.personName}</a>, {this.props.affiliation}</i> */}
                            {nameAffiliation}
                        </div>


                        {dropDownBox}

                        {/* {abstract}

                        {bio} */}
                    </div>
                </div>
                
                <div style={buttonWrapperStyle}>
                    {this.props.poster ? <a href={this.props.poster}> 
                        <div style={posterButtonStyle}
                            onMouseEnter={this.posterOnMouseEnter}
                            onMouseLeave={this.posterOnMouseLeave}>
                            poster
                        </div></a> 
                        : null
                    }

                    {(this.props.hideInfo || this.props.hideBio) ? <div style={feedbackButtonStyle}
                            onClick={this.onClick}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}>
                            {this.state.dropDown ? "less!" : "more!"}
                    </div> 
                    : null}
                </div>
            </div>
        );
    }
}

Person.defaultProps = {
    img: require("./profile-alt.jpg")
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

    render() {

        var infoBlockStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems:"left",
            // gap: "20px",
            // maxWidth: "750px"
        };


        // Images
        var vijayaraghavanImage = require("./vijayaraghavan-profile.jpg");
        var srinivasImage = require("./srinivas-profile.jpg");
        var hullmanImage = require("./hullman-profile.jpg");
        var bachImage = require("./bach-profile.jpg")
        var hassaniImage = require("./hassani-profile.jpg")

        var fujiiImage = require("./fujii-profile.png")
        var bertaImage = require("./berta-profile.jpg")
        var parkImage = require("./park-profile.jpg")
        var braunImage = require("./braun-profile.png")
        var rosselliniImage = require("./rossellini-profile.jpg")
        var linImage = require("./lin-profile.jpg")
        var sornwaneeImage = require("./sornwanee-profile.png")
        var sheshukovaImage = require("./sheshukova-profile.png")
        var hegazyImage = require("./hegazy-profile.png")
        var casacubertaImage = require("./casacuberta-profile.jpg")
        var pealeImage = require("./peale-profile.jpg")
        var perdomoImage = require("./perdomo-profile.jpg")




        return(
        <div>
            <header>
                <div class="container">
                <h1>Predictions and Uncertainty</h1>
                <h2>Workshop at <a href="https://learningtheory.org/colt2025/" style={{color: "lightgreen"}}>COLT 2025</a> in Lyon, France</h2>
                <h2>June 30, 2025, 2:00-5:00pm</h2>
                </div>
            </header>

            <main>


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

                             <li><i>Robust Statistics</i>, that develops methods that are robust to outliers 
                             in the dataset, even in challenging high-dimensional settings,</li>

                             <li><i>Risk-Averse Decision Making</i>, which explicitly accounts for uncertainty 
                             to enable safe (conservative) decisions,</li>

                             <li><i>Algorithms with Predictions</i>, where algorithms have to decide whether 
                             to rely on potentially untrusted predictions,</li>

                             <li><i>Calibration</i>, which works to post-process predictions so that they can 
                             be taken &quot;at face value,&quot;</li>

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
                    {/* <h2>Program</h2> */}

                    {/* <p> We are inviting submissions for our poster session.  Submissions do not necessarily have 
                        to be related to one of the four highlighted areas in the overview, but should include a short 
                        description of how the work relates to quantifying the uncertainty of untrusted/unreliable 
                        predictions.</p>
                    
                    <ul>
                    <li><strong>Poster submission form:</strong> <a href="https://forms.gle/3BGYKZbR68k6tbS88">here</a> </li>
                    <li><strong>Poster submission deadline:</strong> May 25, 2025 AoE </li>
                    <li><strong>Poster acceptance notification:</strong> June 1, 2025 </li>
                    </ul>

                    <p>Please feel free to reach out to <a href="mailto:vaidehi@u.northwestern.edu">vaidehi@u.northwestern.edu</a> with any questions regarding poster submissions.</p>

                    <p>The schedule of invited talks is coming soon!</p> */}

                    <h2>Invited Talks</h2>

                    <Person personName="Francis Bach"
                            homepage="https://www.di.ens.fr/~fbach/"
                            affiliation="INRIA and Ecole Normale Superieure, Computer Science"
                            img={bachImage}
                            title="Recent advances in conformal prediction"
                            abstract="In this talk, I will review the conformal prediction framework and present recent work on extending 
                            the classical framework of obtaining confidence sets for univariate regression with exchangeable data."
                            bio="Francis Bach is a researcher at Inria, leading since 2011 the machine learning team which is part of 
                            the Computer Science department at Ecole Normale Superieure. He graduated from Ecole Polytechnique in 1997 
                            and completed his Ph.D. in Computer Science at U.C. Berkeley in 2005, working with Professor Michael Jordan. 
                            He spent two years in the Mathematical Morphology group at Ecole des Mines de Paris; then he joined the computer 
                            vision project-team at Inria/Ecole Normale Superieure from 2007 to 2010. 

                            Francis Bach is primarily interested in machine learning, and especially in sparse methods, kernel-based learning, 
                            neural networks, and large-scale optimization. He published the book &quot;Learning Theory from First Principles&quot; 
                            through MIT Press in 2024.

                            He obtained in 2009 a Starting Grant and in 2016 a Consolidator Grant from the European Research Council, and 
                            received the Inria young researcher prize in 2012, the ICML test-of-time award in 2014 and 2019, the NeurIPS 
                            test-of-time award in 2021, as well as the Lagrange prize in continuous optimization in 2018, and the Jean-Jacques 
                            Moreau prize in 2019. He was elected in 2020 at the French Academy of Sciences. In 2015, he was program co-chair 
                            of the International Conference in Machine learning (ICML), general chair in 2018, and president of its board 
                            between 2021 and 2023; he was co-editor-in-chief of the Journal of Machine Learning Research between 2018 and 2023."
                            hideBio={true}/>

                        <Person personName="Chao Gao"
                                homepage="https://www.stat.uchicago.edu/~chaogao/"
                                affiliation="University of Chicago, Statistics"
                                title="Connections to Robust Statistics"
                                abstract="Coming soon..."/>

                        <Person personName="Hamed Hassani"
                                homepage="https://www.seas.upenn.edu/~hassani/"
                                img={hassaniImage}
                                affiliation="University of Pennsylvania, Electrical and Systems Engineering"
                                title="Decision Theoretic Foundations of Conformal Predictions: Optimal Uncertainty Quantification 
                                for Risk-Averse Agents"
                                abstract="A fundamental question in data-driven decision making is how to quantify the uncertainty of 
                                predictions in ways that can usefully inform downstream action. This interface between prediction uncertainty 
                                and decision-making is especially important in risk-sensitive domains, such as medicine. In this talk, I will 
                                explain our recent efforts to develop decision-theoretic foundations that connect uncertainty quantification 
                                using prediction sets with risk-averse decision-making. Specifically, I aim to answer three fundamental 
                                questions: (1) What is the correct notion of uncertainty quantification for risk-averse decision makers? I 
                                will show that prediction sets are optimal for decision makers who wish to optimize their value at risk. (2) 
                                What is the optimal policy that a risk averse decision maker should use to map prediction sets to actions? It 
                                turns out that a simple max-min decision policy is optimal for risk-averse decision makers. Finally, (3) How 
                                can we derive prediction sets that are optimal for such decision makers? I will provide an exact 
                                characterization in the population regime and a distribution free finite-sample construction. Answering these 
                                questions naturally leads to a practical algorithm, termed Risk-Averse Calibration (RAC), which follows a 
                                provably optimal design for deriving action policies from predictions. I will conclude by describing the 
                                implications of these results along with several future directions."
                                bio="Hamed Hassani is currently an associate professor of the Electrical and Systems Engineering Department, 
                                the Computer and Information Systems Department, and the Department of Statistics and Data Science at the 
                                University of Pennsylvania. Prior to that, he was a research fellow at Simons Institute for the Theory of 
                                Computing (UC Berkeley) affiliated with the program of Foundations of Machine Learning, and a postdoctoral 
                                researcher at the Institute of Machine Learning at ETH Zurich. He received a Ph.D. degree in Computer and 
                                Communication Sciences from EPFL, Lausanne. He is the recipient of the 2014 IEEE Information Theory Society 
                                Thomas M. Cover Dissertation Award, 2015 IEEE International Symposium on Information Theory Student Paper 
                                Award, 2017 Simons- Berkeley Fellowship, 2020 Air Force Office of Scientific Research (AFOSR) Young Investigator 
                                Award, 2020 National Science Foundation (NSF) CAREER Award, 2020 Intel Rising Star award, the distinguished 
                                lecturer of the IEEE Information Society in 2022-23, and the 2023 IEEE Communications Society & Information 
                                theory Society Joint Paper Award. Moreover, he was selected as the recipient of the 2023 IEEE Information Theory 
                                Society&apos;s James L. Massey Research and Teaching Award for Young Scholars."
                                hideBio={true}/>

                        <Person personName="Marek Eli&aacute;s&#780;"
                                homepage="https://elias.ba30.eu/"
                                affiliation="Bocconi University, Computer Science"
                                title="Perspectives from Algorithms with Predictions"
                                abstract="Coming soon..."/>

                        <Person personName="Pricewill Okoroafor"
                                homepage="https://pokoroafor.github.io/"
                                affiliation="Cornell University, Computer Science"
                                title="Perspectives from Calibration"
                                abstract="Coming soon..."/>
                    
                    </div>

                    
                <div class="container">
                    <h2>Posters</h2>
                    
                    <Person personName="Eug&egrave;ne Berta"
                            affiliation="INRIA Paris, École Normale Supérieure"
                            homepage="https://eugeneberta.github.io/"
                            title="Rethinking Early Stopping: Refine, Then Calibrate"
                            abstract="Machine learning classifiers often output probabilistic predictions, which are essential for accurate and 
                            interpretable decision-making. These models are typically trained using proper losses like cross-entropy, which 
                            decompose into two components: calibration error, capturing general over- or underconfidence, and refinement error, 
                            reflecting the model's ability to distinguish between classes. We show—both theoretically and empirically—that training 
                            does not minimize these two errors simultaneously. As a result, selecting the best training epoch based on validation 
                            loss yields a compromise that is suboptimal for both. To address this, we propose a new metric for early stopping and 
                            hyperparameter tuning that makes it possible to minimize refinement error during training. Calibration error is then 
                            reduced post hoc using standard techniques. Our method is architecture-agnostic and consistently enhances performance 
                            across a range of classification tasks. Based on joint work with David Holzmüller, Michael I. Jordan and Francis Bach."
                            img={bertaImage}
                            hideInfo={true}/>

                    <Person personName="Sacha Braun"
                            affiliation="Inria"
                            homepage="mailto:sacha.braun@inria.fr"
                            title="Minimum volume conformal sets for multivariate regression"
                            abstract="We introduce an optimization-driven framework for multivariate conformal prediction that 
                            learns minimum-volume prediction sets while ensuring valid coverage. Our method defines a novel 
                            nonconformity score that adapts to covariates, enabling tight, efficient and adaptive prediction 
                            sets using arbitrary norm balls. By jointly optimizing the predictive model and its uncertainty, 
                            we achieve state-of-the-art performance on real-world datasets. Based on joint work with Liviu 
                            Aolaritei, Michael I. Jordan, and Francis Bach."
                            img={braunImage}
                            hideInfo={true}/>     

                    <Person personName="Sílvia Casacuberta"
                            affiliation="University of Oxford"
                            homepage="https://silviacasacuberta.com/"
                            title="Selective Omniprediction and Fair Abstention"
                            abstract="We propose new learning algorithms for building selective classifiers, which are predictors that are 
                            allowed to abstain on some fraction of the domain. We study the model where a classifier may abstain from predicting 
                            at a fixed cost. Building on the recent framework on multigroup fairness and omniprediction, given a pre-specified 
                            class of loss functions, we provide an algorithm for building a single classifier that learns abstentions and predictions 
                            optimally for every loss in the entire class, where the abstentions are decided efficiently for each specific loss 
                            function by applying a fixed post-processing function. Our algorithm and theoretical guarantees generalize the 
                            previously-known algorithms for learning selective classifiers in formal learning-theoretic models. We then extend the 
                            traditional multicalibration algorithms to propose a new notion of &quot;multicalibration with abstention&quot;, which 
                            we use to efficiently build accurate selective classifiers that abstain optimally not only globally but also locally 
                            within each of the groups in any pre-specified collection of possibly intersecting subgroups of the domain, and are 
                            also accurate when they do not abstain. We show how our abstention algorithms can be used as conformal prediction 
                            methods in the binary classification setting to achieve both marginal and group-conditional coverage guarantees for an 
                            intersecting collection of groups. We provide empirical evaluations for all of our theoretical results, demonstrating the 
                            practicality of our learning algorithms for the goal of abstaining optimally and fairly. This is joint work with Varun 
                            Kanade."
                            img={casacubertaImage}
                            hideInfo={true}/>   

                    <Person personName="Kaito Fujii"
                            affiliation="National Institute of Informatics"
                            homepage="https://fujiik.github.io/"
                            title="The Secretary Problem with Predictions"
                            abstract="The value maximization version of the secretary problem is the problem of hiring a candidate with the largest 
                            value from a randomly ordered sequence of candidates. In this work, we consider a setting where predictions of candidate 
                            values are provided in advance. We propose an algorithm that achieves a nearly optimal value if the predictions are accurate and 
                            results in a constant-factor competitive ratio otherwise. We also show that the worst-case competitive ratio of an algorithm cannot be 
                            higher than some constant <1/e, which is the best possible competitive ratio when we ignore predictions, if the algorithm performs nearly 
                            optimally when the predictions are accurate. Additionally, for the multiple-choice secretary problem, we propose an algorithm with a similar 
                            theoretical guarantee. We empirically illustrate that if the predictions are accurate, the proposed algorithms perform well; meanwhile, if 
                            the predictions are inaccurate, performance is comparable to existing algorithms that do not use predictions. This presentation is based on 
                            joint work with Yuichi Yoshida (National Institute of Informatics)."
                            img={fujiiImage}
                            hideInfo={true}/>

                    <Person personName="Ben Gao"
                            affiliation="Laboratoire Hubert Curien"
                            homepage="mailto:ben.gao@univ-st-etienne.fr"
                            title="When to Learn: Conformal Scores as Online Update Criteria"
                            abstract="Based on the joint work with Olivier Alata, Stéphane Chrétien and Jordan Patracone, we present 
                            Conformal Online Learning (COL), a novel framework designed for adaptive model updates in streaming 
                            environments. Inspired by conformal prediction but repurposed for learning, COL evaluates the consistency
                             of models over time, rather than constructing prediction sets. At each step, the model's performance is 
                             compared against a calibrated conformity threshold derived from recent history. An update is triggered 
                             only if the model's error exceeds this threshold, ensuring that learning occurs only when necessary. 
                             This selective adaptation leads to a significant reduction in redundant updates while preserving 
                             long-term accuracy. Unlike classical online learning methods that continuously retrain or assume 
                             stationarity, COL offers a principled, data-driven mechanism for dynamic model refinement with minimal 
                             computational overhead. The framework is general and model-agnostic, making it suitable for a wide 
                             range of applications involving evolving data streams and non-stationary environments. We demonstrate 
                             the effectiveness of COL through its application to online learning of Koopman linear embeddings for 
                             non-linear dynamical systems."
                             hideInfo={true}/>

                    <Person personName="Noah Golowich"
                            affiliation="MIT"
                            homepage="mailto:nzg@mit.edu"
                            title="High-Dimensional Calibration from Swap Regret"
                            abstract="We study the online calibration of multi-dimensional forecasts over an arbitrary convex set 
                            P in Rd relative to an arbitrary norm. We connect this with the problem of external regret minimization 
                            for online linear optimization, showing that if it is possible to guarantee O(sqrt(rho T)) worst-case regret 
                            after T rounds when actions are drawn from P and losses are drawn from the dual unit norm ball, then it is 
                            also possible to obtain epsilon-calibrated forecasts after T = exp(O(rho / epsilon^2)) rounds. When P is the 
                            d-dimensional simplex and the norm is the l1-norm, the existence of O(sqrt{T log d})-regret algorithms for 
                            learning with experts implies that it is possible to obtain epsilon-calibrated forecasts after 
                            T = exp(O(log d / epsilon^2)) = d^O(1/epsilon^2) rounds, recovering a recent result of Peng.

                            Interestingly, our algorithm obtains this guarantee without requiring access to any online linear optimization 
                            subroutine or knowledge of the optimal rate rho -- in fact, our algorithm is identical for every setting of 
                            P and the norm. Instead, we show that the optimal regularizer for the above OLO problem can be used to upper bound 
                            the above calibration error by a swap regret, which we then minimize by running the recent TreeSwap algorithm 
                             with Follow-The-Leader as a subroutine. The resulting algorithm is highly efficient and plays a distribution over 
                             simple averages of past observations in each round.

                            Finally, we prove that any online calibration algorithm that guarantees epsilon T l1-calibration error over the 
                            d-dimensional simplex requires T >= exp(poly(1/ epsilon)) (assuming d >= poly(1/epsilon)). This strengthens the 
                            corresponding d^Omega(log(1/epsilon)) lower bound of Peng, and shows that an exponential dependence on 1/epsilon 
                            is necessary."
                            hideInfo={true}/>

                    <Person personName="Mahmoud Hegazy"
                            affiliation="École polytechnique/ Inria Paris"
                            homepage="https://mahegz.github.io/"
                            title="Valid Selection Among Conformal Sets"
                            abstract="In practice, multiple valid conformal prediction sets may be available, arising from different models or 
                            methodologies. However, selecting the most desirable set, such as the smallest, can invalidate the coverage 
                            guarantees. To address this challenge, we propose a stability-based approach that ensures coverage for the 
                            selected prediction set. We extend our results to the online conformal setting, propose several refinements in 
                            settings where additional structure is available, and demonstrate its effectiveness through experiments. Based on 
                            Joint work with Liviu Aolaritei, Michael Jordan, and Aymeric Dieuleveut. "
                            img={hegazyImage}
                            hideInfo={true}/>

                    <Person personName="Ilja Kuzborskij"
                            affiliation="Google DeepMind"
                            homepage="https://iljaku.github.io/"
                            title="Pointwise confidence estimation in the non-linear ℓ2-regularized least squares"
                            abstract="We consider a high-probability non-asymptotic confidence estimation in the L2-regularized non-linear 
                            least-squares setting with fixed design. In particular, we study confidence estimation for local minimizers of the 
                            regularized training loss. We show a pointwise confidence bound, meaning that it holds for the prediction on any given 
                            fixed test input x. Importantly, the proposed confidence bound scales with similarity of the test input to the training 
                            data in the implicit feature space of the predictor (for instance, becoming very large when the test input lies far 
                            outside of the training data). This desirable last feature is captured by the weighted norm involving the inverse-Hessian 
                            matrix of the objective function, which is a generalized version of its counterpart in the linear setting, x^T Cov^{-1} x.
                             Our generalized result can be regarded as a non-asymptotic counterpart of the classical confidence interval based on 
                             asymptotic normality of the MLE estimator. We propose an efficient method for computing the weighted norm, which only 
                             mildly exceeds the cost of a gradient computation of the loss function. Finally, we complement our analysis with 
                             empirical evidence showing that the proposed confidence bound provides better coverage/width trade-off compared to a 
                             confidence estimation by bootstrapping, which is a gold-standard method in many applications involving non-linear 
                             predictors such as neural networks.  Based on joint work with Yasin Abbasi Yadkori"
                             hideInfo={true}/>        

                    <Person personName="Zhanran Lin"
                            affiliation="The Wharton School, University of Pennsylvania"
                            homepage="mailto:zhanranl@wharton.upenn.edu"
                            title="Joint Coverage Regions: Simultaneous Confidence and Prediction Sets"
                            abstract="We introduce Joint Coverage Regions (JCRs), which unify confidence intervals and prediction regions 
                            in frequentist statistics. Specifically, joint coverage regions aim to cover a pair formed by an unknown fixed 
                            parameter (such as the mean of a distribution), and an unobserved random datapoint (such as the outcomes 
                            associated to a new test datapoint). The first corresponds to a confidence component, while the second corresponds 
                            to a prediction part. In particular, our notion unifies classical statistical methods such as the Wald confidence 
                            interval with distribution-free prediction methods such as conformal prediction. We show how to construct 
                            finite-sample valid JCRs when a conditional pivot is available; under the same conditions where exact finite-sample 
                            confidence and prediction sets are known to exist. We further develop efficient JCR algorithms, including split-data 
                            versions by introducing adequate sets to reduce the cost of repeated computation. We illustrate the use of JCRs in 
                            statistical problems such as constructing efficient prediction sets when the parameter space is structured."
                            img={linImage}
                            poster={linPoster}
                            hideInfo={true}/>

                    <Person personName="Antoine Moulin"
                            affiliation="Universitat Pompeu Fabra"
                            homepage="https://antoine-moulin.github.io/"
                            title="Confidence Intervals for General Function Classes with Ensembles"
                            abstract="We investigate the computation of point-wise predictive intervals. Existing theoretical frameworks frequently 
                            rely on specific structural assumptions regarding the function to be estimated, such as linearity or generalized 
                            linearity. In practice, however, experimentalists often lack such a priori knowledge, necessitating the use of 
                            heuristic approaches for uncertainty quantification. A common heuristic involves training an ensemble model and utilizing 
                            the point-wise variance as a proxy for epistemic uncertainty. To address this apparent discrepancy, this work derives 
                            rigorous confidence intervals for bagging estimators applicable to general function classes. These derived intervals 
                            provide a theoretically grounded method for uncertainty quantification without restrictive assumptions on the underlying 
                            data-generating process."
                            hideInfo={true}/>

                    <Person personName="Keonvin Park" 
                            affiliation="Interdisciplinary Program in Artificial Intelligence, Seoul National University"
                            homepage="mailto:kbpark16@snu.ac.kr"
                            title="Multimodal Forest Loss Risk Map Generation from Binary Labels Using Climate Data and Satellite Imagery"
                            abstract="Binary observations of forest loss, while informative, lack the probabilistic nuance required for robust 
                            environmental risk assessment. In this work, we present a multimodal learning framework that transforms binary forest 
                            loss labels into spatially continuous risk maps by integrating satellite imagery and climate reanalysis data. Using 
                            historical Landsat-derived images and ERA5 climate variables, our model learns to estimate the probability of forest 
                            loss at fine resolution, thereby enabling risk-aware monitoring across diverse geographies. To reflect epistemic 
                            uncertainty and support trustworthy decision-making, we incorporate conformal prediction to quantify confidence intervals 
                            for each prediction. The resulting probabilistic forest loss maps offer interpretable insights for early warning systems 
                            and targeted conservation strategies under environmental uncertainty."
                            img={parkImage}
                            hideInfo={true}/>

                    <Person personName="Charlotte Peale"
                            affiliation="Stanford University"
                            homepage="https://cpeale.github.io/"
                            title="Provable Uncertainty Decomposition via Higher-Order Calibration"
                            abstract="We give a principled method for decomposing the predictive uncertainty of a model into aleatoric and 
                            epistemic components with explicit semantics relating them to the real-world data distribution. While many works 
                            in the literature have proposed such decompositions, they lack the type of formal guarantees we provide. Our 
                            method is based on the new notion of higher-order calibration, which generalizes ordinary calibration to the 
                            setting of higher-order predictors that predict mixtures over label distributions at every point. We show how 
                            to measure as well as achieve higher-order calibration using access to k-snapshots, namely examples where each 
                            point has k independent conditional labels. Under higher-order calibration, the estimated aleatoric uncertainty at 
                            a point is guaranteed to match the real-world aleatoric uncertainty averaged over all points where the prediction 
                            is made. To our knowledge, this is the first formal guarantee of this type that places no assumptions whatsoever 
                            on the real-world data distribution. Importantly, higher-order calibration is also applicable to existing higher-order 
                            predictors such as Bayesian and ensemble models and provides a natural evaluation metric for such models. We 
                            demonstrate through experiments that our method produces meaningful uncertainty decompositions for image classification. 
                            Joint work with Gustaf Ahdritz, Aravind Gollakota, Parikshit Gopalan, and Udi Wieder. "
                            img={pealeImage}
                            hideInfo={true}/>

                    <Person personName="Juan Carlos Perdomo"
                            affiliation="Harvard"
                            homepage="jcperdomo.org"
                            title="Online Conditional Quantile Prediction in Kernel Spaces"
                            abstract="We present a simple algorithm for online quantile regression based on the principle of defensive forecasting. 
                            This procedure guarantees computationally efficient, nonasymptotic sqrt(T) regret with respect to all functions in a 
                            reproducing kernel Hilbert space. Based on joint work with Cynthia Dwork, Pranay Tankala, Nicole Immorlica, and Chris 
                            Hays."
                            img={perdomoImage}
                            hideInfo={true}/>

                    <Person personName="Raphael Rossellini"
                            affiliation="University of Chicago"
                            homepage="raphaelrr.com"
                            title="Can a calibration metric be both testable and actionable?"
                            abstract="Forecast probabilities often serve as critical inputs for binary decision making. In such 
                            settings, calibration—ensuring forecasted probabilities match empirical frequencies—is essential. 
                            Although the common notion of Expected Calibration Error (ECE) provides actionable insights for 
                            decision making, it is not testable: it cannot be empirically estimated in many practical cases. 
                            Conversely, the recently proposed Distance from Calibration (dCE) is testable but is not actionable 
                            since it lacks decision-theoretic guarantees needed for high-stakes applications. We introduce Cutoff 
                            Calibration Error, a calibration measure that bridges this gap by assessing calibration over intervals 
                            of forecasted probabilities. We show that Cutoff Calibration Error is both testable and actionable and 
                            examine its implications for popular post-hoc calibration methods, such as isotonic regression and Platt 
                            scaling. Based on joint work with Jake Soloff, Rina Foygel Barber, Zhimei Ren, and Rebecca Willett."
                            img={rosselliniImage}
                            hideInfo={true}/>

                    <Person personName="Marina Sheshukova"
                            affiliation="HSE University"
                            homepage="https://www.hse.ru/en/org/persons/305137706/"
                            title="Gaussian Approximation and Multiplier Bootstrap for Stochastic Gradient Descent"
                            abstract="In this paper, we establish the non-asymptotic validity of the multiplier bootstrap procedure 
                            for constructing confidence sets using the Stochastic Gradient Descent (SGD) algorithm. Under 
                            appropriate regularity conditions, our approach avoids the need to approximate the limiting covariance 
                            of Polyak-Ruppert SGD iterates, which allows us to derive approximation rates in convex distance of 
                            order up to 1/√n. Notably, this rate can be faster than the one achievable under the Polyak-Juditsky 
                            central limit theorem. To our knowledge, this provides the first fully non-asymptotic bound on the 
                            accuracy of bootstrap approximations in SGD algorithms. Our analysis builds on Gaussian approximation 
                            results for nonlinear statistics of independent random variables. Based on joint work with Sergey 
                            Samsonov, Denis Belomestny, Eric Moulines, Qi-Man Shao, Zhuo-Song Zhang, and Alexey Naumov."
                            img={sheshukovaImage}
                            poster={sheshukovaPoster}
                            hideInfo={true}/>        

                    <Person personName="Thanawat Sornwanee"
                            affiliation="Stanford University"
                            homepage="https://tsornwanee.github.io"
                            title="Full Conformal Prediction under Stochastic Non-Conformity Measure"
                            img={sornwaneeImage} />

                    <Person personName="Lukas Zierahn"
                            affiliation="CWI & Booking.com"
                            homepage="https://lukaszierahn.github.io/"
                            title="Best Arm Identification for Shifting Means with Uniform Sampling"
                            abstract="In this piece of ongoing research, we study the best arm identification problem in a non-stationary environment 
                            where rewards are subgaussian. The expected rewards of arms can change arbitrarily between timesteps, with the constraint 
                            that the optimal arm remains constant. The objective of the learner is to identify the best arm with high probability 
                            while minimizing sample complexity (the fixed confidence setting). We demonstrate that the traditional approach of using 
                            the Generalized Likelihood Ratio Test (GLRT) fails due to overfitting and we propose an alternative approach using 
                            importance weighted estimators. We prove an upper bound on the expected sample complexity under uniform sampling and also
                             show a lower bound in this setting, starting to characterize when learning is possible."
                            hideInfo={true}/>

                    
                </div>
                
                </section>

                <section class="organizers">
                <div class="container">
                    <h2>Organizers</h2>
                    <Person personName="Jessica Hullman"
                            homepage="http://users.eecs.northwestern.edu/~jhullman/"
                            affiliation="Northwestern University, Computer Science"
                            img={hullmanImage}
                            bio="Jessica is Ginni Rometty Professor of Computer Science and a Fellow at the Institute for Policy Research 
                            at Northwestern University. Her research focuses on decision-making from data, drawing on rational models 
                            of inference and spanning topics like inferential and predictive uncertainty quantification, AI-assisted 
                            decision-making, and human-AI complementarity." 
                            />

                    <Person personName="Vaidehi Srinivas"
                            homepage="https://vaidehi8913.github.io/"
                            affiliation="Northwestern University, Computer Science"
                            img={srinivasImage}
                            bio="Vaidehi is a 4th year PhD student in Computer Science at Northwestern University.  She has been working on 
                            problems on predictions and uncertainty including work in conformal prediction in high-dimensional and 
                            online settings, and in algorithms with predictions." 
                            />

                    <Person personName="Aravindan Vijayaraghavan"
                            homepage="https://users.cs.northwestern.edu/~aravindv/" 
                            affiliation="Northwestern University, Computer Science" 
                            img={vijayaraghavanImage}
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
