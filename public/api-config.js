(function () {
  const LOCAL_API = "http://localhost:5000/api";
  const PRODUCTION_API = "https://band-admin-backend-production.up.railway.app/api";
  const isNativeApp =
    window.location.protocol === "capacitor:" ||
    Boolean(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());

  window.BAND_API_BASE =
    !isNativeApp && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
      ? LOCAL_API
      : PRODUCTION_API;
})();
