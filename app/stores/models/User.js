export default class User {
    uid = null;
    displayName= null;
    email = null;
    children = [];
    // role = '';
    // authorizedUsers = [];

    constructor(init) {
        this.uid = init.uid;
        this.displayName = init.displayName;
        this.email = init.email;
    }

    setChild = child => {
        const foundChild = this.children.find(c => c.id === child.id);
        if (!foundChild) {
            this.children.push(child)
        }
    }
}