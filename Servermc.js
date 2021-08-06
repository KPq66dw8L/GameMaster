module.exports = class Servermc{

    constructor(NAME,IP,STATUS,DESCRIPTION)
    {
        this.NAME = NAME;
        this.IP = IP;
        this.STATUS = STATUS;
        this.DESCRIPTION = DESCRIPTION;
    }

    ready(){
        if(this.STATUS === 'r'){
            return true;
        }else{
            false;
        }





    }



}