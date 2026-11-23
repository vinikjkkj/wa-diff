__d(
  "WASessionApi",
  ["WACryptoManager", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return o("WASignalDB")
          .getDb()
          .store("session")
          .get(t)
          .then(function (e) {
            return e == null
              ? null
              : o("WACryptoManager").decodeSession(e.session);
          });
      },
      s = function (t) {
        return o("WASignalDB").getDb().store("session").bulkGet(t).then(u);
      };
    function u(e) {
      var t = new Map();
      for (var n of e)
        if (n != null) {
          var r = o("WACryptoManager").decodeSession(n.session);
          t.set(n.id, r);
        }
      return t;
    }
    ((l.loadSession = e), (l.bulkLoadSession = s));
  },
  98,
);
