__d(
  "PolarisOneTapLoginStorage",
  ["FBLogger", "PolarisMachineID", "PolarisWebStorage", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "one_tap_storage_version",
      s = "caa_feta_onetap_users_migrated";
    function u() {
      return e;
    }
    function c(e) {
      var t = d();
      return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : null;
    }
    function d() {
      var e = r("PolarisWebStorage").getLocalStorage();
      if (e)
        try {
          var t = e.getItem(u());
          if (!r("isStringNullOrEmpty")(t)) {
            var n = JSON.parse(t);
            for (var a of Object.keys(n))
              ((n[a].userId = a),
                n[a].mid !== o("PolarisMachineID").getMID() && delete n[a]);
            return n;
          }
        } catch (e) {
          r("FBLogger")("ig_web").mustfix("Unable to get login nonces");
        }
      return {};
    }
    function m() {
      var e = r("PolarisWebStorage").getLocalStorage();
      if (e)
        try {
          e.setItem(s, "true");
        } catch (e) {
          r("FBLogger")("ig_web").mustfix(
            "Unable to set CAA Feta onetap users migrated",
          );
        }
    }
    function p() {
      var e = r("PolarisWebStorage").getLocalStorage();
      if (e)
        try {
          var t = e.getItem(s);
          return t != null;
        } catch (e) {
          r("FBLogger")("ig_web").mustfix(
            "Unable to get CAA Feta onetap users migrated",
          );
        }
      return !1;
    }
    ((l.getLocalStorageVersion = u),
      (l.getLoginNonceForUser = c),
      (l.getLoginNonces = d),
      (l.setCAAFetaOnetapUsersMigrated = m),
      (l.getCAAFetaOnetapUsersMigrated = p));
  },
  98,
);
