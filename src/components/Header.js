import Button from "./button"

const Header = ({ title, onAdd, showAdd }) => {
    // const location = useLocation()
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}


// ---> CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
