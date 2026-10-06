__d(
  "WACryptoPrimitives",
  [
    "WACryptoDependencies",
    "WAHex",
    "asyncToGeneratorRuntime",
    "cr:8712",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 256,
      u = new WeakMap(),
      c = null,
      d = {
        scalarbase: (e = n("cr:8712")).lowlevel.scalarbase,
        crypto_hash: e.lowlevel.crypto_hash,
        modL: e.lowlevel.modL,
        pack25519: e.lowlevel.pack25519,
        S: e.lowlevel.S,
        M: e.lowlevel.M,
        A: e.lowlevel.A,
        Z: e.lowlevel.Z,
        D: e.lowlevel.D,
        unpack25519: e.lowlevel.unpack25519,
        pow2523: e.lowlevel.pow2523,
        crypto_verify_32: e.lowlevel.crypto_verify_32,
        set25519: e.lowlevel.set25519,
        add: e.lowlevel.add,
        scalarmult: e.lowlevel.scalarmult,
      };
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = o("WACryptoDependencies").getCrypto().subtle,
            l = i.verify;
          if (!r("gkx")("6446") || c === i || l == null)
            return n("cr:8712").sign.detached.verify(e, t, a);
          try {
            var s = yield _(i, a);
            return yield l.call(i, { name: "Ed25519" }, s, t, e);
          } catch (r) {
            return (
              r instanceof DOMException &&
                r.name === "NotSupportedError" &&
                (c = i),
              n("cr:8712").sign.detached.verify(e, t, a)
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      if (!r("gkx")("6446") || !r("gkx")("27245")) return f(e, t);
      var n = u.get(e),
        a = n != null ? n : new Map();
      n == null && u.set(e, a);
      var i = o("WAHex").toHex(t),
        l = a.get(i);
      if (l != null) return (a.delete(i), a.set(i, l), l);
      var c = f(e, t);
      if ((a.set(i, c), a.size > s)) {
        var d = a.keys().next().value;
        d != null && a.delete(d);
      }
      return (
        c.catch(function () {
          a.get(i) === c && a.delete(i);
        }),
        c
      );
    }
    function f(e, t) {
      return e.importKey("raw", t, { name: "Ed25519" }, !1, ["verify"]);
    }
    ((l.lowlevel = d),
      (l.keypairFromSecretKey = e.box.keyPair.fromSecretKey),
      (l.keyPair = e.box.keyPair),
      (l.signDetachedVerify = e.sign.detached.verify),
      (l.signDetachedVerifyAsync = m),
      (l.hash = e.hash),
      (l.scalarMult = e.scalarMult),
      (l.secretbox = e.secretbox),
      (l.verify = e.verify));
  },
  98,
);
