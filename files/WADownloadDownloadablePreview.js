__d(
  "WADownloadDownloadablePreview",
  [
    "WADownloadMedia",
    "WAMediaCrypto",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WAStartMediaDownloadQplFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WADownloadMedia").mediaDownloadLogger.TAGS([
        "DownloadDownloadablePreview",
      ]);
    async function f(t, n, r, a, i, l, f) {
      var g = l.handleMediaPreviewBeforeDownload,
        h = l.handleMediaPreviewDownloadFailed,
        y = a.downloadableThumbnail,
        C = y == null ? void 0 : y.directPath,
        b = C != null,
        v = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).maybeGetProgressiveJpegDetailsUsingMediaEntry(a);
      if (
        (_.LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "thumbnail_available: ",
              "",
            ])),
          b,
        ),
        y == null || C == null)
      )
        return (
          _.LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "No downloadableThumbnail. Skipping...",
              ])),
          ),
          o("WAResultOrError").makeError("preview-not-supported")
        );
      _.LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "DownloadableThumbnail exists. Attempting to download.",
          ])),
      );
      var S = y.fileEncSha256,
        R = y.fileSha256,
        L = y.mediaKey,
        E = y.objectId,
        k = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
          protocolMsgId: t,
          downloadEntry: i,
          msgType: null,
          triggerUIView: f,
          isPreview: !0,
        });
      if (
        (k.addAnnotations({
          bool: {
            duplicateDirectPath: C === a.directPath,
            isProgressiveJpeg: v.success === !0,
            hasObjectId: E != null,
          },
          string: {
            mediaType: "preview",
            fullSizeMediaType: a.serverMediaType,
          },
        }),
        k.addPoint("wa_protocol_media_download_start"),
        C == null || S == null || R == null || L == null)
      )
        return (
          _.ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "media: mediaPreview - mediaEntryData ",
                " is incomplete for media preview",
              ])),
            a,
          ),
          k.endFail("wa_protocol_media_download_fail", {
            string: {
              wa_protocol_media_download_fail_reason:
                "preview-incomplete-media-entry",
            },
          }),
          o("WAResultOrError").makeError("media-entry-invalid")
        );
      var I = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(r);
      if (I == null)
        return (
          _.ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "media: mediaPreview - unsupported preview media type ",
                "",
              ])),
            r,
          ),
          k.endFail("wa_protocol_media_download_fail", {
            string: {
              wa_protocol_media_download_fail_reason:
                "preview-unsupported-type",
            },
          }),
          o("WAResultOrError").makeError("request-error")
        );
      await g(n);
      var T = await o("WADownloadMedia").downloadMediaImpl({
        downloadFlow: k,
        mediaTypeDetails: { messageType: I, type: "preview" },
        directPath: C,
        fileEncSha256: S,
        fileSha256: R,
        mediaKey: L,
      });
      return T.success === !1
        ? (_.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "failed to download media. Reason: ",
                "",
              ])),
            T.error,
          ),
          h(n, T.error),
          k.endFail("wa_protocol_media_download_fail", {
            string: { wa_protocol_media_download_fail_reason: T.error },
          }),
          T)
        : (_.LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "finished downloading",
              ])),
          ),
          k.addPoint("wa_protocol_media_download_end"),
          k.endSuccess(),
          o("WAResultOrError").makeResult(T.value));
    }
    l.maybeDownloadDownloadablePreview = f;
  },
  98,
);
