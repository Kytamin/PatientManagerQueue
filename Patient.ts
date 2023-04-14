export class Patient{
   private name:string
   private code:number

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string):void {
        this.name = value;
    }

    getCode(): number {
        return this.code;
    }

    setCode(value: number):void {
        this.code = value;
    }
}