import { IUser } from "../model/user.ts";

let users: Array<IUser> = [{
    id: "1",
    name: "Diego Ferreira",
    email: "diego.ferreira@irondev.com.br",
    create_at: new Date("2020-12-06"),
    update_at: new Date("2020-12-06"),
}, {
    id: "2",
    name: "Alex Silva",
    email: "alex.silva@irondev.com.br",
    create_at: new Date("2020-12-06"),
    update_at: new Date("2020-12-06"),
}, {
    id: "3",
    name: "Marcio Gomes",
    email: "marcio.gomes@irondev.com.br",
    create_at: new Date("2020-12-06"),
    update_at: new Date("2020-12-06"),
}, {
    id: "4",
    name: "Rodrigo Santos Dias",
    email: "rodrigo.dias@irondev.com.br",
    create_at: new Date("2020-12-06"),
    update_at: new Date("2020-12-06"),
}];

const getUsers = ({ response }: { response: any }) => {
    response.body = users;
};

const getUser = ( 
    { params, response }: { params: { id: string }; response: any},
    ) => {
        const user:IUser | undefined = users.find((user) => user.id === params.id);

        if(user) {
            response.status = 200;
            response.body = user;
        } else {
            response.status = 404;
            response.body = { message: "Usuario nao encontrado"};
        }
    };

const addUser = async (
    {request, response}: {request: any; response: any},
    ) => {
    const body = await request.body();
    const user: IUser = body.value;

    user.create_at = new Date();
    user.update_at = new Date();

    users.push(user);

    response.body = { message: "OK"}
    response.status = 200;
} 

export { getUsers, getUser, addUser} 