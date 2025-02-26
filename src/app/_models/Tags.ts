export class Tag {

    static readonly ANGULAR = new Tag('Angular','red');
    static readonly JAVA = new Tag('Java','#F89820');

    
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }

}