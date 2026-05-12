__d(
  "WAWebUploadNativeAdMedia",
  [
    "Promise",
    "WALogger",
    "WAWebCryptoCalculateFilehash",
    "WAWebMmsMediaTypes",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a) {
      return o("WAWebCryptoCalculateFilehash")
        .calculateFilehashFromBlob(t)
        .then(function (i) {
          return new (s || (s = n("Promise")))(function (n, l) {
            if (a.aborted) {
              l(r("err")("uploadBlobAsNativeAdMedia: AbortError"));
              return;
            }
            var s = new FileReader();
            ((s.onload = function () {
              if (a.aborted) {
                l(r("err")("uploadBlobAsNativeAdMedia: AbortError"));
                return;
              }
              var t = s.result;
              if (t == null || typeof t != "object") {
                l(r("err")("uploadBlobAsNativeAdMedia: FileReader error"));
                return;
              }
              r("WAWebUploadManager")
                .unencryptedUpload({
                  file: t,
                  generateThumbnailOnServer: !1,
                  hash: i,
                  isViewOnce: !1,
                  signal: a,
                  type: o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE,
                  uploadOrigin: o("WAWebWamEnumUploadOriginType")
                    .UPLOAD_ORIGIN_TYPE.UNKNOWN,
                })
                .then(function (t) {
                  (t.fbid == null &&
                    (o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadBlobAsNativeAdMedia: missing fbid",
                          ])),
                      )
                      .sendLogs("ctwa-web-native-ad-media-upload-missing-fbid"),
                    l(r("err")("uploadBlobAsNativeAdMedia: missing fbid"))),
                    n(String(t.fbid)));
                });
            }),
              s.readAsArrayBuffer(t));
          });
        });
    }
    l.uploadBlobAsNativeAdMedia = u;
  },
  98,
);
