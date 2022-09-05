import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";



export default function(){
    const inputStyle = `px-3 my-3 rounded text-base text-teal-600  py-1.5 w-9/12 bg-white bg-clip-padding border-solid border-gray-300 roundedtransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-700 focus:outline-none focus:border-2
    `
    const buttonStyle= `"inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out"`

    const [ valueForm , setValueForm ] = useState({username:'', email:'', lvl:'', experience:''})
    const dummyPlayer = [
        {username:'idham', email:'idham@idham.com', experience:100, lvl:1},
        {username:'admin', email:'admin@admin.com', experience:0, lvl:2},
        {username:'player', email:'player@player.com', experience:50, lvl:3},
    ] 


    const onChangeHandle=(e)=>{  
        const {value,name} = e.target
        console.log(value,name)
        setValueForm({...valueForm, [name]:value})
    }

    const onChangePlayerHandle=(e)=>{
        const {value} = e.target
        setValueForm(JSON.parse(value))
    }

    const onSubmitHandle=(e)=>{
        e.preventDefault()
        console.log(valueForm)
        toast('Success Edit Player', {
            duration: 4000,
            position: 'top-right',
          
            // Styling
            style: {backgroundColor:'green', color:'white'},
            className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
    }
    
    return (
        <>
            <div className="flex justify-center items-center bg-emerald-100 h-screen w-screen text-white">
                <div className="w-3/12 h-2/5 shadow-lg shadow-teal-900 bg-teal-700 flex flex-col items-center py-4 text-lg font-bold">
                    <span>Edit Player</span>
                    <select className={inputStyle} name="experience" onChange={(e)=>{onChangePlayerHandle(e)}}>
                        {
                            dummyPlayer.map((val,index)=>{
                                return(
                                    <option key={index} value={JSON.stringify(val)}>{val.username}</option>
                                )
                            })
                        }
                    </select>
                    <input value={valueForm.username} type="text" placeholder="username" name="username" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <input value={valueForm.email} type="text" placeholder="email" name="email" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <input value={valueForm.lvl} type="text" placeholder="lvl" name="lvl" className={inputStyle} onChange={(e)=>{onChangeHandle(e)}}/>
                    <select value={valueForm.experience} className={inputStyle} name="experience" onChange={(e)=>{onChangeHandle(e)}}>
                        <option value="0">0</option>
                        <option value="100">100</option>
                        <option value="1000">1000</option>
                        <option value={valueForm.experience}>{valueForm.experience}</option>
                    </select>
                    <button 
                    className={buttonStyle}
                    onClick={(e)=>{onSubmitHandle(e)}}
                    >
                        SUBMIT
                    </button>
                    <Toaster />
                </div>
            </div>
        </>
    )
}
