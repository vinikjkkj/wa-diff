__d(
  "MAWChatJid",
  [
    "FBLogger",
    "I64",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      try {
        return o("MAWMiActMappingTableAPI")
          .getMappingRowForIntJid(e, o("MAWJids").convertChatJidToIntJid(t))
          .then(function (e) {
            return e == null ? void 0 : e.serverThreadKey;
          });
      } catch (e) {
        var a = r("getErrorSafe")(e);
        return (
          r("FBLogger")("messenger_web")
            .catching(a)
            .warn("Invalid chatJid: " + t),
          (s || (s = n("Promise"))).reject(a)
        );
      }
    }
    function c(e, t, n) {
      return u(e, t).then(function (e) {
        if (e != null) return e;
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "[toThreadKey] No mapping record for chatJid, source: %s",
          n,
        );
      });
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield u(e, t);
          if (n != null)
            return o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(e.threads).getKeyRange(n),
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, a) {
      try {
        return o("MAWMiActMappingTableAPI")
          .getMappingRowForIntJid(t, a)
          .then(function (e) {
            return e == null ? void 0 : e.serverThreadKey;
          });
      } catch (t) {
        var i = r("getErrorSafe")(t);
        return (
          r("FBLogger")("messenger_web")
            .catching(i)
            .warn("Invalid integer jid: " + (e || (e = o("I64"))).to_string(a)),
          (s || (s = n("Promise"))).reject(i)
        );
      }
    }
    ((l.toThreadKeyMaybe = u),
      (l.toThreadKey = c),
      (l.toThreadMaybe = d),
      (l.toThreadKeyMaybeForChatJidInteger = p));
  },
  98,
);
