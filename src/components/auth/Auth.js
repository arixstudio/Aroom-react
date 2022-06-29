import axios from 'axios';
import Cookies from 'universal-cookie';
import Notiflix from 'notiflix';

const useAuth = () => {

    Notiflix.Loading.standard()

    let user = { 
        isLoggedIn: true,
        username: ''
    };
    
    const cookies = new Cookies();
    
    let token = cookies.get('jwt');

    if (token)
    {
        const validateToken = () => {
    
            let config = {
                headers: {
                  authorization: 'Bearer ' + token,
                }
            }
    
            axios
                // .post('https://app.stayaroom.ir/server/wp-json/jwt-auth/v1/token/validate', null, config )
                .post('http://localhost/aroom/server/wp-json/jwt-auth/v1/token/validate', null, config )
                .then((res) => {
                    user = { isLoggedIn: true };
                })
                .catch((err) => {
                    user = { isLoggedIn: false };
                    console.log(err);
                });
        
        }

        validateToken();
        
    }

    console.log(user)
    
    Notiflix.Loading.remove()

    return user;
};

export default useAuth