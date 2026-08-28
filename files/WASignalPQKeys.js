__d(
  "WASignalPQKeys",
  [
    "WAKemModule",
    "WASignalPQTypes",
    "WASignalSignatures",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var n = yield o("WAKemModule").generateKeyPair(),
            a = yield o("WASignalSignatures").signMsg(t, n.publicKey);
          return {
            id: e,
            keyPair: n,
            signature: new Uint8Array(a),
            timestamp: Date.now(),
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            for (var i = [], l = 0; l < n; l++) {
              yield a == null ? void 0 : a();
              var s =
                  (t + l) %
                  o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER,
                u = yield e(s, r);
              i.push(u);
            }
            return i;
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var n = yield o("WAKemModule").generateKeyPair(),
            a = yield o("WASignalSignatures").signMsg(t, n.publicKey);
          return {
            id: e,
            keyPair: n,
            signature: new Uint8Array(a),
            timestamp: Date.now(),
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return {
        id: e.id,
        publicKey: e.keyPair.publicKey,
        signature: e.signature,
      };
    }
    ((l.generateKyberPreKey = e),
      (l.generateKyberPreKeys = u),
      (l.generateKyberLastResortKey = d),
      (l.serializeKyberPreKeyForUpload = p));
  },
  98,
);
