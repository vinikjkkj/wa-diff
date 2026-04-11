__d(
  "WAWebDownloadProgressiveJpegThumbnail",
  [
    "WAAbortError",
    "WALogger",
    "WANullthrows",
    "WAWebDownloadManager",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMmsMediaTypes",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.isPreload,
            i = t.msg,
            l = t.scanCount,
            d = l === void 0 ? 1 : l,
            m = t.signal;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadProgressiveJpegThumbnail: start",
              ])),
          );
          var p = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "DownloadProgressiveJpegThumbnail",
          });
          try {
            var _,
              f = (_ = r("WANullthrows"))(i.scanLengths),
              g = _(i.scansSidecar),
              h = _(i.mediaObject),
              y = _(h.filehash),
              C = i.directPath,
              b = i.encFilehash,
              v = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: C,
                encFilehash: b,
                filehash: y,
                mediaKey: i.mediaKey,
                mediaKeyTimestamp: i.mediaKeyTimestamp,
                mimetype: "image/jpeg",
                type: o("WAWebMmsMediaTypes").getMsgMediaType(i),
                signal: m || new AbortController().signal,
                userDownloadAttemptCount: 0,
                progressiveJpegOpts: {
                  mimetype: "image/jpeg",
                  scansSidecar: g,
                  scanLengths: f,
                  scanCount: d,
                },
                isPreload: a,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: p,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                  i.unsafe(),
                ),
              });
            (h.consolidate({
              fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(
                v,
                "image/jpeg",
              ),
            }),
              p.endSuccess(),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadProgressiveJpegThumbnail: success",
                  ])),
              ));
          } catch (e) {
            if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadProgressiveJpegThumbnail aborted",
                  ])),
              ),
                p.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (p.endFailWithError(
              "download_failed",
              r("getErrorSafe")(e).message,
            ),
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose(
                      ["media.downloadProgressiveJpegThumbnail: error\n", ""],
                      ["media.downloadProgressiveJpegThumbnail: error\\n", ""],
                    )),
                  r("WAWebSerializeError")(e),
                )
                .sendLogs("download-pjpeg-thumbnail-failed"));
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.downloadProgressiveJpegThumbnail = d;
  },
  98,
);
