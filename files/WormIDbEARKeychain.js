__d(
  "WormIDbEARKeychain",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !(
        e == null ||
        e.version == null ||
        e.expiration == null ||
        e.clientKey == null ||
        e.clientKey.byteLength === 0 ||
        e.salt == null ||
        e.salt.byteLength === 0
      );
    }
    function s(t) {
      var n = t.filter(e);
      n.sort(function (e, t) {
        return e.version - t.version;
      });
      var r =
          n.length === 0 ||
          !o("WATimeUtils").isInFuture(n[n.length - 1].expiration),
        a = n.length === 0 ? 0 : n[n.length - 1].version;
      return { curVersion: a, needNewVersion: r, versions: n };
    }
    ((l.isEarVersionValid = e), (l.reconcileKeychain = s));
  },
  98,
);
