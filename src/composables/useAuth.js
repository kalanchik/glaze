import { ref } from 'vue';
import { AuthApiService } from '@/services';
import { useRouter } from 'vue-router';

const isAuth = ref(false);
const user = ref(null);

export function useAuth () {
    const router = useRouter();

    function onLogin (params) {
        AuthApiService.login(params)
            .then(data => {
                if (!data.length) {
                    alert('Не верный логин или пароль')

                    return;
                }

                localStorage.setItem('user', JSON.stringify(data[0]));

                authInit();

                router.push('/profile');
            });
    }

    function getUser () {
        const userId = JSON.parse(localStorage.getItem('user'));

        AuthApiService.getUser(userId.id)
            .then(data => {
                user.value = data[0];
            });
    }

    function logout () {
        localStorage.removeItem('user');

        isAuth.value = false;
        user.value = null;

        router.push('/');
    }

    function authInit () {
        const token = localStorage.getItem('user');

        if (!token) {
            return;
        }

        isAuth.value = true;

        getUser();
    }

    function updateUser (id, params) {
        AuthApiService.updateUser(id, params)
        .then(data => {
            user.value = data;
        });
    }

    return {
        isAuth,
        user,
        authInit,
        onLogin,
        logout,
        updateUser
    }
}