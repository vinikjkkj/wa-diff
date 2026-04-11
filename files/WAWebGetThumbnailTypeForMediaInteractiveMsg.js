__d(
  "WAWebGetThumbnailTypeForMediaInteractiveMsg",
  ["WAWebInteractiveMessageHeaderMediaType", "WAWebMmsMediaTypes", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = t.interactiveHeader;
      if ((n == null ? void 0 : n.mediaType) != null)
        switch (n.mediaType) {
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.DOCUMENT:
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.VIDEO:
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
          default:
            break;
        }
      throw r("err")("getThumbnailTypeForMediaMsg: unsupported msg type");
    }
    l.default = e;
  },
  98,
);
