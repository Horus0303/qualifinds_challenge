## Qualifinds-backend-test

### Running the development environment

* `make up`
* `npm run build`
* `npm run dev`

### Running the development to run seeds
* `npm run seed`

### Running unit tests
* `make up`
* `npm run test`

##### Rebuilding the base Docker image
* `make rebuild`

## Hostnames for accessing the service directly


# Introducción
**Qualifinds backend test**
Email contact: kevincruces.zuloaga@gmail.com

## En este test se evaluará las habilidades de incorporarse a nuevos proyectos, la capacidad de leer código, y desarrollar los puntos que se encuentran a continuación de forma escalable y limpia

* Se deberá de crear un inicio de sesión con las credenciales del usuario que se crea en el seeder
--
* Se debe de validar que solo un usuario en sesión puede ser uso de la implementación de los sig endpoints a desarrollar
--
* Desarrollar un endpoint para crear usuarios y productos
--
* Endpoint para consultar los productos de un usuario. Los usuarios deben de estar ordenados en base a la suma de precios de los productos que tiene asignados
--
* Solucionar la sincronización forzada al obtener una instancia de la conexión de SQL
### Response
 `{
*     "users": [{
        "email: "xxxx@mail.com"
        "products": [{
           id: x,
           name: xxx,
           price: 1000
        }, {
           id: x,
           name: xxx,
           price: 500
        }, {
        "email: "sssss@mail.com"
        "products": [{
           id: x,
           name: xxx,
           price: 200
        }, {
           id: x,
           name: xxx,
           price: 100
        }]
      },
    }`
--
* Desarrollar al menos una prueba unitaria en alguno de éstos endpoints
* Desarrollar al menos de creación de *User* o *Product* con base de datos no relacionales

### Puntos a considerar
| Código de estado | Descripción |
| ----------- | ----------- |
| src/app | `Implementación de lógica que interactua con la capa exterior que comunica con el cliente *HTTP*, *Rutas*, *Controlladores*, *Middlewares*` |
| src/core | `Implementación de lógica de la lógica de negocio *HTTP*, *Rutas*, *Controlladores*, *Middlewares*` |
| src/infraestructure | `Implementación abstracta de lógica encargada de brindarnos los objetos de configuración del application *Databases*, *Services*` |

### Relaciones
User -> HasMany -> Product
Product -> belongsTo -> User

