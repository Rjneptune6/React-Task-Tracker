import PropTypes from 'prop-types'
import Button from "./Button";
import { useLocation } from 'react-router-dom'
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 >{title}</h1>

            {location.pathname ==='/' && ( <Button color = {showAdd ? 'red' : 'green'}
                    text = {showAdd ? 'Close Form' : 'Show Form'}
                    onClick = {onAdd} />)}
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS Styling
// const headingStlye = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
