import { FC, useState } from 'react'
// import Tutorial from './Tutorial'
// import SubjectsSection from './SubjectsSection'
import LittleCircleForms from '../../components/LittleCircleForms'
import Hero from './Hero'
import ProfessorsList from './teachers/ProfessorsList'
import Calendar from 'react-calendar'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const Dashboard: FC = () => {
    const [value, onChange] = useState<Value>(new Date())

    return (
        <div className="relative flex w-full flex-col gap-8 p-8">
            <p className="text-3xl font-semibold">Bonjour !</p>
            <div className="font-Monolisa text-sm">
                <p>
                    Voici votre{' '}
                    <span className="text-md font-extrabold text-red">
                        DASHBOARD
                    </span>
                    .
                </p>
                <p className="mt-1.5">
                    En tant qu'administrateur, vous pouvez créer des{' '}
                    <span className="text-purple">utilisateurs</span> et des{' '}
                    <span className="text-purple">tests</span>.
                </p>
            </div>
            <Hero />
            <div className="flex gap-4">
                <div className="w-96 flex-auto">
                    <ProfessorsList />
                </div>
                <div className="flex w-28 flex-auto flex-col gap-4">
                    <ProfessorsList />
                    <div className="rounded-xl bg-black bg-opacity-50 p-4 backdrop-blur-md">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
            </div>
            <LittleCircleForms className="absolute -right-[82rem] bottom-0 left-0 z-10 flex justify-center" />
        </div>
    )
}

export default Dashboard
