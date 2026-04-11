__d(
  "KemX25519HkdfSha256",
  ["Hpke", "KdfHkdfSha256", "asyncToGeneratorRuntime", "x25519FromNacl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("x25519FromNacl"))(),
      s = new TextEncoder(),
      u = s.encode("eae_prk"),
      c = s.encode("shared_secret"),
      d = s.encode("KEM"),
      m = (function () {
        function t(e) {
          (e === void 0 && (e = new (o("KdfHkdfSha256").KdfHkdfSha256)()),
            (this.kem_id = o("Hpke").KemID.KemX25519HkdfSha256Id),
            (this.nSecret = 32),
            (this.nEnc = 32),
            (this.kdf = e));
        }
        var r = t.prototype;
        return (
          (r.createKeyPair = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield e.boxKeyPair();
              return { pk: t.publicKey, sk: t.secretKey };
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.pk = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = yield e.boxKeyPairFromSecretKey(t);
                return n.publicKey;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.encap = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = yield this.createKeyPair(),
                  r = e.scalarMult(n.sk, t),
                  a = o("Hpke").concat(n.pk, t),
                  i = o("Hpke").concat(d, o("Hpke").i2osp(this.kem_id, 2)),
                  l = yield this.kdf.labeledExtract(new Uint8Array(0), u, r, i),
                  s = yield this.kdf.labeledExpand(l, c, a, this.nSecret, i);
                return { sharedSecret: s, enc: n.pk };
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.decap = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = e.scalarMult(n, t),
                  a = e.scalarMultBase(n),
                  i = o("Hpke").concat(t, a),
                  l = o("Hpke").concat(d, o("Hpke").i2osp(this.kem_id, 2)),
                  s = yield this.kdf.labeledExtract(new Uint8Array(0), u, r, l),
                  m = yield this.kdf.labeledExpand(s, c, i, this.nSecret, l);
                return m;
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })();
    l.KemX25519HkdfSha256 = m;
  },
  98,
);
