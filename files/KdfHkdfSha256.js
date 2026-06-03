__d(
  "KdfHkdfSha256",
  ["Hpke", "asyncToGeneratorRuntime"],
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
        var r = t.prototype;
        return (
          (r.hmac = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.internalCryptoProvider.importKey(
                    "raw",
                    e.byteLength === 0 ? new Uint8Array(32) : e,
                    { name: "HMAC", hash: { name: "SHA-256" } },
                    !1,
                    ["sign"],
                  ),
                  r = yield this.internalCryptoProvider.sign("HMAC", n, t);
                return new Uint8Array(r);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.extract = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.hmac(e, t);
                return n;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.expand = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = new Uint8Array(n),
                  o = new Uint8Array(0),
                  a = new Uint8Array(t),
                  i = new Uint8Array(1);
                if (n > 8160) {
                  var l = new Error("KDF expand: entropy limit reached");
                  throw (l.stack, l);
                }
                for (
                  var s = new Uint8Array(32 + a.length + 1), u = 1, c = 0;
                  c < r.length;
                  u++
                )
                  ((i[0] = u),
                    s.set(o, 0),
                    s.set(a, o.length),
                    s.set(i, o.length + a.length),
                    (o = yield this.hmac(
                      e,
                      s.slice(0, o.length + a.length + 1),
                    )),
                    r.length - c >= o.length
                      ? (r.set(o, c), (c += o.length))
                      : (r.set(o.slice(0, r.length - c), c),
                        (c += r.length - c)));
                return r;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.labeledExtract = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = o("Hpke").concat(u, r, t, n),
                  i = yield this.extract(e, a);
                return i;
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.labeledExpand = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a) {
                var i = o("Hpke").concat(new Uint8Array([0, r]), u, a, t, n);
                return yield this.expand(e, i, r);
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.KdfHkdfSha256 = c;
  },
  98,
);
