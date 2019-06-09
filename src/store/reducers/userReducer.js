/* state: est ce que connecté ou non grace à la variable */
/* suite à l'action login isconnected devient true */
const initstate = {isConnected : false, profil = {}}
const userReducer = (state=initstate, action) => {
    if (action.type == "LOGIN"){
        return {
            isConnected: true, ... state
        }
    }
}