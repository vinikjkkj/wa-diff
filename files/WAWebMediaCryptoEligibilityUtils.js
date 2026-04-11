__d(
  "WAWebMediaCryptoEligibilityUtils",
  ["WAWebChatGetters", "WAWebMmsMediaTypes", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return !o("WAWebChatGetters").getIsNewsletter(e);
    }
    function u(e) {
      return !o("WAWebMsgGetters").getIsNewsletterMsg(e);
    }
    var c = new Set([
      (e = o("WAWebMmsMediaTypes")).MEDIA_TYPES.NEWSLETTER_AUDIO,
      e.MEDIA_TYPES.NEWSLETTER_DOCUMENT,
      e.MEDIA_TYPES.NEWSLETTER_GIF,
      e.MEDIA_TYPES.NEWSLETTER_IMAGE,
      e.MEDIA_TYPES.NEWSLETTER_PTT,
      e.MEDIA_TYPES.NEWSLETTER_PTV,
      e.MEDIA_TYPES.NEWSLETTER_STICKER,
      e.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
      e.MEDIA_TYPES.NEWSLETTER_VIDEO,
      e.MEDIA_TYPES.NEWSLETTER_STICKER_PACK,
      e.MEDIA_TYPES.NEWSLETTER_MUSIC_ARTWORK,
    ]);
    function d(e) {
      return c.has(e);
    }
    function m(e) {
      return !d(e);
    }
    function p(e) {
      return !d(e);
    }
    ((l.isMediaCryptoExpectedForChat = s),
      (l.isMediaCryptoExpectedForMsg = u),
      (l.isMediaCryptoExpectedForMediaType = m),
      (l.isRmrSupportedForMediaType = p));
  },
  98,
);
