__d(
  "MAWChatJid",
  [
    "FBLogger",
    "I64",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "ReQL",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      try {
        return o("MAWMiActMappingTableAPI")
          .getMappingRowForIntJid(e, o("MAWJids").convertChatJidToIntJid(t))
          .then(function (e) {
            return e == null ? void 0 : e.serverThreadKey;
          });
      } catch (e) {
        var n = r("getErrorSafe")(e);
        return (
          r("FBLogger")("messenger_web")
            .catching(n)
            .warn("Invalid chatJid: " + t),
          Promise.reject(n)
        );
      }
    }
    function u(e, t, n) {
      return s(e, t).then(function (e) {
        if (e != null) return e;
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "[toThreadKey] No mapping record for chatJid, source: %s",
          n,
        );
      });
    }
    async function c(e, t) {
      var n = await s(e, t);
      if (n != null)
        return o("ReQL").firstAsync(
          o("ReQL").fromTableAscending(e.threads).getKeyRange(n),
        );
    }
    function d(t, n) {
      try {
        return o("MAWMiActMappingTableAPI")
          .getMappingRowForIntJid(t, n)
          .then(function (e) {
            return e == null ? void 0 : e.serverThreadKey;
          });
      } catch (t) {
        var a = r("getErrorSafe")(t);
        return (
          r("FBLogger")("messenger_web")
            .catching(a)
            .warn("Invalid integer jid: " + (e || (e = o("I64"))).to_string(n)),
          Promise.reject(a)
        );
      }
    }
    ((l.toThreadKeyMaybe = s),
      (l.toThreadKey = u),
      (l.toThreadMaybe = c),
      (l.toThreadKeyMaybeForChatJidInteger = d));
  },
  98,
);
