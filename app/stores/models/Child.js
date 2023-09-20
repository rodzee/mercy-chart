export default class Child {
    uid = null;
    displayName= null;
    avatar = null;
    chart = [
        {
            strikes: 0,
            prize: null
        }
    ]

    constructor(init) {
        this.uid = init.uid;
        this.displayName = init.displayName;
        this.avatar = init.avatar;
        this.chart = init.chart;
    }
}