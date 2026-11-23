__d(
  "WAWebStickerPackThumbnailDownload",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebCanvasUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaDownloadService",
    "WAWebMediaOpaqueData",
    "WAWebStateUtils",
    "WAWebStickerPackConstants",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      if (!r("isStringNullOrEmpty")(e.thumbnailDirectPath)) {
        await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMediaDownloadService").MediaDownloadService,
              ).downloadMmsThumbnail
            : r("WAWebMediaDownloadMmsThumbnail")
        )({
          msg: o("WAWebStateUtils").unproxy(e),
          chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
          isPreload: !1,
        });
        return;
      }
      await u(e);
    }
    async function u(t) {
      try {
        await t.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .DOCUMENT_DOWNLOAD,
          isUserInitiated: !1,
        });
        var n = o("WAWebStateUtils").unproxy(t).mediaObject;
        if (n == null) return;
        var a = o("WAWebStateUtils").unproxy(t.unsafe()).mediaData.mediaBlob,
          i = await o("WAWebStickerPackUtils").decompressStickerPackMedia(a, t),
          l = await o("WAWebStickerPackUtils").generateStickerGridThumbnail(i),
          s = await o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
        n.consolidate({
          fullPreviewData: await r("WAWebMediaOpaqueData").createFromData(
            s,
            "image/png",
          ),
          fullPreviewSize: {
            height: o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
            width: o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
          },
        });
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "StickerPackPreview: failed to generate grid thumbnail",
            ])),
        );
      }
    }
    l.downloadStickerPackThumbnail = s;
  },
  98,
);
