__d(
  "WAWebDownloadProgressiveJpegThumbnail",
  [
    "WAAbortError",
    "WALogger",
    "WANullthrows",
    "WAWebDownloadManager",
    "WAWebHttpErrors",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.isPreload,
            i = t.msg,
            l = t.scanCount,
            m = l === void 0 ? 1 : l,
            p = t.signal;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadProgressiveJpegThumbnail: start",
              ])),
          );
          var _ = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "DownloadProgressiveJpegThumbnail",
          });
          try {
            var f,
              g = (f = r("WANullthrows"))(i.scanLengths),
              h = f(i.scansSidecar),
              y = f(i.mediaObject),
              C = f(y.filehash),
              b = i.directPath,
              v = i.encFilehash,
              S = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: b,
                encFilehash: v,
                filehash: C,
                mediaKey: i.mediaKey,
                mediaKeyTimestamp: i.mediaKeyTimestamp,
                mimetype: "image/jpeg",
                type: o("WAWebMmsMediaTypes").getMsgMediaType(i),
                signal: p || new AbortController().signal,
                userDownloadAttemptCount: 0,
                progressiveJpegOpts: {
                  mimetype: "image/jpeg",
                  scansSidecar: h,
                  scanLengths: g,
                  scanCount: m,
                },
                isPreload: a,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: _,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                  i.unsafe(),
                ),
              });
            (y.consolidate({
              fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(
                S,
                "image/jpeg",
              ),
            }),
              _.endSuccess(),
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
                _.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (_.endFailWithError(
              "download_failed",
              r("getErrorSafe")(e).message,
            ),
              e instanceof o("WAWebHttpErrors").HttpNetworkError ||
              e instanceof o("WAWebMmsClientErrors").MediaNotFoundError
                ? o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "media.downloadProgressiveJpegThumbnail: network error\n",
                            "",
                          ],
                          [
                            "media.downloadProgressiveJpegThumbnail: network error\\n",
                            "",
                          ],
                        )),
                      r("WAWebSerializeError")(e),
                    )
                    .verbose()
                : o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "media.downloadProgressiveJpegThumbnail: error\n",
                            "",
                          ],
                          [
                            "media.downloadProgressiveJpegThumbnail: error\\n",
                            "",
                          ],
                        )),
                      r("WAWebSerializeError")(e),
                    )
                    .sendLogs("download-pjpeg-thumbnail-failed"));
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.downloadProgressiveJpegThumbnail = m;
  },
  98,
);
