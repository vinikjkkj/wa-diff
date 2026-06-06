__d(
  "WAWebDebugNct",
  ["WAWebABProps", "WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
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
    }
    ((e.doc = "Get the stored NCT salt (hex-encoded)"),
      (e.paramsToExecute = []));
    async function s() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_nct_token_syncd_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_nct_token_history_sync_enabled",
        ),
        n = o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled");
      return {
        wa_nct_token_syncd_enabled: e,
        wa_nct_token_history_sync_enabled: t,
        wa_nct_token_send_enabled: n,
      };
    }
    ((s.doc = "Get NCT-related ABProp values"), (s.paramsToExecute = []));
    async function u() {
      return (
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT,
        ),
        "NCT salt cleared from storage"
      );
    }
    u.doc = "Clear the stored NCT salt";
    var c = { getNctSalt: e, getNctAbProps: s, clearNctSalt: u };
    l.default = c;
  },
  98,
);
