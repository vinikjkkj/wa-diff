__d(
  "WAWebOHAIUserPrefs",
  ["WATimeUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.OHAIKeyConfig,
        e,
      );
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.OHAIKeyConfig,
      );
      if (e == null || typeof e != "object") return null;
      var t = e.aeadId,
        n = e.expirationDate,
        a = e.kdfId,
        i = e.kemId,
        l = e.keyId,
        s = e.lastUpdatedTime,
        u = e.publicKey;
      return typeof n != "number" ||
        typeof t != "number" ||
        typeof a != "number" ||
        typeof i != "number" ||
        typeof l != "number" ||
        typeof s != "number" ||
        typeof u != "string"
        ? null
        : {
            aeadId: t,
            kdfId: a,
            kemId: i,
            keyId: l,
            publicKey: u,
            expirationDate: o("WATimeUtils").castToUnixTime(n),
            lastUpdatedTime: o("WATimeUtils").castToUnixTime(s),
          };
    }
    ((l.setOHAIKeyConfig = e), (l.getOHAIKeyConfig = s));
  },
  98,
);
