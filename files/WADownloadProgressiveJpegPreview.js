__d(
  "WADownloadProgressiveJpegPreview",
  [
    "WADownloadMedia",
    "WADownloadProgressiveJpegPlaintext",
    "WAGlobals",
    "WALoggerTag",
    "WAProgressiveJpegGetTargetScanLengthForBytes",
    "WAResultOrError",
    "WAStartMediaDownloadQplFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WADownloadMedia").mediaDownloadLogger.TAGS([
        r("WALoggerTag").MediaPreview,
      ]),
      c = 3;
    async function d(t) {
      var n = t.downloadEntry,
        r = t.handleMediaPreviewBeforeDownload,
        a = t.handleMediaPreviewDownloadFailed,
        i = t.hash,
        l = t.mediaEntry,
        c = t.progressiveJpegDetails,
        d = t.protocolMsgId,
        p = t.serverMediaType,
        _ = t.triggerUIView,
        f = l.directPath,
        g = l.fileEncSha256,
        h = l.mediaKey,
        y = l.size;
      if (f == null || g == null || h == null)
        return o("WAResultOrError").makeError("pjpeg-failed");
      var C = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
        protocolMsgId: d,
        downloadEntry: n,
        isPreview: !0,
        msgType: null,
        triggerUIView: _,
      });
      (C.addAnnotations({
        bool: { isProgressiveJpeg: !0 },
        string: { mediaType: "preview", fullSizeMediaType: l.serverMediaType },
        int: { mediaEntrySize: l.size },
      }),
        u.LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Starting progressiveJpeg preview download",
            ])),
        ),
        C.addPoint("wa_protocol_media_download_start"));
      var b =
          o("WAGlobals").getConfig().pjpegPreviewAvoidLastScan() === !0
            ? c.scanLengths.length - 1
            : c.scanLengths.length,
        v = Math.min(m(c.scanLengths, y), b);
      await r(i);
      var S = await o(
        "WADownloadProgressiveJpegPlaintext",
      ).downloadProgressiveJpegPlaintext({
        directPath: f,
        eventFlow: C,
        fileEncSha256: g,
        mediaKey: h,
        mediaTypeDetails: { mediaType: p, type: "regular" },
        progressiveJpegDetails: c,
        plaintextHash: i,
        targetScan: v,
        size: y,
      });
      if (!S.success)
        return (
          a(i, S.error),
          C.endFail("wa_protocol_media_download_fail", {
            string: { wa_protocol_media_download_fail_reason: S.error },
          }),
          o("WAResultOrError").makeError("pjpeg-failed")
        );
      var R = S.value;
      return (
        u.LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Finished progressiveJpeg preview download",
            ])),
        ),
        C.addPoint("wa_protocol_media_download_end"),
        C.endSuccess(),
        o("WAResultOrError").makeResult(R)
      );
    }
    function m(e, t) {
      var n = o("WAGlobals").getConfig().jpegThumbnailTargetByteSizeKB() * 1024,
        r = o(
          "WAProgressiveJpegGetTargetScanLengthForBytes",
        ).getTargetScanBasedOnByteSize(e, n);
      return (
        (t == null || t === 0) && (r = Math.min(r, e.length - 1)),
        (r = Math.max(r, c)),
        r
      );
    }
    function p(e) {
      var t = e.abortSignal,
        n = e.hash,
        r = e.mediaDownloadFlow,
        a = e.mediaEntry,
        i = e.onCiphertext,
        l = e.progressiveJpegDetails,
        s = e.serverMediaType,
        u = a.directPath,
        c = a.fileEncSha256,
        d = a.mediaKey,
        p = a.size,
        _ =
          o("WAGlobals").getConfig().pjpegPreviewAvoidLastScan() === !0
            ? l.scanLengths.length - 1
            : l.scanLengths.length,
        f = Math.min(m(l.scanLengths, p), _);
      return o(
        "WADownloadProgressiveJpegPlaintext",
      ).downloadProgressiveJpegPlaintext({
        abortSignal: t,
        directPath: u,
        fileEncSha256: c,
        mediaKey: d,
        mediaTypeDetails: { mediaType: s, type: "regular" },
        onCiphertext: i,
        progressiveJpegDetails: l,
        plaintextHash: n,
        targetScan: f,
        size: p,
        eventFlow: r,
      });
    }
    ((l.maybeDownloadProgressiveJpegPreview = d),
      (l.getPreviewTargetScan = m),
      (l.maybeDownloadProgressiveJpegPreviewV2 = p));
  },
  98,
);
