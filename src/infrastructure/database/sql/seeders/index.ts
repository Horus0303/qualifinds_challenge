import ProductsSeeders from './productsSeeder'
import UsersSeeders from './usersSeeder'

export default async (ParentModels: any) => {
   return Promise.all([
      await UsersSeeders(ParentModels.User),
      await ProductsSeeders(ParentModels.Product),
   ])
}