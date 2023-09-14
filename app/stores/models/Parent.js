class Parent {
    id = null;
    name= null;
    email = null;
    children = [];
    constructor(init) {
        if (init) {
            this.id = init.id;
            this.name = init.name;
            this.email = init.email;
            this.children = init.children;
        }
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get email() {
        return this.email;
    }

    set email(value) {
        this.email = value;
    }

    get children() {
        return this.children;
    }

    set children(value) {
        this.children = value;
    }
}


export default new Parent();