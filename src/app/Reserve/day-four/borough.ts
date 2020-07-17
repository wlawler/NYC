export class Borough {
    static nextId= 0; 
    static boroughs: Borough[] = [
        new Borough(1, 'Manhattan', 'Rich'), 
        new Borough(2, 'Brooklyn','Hip' ), 
        new Borough(3, 'Bronx', 'Dominican'), 
        new Borough(4, 'Queen', 'Drunk'),
        new Borough(5, 'Staten Island', "lost"), 

    ];

    constructor (
        public id?: number , 
        public name?: string, 
        public emotion?: string, 
    ) {
        this.id = id ? id: Borough.nextId++;
    }
    clone(): Borough {
        return Object.assign(new Borough(), this)
    }
}
