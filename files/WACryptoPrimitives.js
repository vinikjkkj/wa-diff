__d(
  "WACryptoPrimitives",
  ["cr:8712"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
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
    ((l.lowlevel = s),
      (l.keypairFromSecretKey = e.box.keyPair.fromSecretKey),
      (l.keyPair = e.box.keyPair),
      (l.signDetachedVerify = e.sign.detached.verify),
      (l.hash = e.hash),
      (l.scalarMult = e.scalarMult),
      (l.secretbox = e.secretbox),
      (l.verify = e.verify));
  },
  98,
);
