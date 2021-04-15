import PropTypes from "prop-types"

const Skills = ({name, votes}) => {
    return (
        <li className="skills">
            {name}
            <span className="votes">{votes}</span>

        </li> 
    );
};

Skills.propTypes = {
    name: PropTypes.string,
    votes: PropTypes.number,
};

export default Skills;