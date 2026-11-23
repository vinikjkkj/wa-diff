__d(
  "WACryptoCurve25519",
  ["Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e, t) {
          ((this.signalDependencies = e),
            (this.keyPair = t
              ? (s || (s = n("Promise"))).resolve(t)
              : this.signalDependencies.generateIdentityKeyPair()));
        }
        var r = t.prototype;
        return (
          (r.generatePublicKey = function () {
            return this.keyPair.then(function (e) {
              return e.publicKey;
            });
          }),
          (r.generateSharedSecret = function (n) {
            var t = this;
            return this.keyPair.then(function (r) {
              var a = r.privateKey;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Curve25519.generateSharedSecret pubkey:",
                      "",
                    ])),
                  n,
                ),
                t.signalDependencies.calculateAgreement(new Uint8Array(n), a)
              );
            });
          }),
          t
        );
      })();
    l.Curve25519 = u;
  },
  98,
);
