__d(
  "KdfHkdfSha256",
  ["Hpke"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.crypto || window.msCrypto,
      s = new TextEncoder(),
      u = s.encode("HPKE-v1"),
      c = (function () {
        function t(t) {
          (t === void 0 && (t = e.subtle),
            (this.kdf_id = o("Hpke").KdfID.KdfHkdfSha256Id),
            (this.nH = 32),
            (this.internalCryptoProvider = null),
            (this.internalCryptoProvider = t));
        }
        var n = t.prototype;
        return (
          (n.hmac = async function (t, n) {
            var e = await this.internalCryptoProvider.importKey(
                "raw",
                t.byteLength === 0 ? new Uint8Array(32) : t,
                { name: "HMAC", hash: { name: "SHA-256" } },
                !1,
                ["sign"],
              ),
              r = await this.internalCryptoProvider.sign("HMAC", e, n);
            return new Uint8Array(r);
          }),
          (n.extract = async function (t, n) {
            var e = await this.hmac(t, n);
            return e;
          }),
          (n.expand = async function (t, n, r) {
            var e = new Uint8Array(r),
              o = new Uint8Array(0),
              a = new Uint8Array(n),
              i = new Uint8Array(1);
            if (r > 8160) {
              var l = new Error("KDF expand: entropy limit reached");
              throw (l.stack, l);
            }
            for (
              var s = new Uint8Array(32 + a.length + 1), u = 1, c = 0;
              c < e.length;
              u++
            )
              ((i[0] = u),
                s.set(o, 0),
                s.set(a, o.length),
                s.set(i, o.length + a.length),
                (o = await this.hmac(t, s.slice(0, o.length + a.length + 1))),
                e.length - c >= o.length
                  ? (e.set(o, c), (c += o.length))
                  : (e.set(o.slice(0, e.length - c), c), (c += e.length - c)));
            return e;
          }),
          (n.labeledExtract = async function (t, n, r, a) {
            var e = o("Hpke").concat(u, a, n, r),
              i = await this.extract(t, e);
            return i;
          }),
          (n.labeledExpand = async function (t, n, r, a, i) {
            var e = o("Hpke").concat(new Uint8Array([0, a]), u, i, n, r);
            return await this.expand(t, e, a);
          }),
          t
        );
      })();
    l.KdfHkdfSha256 = c;
  },
  98,
);
