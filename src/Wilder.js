import imageReact from "./imageReact.jpeg"
import PropTypes from "prop-types"
import Skill from "./Skill.js"

const Wilder = ({name, skills}) => {
  return (
    <article className="card">
      <img src={imageReact} alt="Guy avatar" />
      <h3>{name}</h3>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => {
          return <Skill key={skill._id} {...skill} />;
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