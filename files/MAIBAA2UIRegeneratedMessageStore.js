__d(
  "MAIBAA2UIRegeneratedMessageStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Set(),
      c = new Set();
    function d(e) {
      if (!(e == null || u.has(e))) {
        var t = new Set(u);
        (t.add(e), (u = t));
        for (var n of c) n();
      }
    }
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p() {
      return u;
    }
    function _() {
      return s(m, p, p);
    }
    ((l.markMessageRegenerated = d), (l.useRegeneratedMessageOtids = _));
  },
  98,
);
