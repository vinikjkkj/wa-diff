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
      m = d,
      p = o("WAWebGetters").createGetterFactories({
        root: m,
        createCache: o("WAWebGettersCaches").createFrontendAttachMediaCache,
      }),
      _ = p.clearCacheFor,
      f = p.field;
    function g(e) {
      (s(e), _(e));
    }
    var h = c("file"),
      y = c("filename"),
      C = c("fullPreview"),
      b = c("fullPreviewSize"),
      v = c("documentPageCount"),
      S = c("mimetype"),
      R = c("preview"),
      L = c("state"),
      E = c("type"),
      k = f("editedFile"),
      I = f("duration"),
      T = f("hdEligible"),
      D = f("isGif"),
      x = f("mediaEditorData"),
      $ = f("metadataByQuality"),
      P = f("originalFilename"),
      N = f("processingProgressPercentage"),
      M = f("quality"),
      w = u(
        function (e) {
          var t = e[0];
          return t instanceof r("WAWebMediaOpaqueData")
            ? t.size()
            : t instanceof Blob
              ? t.size
              : null;
        },
        [h],
      ),
      A = u(
        function (e) {
          var t = e[0];
          return t ? o("WAWebFileUtils").getFileExtension(t) : null;
        },
        [y],
      ),
      F = u(
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
        [E, S, y, L, C, b, R],
      ),
      O = [
        "change:type",
        "change:mimetype",
        "change:filename",
        "change:state",
        "change:fullPreview",
        "change:fullPreviewSize",
        "change:preview",
      ],
      B = O.join(" ");
    ((l.getAttachMediaUnsafe = m),
      (l.clearAttachMediaGetterCacheFor = g),
      (l.getFile = h),
      (l.getFilename = y),
      (l.getFullPreview = C),
      (l.getFullPreviewSize = b),
      (l.getDocumentPageCount = v),
      (l.getMimetype = S),
      (l.getPreview = R),
      (l.getState = L),
      (l.getType = E),
      (l.getEditedFile = k),
      (l.getDuration = I),
      (l.getHdEligible = T),
      (l.getIsGif = D),
      (l.getMediaEditorData = x),
      (l.getMetadataByQuality = $),
      (l.getOriginalFilename = P),
      (l.getProcessingProgressPercentage = N),
      (l.getQuality = M),
      (l.getFilesize = w),
      (l.getFileExt = A),
      (l.getPreviewable = F),
      (l.PREVIEWABLE_ROOT_EVENTS = O),
      (l.PREVIEWABLE_ROOT_EVENTS_STR = B));
  },
  98,
);
