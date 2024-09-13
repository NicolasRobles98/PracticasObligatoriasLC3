import {useState} from "react";

const Login = () => {
    const [user, setUser] = useState("")

    const InputHandler = (event) =>{
        const iValue = event.target.value
        if (iValue.includes("o") || iValue.includes("O")){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
        setUser(iValue)
    }

    const CheckInputHandler = () =>{
        if (user === "" || user.includes("o") || user.includes("O")){
            alert("Usuario inválido para registrarse")
        }
        else{
            alert("¡Usuario registrado correctamente!")
        }
    }



    return(
        <div>
            <input 
            type="text" 
            placeholder="Nombre de usuario"
            onChange={InputHandler}
            value={user}
            />
            <button onClick={CheckInputHandler}>
                Registrarse
            </button>
        </div>
        
    )
}

export default Login;
