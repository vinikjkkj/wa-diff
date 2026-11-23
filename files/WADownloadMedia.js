__d(
  "WADownloadMedia",
  [
    "WAByteArray",
    "WACryptoSha256",
    "WACryptoUtils",
    "WADownloadAndDecryptMedia",
    "WADownloadDownloadablePreview",
    "WADownloadProgressiveJpegPlaintextStreamer",
    "WADownloadProgressiveJpegPreview",
    "WAErrorMessage",
    "WAHashUtils",
    "WAMediaCrypto",
    "WAMediaUtils",
    "WAPrepareMediaDownload",
    "WAProgressiveJpegAddJPEGTrailingTag",
    "WAProgressiveJpegGetPJpegDetails",
    "WAPromiseManagement",
    "WAResultOrError",
    "WAStreamAsyncIterator",
    "WATagsLogger",
    "WATypedArraysConcat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["hash"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = o("WATagsLogger").TAGS(["MediaDownload"]);
    function R(e) {
      var t = e.downloadMediaMetric,
        n = e.handleMediaPreviewBeforeDownload,
        r = e.handleMediaPreviewDownload,
        a = e.handleMediaPreviewDownloadFailed,
        i = e.hash,
        l = e.mediaEntry,
        s = e.protocolMsgId,
        u = o("WAPrepareMediaDownload").prepareMediaDownload({
          mediaDownloadFlow: t,
          mediaEntry: l,
          hash: i,
          logger: S,
        }),
        c = u.logDownloadResult;
      return c(
        E({
          downloadMediaMetric: t,
          hash: i,
          mediaEntry: l,
          protocolMsgId: s,
          handleMediaPreviewDownload: r,
          handleMediaPreviewBeforeDownload: n,
          handleMediaPreviewDownloadFailed: a,
        }),
      );
    }
    var L = async function (t) {
        var e = t.downloadMediaMetric,
          n = t.handleMediaPreviewBeforeDownload,
          r = t.handleMediaPreviewDownload,
          a = t.handleMediaPreviewDownloadFailed,
          i = t.hash,
          l = t.mediaEntry,
          p = t.protocolMsgId,
          _ = o("WAMediaUtils").validateDecodedMediaEntryForDownload(l);
        if (!_.success)
          return (
            S.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "mediaEntry is incomplete. ",
                  "",
                ])),
              _.error,
            ),
            _
          );
        var f = _.value,
          g = f.directPath,
          h = f.fileEncSha256,
          y = f.fileSha256,
          C = f.mediaKey,
          b = f.serverMediaType,
          v = o(
            "WAProgressiveJpegGetPJpegDetails",
          ).maybeGetProgressiveJpegDetailsUsingMediaEntry(l);
        v.success === !1 &&
          (S.WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get ProgressiveJpeg details: ",
                "",
              ])),
            v.error,
          ),
          e.addPoint(v.error));
        var R = v.success === !0 ? v.value : null,
          L = function (t) {
            if (t == null) return Promise.resolve();
            var e =
              o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(b);
            return e == null
              ? (S.ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "media: mediaPreview - unsupported preview media type ",
                      "",
                    ])),
                  b,
                ),
                Promise.resolve())
              : r(i, t, e, p).then(function () {});
          };
        if (
          R != null &&
          o("WAMediaUtils").isTransformStreamSupported() &&
          b === "image"
        ) {
          var E = await x({
            directPath: g,
            downloadFlow: e,
            fileEncSha256: h,
            handleMediaPreviewBlob: L,
            hash: i,
            mediaKey: C,
            progressiveJpegDetails: R,
            serverMediaType: b,
            fileSha256: y,
            handleMediaPreviewBeforeDownload: n,
            handleMediaPreviewDownloadFailed: a,
          });
          if (E.success)
            return o("WAResultOrError").makeResult({
              mimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(b),
              plaintext: E.value,
              serverMediaType: b,
            });
          var I = E.error;
          switch (
            (S.WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Media Streaming failed to download progressive jpeg. Reason: ",
                  ". PlaintextHash: ",
                  "",
                ])),
              I,
              o("WAHashUtils").sanitisePlaintextHash(i),
            ),
            I)
          ) {
            case "signature-expired":
            case "request-error":
              return (
                S.LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Skipping fallback for ",
                      ". PlaintextHash: ",
                      "",
                    ])),
                  I,
                  o("WAHashUtils").sanitisePlaintextHash(i),
                ),
                o("WAResultOrError").makeError(I)
              );
          }
        }
        e == null || e.addPoint("fallback_to_non_streaming_download");
        var T = D({
          hash: i,
          mediaEntry: l,
          progressiveJpegDetails: R,
          protocolMsgId: p,
          serverMediaType: b,
          handleMediaPreviewBeforeDownload: n,
          handleMediaPreviewDownloadFailed: a,
          downloadEntry: e.downloadEntry,
          triggerUIView: e.triggerUIView,
        });
        return (
          T.then(function (e) {
            return e.success === !1 ? L(null) : L(e.value);
          }),
          k({ downloadMediaMetric: e, mediaEntry: _.value })
        );
      },
      E = o("WAPromiseManagement").cacheWhilePending(function (e) {
        var t = e.hash;
        return t;
      }, L),
      k = async function (t) {
        var e = t.abortSignal,
          n = t.downloadMediaMetric,
          r = t.mediaEntry,
          a = t.onCiphertext,
          i = r.directPath,
          l = r.fileEncSha256,
          s = r.fileSha256,
          u = r.mediaKey,
          c = r.serverMediaType,
          d = await T({
            abortSignal: e,
            downloadFlow: n,
            mediaTypeDetails: { mediaType: c, type: "regular" },
            directPath: i,
            fileEncSha256: l,
            fileSha256: s,
            mediaKey: u,
            onCiphertext: a,
          });
        return d.success
          ? o("WAResultOrError").makeResult({
              mimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(c),
              plaintext: d.value,
              serverMediaType: c,
            })
          : d;
      },
      I = o("WAPromiseManagement").cacheWhilePending(
        function (e) {
          var t = e.hash;
          return t;
        },
        function (t) {
          var n = t.hash,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = o("WAPrepareMediaDownload").prepareMediaDownload({
              hash: n,
              mediaDownloadFlow: r.downloadMediaMetric,
              mediaEntry: r.mediaEntry,
              logger: S,
            }),
            i = a.logDownloadResult;
          return i(k(r));
        },
      );
    async function T(e) {
      var t = e.abortSignal,
        n = e.directPath,
        r = e.downloadFlow,
        a = e.fileEncSha256,
        i = e.fileSha256,
        l = e.mediaKey,
        s = e.mediaTypeDetails,
        u = e.onCiphertext,
        c = o("WAHashUtils").toPlaintextHash(i),
        d = await o("WADownloadAndDecryptMedia").downloadAndDecryptMedia({
          abortSignal: t,
          directPath: n,
          eventFlow: r,
          fileEncSha256: a,
          mediaKey: l,
          mediaTypeDetails: s,
          onCiphertext: u,
          plaintextHash: c,
        });
      if (d.success === !1) {
        var m = d.error;
        switch (m) {
          case "signature-expired":
          case "media-not-found":
            return o("WAResultOrError").makeError(m);
          case "enc-hash-mismatch":
            return (
              S.ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadMedia: enc-hash-mismatch",
                  ])),
              ),
              o("WAResultOrError").makeError(m)
            );
          default:
            return o("WAResultOrError").makeError(m);
        }
      } else {
        var _ = d.value;
        return o("WAResultOrError").makeResult(_);
      }
    }
    function D(e) {
      var t = e.downloadEntry,
        n = e.handleMediaPreviewBeforeDownload,
        r = e.handleMediaPreviewDownloadFailed,
        a = e.hash,
        i = e.mediaEntry,
        l = e.progressiveJpegDetails,
        s = e.protocolMsgId,
        u = e.serverMediaType,
        c = e.triggerUIView;
      return l == null
        ? o("WADownloadDownloadablePreview").maybeDownloadDownloadablePreview(
            s,
            a,
            u,
            i,
            t,
            {
              handleMediaPreviewBeforeDownload: n,
              handleMediaPreviewDownloadFailed: r,
            },
            c,
          )
        : o("WADownloadProgressiveJpegPreview")
            .maybeDownloadProgressiveJpegPreview({
              protocolMsgId: s,
              hash: a,
              serverMediaType: u,
              mediaEntry: i,
              progressiveJpegDetails: l,
              handleMediaPreviewBeforeDownload: n,
              handleMediaPreviewDownloadFailed: r,
              downloadEntry: t,
              triggerUIView: c,
            })
            .then(function (e) {
              return e.success !== !0
                ? o(
                    "WADownloadDownloadablePreview",
                  ).maybeDownloadDownloadablePreview(
                    s,
                    a,
                    u,
                    i,
                    t,
                    {
                      handleMediaPreviewBeforeDownload: n,
                      handleMediaPreviewDownloadFailed: r,
                    },
                    c,
                  )
                : e;
            });
    }
    async function x(e) {
      var t = e.directPath,
        n = e.downloadFlow,
        r = e.fileEncSha256,
        a = e.fileSha256,
        i = e.handleMediaPreviewBeforeDownload,
        l = e.handleMediaPreviewBlob,
        s = e.handleMediaPreviewDownloadFailed,
        u = e.hash,
        c = e.mediaKey,
        d = e.progressiveJpegDetails,
        m = e.serverMediaType,
        p = S.TAGS(["MediaStreaming"]);
      (p.LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "Using Media Streaming to download ProgressiveJpeg. PlaintextHash: ",
            "",
          ])),
        o("WAHashUtils").sanitisePlaintextHash(u),
      ),
        n.addPoint("media_streaming_start"));
      var R =
        o("WADownloadProgressiveJpegPreview").getPreviewTargetScan(
          d.scanLengths,
        ) - 1;
      (p.LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "Targeting scanIndex ",
            " for preview. PlaintextHash: ",
            "",
          ])),
        R,
        o("WAHashUtils").sanitisePlaintextHash(u),
      ),
        n.addAnnotations({ int: { scans: d.scanLengths.length } }),
        i(u));
      var L = await o(
        "WADownloadProgressiveJpegPlaintextStreamer",
      ).downloadProgressiveJpegPlaintextUsingStreams({
        directPath: t,
        eventFlow: n,
        fileEncSha256: r,
        mediaKey: c,
        progressiveJpegDetails: d,
        serverMediaType: m,
      });
      if (L.success === !1)
        return (
          n.addPoint("media_streaming_fail", {
            string: { wa_media_download_streaming_fail_reason: L.error },
          }),
          s(u, L.error),
          L
        );
      n.addPoint("download_pjpeg_preview_start");
      var E = [],
        k = 0;
      try {
        var I = !1,
          T = !1,
          D;
        try {
          for (
            var x = babelHelpers.asyncIterator(
                o("WAStreamAsyncIterator").streamAsyncIterator(L.value),
              ),
              $;
            (I = !($ = await x.next()).done);
            I = !1
          ) {
            var P = $.value;
            {
              if (P == null) continue;
              if (
                (p.LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Processing scan ",
                      " for plaintextHash ",
                      "",
                    ])),
                  k,
                  o("WAHashUtils").sanitisePlaintextHash(u),
                ),
                E.push(P),
                k === R)
              ) {
                (n.addPoint("media_streaming_preview_processed"),
                  p.LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "Handling preview from scan ",
                        " for plaintextHash ",
                        "",
                      ])),
                    k,
                    o("WAHashUtils").sanitisePlaintextHash(u),
                  ));
                var N = o("WAByteArray").uint8ArrayToBuffer(
                  o("WATypedArraysConcat").concatTypedArrays(
                    Uint8Array,
                    [].concat(E, [
                      o("WAProgressiveJpegAddJPEGTrailingTag")
                        .JPEG_TRAILING_TAG,
                    ]),
                  ),
                );
                (l(N), n.addPoint("download_pjpeg_preview_end"));
              }
              k++;
            }
          }
        } catch (e) {
          ((T = !0), (D = e));
        } finally {
          try {
            I && x.return != null && (await x.return());
          } finally {
            if (T) throw D;
          }
        }
        k < R &&
          (p.ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "pjpeg stream ended before reaching previewTargetScanIndex for plaintextHash ",
                "",
              ])),
            o("WAHashUtils").sanitisePlaintextHash(u),
          ),
          n.addPoint("download_pjpeg_preview_fail"));
        var M = o("WAByteArray").uint8ArrayToBuffer(
            o("WATypedArraysConcat").concatTypedArrays(
              Uint8Array,
              [].concat(E),
            ),
          ),
          w = await o("WACryptoSha256").sha256(M);
        return o("WACryptoUtils").arrayBuffersEqual(a, w)
          ? (p.LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "Media streaming for ProgressiveJpeg download successful. PlaintextHash: ",
                  "",
                ])),
              o("WAHashUtils").sanitisePlaintextHash(u),
            ),
            n.addPoint("media_streaming_end"),
            o("WAResultOrError").makeResult(M))
          : (p.WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "Media streaming for ProgressiveJpeg download failed due to plaintext hash mismatch. PlaintextHash: ",
                  "",
                ])),
              o("WAHashUtils").sanitisePlaintextHash(u),
            ),
            n.addPoint("media_streaming_fail", {
              string: {
                wa_media_download_streaming_fail_reason: "hash-mismatch",
              },
            }),
            o("WAResultOrError").makeError("hash-mismatch"));
      } catch (e) {
        return (
          p.ERROR(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "Exception occurred during Media Streaming: Reason: ",
                "",
              ])),
            e,
          ),
          k < R &&
            (n.addPoint("download_pjpeg_preview_fail"),
            s(u, o("WAErrorMessage").maybeGetMessageFromError(e))),
          n == null ||
            n.addPoint("media_streaming_fail", {
              string: {
                wa_media_download_streaming_fail_reason:
                  o("WAErrorMessage").maybeGetMessageFromError(e),
              },
            }),
          o("WAResultOrError").makeError("stream-error")
        );
      }
    }
    ((l.mediaDownloadLogger = S),
      (l.downloadMedia = R),
      (l.downloadFullMediaOnly = k),
      (l.cachedDownloadFullMediaOnly = I),
      (l.downloadMediaImpl = T));
  },
  98,
);
