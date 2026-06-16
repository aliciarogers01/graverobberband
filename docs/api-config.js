(function () {
  const LOCAL_API = "http://localhost:5000/api";
  const PRODUCTION_API = "https://band-admin-backend-production.up.railway.app/api";

  window.BAND_API_BASE =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? LOCAL_API
      : PRODUCTION_API;
})();