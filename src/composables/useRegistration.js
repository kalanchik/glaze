import { RegistrationApiService } from '@/services';
import { useAuth } from '@/composables';

export function useRegistration () {
    const { onLogin } = useAuth();

    function signUp (params) {
        RegistrationApiService.signUp(params)
        .then(() => {
            onLogin({
                login: params.login,
                password: params.password
            });
        });
    }

    return {
        signUp
    }
}