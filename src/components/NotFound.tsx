import { TbError404 } from "react-icons/tb"

const NotFound = () => {
    return (
        <div className="relative h-screen flex justify-center items-center bg-gray-50">
            <div className='flex flex-col'>
                <TbError404 className="mx-auto w-20 h-20" />
                <div className='text-center font-bold'>
                    NOT FOUND
                </div>
            </div>
        </div>
    )
}

export default NotFound