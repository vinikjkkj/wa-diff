__d(
  "WADownloadProgressiveJpegUsingMediaStreaming",
  [
    "WAByteArray",
    "WACryptoSha256",
    "WACryptoUtils",
    "WADownloadProgressiveJpegPlaintext",
    "WADownloadProgressiveJpegPlaintextStreamer",
    "WADownloadProgressiveJpegPreview",
    "WAErrorMessage",
    "WAHashUtils",
    "WAMediaCiphertextCaptureStream",
    "WAMediaUtils",
    "WAProgressiveJpegAddJPEGTrailingTag",
    "WAResolvable",
    "WAResultOrError",
    "WAStreamAsyncIterator",
    "WATypedArraysConcat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n = t.abortSignal,
        r = t.directPath,
        a = t.downloadFlow,
        i = t.fileEncSha256,
        l = t.fileSha256,
        m = t.logger,
        p = t.mediaKey,
        _ = t.onCiphertext,
        f = t.progressiveJpegDetails,
        h = t.serverMediaType,
        y = m.TAGS(["MediaStreaming"]);
      y.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Using Media Streaming to download ProgressiveJpeg.",
          ])),
      );
      var C = o("WADownloadProgressiveJpegPreview").getPreviewTargetScan(
          f.scanLengths,
        ),
        b = C < f.scanLengths.length,
        v =
          _ == null
            ? null
            : o(
                "WAMediaCiphertextCaptureStream",
              ).makeMediaCiphertextCaptureStream(
                o(
                  "WADownloadProgressiveJpegPlaintext",
                ).getProgressiveJpegCiphertextLength({
                  progressiveJpegDetails: f,
                  size: null,
                  targetScan: C,
                }),
              );
      a.addPoint("create_pjpeg_stream_start");
      var S = await o("WADownloadProgressiveJpegPlaintextStreamer")
        .downloadProgressiveJpegPlaintextUsingStreams({
          abortSignal: n,
          ciphertextCaptureStream: v == null ? void 0 : v.stream,
          directPath: r,
          eventFlow: a,
          fileEncSha256: i,
          mediaKey: p,
          progressiveJpegDetails: f,
          serverMediaType: h,
        })
        .catch(function (e) {
          return (
            y.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "create DownloadAndDecryptPJpegStream unexpected runtime-error: ",
                  "",
                ])),
              o("WAErrorMessage").maybeGetMessageFromError(e),
            ),
            o("WAResultOrError").makeError("runtime-error")
          );
        });
      if (S.success === !1) return (a.addPoint("create_pjpeg_stream_fail"), S);
      a.addPoint("create_pjpeg_stream_end");
      var R = new (o("WAResolvable").Resolvable)(),
        L = !1,
        E = g({
          downloadFlow: a,
          fileSha256: l,
          mediaStreamingLogger: y,
          previewResolvable: R,
          progressiveJpegDetails: f,
          progressiveJpegDownloadStream: S.value,
          serverMediaType: h,
        })
          .then(function (e) {
            return (
              (L = !0),
              y.DEV(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleProgressiveJpegDownloadStream completed",
                  ])),
              ),
              e
            );
          })
          .catch(function (e) {
            return (
              (L = !0),
              y.ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleProgressiveJpegDownloadStream unexpected runtime-error: ",
                    "",
                  ])),
                o("WAErrorMessage").maybeGetMessageFromError(e),
              ),
              R.reject(e),
              o("WAResultOrError").makeError("runtime-error")
            );
          }),
        k = o("WAMediaUtils").getMimeTypeFromServerMediaType(h);
      function I(e) {
        return e.success === !1
          ? e
          : o("WAResultOrError").makeResult({
              mimeType: k,
              plaintext: e.value,
              serverMediaType: h,
            });
      }
      async function T(e, t) {
        if (e.success && _ != null && t != null) {
          var n = await t;
          n != null &&
            _({
              ciphertext: n,
              mediaKey: p,
              mediaTypeDetails: { mediaType: h, type: "regular" },
              plaintextHash: o("WAHashUtils").toPlaintextHash(l),
            });
        }
        return e;
      }
      var D = E.then(function (e) {
          return T(e, v == null ? void 0 : v.ciphertext);
        }).then(I),
        x = R.promise
          .then(function (e) {
            return T(e, b ? (v == null ? void 0 : v.prefix) : null);
          })
          .then(I),
        $ = await R.promise;
      if (
        ($.success === !0 &&
          L === !0 &&
          y.ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "fullsizeResolvable is settled before previewResolvable",
              ])),
          ),
        $.success === !0)
      )
        return o("WAResultOrError").makeResult({
          fullsizePromise: D,
          previewPromise: x,
        });
      var P = await E;
      return (
        $.success,
        P.success === !0
          ? o("WAResultOrError").makeResult({
              fullsizePromise: D,
              previewPromise: x,
            })
          : (P.success, P)
      );
    }
    async function g(e) {
      var t = e.downloadFlow,
        n = e.fileSha256,
        r = e.mediaStreamingLogger,
        a = e.previewResolvable,
        i = e.progressiveJpegDetails,
        l = e.progressiveJpegDownloadStream;
      t.addPoint("download_pjpeg_preview_start");
      var s = 0,
        u =
          o("WADownloadProgressiveJpegPreview").getPreviewTargetScan(
            i.scanLengths,
          ) - 1;
      try {
        var c = [],
          d = !1,
          f = !1,
          g;
        try {
          for (
            var h = babelHelpers.asyncIterator(
                o("WAStreamAsyncIterator").streamAsyncIterator(l),
              ),
              y;
            (d = !(y = await h.next()).done);
            d = !1
          ) {
            var C = y.value;
            {
              if (C == null) continue;
              if ((c.push(C), s === u)) {
                t.addPoint("media_streaming_preview_processed");
                var b = o("WAByteArray").uint8ArrayToBuffer(
                  o("WATypedArraysConcat").concatTypedArrays(
                    Uint8Array,
                    [].concat(c, [
                      o("WAProgressiveJpegAddJPEGTrailingTag")
                        .JPEG_TRAILING_TAG,
                    ]),
                  ),
                );
                (a.resolve(o("WAResultOrError").makeResult(b)),
                  t.addPoint("download_pjpeg_preview_end"));
              }
              s++;
            }
          }
        } catch (e) {
          ((f = !0), (g = e));
        } finally {
          try {
            d && h.return != null && (await h.return());
          } finally {
            if (f) throw g;
          }
        }
        a.isSettled === !1 &&
          (r.ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "pjpeg stream ended before reaching previewTargetScanIndex",
              ])),
          ),
          a.resolve(o("WAResultOrError").makeError("runtime-error")),
          t.addPoint("download_pjpeg_preview_fail"));
        var v = o("WAByteArray").uint8ArrayToBuffer(
            o("WATypedArraysConcat").concatTypedArrays(
              Uint8Array,
              [].concat(c),
            ),
          ),
          S = await o("WACryptoSha256").sha256(v);
        return o("WACryptoUtils").arrayBuffersEqual(n, S)
          ? o("WAResultOrError").makeResult(v)
          : (r.WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Media streaming for ProgressiveJpeg download failed due to plaintext hash mismatch.",
                ])),
            ),
            o("WAResultOrError").makeError("hash-mismatch"));
      } catch (e) {
        return (
          r.ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Exception occurred during Media Streaming: Reason: ",
                "",
              ])),
            e,
          ),
          a.isSettled === !1 &&
            (a.resolve(o("WAResultOrError").makeError("runtime-error")),
            t.addPoint("download_pjpeg_preview_fail")),
          o("WAResultOrError").makeError("runtime-error")
        );
      }
    }
    l.downloadProgresiveJpegUsingMediaStreaming = f;
  },
  98,
);
