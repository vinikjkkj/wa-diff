__d(
  "WAWebSNAPLUserPrefs",
  [
    "WAWebSNAPLPersistentId",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumMessageType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      switch (n) {
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").UserPrefs.SNAPLNewsLetterPersistentId,
            { persistentId: e, mediaId: t },
          );
          break;
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId,
            { persistentId: e, mediaId: t },
          );
          break;
        default:
          throw r("err")("Invalid video origin");
      }
    }
    function s(e, t) {
      var n = null;
      switch (t) {
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
          n = o("WAWebUserPrefsKeys").UserPrefs.SNAPLNewsLetterPersistentId;
          break;
        case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
          n = o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId;
          break;
        default:
          throw r("err")("Invalid video origin");
      }
      if (n == null) throw r("err")("Invalid video origin");
      var a = r("WAWebUserPrefsStore").getUser(n);
      if (a == null || typeof a != "object") return u(e, t);
      var i = a.mediaId,
        l = a.persistentId;
      return typeof l != "string" || typeof i != "string"
        ? u(e, t)
        : o("WAWebSNAPLPersistentId").castToSNAPLPersistentId(l);
    }
    function u(t, n) {
      var r = o("WAWebSNAPLPersistentId").computeSNAPLPersistentId();
      return (e(r, t, n), r);
    }
    l.getSNAPLPersistentId = s;
  },
  98,
);
