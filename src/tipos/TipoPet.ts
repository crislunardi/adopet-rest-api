import EnumEspecie from "../enum/EnumSpecie";

type TipoPet = {
    id: number;
    nome: string;
    especie: EnumEspecie;
    adotado: boolean;
    dataDeNascimento: Date;
};

export default TipoPet;

