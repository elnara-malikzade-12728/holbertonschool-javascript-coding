import {uploadPhoto, createUser} from './utils.js';
export default function handleProfileSignup() {
    const promise1 = uploadPhoto();
    const promise2 = createUser();
    return Promise.all([promise1, promise2])
        .then((values) => console.log(values))
        .catch((error) => console.log('Signup system offline'));
}
