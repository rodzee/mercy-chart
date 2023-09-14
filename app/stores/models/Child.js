class Child {
    id = null;
    name= null;
    avatar = null;
    chart = [
        {
            strikes: 0,
            prize: null
        }
    ]

    constructor(init) {
        if (init) {
            this.id = init.id;
            this.name = init.name;
            this.avatar = init.avatar;
            this.chart = init.chart;
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

    get avatar() {
        return this.avatar;
    }

    set avatar(value) {
        this.avatar = value;
    }

    get chart() {
        return this.chart;
    }

    set chart(value) {
        this.chart = value;
    }
}


export default new Parent();