__d(
  "WAWebBizAiKnowledgeFileUpload",
  [
    "Promise",
    "WALogger",
    "WAWebCryptoCalculateFilehash",
    "WAWebFileUtils",
    "WAWebMmsMediaTypes",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { isSuccess: !1 };
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          try {
            var i = yield (s || (s = n("Promise"))).all([
                o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(t),
                o("WAWebFileUtils").blobToArrayBuffer(t),
              ]),
              l = i[0],
              c = i[1];
            if (l == null) return u;
            var d = yield r("WAWebUploadManager").unencryptedUpload({
              file: c,
              hash: l,
              type: o("WAWebMmsMediaTypes").MEDIA_TYPES.MAIBA_FILE,
              signal: a != null ? a : new AbortController().signal,
              uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                .PRODUCT_CATALOG,
              fileOrigin: null,
              isViewOnce: !1,
              generateThumbnailOnServer: !1,
            });
            return d.handle != null
              ? { isSuccess: !0, handle: d.handle, fileName: t.name }
              : u;
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
              u
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.uploadKnowledgeFile = c;
  },
  98,
);
