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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("isStringNullOrEmpty")(e.thumbnailDirectPath)) {
            yield (
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
          yield c(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield t.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .DOCUMENT_DOWNLOAD,
              isUserInitiated: !1,
            });
            var n = o("WAWebStateUtils").unproxy(t).mediaObject;
            if (n == null) return;
            var a = o("WAWebStateUtils").unproxy(t.unsafe()).mediaData
                .mediaBlob,
              i = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(
                a,
                t,
              ),
              l = yield o("WAWebStickerPackUtils").generateStickerGridThumbnail(
                i,
              ),
              s = yield o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
            n.consolidate({
              fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(
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
        })),
        d.apply(this, arguments)
      );
    }
    l.downloadStickerPackThumbnail = s;
  },
  98,
);
