__d(
  "FBPayCryptoUtils",
  ["asyncToGeneratorRuntime", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {},
        n = 1,
        r = e[n] & 128;
      if (r) {
        var o = e[n] & 127;
        n += 1;
        for (var a = 0, i = 0; i < o; i++) ((a = a * 256 + e[n]), (n += 1));
        ((t.start = n), (t.end = n + a));
      } else ((t.start = 2), (t.end = 2 + e[n]));
      return t;
    }
    function s(t) {
      var n = e(t),
        r = {
          cls: (t[0] & 192) / 64,
          constructed: (t[0] & 32) === 32,
          tag: t[0] & 31,
          content: t.subarray(n.start, n.end),
          raw: t.subarray(0, n.end),
        };
      return r;
    }
    function u(e) {
      for (var t = [], n = 0; n < e.length; ) {
        var r = s(e.subarray(n));
        (t.push(r), (n += r.raw.length));
      }
      return t;
    }
    function c(e) {
      var t = u(e),
        n = u(t[4].content),
        r = {
          validity: {
            notBefore: new TextDecoder().decode(n[0].content),
            notAfter: new TextDecoder().decode(n[1].content),
          },
          spki: t[6],
        };
      return r;
    }
    function d(e) {
      var t = s(e),
        n = u(t.content),
        o = r("gkx")("19129");
      if (o && n.length < 2) return new Uint8Array(0);
      var a = n[0].content;
      a[0] == 0 && (a = a.slice(1));
      var i = n[1].content;
      if ((i[0] == 0 && (i = i.slice(1)), o)) {
        var l = Math.max(a.length, i.length),
          c = new Uint8Array(l * 2);
        return (c.set(a, l - a.length), c.set(i, l * 2 - i.length), c);
      }
      var d = new Uint8Array(64);
      return (d.set(a, 32 - a.length), d.set(i, 64 - i.length), d);
    }
    function m(e) {
      for (
        var t = window.atob(e), n = new Uint8Array(t.length), r = 0;
        r < t.length;
        r++
      )
        n[r] = t.charCodeAt(r);
      var o = s(n),
        a = u(o.content),
        i = c(a[0].content),
        l = a[2].content.subarray(1),
        m = {
          cert: a[0].raw,
          validity: i.validity,
          spki: i.spki.raw,
          sig: d(l),
        };
      return m;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Uint8Array.from(e.spki).buffer;
          return yield crypto.subtle.importKey(
            "spki",
            t,
            { name: "ECDH", namedCurve: "P-256" },
            !0,
            [],
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.parseSigAsn1 = d), (l.parseX509Cert = m), (l.importX509Cert = p));
  },
  98,
);
