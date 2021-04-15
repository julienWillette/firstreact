import imageReact from "./imageReact.jpeg"
import PropTypes from "prop-types"
import Skills from "./Skills.js"

const Wilder = ({name, description}) => {
  const skills = [
    {
      name: "Javascript",
      votes: 8,
    },
    {
      name: "Nodes",
      votes: 3,
    },
    {
      name: "CSS",
      votes: 12,
    }
  ]
  return (
    <article className="card">
      <img src={imageReact} alt="Guy avatar" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => {
          return <Skills name={skill.name} votes={skill.votes} />;
        })}
      </ul>
    </article>
  );
};

Wilder.propTypes ={
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Wilder;