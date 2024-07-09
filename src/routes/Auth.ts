
const  Token_key = 'authToken';


export function  saveToken(token: string){

    localStorage.setItem(Token_key, token)
}

export function  getToken():string | null {
     return localStorage.getItem(Token_key);
}


export function  removeToken(){
    localStorage.removeItem(Token_key);
}