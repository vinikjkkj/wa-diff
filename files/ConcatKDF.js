__d(
  "ConcatKDF",
  ["Promise", "XPlatReactCrypto", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 256;
    function u(e) {
      var t = 0;
      for (var n of e) t += n.byteLength;
      var r = new Uint8Array(t),
        o = 0;
      for (var a of e) (r.set(new Uint8Array(a), o), (o += a.byteLength));
      return r.buffer;
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return u(t);
    }
    function d(e) {
      var t = new ArrayBuffer(4);
      return (new DataView(t).setUint32(0, e), t);
    }
    function m(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
        var o = e.charCodeAt(n);
        if (o > 127)
          throw r("err")(
            "ConcatKDF: non-ASCII characters are not supported in KDF string inputs",
          );
        t[n] = o;
      }
      return t.buffer;
    }
    function p(e) {
      var t = m(e);
      return c(d(t.byteLength), t);
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m) {
            if (a <= 0 || a % 8 !== 0)
              throw r("err")(
                "ConcatKDF: keyBitLength must be a positive multiple of 8",
              );
            for (
              var _ = c(p(i), p(l), p(m), d(a)),
                f = Math.ceil(a / s),
                g = [],
                h = 1;
              h <= f;
              h++
            )
              g.push(
                o("XPlatReactCrypto").subtleDigest("SHA-256", c(d(h), t, _)),
              );
            var y = u(yield (e || (e = n("Promise"))).all(g));
            return y.slice(0, a / 8);
          },
        )),
        f.apply(this, arguments)
      );
    }
    l.concatKDF = _;
  },
  98,
);
