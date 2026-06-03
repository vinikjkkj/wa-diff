__d(
  "WAWebPttComposerStreamingEncryptor",
  [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysConcat",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t) {
          var r = t.encKey,
            a = t.mediaKeys,
            i = t.onChunkEncrypted,
            l = t.onEncryptionCompleted;
          ((this.$6 = (e || (e = n("Promise"))).resolve()),
            (this.$3 = a),
            (this.$4 = r),
            (this.$5 = o("WACryptoAesCbc").getIv(this.$3.iv)),
            (this.$2 = [this.$5]),
            (this.$1 = new Uint8Array([])),
            (this.$8 = i),
            (this.$9 = l),
            (this.$7 = !1));
        }
        var a = t.prototype;
        return (
          (a.getMediaKeys = function () {
            return this.$3;
          }),
          (a.encryptChunk = function (t, a) {
            var e = this;
            if (this.$7) throw r("err")("Encryption was already finalized");
            a && (this.$7 = !0);
            var i = this.$10(t, a);
            i != null &&
              (this.$6 = this.$6.then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var t = yield o("WACryptoAesCbc").aesCbcEncryptChunk(
                    a,
                    i,
                    e.$5,
                    e.$4,
                  );
                  (e.$8 == null || e.$8(t.encryptedChunk), e.$11(t, a));
                }),
              ));
          }),
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n;
                if (
                  (this.$2.push(e.encryptedChunk), (this.$5 = e.nextIv), !!t)
                ) {
                  var r = o("WATypedArraysConcat").concatTypedArrays(
                      Uint8Array,
                      this.$2,
                      o("WAMediaCrypto").HMAC_LENGTH,
                    ),
                    a = this.$2[0].byteLength,
                    i = r.byteLength - o("WAMediaCrypto").HMAC_LENGTH,
                    l = r.subarray(0, i),
                    s = yield o("WACryptoHmac").hmacSha256(
                      this.$3.macKey,
                      l,
                      o("WAMediaCrypto").HMAC_LENGTH,
                    );
                  r.set(new Uint8Array(s), i);
                  var u = r.subarray(a),
                    c = yield o("WAMediaCalculateFilehash").calculateFilehash(
                      u,
                    );
                  (n = this.$9) == null || n.call(this, s, c);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$10 = function (t, n) {
            if (
              ((this.$1 = o("WATypedArraysConcat").concatTypedArrays(
                Uint8Array,
                [this.$1, t],
              )),
              this.$1.length >= o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE || n)
            ) {
              var e = n
                  ? this.$1.length
                  : Math.floor(
                      this.$1.length -
                        (this.$1.length %
                          o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE),
                    ),
                r = this.$1.slice(0, e);
              r.subarray();
              var a = new Uint8Array(this.$1.length - e);
              return (
                a.set(this.$1.slice(e, this.$1.length)),
                (this.$1 = a),
                r
              );
            }
          }),
          t
        );
      })();
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebCryptoCreateMediaKeys")(
              o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
              e.mediaKey,
            ),
            n = yield o("WACryptoAesCbc").importRawKey(t.encKey);
          return new s({
            mediaKeys: t,
            encKey: n,
            onChunkEncrypted: e.onChunkEncrypted,
            onEncryptionCompleted: e.onEncryptionCompleted,
          });
        })),
        c.apply(this, arguments)
      );
    }
    ((l.StreamingEncryptor = s), (l.createStreamingEncryptor = u));
  },
  98,
);
