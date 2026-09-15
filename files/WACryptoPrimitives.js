__d(
  "WACryptoPrimitives",
  ["WACryptoDependencies", "asyncToGeneratorRuntime", "cr:8712", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = {
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = o("WACryptoDependencies").getCrypto().subtle,
            l = i.verify;
          if (!r("gkx")("6446") || s === i || l == null)
            return n("cr:8712").sign.detached.verify(e, t, a);
          try {
            var u = yield i.importKey("raw", a, { name: "Ed25519" }, !1, [
              "verify",
            ]);
            return yield l.call(i, { name: "Ed25519" }, u, t, e);
          } catch (r) {
            return (
              r instanceof DOMException &&
                r.name === "NotSupportedError" &&
                (s = i),
              n("cr:8712").sign.detached.verify(e, t, a)
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.lowlevel = u),
      (l.keypairFromSecretKey = e.box.keyPair.fromSecretKey),
      (l.keyPair = e.box.keyPair),
      (l.signDetachedVerify = e.sign.detached.verify),
      (l.signDetachedVerifyAsync = c),
      (l.hash = e.hash),
      (l.scalarMult = e.scalarMult),
      (l.secretbox = e.secretbox),
      (l.verify = e.verify));
  },
  98,
);
