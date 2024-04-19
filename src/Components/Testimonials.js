import React from 'react'
import Cards from './Cards'
import {useState} from 'react'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
function Testimonials(props){
    let review = props.review;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }
    }
    const rightShiftHandler = ()=>{
        if(index+1>4){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    const surpriseHandler = ()=>{
        let randomInd = Math.floor(Math.random()*review.length);
        setIndex(randomInd);
    }
    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col md:relative justify-center items-center mt-10 p-10 transistion-all duration-700 hover:shadow-xl rounded-md'>
            <Cards review={review[index]}/>
            <div className='flex text-2xl mt-7 gap-3 text-violet-400 font-bold mx-auto'>
                <button onClick = {leftShiftHandler}
                 className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft/>
                </button>
                <button onClick = {rightShiftHandler} 
                className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight/>
                </button>
            </div>
            <div className='mt-6'>
                <button onClick = {surpriseHandler} 
                className='bg-violet-400 hover:bg-violet-600 transistion-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-2'>
                    Surprise me !
                </button>
            </div>
        </div>
    );
}
export default Testimonials;