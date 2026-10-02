__d(
  "WAWebSyncdNetCallbacksApi",
  [
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebMmsClientErrors",
    "WAWebStartMediaDownloadQpl",
    "WAWebStartMediaUploadQpl",
    "WAWebSyncdError",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUploadManager",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = function (t) {
        var e = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
          entryPoint: "SyncdNetCallbacks",
          mediaType: "md-app-state",
          byteLength: t.byteLength,
        });
        return r("WAWebUploadManager")
          .encryptAndUpload({
            blob: t,
            signal: new AbortController().signal,
            type: "md-app-state",
            uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
              .UNKNOWN,
            fileOrigin: null,
            userUploadAttemptCount: 0,
            forwardedFromWeb: !1,
            isViewOnce: !1,
            uploadQpl: e,
          })
          .then(function (e) {
            var t = e.directPath,
              n = e.encFilehash,
              a = e.handle,
              i = e.mediaKey;
            if (a == null)
              throw r("err")(
                "Missing handle after uploading external patch to mms4",
              );
            return {
              mediaKey: o("WABase64").decodeB64(i),
              directPath: t,
              encFilehash: o("WABase64").decodeB64(n),
              handle: a,
            };
          });
      };
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "SyncdNetCallbacks",
          });
          i.addAnnotations({ string: { syncdBlobType: n } });
          var l = t.directPath,
            u = t.fileEncSha256,
            c = t.fileSha256,
            d = t.mediaKey,
            m = {
              directPath: l,
              encFilehash: o("WABase64").encodeB64(u),
              filehash: o("WABase64").encodeB64(c),
              mediaKey: o("WABase64").encodeB64(d),
              type: "md-app-state",
              userDownloadAttemptCount: 0,
              downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                .DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC,
            };
          i.addPoint("download_options_ready");
          try {
            var p = yield o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt(
              babelHelpers.extends(
                { signal: new AbortController().signal, downloadQpl: i },
                m,
              ),
            );
            return (i.endSuccess(), p);
          } catch (l) {
            i.endFailWithError("download_failed", r("getErrorSafe")(l).message);
            var _ = o("WABase64").encodeB64(t.fileEncSha256).length;
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] download err ",
                    " size=",
                    " hashLen=",
                    " ",
                    "",
                  ])),
                n,
                t.fileSizeBytes,
                _,
                a,
              ),
              l instanceof o("WAWebMmsClientErrors").MediaNotFoundError
                ? (o("WAWebSyncdUploadFatalErrorMetric")
                    .uploadFatalErrorMetric({
                      collection: a,
                      mdFatalErrorCode:
                        n === "patch"
                          ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                              .MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_PATCH_EXPIRED
                          : o("WAWebWamEnumMdSyncdFatalErrorCode")
                              .MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_EXPIRED,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd] upload fatal error metric failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("syncd-fatal-error-metric-upload-failed");
                    }),
                  new (o("WAWebSyncdError").SyncdFatalError)(
                    "external patch expired",
                  ))
                : l
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.uploadSyncExternalPatch = u), (l.downloadSyncBlob = c));
  },
  98,
);
