__d(
  "KemX25519HkdfSha256",
  ["Hpke", "KdfHkdfSha256", "x25519FromNacl"],
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
        var n = t.prototype;
        return (
          (n.createKeyPair = async function () {
            var t = await e.boxKeyPair();
            return { pk: t.publicKey, sk: t.secretKey };
          }),
          (n.pk = async function (n) {
            var t = await e.boxKeyPairFromSecretKey(n);
            return t.publicKey;
          }),
          (n.encap = async function (n) {
            var t = await this.createKeyPair(),
              r = e.scalarMult(t.sk, n),
              a = o("Hpke").concat(t.pk, n),
              i = o("Hpke").concat(d, o("Hpke").i2osp(this.kem_id, 2)),
              l = await this.kdf.labeledExtract(new Uint8Array(0), u, r, i),
              s = await this.kdf.labeledExpand(l, c, a, this.nSecret, i);
            return { sharedSecret: s, enc: t.pk };
          }),
          (n.decap = async function (n, r) {
            var t = e.scalarMult(r, n),
              a = e.scalarMultBase(r),
              i = o("Hpke").concat(n, a),
              l = o("Hpke").concat(d, o("Hpke").i2osp(this.kem_id, 2)),
              s = await this.kdf.labeledExtract(new Uint8Array(0), u, t, l),
              m = await this.kdf.labeledExpand(s, c, i, this.nSecret, l);
            return m;
          }),
          t
        );
      })();
    l.KemX25519HkdfSha256 = m;
  },
  98,
);
