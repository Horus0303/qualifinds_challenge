import jwt from 'jsonwebtoken'

const getEnvByType = async (type: string) => {
   let expireToken : any
   let seedAuthentication: any

   if( type === 'authenticate' ) {
      seedAuthentication = process.env.SEED_AUTHENTICATION
      expireToken = process.env.EXPIRE_TOKEN
   } else if( type === 'mail' ) {
      seedAuthentication = process.env.SEED_MAIL_AUTHENTICATION
      expireToken = process.env.EXPIRE_MAIL_TOKEN
   }

   return { expireToken, seedAuthentication }
}

export = async (payload: any, type: any) => {
   const { expireToken, seedAuthentication } = await getEnvByType(type)

   return jwt.sign({ ...payload }, seedAuthentication, { expiresIn: expireToken })
}