__d(
  "WAWebMediaBizCoverPhoto",
  [
    "WAWebFileUtils",
    "WAWebHttpErrors",
    "WAWebMmsMediaTypes",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = await o("WAWebFileUtils").blobToArrayBuffer(e),
        i = await r("WAWebUploadManager").uploadCoverPhoto({
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
    }
    l.uploadBizCoverPhoto = e;
  },
  98,
);
