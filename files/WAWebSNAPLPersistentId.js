__d(
  "WAWebSNAPLPersistentId",
  [
    "WAWebEncryptedRid",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumMessageType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS && t
        ? s()
        : o("WAWebEncryptedRid").getEncryptedRid();
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId,
      );
      if (e != null && typeof e == "object") {
        var t = e.persistentId;
        if (typeof t == "string") return t;
      }
      var n = r("WAWebPonyfillsCryptoRandomUUID")();
      return (
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId,
          { persistentId: n },
        ),
        n
      );
    }
    l.getSNAPLPersistentId = e;
  },
  98,
);
