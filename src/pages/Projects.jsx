import { Link } from 'react-router-dom';
import './Projects.css'

export default function Projects() {
    return(
        <div className="project-containers">
            <h1>projects links</h1>

            <div className="projects-cards">
        <li><Link to="/snake">Snake Game</Link></li>
        <li><Link to="/moving" > Moving cursour</Link></li>
          {/* <li><Link to="/todo" > To Do LISTS</Link></li> */}
            </div>
        </div>
    )
}