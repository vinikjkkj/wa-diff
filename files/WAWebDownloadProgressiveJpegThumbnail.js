__d(
  "WAWebDownloadProgressiveJpegThumbnail",
  [
    "WAAbortError",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebHttpErrors",
    "WAWebMediaFileErrors",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
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
          var _ = r("WAWebMediaGetDownloadOriginForMsg")(i.unsafe()),
            f = {
              callsite: "DOWNLOAD_PROGRESSIVE_JPEG_THUMBNAIL",
              downloadOrigin: o(
                "WAWebThumbnailOutcomeLogger",
              ).thumbnailDownloadOriginFromWam(_),
              mediaType: o(
                "WAWebThumbnailOutcomeLogger",
              ).thumbnailMediaTypeFromMsgType(i.type),
            },
            g = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadProgressiveJpegThumbnail",
            });
          try {
            var h,
              y = (h = r("nullthrows"))(i.scanLengths),
              C = h(i.scansSidecar),
              b = h(i.mediaObject),
              v = h(b.filehash),
              S = i.directPath,
              R = i.encFilehash,
              L = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: S,
                encFilehash: R,
                filehash: v,
                mediaKey: i.mediaKey,
                mediaKeyTimestamp: i.mediaKeyTimestamp,
                mimetype: "image/jpeg",
                type: o("WAWebMmsMediaTypes").getMsgMediaType(i),
                signal: p || new AbortController().signal,
                userDownloadAttemptCount: 0,
                progressiveJpegOpts: {
                  mimetype: "image/jpeg",
                  scansSidecar: C,
                  scanLengths: y,
                  scanCount: m,
                },
                isPreload: a,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: g,
                downloadOrigin: _,
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
                  i.unsafe(),
                ),
              }),
              E = self.performance.now();
            (b.consolidate({
              fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(
                L,
                "image/jpeg",
              ),
            }),
              g.endSuccess(),
              o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                branch: "SERVER_THUMBNAIL",
                checkPerformed: !1,
                context: f,
                generationDurationMs: self.performance.now() - E,
                outcome: "OK",
              }),
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
                g.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (g.endFailWithError(
              "download_failed",
              r("getErrorSafe")(e).message,
            ),
              o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                branch: "SERVER_THUMBNAIL",
                checkPerformed: !1,
                context: f,
                generationDurationMs: null,
                outcome: "ERROR",
              }),
              e instanceof o("WAWebHttpErrors").HttpNetworkError ||
              e instanceof o("WAWebMmsClientErrors").MediaNotFoundError ||
              e instanceof o("WAWebMediaFileErrors").MediaDecryptionError
                ? o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "media.downloadProgressiveJpegThumbnail: expected error\n",
                            "",
                          ],
                          [
                            "media.downloadProgressiveJpegThumbnail: expected error\\n",
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
