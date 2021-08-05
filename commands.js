class Command{

    //Constructeur "template" d'une commande
    constructor(label,args,description)
    {
        this.prefix = "$";
        this.label = label;
        this.args = args;
        this.description = description;
    }

    //Getter et Setter
    getlabel() {return this.label;}
    getprefix(){return this.prefix;}
    getargs(){return this.args;}
    getdescription(){return this.description;}
    
    
    setlabel(label1){this.label = label1;}
    setargs(args1){this.args = args1;}
    setdescription(description1){this.description = description1;}

        



}
