__d(
  "WADownloadMediaPreviewV2",
  [
    "WADownloadMedia",
    "WADownloadProgressiveJpegPreview",
    "WAMediaCrypto",
    "WAMediaUtils",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.abortSignal,
        r = t.hash,
        a = t.logger,
        i = t.mediaDownloadFlow,
        l = t.mediaEntry,
        s = t.onCiphertext,
        u = t.progressiveJpegDetails,
        c = l.serverMediaType,
        d = o("WAMediaUtils").getMimeTypeFromServerMediaType(c),
        m =
          u == null
            ? o("WAResultOrError").makeError("jpeg-stream-not-supported")
            : await o(
                "WADownloadProgressiveJpegPreview",
              ).maybeDownloadProgressiveJpegPreviewV2({
                abortSignal: n,
                hash: r,
                serverMediaType: c,
                mediaEntry: l,
                onCiphertext: s,
                progressiveJpegDetails: u,
                mediaDownloadFlow: i,
              });
      if (m.success === !0)
        return o("WAResultOrError").makeResult({
          plaintext: m.value,
          mimeType: d,
          serverMediaType: c,
        });
      i.addPoint("fallback_to_downloadable_thumbnail");
      var p = l.downloadableThumbnail;
      if ((p == null ? void 0 : p.directPath) == null)
        return o("WAResultOrError").makeError("media-not-found");
      var _ = o("WAMediaUtils").validateDownloadableThumbnailForDownload(p);
      if (_.success === !1)
        return (
          a.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "preview mediaEntry is incomplete: ",
                "",
              ])),
            _.error,
          ),
          o("WAResultOrError").makeError(_.error[0])
        );
      var f = _.value,
        g = f.directPath,
        h = f.fileEncSha256,
        y = f.fileSha256,
        C = f.mediaKey,
        b = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(c);
      if (b == null) return o("WAResultOrError").makeError("request-error");
      var v = await o("WADownloadMedia").downloadMediaImpl({
        abortSignal: n,
        downloadFlow: i,
        mediaTypeDetails: { messageType: b, type: "preview" },
        directPath: g,
        fileEncSha256: h,
        fileSha256: y,
        mediaKey: C,
        onCiphertext: s,
      });
      return v.success === !1
        ? v
        : o("WAResultOrError").makeResult({
            plaintext: v.value,
            mimeType: d,
            serverMediaType: c,
          });
    }
    l.downloadMediaPreview = s;
  },
  98,
);
