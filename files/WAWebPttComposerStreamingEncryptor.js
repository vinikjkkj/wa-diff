__d(
  "WAWebPttComposerStreamingEncryptor",
  [
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysConcat",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMmsMediaTypes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.encKey,
          n = e.mediaKeys,
          r = e.onChunkEncrypted,
          a = e.onEncryptionCompleted;
        ((this.$6 = Promise.resolve()),
          (this.$3 = n),
          (this.$4 = t),
          (this.$5 = o("WACryptoAesCbc").getIv(this.$3.iv)),
          (this.$2 = [this.$5]),
          (this.$1 = new Uint8Array([])),
          (this.$8 = r),
          (this.$9 = a),
          (this.$7 = !1));
      }
      var t = e.prototype;
      return (
        (t.getMediaKeys = function () {
          return this.$3;
        }),
        (t.encryptChunk = function (t, n) {
          var e = this;
          if (this.$7) throw r("err")("Encryption was already finalized");
          n && (this.$7 = !0);
          var a = this.$10(t, n);
          a != null &&
            (this.$6 = this.$6.then(async function () {
              var t = await o("WACryptoAesCbc").aesCbcEncryptChunk(
                n,
                a,
                e.$5,
                e.$4,
              );
              (e.$8 == null || e.$8(t.encryptedChunk), e.$11(t, n));
            }));
        }),
        (t.$11 = async function (t, n) {
          var e;
          if ((this.$2.push(t.encryptedChunk), (this.$5 = t.nextIv), !!n)) {
            var r = o("WATypedArraysConcat").concatTypedArrays(
                Uint8Array,
                this.$2,
                o("WAMediaCrypto").HMAC_LENGTH,
              ),
              a = this.$2[0].byteLength,
              i = r.byteLength - o("WAMediaCrypto").HMAC_LENGTH,
              l = r.subarray(0, i),
              s = await o("WACryptoHmac").hmacSha256(
                this.$3.macKey,
                l,
                o("WAMediaCrypto").HMAC_LENGTH,
              );
            r.set(new Uint8Array(s), i);
            var u = r.subarray(a),
              c = await o("WAMediaCalculateFilehash").calculateFilehash(u);
            (e = this.$9) == null || e.call(this, s, c);
          }
        }),
        (t.$10 = function (t, n) {
          if (
            ((this.$1 = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              this.$1,
              t,
            ])),
            this.$1.length >= o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE || n)
          ) {
            var e = n
                ? this.$1.length
                : Math.floor(
                    this.$1.length -
                      (this.$1.length % o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE),
                  ),
              r = this.$1.slice(0, e);
            r.subarray();
            var a = new Uint8Array(this.$1.length - e);
            return (a.set(this.$1.slice(e, this.$1.length)), (this.$1 = a), r);
          }
        }),
        e
      );
    })();
    async function s(t) {
      var n = await r("WAWebCryptoCreateMediaKeys")(
          o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
          t.mediaKey,
        ),
        a = await o("WACryptoAesCbc").importRawKey(n.encKey);
      return new e({
        mediaKeys: n,
        encKey: a,
        onChunkEncrypted: t.onChunkEncrypted,
        onEncryptionCompleted: t.onEncryptionCompleted,
      });
    }
    ((l.StreamingEncryptor = e), (l.createStreamingEncryptor = s));
  },
  98,
);
