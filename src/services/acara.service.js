import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost/l10_raker/api/";
const API_URL = "https://dbevent.essrex.my.id/api/";

class AcaraService {
  getAcara() {
    return axios.get(API_URL + "acara", { headers: authHeader() });
  }

  aktifkanAcara(idAcara, dtaktivasi) {
    return axios.post(
      API_URL + "acara/aktifkan",
      { id_acara: idAcara, aktivasi: dtaktivasi },
      { headers: authHeader() }
    );
  }
}

export default new AcaraService();
