__d(
  "WAWebRSAPublicKeyDer",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 48,
      s = 3,
      u = 6,
      c = 128,
      d = [42, 134, 72, 134, 247, 13, 1, 1, 1];
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Uint8Array(yield self.crypto.subtle.exportKey("spki", e));
          return _(t);
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      var n = h(t, g(t, 0, e)).next,
        o = h(t, g(t, n, e));
      (f(t, o.next), (n = o.next + o.length));
      var a = h(t, g(t, n, s));
      if (t[a.next] !== 0)
        throw r("err")("[WAFFLE] Unexpected unused bits in subjectPublicKey");
      return t.slice(a.next + 1, a.next + a.length);
    }
    function f(e, t) {
      var n = h(e, g(e, t, u));
      if (
        n.length !== d.length ||
        d.some(function (t, r) {
          return e[n.next + r] !== t;
        })
      )
        throw r("err")("[WAFFLE] Public key is not an RSA key");
    }
    function g(e, t, n) {
      if (e[t] !== n)
        throw r("err")("[WAFFLE] Malformed SPKI: unexpected DER tag");
      return t + 1;
    }
    function h(e, t) {
      if (t >= e.length)
        throw r("err")("[WAFFLE] Malformed SPKI: truncated DER length");
      var n = e[t];
      if (n < c) return y(e, n, t + 1);
      var o = n - c;
      if (o === 0)
        throw r("err")("[WAFFLE] Malformed SPKI: indefinite DER length");
      var a = t + 1 + o;
      if (a > e.length)
        throw r("err")("[WAFFLE] Malformed SPKI: truncated DER length");
      for (var i = 0, l = 0; l < o; l++) i = i * 256 + e[t + 1 + l];
      return y(e, i, a);
    }
    function y(e, t, n) {
      if (n + t > e.length)
        throw r("err")("[WAFFLE] Malformed SPKI: DER length exceeds buffer");
      return { length: t, next: n };
    }
    l.getRSAPublicKeyDer = m;
  },
  98,
);
