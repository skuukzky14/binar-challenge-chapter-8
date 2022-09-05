export default function(props){
    const { changeFormFunc } = props
    return(
        <>
            <div className="flex flex-col bg-teal-700 text-white w-64 h-screen px-4 py-8 overflow-y-auto">
                <div>
                    <ul>
                        <li onClick={()=>{changeFormFunc('create')}} className="mx-4 my-6 rounded font-medium hover:bg-pink-600 px-2 py-2"> Create Player</li>
                        <li onClick={()=>{changeFormFunc('edit')}} className="mx-4 my-6 rounded font-medium hover:bg-pink-600 px-2 py-2"> Edit Player</li>
                        <li onClick={()=>{changeFormFunc('find')}} className="mx-4 my-6 rounded font-medium hover:bg-pink-600 px-2 py-2"> Find Player</li>
                    </ul>
                </div>
            </div>
        </>
    )
}