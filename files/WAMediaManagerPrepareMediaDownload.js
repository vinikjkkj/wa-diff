__d(
  "WAMediaManagerPrepareMediaDownload",
  [
    "Promise",
    "WAErrorMessage",
    "WAGetAgeBucketForMediaKeyTimestamp",
    "WAHashUtils",
    "WAMediaQplHelper",
    "WAPrewarmMediaValidate",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 0;
    function d(t) {
      var r,
        a = t.hash,
        i = t.logger,
        l = t.mediaDownloadFlow,
        d = t.mediaEntry,
        m = d.directPath,
        p = d.downloadableThumbnail,
        _ = d.mediaKeyTimestamp,
        f = d.serverMediaType,
        g = d.size;
      o("WAPrewarmMediaValidate").prewarmMediaValidate(f);
      var h = o(
        "WAGetAgeBucketForMediaKeyTimestamp",
      ).getAgeBucketForMediaKeyTimestamp(_);
      i.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "start download ",
            ". entry: ",
            " mediaKeyTimestampAgeBucket: ",
            ", size: ",
            ", serverMediaType: ",
            "",
          ])),
        o("WAHashUtils").sanitisePlaintextHash(a),
        l.downloadEntry,
        h,
        g,
        f,
      );
      var y =
        (r = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).maybeGetProgressiveJpegDetailsUsingMediaEntry(d).value) != null
          ? r
          : null;
      return (
        l.addPoint("wa_protocol_media_download_start", {
          bool: {
            duplicateDirectPath: (p == null ? void 0 : p.directPath) === m,
            hasDownloadableThumbnail:
              (p == null ? void 0 : p.directPath) != null,
            isProgressiveJpeg: y != null,
          },
          string: { mediaKeyTimestampAgeBucket: h, mediaType: f },
        }),
        {
          logDownloadResult: function (t) {
            return (
              c++,
              l.addAnnotations({ int: { concurrentDownloadCount: c } }),
              t
                .then(function (e) {
                  if (e.success) {
                    var t =
                      e.value.validatedResult.validatedPlaintext.byteLength;
                    l.addPoint("wa_protocol_media_download_end", {
                      string: {
                        media_size:
                          o(
                            "WAMediaQplHelper",
                          ).convertIntegerSizeToStringBucket(t),
                      },
                    });
                  } else
                    l.addPoint("wa_protocol_media_download_fail", {
                      string: {
                        wa_protocol_media_download_fail_reason: e.error,
                      },
                    });
                  return e;
                })
                .catch(function (e) {
                  l.addPoint("wa_protocol_media_download_fail", {
                    string: {
                      wa_protocol_media_download_fail_reason: "runtime-error",
                    },
                  });
                  var t = o("WAErrorMessage").maybeGetMessageFromError(e);
                  return (
                    i.ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to download media due to runtime-error: ",
                          "",
                        ])),
                      t,
                    ),
                    (u || (u = n("Promise"))).resolve(
                      o("WAResultOrError").makeError("runtime-error"),
                    )
                  );
                })
                .finally(function () {
                  c--;
                })
            );
          },
        }
      );
    }
    l.mediaManagerPrepareMediaDownload = d;
  },
  98,
);
