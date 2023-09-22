import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dbevent.essrex.my.id/api/";

class SpotService {
  getSpotAcara(idAcara) {
    return axios.get(API_URL + "spot/" + idAcara, { headers: authHeader() });
    // return axios.get(API_URL + "spot/" + idAcara);
  }

  postKehadiran(noAcara, noPeserta, idSpot) {
    return axios.post(
      API_URL + "scankehadiran",
      { no_acara: noAcara, no_peserta: noPeserta, id_spot: idSpot },
      { headers: authHeader() }
    );
  }

  getPresensi(idSpot) {
    return axios.get(API_URL + "presensi/" + idSpot, { headers: authHeader() });
  }
}

export default new SpotService();
