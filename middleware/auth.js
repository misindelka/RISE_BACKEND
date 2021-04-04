import jwt from 'jsonwebtoken'

// secret is test !!!!!!

const auth = async (res,req, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        if (tokem && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userID = decodedData?.id;

        }

        else {
            decodedData = jwt.decode(token)

            eq.userID = decodedData?.sub;
        }

        next();
        
    }  catch (error) {
        console.log('error')
    }
}

export default auth