__d(
  "WAPrepareMediaDownload",
  [
    "Promise",
    "WAErrorMessage",
    "WAGetAgeBucketForMediaKeyTimestamp",
    "WAHashUtils",
    "WAMediaQplHelper",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        typeof ((e = navigator.storage) == null ? void 0 : e.getDirectory) ==
        "function",
      m = typeof self.caches == "object",
      p = 0;
    function _(e) {
      var t,
        r = e.hash,
        a = e.logger,
        i = e.mediaDownloadFlow,
        l = e.mediaEntry,
        _ = l.directPath,
        f = l.downloadableThumbnail,
        g = l.mediaKeyTimestamp,
        h = l.serverMediaType,
        y = l.size,
        C = o(
          "WAGetAgeBucketForMediaKeyTimestamp",
        ).getAgeBucketForMediaKeyTimestamp(g);
      a.LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "start download ",
            ". mediaKeyTimestampAgeBucket: ",
            ", size: ",
            ", serverMediaType: ",
            "",
          ])),
        o("WAHashUtils").sanitisePlaintextHash(r),
        C,
        y,
        h,
      );
      var b =
        (t = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).maybeGetProgressiveJpegDetailsUsingMediaEntry(l).value) != null
          ? t
          : null;
      return (
        i.addPoint("wa_protocol_media_download_start", {
          string: {
            mediaType: h,
            mediaKeyTimestampAgeBucket: C,
            sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(r),
          },
          bool: {
            isOPFSSupported: d,
            isWebCacheSupported: m,
            duplicateDirectPath: (f == null ? void 0 : f.directPath) === _,
            hasDownloadableThumbnail:
              (f == null ? void 0 : f.directPath) != null,
            isProgressiveJpeg: b != null,
          },
        }),
        {
          logDownloadResult: function (t) {
            return (
              p++,
              i.addAnnotations({ int: { concurrentDownloadCount: p } }),
              t
                .then(function (e) {
                  if (e.success) {
                    var t = e.value.plaintext.byteLength;
                    i.addPoint("wa_protocol_media_download_end", {
                      string: {
                        media_size:
                          o(
                            "WAMediaQplHelper",
                          ).convertIntegerSizeToStringBucket(t),
                      },
                    });
                  } else
                    i.addPoint("wa_protocol_media_download_fail", {
                      string: {
                        wa_protocol_media_download_fail_reason: e.error,
                      },
                    });
                  return e;
                })
                .catch(function (e) {
                  i.addPoint("wa_protocol_media_download_fail", {
                    string: {
                      wa_protocol_media_download_fail_reason: "runtime-error",
                    },
                  });
                  var t = o("WAErrorMessage").maybeGetMessageFromError(e);
                  return (
                    a.ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to download media due to runtime-error: ",
                          "",
                        ])),
                      t,
                    ),
                    (c || (c = n("Promise"))).resolve(
                      o("WAResultOrError").makeError("runtime-error"),
                    )
                  );
                })
                .finally(function () {
                  p--;
                })
            );
          },
        }
      );
    }
    l.prepareMediaDownload = _;
  },
  98,
);
