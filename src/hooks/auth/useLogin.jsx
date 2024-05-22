import { useMutation } from "react-query";
export default function useLogin() {
    async function login({ email, password }) {
        const name_database = import.meta.env.VITE_NOMBRE_DB
        const url = import.meta.env.VITE_URL_BACKEND + "/login"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ name_database, user: email, password }), 
                timeout: 5000
            })
            if (!response.ok) {
                if (response.status === 500){
                    throw new Error('Sin comunicación con Odoo.')
                }
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if (data) {
                localStorage.setItem("user", JSON.stringify({ 
                    email: data.email,
                    name: data.name,
                    companies: data.companies,
                    current_company: data.current_company,
                    id: data.id,
                    url_odoo: data.url_odoo,
                }));
            } else {
                throw new Error('Invalid token received');
            }

        } catch (error) {
            // Handle errors here, you might want to log them or do something else
            console.error('Login failed: ', error);
            // console.log(typeof error.name, error.name, error.name === 'TypeError', error instanceof Error)
            if(error.name === 'TypeError'){
                throw { "message": "Network Server Error" };
            }
            throw { "message": error.message };// Rethrow the error for React Query to handle
        }
    }
    return useMutation({ mutationFn: login }) 
}
