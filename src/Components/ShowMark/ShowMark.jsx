import PropTypes from 'prop-types';
const ShowMark = ({aname}) => {
    return (
        <div className="bg-slate-200 rounded-md m-4 p-4 ">
            <h1 className="text-xl font-semibold text-black">{aname.title}</h1>
        </div>
    );
};

ShowMark.PropTypes = {
    aname: PropTypes.object.isRequired
}
export default ShowMark;