__d(
  "WACryptoAesCbc",
  [
    "WABinary",
    "WACryptoDependencies",
    "WAPromiseDelays",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16,
      s = 1024,
      u = 16,
      c = 1024 * 1024,
      d = e * c,
      m = (function () {
        function t(e, t, n, r) {
          ((this.$4 = null),
            (this.$6 = !1),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n));
          var a = { name: "AES-CBC", iv: r };
          this.$5 = o("WACryptoDependencies")
            .getCrypto()
            .subtle.importKey("raw", n, "AES-CBC", !1, [t])
            .then(function (e) {
              return { algo: a, key: e };
            });
        }
        var n = t.prototype;
        return (
          (n.append = function (n) {
            var t = this;
            this.$7("append");
            var r,
              a = this.$4;
            if (a)
              if ((a.writeByteArray(n), a.size() > s)) {
                var i = a.size() % e;
                ((r = a.readByteArrayView(a.size() - i)),
                  a.size() || (this.$4 = null));
              } else r = null;
            else if (n.length > s) {
              var l = n.length % e;
              l
                ? ((this.$4 = new (o("WABinary").Binary)(n)),
                  (r = this.$4.readByteArrayView(n.length - l)))
                : (r = n);
            } else ((this.$4 = new (o("WABinary").Binary)(n)), (r = null));
            var u = r;
            return (
              u &&
                (this.$5 = this.$5
                  .then(function (n) {
                    var r = n.algo,
                      a = n.key;
                    if (t.$2 === "encrypt")
                      return o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.encrypt(r, a, u)
                        .then(function (n) {
                          return (
                            t.$1.writeByteArray(
                              new Uint8Array(n, 0, n.byteLength - e),
                            ),
                            new Uint8Array(n, n.byteLength - 2 * e, e)
                          );
                        });
                    var i = u.slice(-e);
                    return o("WACryptoDependencies")
                      .getCrypto()
                      .subtle.decrypt(r, a, u)
                      .then(function (e) {
                        return (t.$1.writeBuffer(e), i);
                      });
                  })
                  .then(function (e) {
                    var n = { name: "AES-CBC", iv: e };
                    return o("WACryptoDependencies")
                      .getCrypto()
                      .subtle.importKey("raw", t.$3, "AES-CBC", !1, [t.$2])
                      .then(function (e) {
                        return { algo: n, key: e };
                      });
                  })),
              this.$5.then(function () {})
            );
          }),
          (n.finalize = function (t) {
            var e = this;
            this.$7("finalize");
            var n;
            if (this.$4) {
              var r = this.$4;
              (t && r.writeByteArray(t),
                (n = r.readByteArrayView()),
                (this.$4 = null));
            } else t && (n = t);
            if (n) {
              var a = n;
              return this.$5
                .then(function (t) {
                  var n = t.algo,
                    r = t.key;
                  return e.$2 === "encrypt"
                    ? o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.encrypt(n, r, a)
                    : o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.decrypt(n, r, a);
                })
                .then(function (t) {
                  e.$1.writeBuffer(t);
                });
            } else return this.$5.then(function () {});
          }),
          (n.$7 = function (t) {
            if (this.$6)
              throw r("err")("AesCbcStream." + t + " called after finalize");
          }),
          t
        );
      })();
    function p(e) {
      return {
        name: "AES-CBC",
        iv: o("WATypedArraysCast").castTypedArrays(Uint8Array, e),
      };
    }
    function _(e) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.importKey(
          "raw",
          o("WATypedArraysCast").castTypedArrays(Uint8Array, e),
          "AES-CBC",
          !1,
          ["encrypt"],
        );
    }
    function f(e) {
      if (e) return o("WATypedArraysCast").castTypedArrays(Uint8Array, e);
      var t = new Uint8Array(u);
      return (o("WACryptoDependencies").getCrypto().getRandomValues(t), t);
    }
    function g(t) {
      var n = t.byteLength,
        r = e - (n % e);
      return Number.isNaN(r) ? n : n + r;
    }
    function h(e, t, n) {
      var r = p(t);
      return Promise.resolve(
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.importKey(
            "raw",
            o("WATypedArraysCast").castTypedArrays(Uint8Array, e),
            "AES-CBC",
            !1,
            ["decrypt"],
          ),
      ).then(function (e) {
        return o("WACryptoDependencies").getCrypto().subtle.decrypt(r, e, n);
      });
    }
    function y(e, t) {
      return Promise.resolve().then(function () {
        var n = t.slice(0, u),
          r = t.slice(u);
        return h(e, n, r);
      });
    }
    function C(e, t, n) {
      return Promise.resolve().then(function () {
        var r = f(n),
          a = p(r);
        return Promise.resolve(_(e))
          .then(function (e) {
            return o("WACryptoDependencies")
              .getCrypto()
              .subtle.encrypt(a, e, t);
          })
          .then(function (e) {
            return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              r,
              new Uint8Array(e),
            ]).buffer;
          });
      });
    }
    async function b(t) {
      var n = t.encKey,
        a = t.plaintext,
        i = t.optionalIv,
        l = t.chunkSize,
        s = l === void 0 ? d : l,
        u = t.delayInBetween,
        c = u === void 0 ? !1 : u,
        m = t.yieldFn;
      if (s % e !== 0)
        throw r("err")(
          "chunkSize must be a multiple of " + e + ", " + s + " received",
        );
      var p = await _(n),
        h = new Uint8Array(a),
        y = Math.ceil(h.byteLength / s),
        C = f(i),
        b = new Uint8Array(g(h) + C.byteLength);
      b.set(C);
      for (var S = 0, R = C, L; S < y; S++) {
        var E = S === y - 1,
          k = S * s;
        L = h.subarray(k, k + s);
        var I = await v(E, L, R, p),
          T = I.encryptedChunk,
          D = I.nextIv;
        (b.set(T, C.byteLength + S * s),
          (R = D),
          c === !0 &&
            (m != null ? await m() : await o("WAPromiseDelays").delayMs(0)));
      }
      return b.buffer;
    }
    async function v(t, n, r, a) {
      var i = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.encrypt(p(r), a, n)
          .then(function (n) {
            return t ? new Uint8Array(n) : new Uint8Array(n).subarray(0, -e);
          }),
        l = i.slice(-e);
      return { encryptedChunk: i, nextIv: l };
    }
    ((l.AES_CBC_BLOCK_SIZE = e),
      (l.AesCbcStream = m),
      (l.importRawKey = _),
      (l.getIv = f),
      (l.aesCbcDecrypt = h),
      (l.aesCbcDecryptSplit = y),
      (l.aesCbcEncrypt = C),
      (l.aesCbcEncryptWithChunking = b),
      (l.aesCbcEncryptChunk = v));
  },
  98,
);
