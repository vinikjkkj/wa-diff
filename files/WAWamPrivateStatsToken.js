__d(
  "WAWamPrivateStatsToken",
  ["WACryptoEd25519", "WACryptoPrimitives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WACryptoEd25519").runInAllocationScope(function () {
        var n,
          r = (n = o("WACryptoEd25519")).p3Element(),
          a = n.allocate(Uint8Array, 32);
        (a.set(t), u(a), o("WACryptoPrimitives").lowlevel.scalarbase(r, a));
        var i = n.hashToPoint(e),
          l = o("WACryptoPrimitives").lowlevel.add;
        l(i, r);
        var s = new Uint8Array(32);
        return (n.pack(s, i), s);
      });
    }
    function s(e, t, n) {
      return o("WACryptoEd25519").runInAllocationScope(function () {
        var r = o("WACryptoEd25519").p3Element();
        if (o("WACryptoEd25519").unpack(r, e)) return null;
        var a = o("WACryptoEd25519").p3Element();
        if (o("WACryptoEd25519").unpackneg(a, n) !== 0) return null;
        var i = o("WACryptoEd25519").allocate(Uint8Array, 32);
        (i.set(t), u(i));
        var l = o("WACryptoEd25519").p3Element();
        o("WACryptoPrimitives").lowlevel.scalarmult(l, a, i);
        var s = o("WACryptoPrimitives").lowlevel.add;
        s(r, l);
        var c = new Uint8Array(32);
        return (o("WACryptoEd25519").pack(c, r), c);
      });
    }
    function u(e) {
      ((e[0] &= 248), (e[31] &= 127), (e[31] |= 64));
    }
    ((l.blindToken = e), (l.unblindToken = s));
  },
  98,
);
