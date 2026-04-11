__d(
  "WAWebGetThumbnailTypeForMediaImageMsg",
  ["WAWebMmsMediaTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMmsMediaTypes").getMsgMediaType(e.msg);
      return t === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE
        : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE;
    }
    l.default = e;
  },
  98,
);
