 
import profileImg from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 mx-4 border-b-2">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profileImg} alt="" />
        </header>
    );
};

export default Header;