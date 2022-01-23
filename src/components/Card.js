import './Card.css';
import threedots from "../images/icon-ellipsis.svg"
import work from "../images/icon-work.svg"
import play from "../images/icon-play.svg"
import study from "../images/icon-study.svg"
import exercise from "../images/icon-exercise.svg"
import social from "../images/icon-social.svg"
import selfCare from "../images/icon-self-care.svg"




function Card(props) {

    let style
    const title = props.data.title


    switch(title) {
        case "Work" : 
        style = {
            backgroundColor: "hsl(15, 100%, 70%)",
            backgroundImage: `url(${work})`

        }
        break;
        case "Play": 
        style = {
            backgroundColor: "hsl(195, 74%, 62%)",
            backgroundImage: `url(${play})`
        }
        break;
        case "Study" : 
        style = {
            backgroundColor: "hsl(348, 100%, 68%)",
            backgroundImage: `url(${study})`

        }
        break;
        case "Exercise": 
        style = {
            backgroundColor: "hsl(145, 58%, 55%)",
            backgroundImage: `url(${exercise})`
        }
        break;
        case "Social" : 
        style = {
            backgroundColor: "hsl(264, 64%, 52%)",
            backgroundImage: `url(${social})`

        }
        break;
        case "Self Care": 
        style = {
            backgroundColor: "hsl(43, 84%, 65%)",
            backgroundImage: `url(${selfCare})`
        }
        break;
        default:
        style = {
            backgroundColor:""
        }
        
    }

    const timesWeeklyCurrent = props.data.timeframes.weekly.current
    const timesWeeklyPrevious = props.data.timeframes.weekly.previous
    const timesDailyCurrent = props.data.timeframes.daily.current
    const timesDailyPrevious = props.data.timeframes.daily.previous
    const timesMonthlyCurrent = props.data.timeframes.monthly.current
    const timesMonthlyPrevious = props.data.timeframes.monthly.previous

    let current
    let previous
    
    if (props.planning === "day") {
        current = <h1>{timesDailyCurrent}hrs</h1>
        previous = <p className="hours"> Last {props.planning} - {timesDailyPrevious}hrs </p>

    } else if (props.planning === "week") {
        current = <h1>{timesWeeklyCurrent}hrs</h1>
        previous = <p className="hours"> Last {props.planning} - {timesWeeklyPrevious}hrs </p>


    } else {
        current = <h1>{timesMonthlyCurrent}hrs</h1>
        previous = <p className="hours"> Last {props.planning} - {timesMonthlyPrevious}hrs </p>
    }
    


  return (
    <div style={style} className="card">
        <img src="../images/icon-work.svg" alt=""/>
        <div className="info">
            <div className="subject">
                <p>{title}</p>
                <img src={threedots} alt=""/>
            </div>
            {current}
            {previous}
        </div>
    </div>
  );
}

export default Card;