// exo 1
let client = {
    nom : "Jamila",
    argent : 30,
    panier : []
}

let magasin = {
    chocolat: {
        nom: "chocolat",
        prix: 2,
    },
    tartine : {
        nom : "tartine",
        prix : 3,
    },
    vendre (a) {
        let ask = confirm("veux tu faire des achats ?")
        while (ask == true) {
            let acheter = prompt('quel élément veux tu ?')
            for (const key in this) {
                if (key == acheter) {
                    a.panier.push(key);
                    a.argent -= magasin[key].prix
                }
            }
            ask = confirm("faire d'autres achats ?")
        }
    }
}

magasin.vendre(client)

// exo 2 
let vielle_dame = {
    identite : {
        nom : "vielle",
        prenom : "dame",
        age : 80,
    },
    moral : "mal",
    objet : "canne", 
    reponse (a) {
        if (this.moral == "mal") {
            console.log(`Vous me déranger ${a.prenom}`);
        } else {
            console.log(`Bonjour ${a.prenom}`);
        }
    },
    se_promener(){
        if (this.moral == "bien") {
            console.log(`Se promene`);
            this.accessoire = "perdu"
        } else {
            console.log(`Ne souhaite pas se promener`);
        }
    }
}

let viel_homme = {
    nom : "viel",
    prenom : "homme",
    age : 72,
    saluer (a) {
        console.log(`Bonjour ${a.identite.prenom} ${a.identite.nom}`);
    },
    adoucir (a) {
        a.moral = "bien",
        console.log("l'homme charmant");
    }
}