import ShowMark from "../ShowMark/ShowMark";


const BookMarkBar = ({mark , readingtime}) => {
    
    

    
    return (
        <div className=" w-1/3 border">
            <div className="bg-red-400 rounded-md m-4 p-2 ">
                <h2>Reading Time :{readingtime} </h2>
            </div>
            
               <h1> Bookmark : {mark.length}</h1>
               {
                <div className=" bg-slate-300 px-2 py-4 mx-2 my-4 rounded-xl ">
                    {mark.map((aname, idx) => <ShowMark key={idx} aname={aname}></ShowMark>)}
                </div>
               }
            
        </div>
    );
};

export default BookMarkBar;