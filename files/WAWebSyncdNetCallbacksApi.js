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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t) {
        var e = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
          entryPoint: "SyncdNetCallbacks",
        });
        return r("WAWebUploadManager")
          .encryptAndUpload({
            blob: t,
            signal: new AbortController().signal,
            type: "md-app-state",
            uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
              .UNKNOWN,
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
      },
      u = async function (n, a, i) {
        var t = n.directPath,
          l = n.fileEncSha256,
          s = n.fileSha256,
          u = n.mediaKey,
          c = {
            directPath: t,
            encFilehash: o("WABase64").encodeB64(l),
            filehash: o("WABase64").encodeB64(s),
            mediaKey: o("WABase64").encodeB64(u),
            type: "md-app-state",
            userDownloadAttemptCount: 0,
            downloadOrigin: o("WAWebWamEnumDownloadOriginType")
              .DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC,
          },
          d = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "SyncdNetCallbacks",
          });
        try {
          var m = await o(
            "WAWebDownloadManager",
          ).downloadManager.downloadAndMaybeDecrypt(
            babelHelpers.extends(
              { signal: new AbortController().signal, downloadQpl: d },
              c,
            ),
          );
          return (d.endSuccess(), m);
        } catch (t) {
          d.endFailWithError("download_failed", r("getErrorSafe")(t).message);
          var p = o("WABase64").encodeB64(n.fileEncSha256).length;
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
              a,
              n.fileSizeBytes,
              p,
              i,
            ),
            t instanceof o("WAWebMmsClientErrors").MediaNotFoundError
              ? (o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric(
                  a === "patch"
                    ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                        .MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_PATCH_EXPIRED
                    : o("WAWebWamEnumMdSyncdFatalErrorCode")
                        .MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_EXPIRED,
                  i,
                ),
                new (o("WAWebSyncdError").SyncdFatalError)(
                  "external patch expired",
                ))
              : t
          );
        }
      };
    ((l.uploadSyncExternalPatch = s), (l.downloadSyncBlob = u));
  },
  98,
);
