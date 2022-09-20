class MousseMaracuja {

    constructor(leiteMoca, cremeDeleite, maracuja) {

        this.leiteMoca = leiteMoca
        this.cremeDeleite = cremeDeleite
        this.maracuja = maracuja
    }

    fazerMousse() {

        if (this.leiteMoca == 2, this.cremeDeleite == 2, this.maracuja == 2) {

            console.log("mouse feito :)")
        }
        else {

            console.log("ingredientes nao suficientes :(")
        }
    }
}

const Mousse = new MousseMaracuja(1, 1, 2)
Mousse.fazerMousse()

