__d(
  "WAIdentityUtils",
  ["WABinary", "WACryptoDependencies", "WASignalOther"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.length === 33 && e[0] === 5;
      return t ? e.slice(1) : e;
    }
    function s(e, t) {
      for (var n = 0; n < e.length && n < t.length; ++n)
        if (e[n] !== t[n]) return e[n] - t[n];
      return e.length - t.length;
    }
    function u(t) {
      var n = t.map(function (t) {
          return e(t);
        }),
        r = new (o("WABinary").Binary)();
      n.sort(s).forEach(function (e) {
        return r.writeByteArray(e);
      });
      var a = o("WACryptoDependencies")
        .getCrypto()
        .subtle.digest("SHA-256", r.readByteArrayView());
      return a.then(function (e) {
        var t = new Uint8Array(e);
        return o("WASignalOther").sliceBytes(t, 0, 10);
      });
    }
    ((l.removeKeyTypeIfNeeded = e), (l.computeIdentitiesHash = u));
  },
  98,
);
