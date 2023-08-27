import { Anagrafica } from "./anagrafica";
import { Esperienza } from "./esperienza";
import { Titoli } from "./titoli";

export interface Candidato {

  anagrafica: Anagrafica | null
  titoli: Titoli | null
  esperienza: Esperienza | null

}
