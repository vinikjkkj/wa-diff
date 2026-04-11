__d(
  "OhaiCommonUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "message/bhttp request",
      l = "message/bhttp response";
    function s(e) {
      var t = window.crypto || window.msCrypto,
        n = new Uint8Array(e);
      return (t.getRandomValues(n), n);
    }
    function u(e, t) {
      for (var n = new Uint8Array(t), r = e, o = t - 1; o >= 0; o--)
        ((n[o] = r & 255), (r >>= 8));
      return n;
    }
    function c(e, t) {
      for (var n = 0, r = 0; r < t; r++) ((n <<= 8), (n |= e[r]));
      return n;
    }
    function d() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.reduce(function (e, t) {
          return e + t.length;
        }, 0),
        o = new Uint8Array(r),
        a = 0;
      for (var i of t) (o.set(i, a), (a += i.length));
      return o;
    }
    var m = new TextEncoder().encode("");
    ((i.REQUEST_LABEL = e),
      (i.RESPONSE_LABEL = l),
      (i.randomBytes = s),
      (i.encodeNumber = u),
      (i.decodeNumber = c),
      (i.concat = d),
      (i.EMPTY_AAD = m));
  },
  66,
);
