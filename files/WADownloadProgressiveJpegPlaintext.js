__d(
  "WADownloadProgressiveJpegPlaintext",
  [
    "WADownloadCiphertext",
    "WAMediaCrypto",
    "WAProgressiveJpegAddJPEGTrailingTag",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["DownloadProgressiveJpeg"]);
    async function d(e) {
      var t = e.abortSignal,
        n = e.directPath,
        r = e.eventFlow,
        a = e.fileEncSha256,
        i = e.mediaKey,
        l = e.mediaTypeDetails,
        s = e.onCiphertext,
        u = e.plaintextHash,
        c = e.progressiveJpegDetails,
        d = e.size,
        m = e.targetScan,
        p = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).getExtendedProgressiveJpegDetails({
          progressiveJpegDetails: c,
          ciphertextLength: f(d),
        }),
        g = o("WAProgressiveJpegGetPJpegDetails").getTotalByteSizeForScan(
          p.alignedScanLengths,
          m,
        ),
        h = await o("WADownloadCiphertext").cachedDownloadCiphertext({
          abortSignal: t,
          mediaTypeDetails: l,
          fileEncSha256: a,
          directPath: n,
          fromBytes: 0,
          toBytes: g - 1,
          eventFlow: r,
          plaintextHash: u,
        });
      if (h.success !== !0) return h;
      r.addPoint("decrypt_media_start");
      var y = await _(i, l, m, p, h.value).finally(function () {
        return r.addPoint("decrypt_media_end");
      });
      return (
        y.success &&
          (s == null ||
            s({
              ciphertext: h.value,
              mediaKey: i,
              mediaTypeDetails: l,
              plaintextHash: u,
            })),
        y
      );
    }
    function m(e) {
      var t = e.progressiveJpegDetails,
        n = e.size,
        r = e.targetScan,
        a = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).getExtendedProgressiveJpegDetails({
          ciphertextLength: f(n),
          progressiveJpegDetails: t,
        }),
        i = a.alignedScanLengths;
      return o("WAProgressiveJpegGetPJpegDetails").getTotalByteSizeForScan(
        i,
        r,
      );
    }
    function p(e) {
      for (
        var t = e.ciphertext,
          n = e.mediaKey,
          r = e.mediaTypeDetails,
          a = e.progressiveJpegDetails,
          i = e.size,
          l = o(
            "WAProgressiveJpegGetPJpegDetails",
          ).getExtendedProgressiveJpegDetails({
            ciphertextLength: f(i),
            progressiveJpegDetails: a,
          }),
          s = 0,
          u = 0;
        u < l.alignedScanLengths.length;
        u++
      )
        if (((s += l.alignedScanLengths[u]), s === t.byteLength))
          return _(n, r, u + 1, l, t);
      return Promise.resolve(
        o("WAResultOrError").makeError("decryption-error"),
      );
    }
    async function _(t, n, r, a, i) {
      c.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Using progressiveJpeg decryptAndVerify",
          ])),
      );
      var l = new Uint8Array(i),
        d;
      n.type === "preview"
        ? (d = o("WAMediaCrypto").computeMediaKeysForPreview(t))
        : (d = o("WAMediaCrypto").computeMediaKeys(t, n.mediaType));
      var m = await d
        .then(function (e) {
          var t = e.cipherKey,
            n = e.hmacKey,
            i = e.iv;
          return o("WAMediaCrypto").decryptPartialChunks(t, i, l, n, r, a);
        })
        .then(o("WAResultOrError").makeResult)
        .catch(function (e) {
          return (
            c.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Download Plaintext Error ",
                  "",
                ])),
              String(e),
            ),
            e instanceof o("WAMediaCrypto").HmacValidationError
              ? o("WAResultOrError").makeError("enc-hash-mismatch")
              : o("WAResultOrError").makeError("decryption-error")
          );
        });
      if (!m.success) return m;
      c.LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "ProgressiveJpeg download and decrypt successful. Partial: ",
            "",
          ])),
        r < a.scanLengths.length,
      );
      var p = o("WAProgressiveJpegAddJPEGTrailingTag").addJPEGTrailingTag(
        m.value.plaintext,
      );
      return o("WAResultOrError").makeResult(p);
    }
    function f(e) {
      if (e == null) return null;
      var t =
        o("WAMediaCrypto").CBC_BLOCK_SIZE -
        (e % o("WAMediaCrypto").CBC_BLOCK_SIZE);
      return e + t + o("WAMediaCrypto").HMAC_LENGTH;
    }
    ((l.downloadProgressiveJpegPlaintext = d),
      (l.getProgressiveJpegCiphertextLength = m),
      (l.decryptProgressiveJpegPlaintext = p));
  },
  98,
);
