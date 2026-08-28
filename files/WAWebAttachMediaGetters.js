__d(
  "WAWebAttachMediaGetters",
  [
    "WAWebAttachMediaConstants",
    "WAWebFileUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMediaOpaqueData",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebTPPdfViewerGatingUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createAttachMediaCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("file"),
      f = c("filename"),
      g = c("fullPreview"),
      h = c("fullPreviewSize"),
      y = c("documentPageCount"),
      C = c("mimetype"),
      b = c("preview"),
      v = c("state"),
      S = c("type"),
      R = u(
        function (e) {
          var t = e[0];
          return t instanceof r("WAWebMediaOpaqueData")
            ? t.size()
            : t instanceof Blob
              ? t.size
              : null;
        },
        [_],
      ),
      L = u(
        function (e) {
          var t = e[0];
          return t ? o("WAWebFileUtils").getFileExtension(t) : null;
        },
        [f],
      ),
      E = u(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6];
          if (!t || !n) return !1;
          if (
            t === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            o("WAWebMimeTypes").isPdfDocument(n) &&
            a &&
            i !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR &&
            o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
          )
            return !0;
          if (!l) return !1;
          switch (t) {
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
              return !!a;
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
              return !(!s || !u);
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
            case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
              return !0;
            default:
              throw r("err")("Unsupported attach media type " + t);
          }
        },
        [S, C, f, v, g, h, b],
      ),
      k = [
        "change:type",
        "change:mimetype",
        "change:filename",
        "change:state",
        "change:fullPreview",
        "change:fullPreviewSize",
        "change:preview",
      ],
      I = k.join(" ");
    ((l.clearAttachMediaGetterCacheFor = m),
      (l.getAttachMediaUnsafe = p),
      (l.getFile = _),
      (l.getFilename = f),
      (l.getFullPreview = g),
      (l.getFullPreviewSize = h),
      (l.getDocumentPageCount = y),
      (l.getMimetype = C),
      (l.getPreview = b),
      (l.getState = v),
      (l.getType = S),
      (l.getFilesize = R),
      (l.getFileExt = L),
      (l.getPreviewable = E),
      (l.PREVIEWABLE_ROOT_EVENTS = k),
      (l.PREVIEWABLE_ROOT_EVENTS_STR = I));
  },
  98,
);
