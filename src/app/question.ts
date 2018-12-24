// import {Qtype} from './Qtype'

export class Question{
    public id:number;
    public headline:string;
    public questionType = {date:Date,explanation:String,single:Boolean}
    // constructor(id:number,headline:string,questionType:Qtype){
    //     this.id = id;
    //     this.headline = headline;
    //     this.questionType = questionType
    // }
    constructor(){}
}