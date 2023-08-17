export interface Empleado {
    id: string
    nombre: string;
    usuario: string;
    password: string;
}

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
