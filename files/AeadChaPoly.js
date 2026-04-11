__d(
  "AeadChaPoly",
  ["Hpke", "stablelib-chacha20poly1305-1.0.1"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("stablelib-chacha20poly1305-1.0.1")(),
      s = (function () {
        function t() {
          ((this.aead_id = o("Hpke").AeadID.AeadChaCha20Poly1305Id),
            (this.nK = 32),
            (this.nN = 12),
            (this.nT = 16));
        }
        var n = t.prototype;
        return (
          (n.seal = function (n, r, o, a) {
            var t = new e.ChaCha20Poly1305(n),
              i = t.seal(r, a, o);
            return i;
          }),
          (n.open = function (n, r, o, a) {
            var t = new e.ChaCha20Poly1305(n),
              i = t.open(r, a, o);
            return i;
          }),
          t
        );
      })();
    l.AeadChaPoly = s;
  },
  98,
);
