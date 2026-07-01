__d(
  "WAWebSNAPLUserPrefs",
  [
    "WAWebABProps",
    "WAWebEncryptedRid",
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
    function s(e, t, n) {
      return o("WAWebABProps").getABPropConfigValue(
        "snapl_newsletter_logging_encrypted_rid_enabled",
      ) === !0
        ? u(t, n)
        : d(e, t);
    }
    function u(e, t) {
      if (e === o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS && t)
        return c();
      var n = o("WAWebEncryptedRid").getEncryptedRid();
      return n != null
        ? o("WAWebSNAPLPersistentId").castToSNAPLPersistentId(n)
        : null;
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId,
      );
      if (e != null && typeof e == "object") {
        var t = e.persistentId;
        if (typeof t == "string")
          return o("WAWebSNAPLPersistentId").castToSNAPLPersistentId(t);
      }
      var n = o("WAWebSNAPLPersistentId").computeSNAPLPersistentId();
      return (
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.SNAPLPersistentId,
          { persistentId: n },
        ),
        n
      );
    }
    function d(e, t) {
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
      if (a == null || typeof a != "object") return m(e, t);
      var i = a.mediaId,
        l = a.persistentId;
      return typeof l != "string" || typeof i != "string"
        ? m(e, t)
        : o("WAWebSNAPLPersistentId").castToSNAPLPersistentId(l);
    }
    function m(t, n) {
      var r = o("WAWebSNAPLPersistentId").computeSNAPLPersistentId();
      return (e(r, t, n), r);
    }
    l.getSNAPLPersistentId = s;
  },
  98,
);
