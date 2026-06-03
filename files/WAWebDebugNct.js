__d(
  "WAWebDebugNct",
  [
    "WAWebABProps",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
          );
          if (e == null) return "NCT salt not found in storage";
          var t = new Uint8Array(
              Array.from(atob(e), function (e) {
                return e.charCodeAt(0);
              }),
            ),
            n = Array.from(t, function (e) {
              return e.toString(16).padStart(2, "0");
            }).join("");
          return "NCT salt (hex): " + n;
        })),
        s.apply(this, arguments)
      );
    }
    ((e.doc = "Get the stored NCT salt (hex-encoded)"),
      (e.paramsToExecute = []));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABProps").getABPropConfigValue(
              "wa_nct_token_syncd_enabled",
            ),
            t = o("WAWebABProps").getABPropConfigValue(
              "wa_nct_token_history_sync_enabled",
            ),
            n = o("WAWebABProps").getABPropConfigValue(
              "wa_nct_token_send_enabled",
            );
          return {
            wa_nct_token_syncd_enabled: e,
            wa_nct_token_history_sync_enabled: t,
            wa_nct_token_send_enabled: n,
          };
        })),
        c.apply(this, arguments)
      );
    }
    ((u.doc = "Get NCT-related ABProp values"), (u.paramsToExecute = []));
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
            ),
            "NCT salt cleared from storage"
          );
        })),
        m.apply(this, arguments)
      );
    }
    d.doc = "Clear the stored NCT salt";
    var p = { getNctSalt: e, getNctAbProps: u, clearNctSalt: d };
    l.default = p;
  },
  98,
);
