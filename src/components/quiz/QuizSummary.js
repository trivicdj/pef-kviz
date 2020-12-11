import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
      });
    }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;

    if (userScore <= 30) {
      remark = "Potrebno je još vežbe!";
    } else if (userScore > 30 && userScore <= 50) {
      remark = "Više sreće drugi put!";
    } else if (userScore <= 70 && userScore > 50) {
      remark = "Možeš to i bolje!";
    } else if (userScore >= 71 && userScore <= 84) {
      remark = "Odličan posao!";
    } else {
      remark = "Vi ste genije!";
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <span className="mdi mdi-check-circle-outline success-icon"> </span>{" "}
          </div>{" "}
          <h1> Kviz je završen </h1>{" "}
          <div className="container stats">
            <h4> {remark} </h4>{" "}
            <h2> Vaš rezultat: {this.state.score.toFixed(0)} % </h2>{" "}
            <span className="stat left"> Ukupan broj pitanja: </span>{" "}
            <span className="right"> {this.state.numberOfQuestions} </span>{" "}
            <br />
            <span className="stat left">
              {" "}
              Ukupan broj datih odgovora:{" "}
            </span>{" "}
            <span className="right">
              {" "}
              {this.state.numberOfAnsweredQuestions}{" "}
            </span>{" "}
            <br />
            <span className="stat left"> Broj tačnih odgovora: </span>{" "}
            <span className="right"> {this.state.correctAnswers} </span> <br />
            <span className="stat left"> Broj netačnih odgovora: </span>{" "}
            <span className="right"> {this.state.wrongAnswers} </span> <br />
            <span className="stat left">
              {" "}
              Iskorišćena pomoć hinta ili nagoveštaja:{" "}
            </span>{" "}
            <span className="right"> {this.state.hintsUsed} </span> <br />
            <span className="stat left"> Iskorišćena pomoć 50 - 50: </span>{" "}
            <span className="right"> {this.state.fiftyFiftyUsed} </span>{" "}
          </div>{" "}
          <section>
            <ul>
              <li>
                <Link to="/play/quiz"> Pokreni ponovo </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/"> Nazad na početnu stranu </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </section>{" "}
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats"> No Statistics Available </h1>{" "}
          <ul>
            <li>
              <Link to="/play/quiz"> Take a Quiz </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/"> Back to Home </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          {" "}
          <title> Quiz App - Summary </title>{" "}
        </Helmet>{" "}
        <div className="quiz-summary"> {stats} </div>{" "}
      </Fragment>
    );
  }
}

export default QuizSummary;
