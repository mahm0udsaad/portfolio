import { GoogleLogin } from '@react-oauth/google'

const Google = ({onSuccess}) => {
    return ( 
        <GoogleLogin
            onSuccess={onSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
     );
}
 
export default Google;