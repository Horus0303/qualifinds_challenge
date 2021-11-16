import { backend } from '../../constants/'
import userCommandsCls from '../users/users-commands'
import sqlConnection from '../../../infrastructure/database/sql'
import noSqlConnection from '../../../infrastructure/database/mongo'

export default async () => {
   const [sqlConnect, noSqlConnect] = await Promise.all([
      await sqlConnection(),
      await noSqlConnection()
   ])

   return new userCommandsCls({sqlConnect, noSqlConnect})
}