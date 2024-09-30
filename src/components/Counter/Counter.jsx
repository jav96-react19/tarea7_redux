import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement} from "@/store/slices/reducer.jsx";


const Counter = () => 
{
    const counterId = useSelector(state => state.counterId)
    //Obtenemos el valor del contador del estado
    const counter = useSelector(state => state.counter)
    //Enviamos la accion increment y decrement para que sea modificada en el estado por reducer
    const dispatch = useDispatch();

    return (
        <>
            <div className="bg-white bg-opacity-20 p-8 rounded-3xl backdrop-blur-lg shadow-lg">
                <motion.div
                    key={counterId}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="text-6xl font-bold text-white text-center mb-8">
                    {counter}
                </motion.div>
                <div className="flex justify-center space-x-6">
                    <button onClick={() => dispatch(decrement())}

                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                        <Minus size={24} />
                    </button>
                    <button onClick={() => dispatch(increment())}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                        <Plus size={24} />
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default Counter;
