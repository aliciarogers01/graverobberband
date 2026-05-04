(function () {
  const LOCAL_API = "http://localhost:5000/api";
  const PRODUCTION_API = "https://YOUR_BACKEND_DOMAIN_HERE/api";

  window.BAND_API_BASE =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? LOCAL_API
      : PRODUCTION_API;
})();