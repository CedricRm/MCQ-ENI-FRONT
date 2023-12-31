import { FC } from 'react'

interface LittleCircleForms {
    className?: string
}

const LittleCircleForms: FC<LittleCircleForms> = ({ className }) => {
    return (
        <div className={className}>
            <div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                <div className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full border-2 border-white border-opacity-5">
                    <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-2 border-white border-opacity-5"></div>
                </div>
            </div>
        </div>
    )
}

export default LittleCircleForms
