__d(
  "WAWebGetThumbnailTypeForMediaChatMsg",
  ["WAWebMmsMediaTypes", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getIsNewsletterMsg(t);
      return n
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK
        : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK;
    }
    l.default = e;
  },
  98,
);
