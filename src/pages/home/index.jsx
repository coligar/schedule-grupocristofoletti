import Manager from "./manager"
import Candidate from "./candidate"

const Home = (props) => 
{
    const loadpage = (props.type === "manager") ? <Manager/> : <Candidate/>
    return (
        <>
            {loadpage}
        </>
    )
}

export default Home