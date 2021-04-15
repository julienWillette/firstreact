import PropTypes from "prop-types"

const Skill = ({title, votes}) => {
    return (
        <li className="skills">
            {title}
            <span className="votes">{votes}</span>

        </li> 
    );
};

Skill.propTypes = {
    title: PropTypes.string,
    votes: PropTypes.number,
};

export default Skill;