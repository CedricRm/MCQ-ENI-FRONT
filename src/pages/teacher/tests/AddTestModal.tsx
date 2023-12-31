import { ChangeEvent, FC, FormEvent, useState } from 'react'
import useUser from '../../../hooks/context/useUser'
import {
    LEVEL_L1,
    LEVEL_L2,
    LEVEL_L3,
    LEVEL_M1,
    LEVEL_M2,
} from '../../../utils/constants'
import useCreateTest from '../../../hooks/test/useCreateTest'
import Spinner from '../../../components/Spinner'

interface AddTestModal {
    handleAddTestModal: () => void
}

const AddTestModal: FC<AddTestModal> = ({ handleAddTestModal }) => {
    const {
        userState: { userInfo },
    } = useUser()
    const [formData, setFormData] = useState({
        user: userInfo.sub,
        yeartest: '2023',
        level: 1,
    })
    const { createTest, isCreatingTest } = useCreateTest()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        // Check if the value is a valid number
        const numericValue = Number(value)

        if (!isNaN(numericValue)) {
            // If the value is a valid number, store it as a number
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: numericValue,
            }))
        } else {
            // If the value is not a valid number, store it as a string
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }))
        }
    }
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target

        const numericValue = Number(value)

        setFormData((prevFormData) => ({
            ...prevFormData,
            level: numericValue,
        }))
    }

    const handleCreateTest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)

        // create the test
        if (await createTest(formData)) {
            window.location.reload()
        }
    }

    return (
        <div className="fixed left-0 right-0 top-0 z-[52] h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 md:inset-0">
            <div className="flex h-full items-center justify-center text-white">
                <div className="flex w-[30rem] flex-col overflow-hidden rounded-xl bg-primaryDark-background px-6 py-6">
                    <div className="relative border-b-2 border-white border-opacity-5 pb-4">
                        <p className="text-lg">Ajouter un test</p>
                        <img
                            src="/assets/icons/ic_close.png"
                            className="absolute right-0 top-0 z-30 h-5 cursor-pointer"
                            onClick={handleAddTestModal}
                        />
                    </div>
                    <form onSubmit={(e) => handleCreateTest(e)}>
                        <p className="font-Marge mt-8 text-sm">Désignation :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="designation"
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-8 text-sm">Sujet :</p>
                        <input
                            type="text"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="subject"
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-4 text-sm">Niveau :</p>
                        <select
                            name="level"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            defaultValue={LEVEL_L1}
                            onChange={handleSelect}
                        >
                            <option value={LEVEL_L1}>L1</option>
                            <option value={LEVEL_L2}>L2</option>
                            <option value={LEVEL_L3}>L3</option>
                            <option value={LEVEL_M1}>M1</option>
                            <option value={LEVEL_M2}>M2</option>
                        </select>
                        <p className="font-Marge mt-4 text-sm">Durée (mn) :</p>
                        <input
                            type="number"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="duration"
                            onChange={handleChange}
                            required
                        />
                        <p className="font-Marge mt-4 text-sm">
                            Date du test :
                        </p>
                        <input
                            type="date"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                            name="datetest"
                            onChange={handleChange}
                            required
                        />
                        {/* <p className="font-Marge mt-4 text-sm">
                            Importer les questions
                        </p>
                        <p className="mt-1 font-Monolisa text-[0.50rem] text-grey-30">
                            <span className="font-bold text-purple">
                                Fichier CSV
                            </span>{' '}
                            contenant les questions ainsi que les réponses.
                            Télécharger le modèle{' '}
                            <a
                                className="cursor-pointer text-red underline"
                                href="#"
                            >
                                ici
                            </a>
                            .
                        </p> */}
                        {/* <input
                            type="file"
                            className="mt-2 h-6 w-full rounded-md text-sm"
                        />
                        <p className="font-Marge mt-4 text-sm">
                            A afficher le :
                        </p> */}
                        {/* <input
                            type="date"
                            className="mt-2 h-10 w-full rounded-md border-2 border-white border-opacity-20 bg-primaryDark-background px-2"
                        /> */}
                        <div className="mt-8 flex items-center">
                            <button
                                className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-red px-6 py-2.5 text-center"
                                type="submit"
                                disabled={isCreatingTest}
                            >
                                {!isCreatingTest ? <p>Créer</p> : <Spinner />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTestModal
