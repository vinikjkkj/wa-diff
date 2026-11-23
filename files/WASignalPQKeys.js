__d(
  "WASignalPQKeys",
  ["WAKemModule", "WASignalPQTypes", "WASignalSignatures", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      if (
        e < 0 ||
        e >= o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
      )
        throw r("err")(
          "PQ: invalid prekey ID " +
            e +
            ", must be in [0, " +
            o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER +
            ")",
        );
      var n = await o("WAKemModule").generateKeyPair(),
        a = await o("WASignalSignatures").signMsg(t, n.publicKey);
      return {
        id: e,
        keyPair: n,
        signature: new Uint8Array(a),
        timestamp: Date.now(),
      };
    }
    async function s(t, n, r, a) {
      for (var i = [], l = 0; l < n; l++) {
        await (a == null ? void 0 : a());
        var s =
            (t + l) %
            o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER,
          u = await e(s, r);
        i.push(u);
      }
      return i;
    }
    async function u(e, t) {
      if (
        e < 0 ||
        e >= o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
      )
        throw r("err")(
          "PQ: invalid last resort key ID " +
            e +
            ", must be in [0, " +
            o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER +
            ")",
        );
      var n = await o("WAKemModule").generateKeyPair(),
        a = await o("WASignalSignatures").signMsg(t, n.publicKey);
      return {
        id: e,
        keyPair: n,
        signature: new Uint8Array(a),
        timestamp: Date.now(),
      };
    }
    function c(e) {
      return {
        id: e.id,
        publicKey: e.keyPair.publicKey,
        signature: e.signature,
      };
    }
    ((l.generateKyberPreKey = e),
      (l.generateKyberPreKeys = s),
      (l.generateKyberLastResortKey = u),
      (l.serializeKyberPreKeyForUpload = c));
  },
  98,
);
