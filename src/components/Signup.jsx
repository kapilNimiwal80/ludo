import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Signup successful', formData)
        navigate('/dashboard')
    }

    return (
        <>
            <div className="d-flex min-vh-100">
                <div className="left-panel">
                    <form onSubmit={handleSubmit}>
                        <img src="/logo.png" alt="HR Ludo Logo" className="" />
                        <h5 className="form-heading">SIGN IN</h5>
                        <p className="form-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <input type="text" className="form-control" placeholder="+91 123 456 7890" />
                        <input type="text" className="form-control mt-3" placeholder="Enter Code" />

                        <button type="submit" className="btn theme-btn mt-26">Continue</button>
                    </form>
                    <div className="mt-4">
                        <img src="/ludo-board2.jpg" alt="Ludo Board" className="board-img" />
                    </div>
                </div>
                <div className="right-panel">
                    <img src="/Hr-ludo.png" alt="Big Logo" className="big-logo" />
                </div>
            </div>
        </>
    )
}

export default Signup