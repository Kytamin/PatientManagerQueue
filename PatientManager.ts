import {Patient} from "./Patient";


export class PatientManager  {
    patientList:Patient[]=[]
    listHealed:Patient[]=[]
    size:number
    constructor() {
        this.size=0
    }
    addPatient(item:Patient):void{
         this.size++
         this.patientList.push(item)
    }
    sortPatientCode():void{
       this.patientList.sort((a,b)=>{
           return a.getCode()-b.getCode()
       })
    }
    displayPatientList():Patient[]{
        return this.patientList
    }

    healing():Patient[] {
        this.listHealed.push(this.patientList.shift())
        return this.listHealed
    }
}