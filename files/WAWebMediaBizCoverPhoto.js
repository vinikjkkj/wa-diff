__d(
  "WAWebMediaBizCoverPhoto",
  [
    "WAWebFileUtils",
    "WAWebHttpErrors",
    "WAWebMmsMediaTypes",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WAWebFileUtils").blobToArrayBuffer(e),
            i = yield r("WAWebUploadManager").uploadCoverPhoto({
              file: a,
              hash: t,
              signal: n,
              type: o("WAWebMmsMediaTypes").MEDIA_TYPES.BIZ_COVER_PHOTO,
              uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                .UNKNOWN,
              isViewOnce: !1,
            }),
            l = i.fbid,
            s = i.metaHmac,
            u = i.ts;
          if (l != null && u != null && s != null)
            return { id: l, ts: u, metaHmac: s };
          throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
            "mmsUpload: missing fields in upload response",
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.uploadBizCoverPhoto = e;
  },
  98,
);
