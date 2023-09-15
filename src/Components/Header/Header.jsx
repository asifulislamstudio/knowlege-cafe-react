import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center my-4'>
            <h1 className="font-bold text-2xl my-4">Knowlege Cafe</h1>
            <img src={profile} alt="" />
            </header>
            <div className=" border-2 "></div>
        </div>
    );
};

export default Header;