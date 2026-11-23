__d(
  "MAIBABusinessSetupIGClaimToken",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e5,
      u = new Map();
    function c(t, n, o, a) {
      var i;
      if (
        (a === void 0 && (a = (e || (e = r("performanceNow")))()),
        !(t == null || t === "" || n === "" || o == null || o === ""))
      ) {
        var l = (i = u.get(t)) != null ? i : new Map();
        (l.set(n, { storedAtMs: a, token: o }), u.set(t, l));
      }
    }
    function d(t, n, o) {
      var a;
      if (
        (o === void 0 && (o = (e || (e = r("performanceNow")))()),
        t == null || t === "")
      )
        return null;
      var i = (a = u.get(t)) == null ? void 0 : a.get(n);
      return i == null ? null : o - i.storedAtMs < s ? i.token : null;
    }
    function m(e) {
      e == null || e === "" || u.delete(e);
    }
    ((l.storeIGClaimToken = c),
      (l.getValidIGClaimToken = d),
      (l.clearIGClaimTokens = m));
  },
  98,
);
