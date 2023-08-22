export interface AnagraficaCandidato {
    candidato_id: number;
    codice_fiscale: string;
    nome: string;
    cognome: string;
    email: string;
    data_nascita: Date;
    luogo_nascita: string;
    cittadinanza: number;
    residenza: string;
    cap_residenza: string;
    domicilio_uguale_residenza: number;
    domicilio?: string;
    cap_domicilio?: string;
    recapito_mobile: string;
    recapito_fisso?: string;
    categoria_protetta?: number;
    condanne_civili?: number;
    come_conosciuto_combo: 'Canale Recruiting' | 'Social Network' | 'Linkedin' | 'Sito Web Aziendale' | 'Conoscenti';
}
