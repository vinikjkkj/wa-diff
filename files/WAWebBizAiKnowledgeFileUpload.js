__d(
  "WAWebBizAiKnowledgeFileUpload",
  [
    "WALogger",
    "WAWebCryptoCalculateFilehash",
    "WAWebFileUtils",
    "WAWebMmsMediaTypes",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { isSuccess: !1 };
    async function u(t, n) {
      try {
        var a = await Promise.all([
            o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(t),
            o("WAWebFileUtils").blobToArrayBuffer(t),
          ]),
          i = a[0],
          l = a[1];
        if (i == null) return s;
        var u = await r("WAWebUploadManager").unencryptedUpload({
          file: l,
          hash: i,
          type: o("WAWebMmsMediaTypes").MEDIA_TYPES.MAIBA_FILE,
          signal: n != null ? n : new AbortController().signal,
          uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
            .PRODUCT_CATALOG,
          isViewOnce: !1,
          generateThumbnailOnServer: !1,
        });
        return u.handle != null
          ? { isSuccess: !0, handle: u.handle, fileName: t.name }
          : s;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "knowledge file upload failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("biz-ai-knowledge-upload"),
          s
        );
      }
    }
    l.uploadKnowledgeFile = u;
  },
  98,
);
