__d(
  "WADownloadProgressiveJpegPlaintextStreamerWithoutRetry",
  [
    "WACreateMediaDecrypterStream",
    "WAHttpDownloadMedia",
    "WAMediaCrypto",
    "WAMediaProgressiveJpegTransformStream",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS([
        "WADownloadProgressiveJpegPlaintextStreamer",
      ]);
    function c(e) {
      return e;
    }
    async function d(t) {
      var n = t.abortSignal,
        r = t.cachePolicy,
        a = t.ciphertextCaptureStream,
        i = t.downloadUrl,
        l = t.eventFlow,
        c = t.mediaKey,
        d = t.progressiveJpegDetails,
        m = t.serverMediaType,
        p = await o("WAHttpDownloadMedia").httpDownloadMedia(i, {
          mediaMetrics: l,
          abortSignal: n,
          cachePolicy: r,
        });
      if (p.success !== !0) return p;
      var _ = p.value.body;
      if (_ == null)
        return o("WAResultOrError").makeError("body-network-error");
      var f = p.value.headers.get("Content-Length");
      if (f == null)
        return (
          u.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Content-Length header is missing",
              ])),
          ),
          o("WAResultOrError").makeError("missing-content-length-header")
        );
      var g = Number(f);
      if (Number.isNaN(g))
        return (
          u.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Content-Length header is not a number",
              ])),
          ),
          o("WAResultOrError").makeError("invalid-content-length-header")
        );
      var h = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).getExtendedProgressiveJpegDetails({
          progressiveJpegDetails: d,
          ciphertextLength: g,
        }),
        y = await o("WAMediaCrypto").computeMediaKeys(c, m),
        C = o("WACreateMediaDecrypterStream").createDefaultDecryptStream(
          y.cipherKey,
          y.iv,
          y.hmacKey,
          h.sidecar,
          h.alignedScanLengths,
          {
            onEnd: function () {
              return l == null ? void 0 : l.addPoint("decrypt_media_end");
            },
            onStart: function () {
              return l == null ? void 0 : l.addPoint("decrypt_media_start");
            },
          },
        );
      if (C.success !== !0) return C;
      var b = C.value,
        v = o(
          "WAMediaProgressiveJpegTransformStream",
        ).makeProgressiveJpegHandlerTransformStream(h),
        S = a == null ? _ : _.pipeThrough(a),
        R = S.pipeThrough(b).pipeThrough(v);
      return o("WAResultOrError").makeResult(R);
    }
    ((l.unsafeCastToDownloadAndDecryptPJpegStream = c),
      (l.downloadProgressiveJpegPlaintextUsingStreamsWithoutRetry = d));
  },
  98,
);
