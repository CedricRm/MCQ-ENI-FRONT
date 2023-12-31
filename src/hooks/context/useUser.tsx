import { useContext } from 'react'
import { UserContext } from '../../context/User'

const useUser = () => {
    const context = useContext(UserContext)

    if (!context)
        throw new Error('Auth context must be use inside AuthProvider')

    return context
}

export default useUser
