import { useState } from 'react'

export default function(){
    
    const dummyPlayer = [
        {username:'idham', email:'idham@idham.com', experience:100, lvl:1},
        {username:'admin', email:'admin@admin.com', experience:0, lvl:2},
        {username:'player', email:'player@player.com', experience:50, lvl:3},
        {username:'player2', email:'playe2@player2.com', experience:100, lvl:3},
    ] 

    const inputStyle = `px-3 my-3 rounded text-base text-teal-600  py-1.5 w-2/12 bg-white bg-clip-padding border-solid border-gray-300 roundedtransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-700 focus:outline-none focus:border-2 mx-3
    `
    const buttonStyle= `inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out h-3/5 mt-3 w-2/12`

    
    const [ valueForm , setValueForm ] = useState({})
    const [dataSearch, setDataSearch] = useState([])

    const onChangeHandle=(e)=>{  
        const {value,name} = e.target
        setValueForm({...valueForm, [name]:value})
    }

    const onSubmitHandle=(e)=>{
        e.preventDefault()
        const { username, email, lvl, experience} = valueForm

        if(username && email && lvl && experience){
            setDataSearch(searchByExperience(searchByLvl(searchByEmail(searchByName(dummyPlayer,username), email),lvl),experience))
        }else if(username && email && lvl){
            setDataSearch(searchByLvl(searchByEmail(searchByName(dummyPlayer,username), email),lvl))
        }else if(username && email){
            setDataSearch(searchByEmail(searchByName(dummyPlayer,username), email))
        }else if(username){
            setDataSearch(searchByName(dummyPlayer,username))
        }else if(email){
            setDataSearch(searchByEmail(dummyPlayer,email))
        }else if(lvl){
            setDataSearch(searchByLvl(dummyPlayer,lvl))
        }else if(experience){
            setDataSearch(searchByExperience(dummyPlayer,experience))
        }


        setValueForm({})
    }

    console.log(valueForm)

    const searchByName=(data,username)=>{
        return data.filter((val)=>val.username===username)
    }
    const searchByEmail=(data,email)=>{
        return data.filter((val)=>val.email===email)
    }
    const searchByLvl=(data,lvl)=>{
        return data.filter((val)=>val.lvl==lvl)
    }
    const searchByExperience=(data,experience)=>{
        return data.filter((val)=>val.experience==experience)
    }


    const removeDuplicateLvl=(data)=>{
        const filterData = data.filter((value,index,self)=>{
            return index === self.findIndex((t) => (t.lvl === value.lvl))
        })
        return filterData.map((val)=>val.lvl).sort((a, b)=>{return a - b});        
    }

    const removeDuplicateExperience=(data)=>{
        const filterData = data.filter((value,index,self)=>{
            return index === self.findIndex((t) => (t.experience === value.experience))
        })
        return filterData.map((val)=>val.experience).sort((a, b)=>{return a - b});        
    }

    return (
        <>
            <div className="flex justify-center items-center bg-emerald-100 h-screen w-screen text-white">
                <div className="w-9/12 h-4/5 shadow-lg shadow-teal-900 bg-teal-700 flex flex-col items-center py-4 text-lg font-bold">
                    <span>Search Player</span>
                    <div className='flex flex-wrap'>
                        <input type="text" placeholder="By Username" name="username" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                        <input type="text" placeholder="By Email" name="email" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                        <select className={inputStyle} name="lvl" onChange={(e)=>{onChangeHandle(e)}}>
                            <option>Select lvl ...</option>
                            {
                                removeDuplicateLvl(dummyPlayer).map((val,index)=>{
                                    return <option key={index} value={val}>By Level {val}</option>
                                })
                            }
                        </select>
                        <select className={inputStyle} name="experience" onChange={(e)=>{onChangeHandle(e)}}>
                            <option>Select exp ...</option>
                            {
                                removeDuplicateExperience(dummyPlayer).map((val,index)=>{
                                    return <option key={index} value={val}>By Exp {val}</option>
                                })
                            }
                        </select>

                        <button 
                        className={buttonStyle}
                        onClick={(e)=>{onSubmitHandle(e)}}
                        >
                        Search
                    </button>
                    </div>
                    {
                        dataSearch.length<1?<div>no data</div>
                        :
                        <div className="flex flex-col w-10/12">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        Lvl
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4"
                                    >
                                        Experience
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataSearch?.map((val,index)=>{
                                            return(
                                            <tr key={index} className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {index+1}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {val.username}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {val.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {val.lvl}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {val.experience}
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
