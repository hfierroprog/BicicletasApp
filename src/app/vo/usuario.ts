export  class Usuario {
    id: string;
    RolLim: boolean;
    RolSuper: boolean;
    email: string;
    nombre: string;
    roleComedin: boolean;
    rolAdmin: boolean;
    rolce: boolean;
    roleBici: boolean;
    roleDeshabilitado: boolean;
    rolemovi: boolean;
    constructor() {
        this.RolLim = false;
        this.RolSuper = false;
        this.email = '';
        this.nombre = '';
        this.roleComedin = false;
        this.rolAdmin = false;
        this.rolce = false;
        this.roleBici = false;
        this.roleDeshabilitado = false;
        this.rolemovi = false;
    }
}
