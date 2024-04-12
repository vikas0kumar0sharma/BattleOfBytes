import React, { useState } from "react";
import Polls from "react-polls";
import "./reactPollCSS.css";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser, RedirectToSignIn } from "@clerk/clerk-react";

const pollQuestion = "Which team do you think will win?";

const pollAnswers = [
  { option: "Decoding Victory", votes: 6 },
  { option: "Javascript Titans", votes: 10 },
  { option: "Python Pacers", votes: 3 },
  { option: "Data Drivers", votes: 7 },
  { option: "Java Jaguars", votes: 19 },
  { option: "Syntax warriors", votes: 16 },
  { option: "Byte Blasters", votes: 21 },
  { option: "Logic Legends", votes: 30 },
  { option: "Code Ninjas", votes: 10 },
  { option: "Data Daredevils", votes: 14 },
  { option: "Tech Toppers", votes: 11 },
  { option: "Ruby Royals", votes: 18 }
];

const pollStyles = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#303030",
  align: "center",
  theme: "purple"
};

const ReactPollComponent = () => {
  const [pollAns, setPollAns] = useState([...pollAnswers]);

  const { isSignedIn, user, isLoaded } = useUser()

  const handleVote = async (voteAnswer, pollAnswers) => {

    const response = await fetch("http://localhost:5000/api/createUser", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.emailAddresses[0].emailAddress, name: user.fullName })
    })

    const res = await response.json()

    if (res.already === "Yes") {
      if (res.voted === true) {
        alert("You have already voted,cannot vote again!")
        return
      }
      const response = await fetch("http://localhost:5000/api/createUser", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.emailAddresses[0].emailAddress, name: user.fullName,voted:true })
      })
    }

    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    setPollAns(newPollAnswers);
  };

  // Calculate total votes
  const totalVotes = pollAns.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <div className="r-wrapper" id="poll">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Battle Of Bytes <br /> <hr style={{ width: '75%', margin: 'auto' }} /> </span>
          <span className="primaryText">Poll for winning team</span>
        </div>
        <main className="main">
          <div className="poll-options">
            {pollAns.map((answer, index) => (
              <div key={index} className="poll-option">
                <Polls
                  answers={[answer]}
                  onVote={voteAnswer => handleVote(voteAnswer, pollAns)}
                  customStyles={pollStyles}
                  noStorage
                />
              </div>
            ))}
          </div>
          <div className="total-votes">
            Total Votes: {totalVotes}
          </div>
        </main>
      </div>
    </div>
  );
};
export default ReactPollComponent;
