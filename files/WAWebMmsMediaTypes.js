__d(
  "WAWebMmsMediaTypes",
  [
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
        AUDIO: "audio",
        DOCUMENT: "document",
        GIF: "gif",
        IMAGE: "image",
        NATIVE_FLOW: "native_flow",
        PPIC: "ppic",
        PRODUCT: "product",
        PTT: "ptt",
        STICKER: "sticker",
        VIDEO: "video",
        PTV: "ptv",
        TEMPLATE: "template",
        THUMBNAIL_DOCUMENT: "thumbnail-document",
        THUMBNAIL_IMAGE: "thumbnail-image",
        THUMBNAIL_VIDEO: "thumbnail-video",
        THUMBNAIL_LINK: "thumbnail-link",
        HISTORY_SYNC: "md-msg-hist",
        MD_APP_STATE: "md-app-state",
        PRODUCT_CATALOG_IMAGE: "product-catalog-image",
        PAYMENT_BG_IMAGE: "payment-bg-image",
        BIZ_COVER_PHOTO: "biz-cover-photo",
        PREVIEW: "preview",
        NEWSLETTER_MUSIC_ARTWORK: "newsletter-music-artwork",
        NEWSLETTER_AUDIO: "newsletter-audio",
        NEWSLETTER_DOCUMENT: "newsletter-document",
        NEWSLETTER_IMAGE: "newsletter-image",
        NEWSLETTER_GIF: "newsletter-gif",
        NEWSLETTER_PTT: "newsletter-ptt",
        NEWSLETTER_PTV: "newsletter-ptv",
        NEWSLETTER_STICKER: "newsletter-sticker",
        NEWSLETTER_THUMBNAIL_LINK: "newsletter-thumbnail-link",
        NEWSLETTER_VIDEO: "newsletter-video",
        NATIVE_AD_IMAGE: "ads-image",
        NATIVE_AD_VIDEO: "ads-video",
        STICKER_PACK: "sticker-pack",
        THUMBNAIL_STICKER_PACK: "thumbnail-sticker-pack",
        MUSIC_ARTWORK: "music-artwork",
        GROUP_HISTORY: "group-history",
        NEWSLETTER_STICKER_PACK: "newsletter-sticker-pack",
        WAFFLE_IMAGE: "waffle-image",
        WAFFLE_VIDEO: "waffle-video",
      }),
      s = r("lodash").values(e);
    function u(t) {
      var n;
      if (t == null) n = e.DOCUMENT;
      else if (t in e) n = e[t];
      else throw r("err")("castToV4: unexpected mmsv3 type " + t);
      return n;
    }
    function c(t) {
      var n = t.interactiveHeader,
        a = t.isAdsMedia,
        i = t.isGif,
        l = t.isNewsletter,
        s = t.type;
      switch (s) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return l
            ? e.NEWSLETTER_IMAGE
            : a === !0
              ? e.NATIVE_AD_IMAGE
              : e.IMAGE;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return l
            ? i === !0
              ? e.NEWSLETTER_GIF
              : e.NEWSLETTER_VIDEO
            : a === !0
              ? e.NATIVE_AD_VIDEO
              : i === !0
                ? e.GIF
                : e.VIDEO;
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return l ? e.NEWSLETTER_AUDIO : e.AUDIO;
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return l ? e.NEWSLETTER_PTT : e.PTT;
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return l ? e.NEWSLETTER_PTV : e.PTV;
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e.DOCUMENT;
        case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
          return l ? e.NEWSLETTER_STICKER_PACK : e.STICKER_PACK;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return l ? e.NEWSLETTER_STICKER : e.STICKER;
        case o("WAWebMsgType").MSG_TYPE.PRODUCT:
          return e.PRODUCT;
        case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
          return e.NATIVE_FLOW;
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE: {
          if ((n == null ? void 0 : n.mediaType) != null)
            return n.mediaType ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT
              ? e.DOCUMENT
              : n.mediaType ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.VIDEO
                ? e.VIDEO
                : n.mediaType ===
                    o("WAWebInteractiveMessageHeaderMediaType")
                      .InteractiveMessageHeaderMediaType.IMAGE
                  ? e.IMAGE
                  : n.mediaType ===
                      o("WAWebInteractiveMessageHeaderMediaType")
                        .InteractiveMessageHeaderMediaType.PRODUCT
                    ? e.PRODUCT
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n.mediaType,
                        );
                      })();
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return e.GROUP_HISTORY;
      }
      throw r("err")("msg is not a media msg: " + s + ", isGif=" + String(i));
    }
    function d(e) {
      return c({
        type: e.type,
        interactiveHeader: e.interactiveHeader,
        isGif: e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? e.isGif : !1,
        isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(e),
        isAdsMedia: e.isAdsMedia,
      });
    }
    function m(t) {
      return t === e.IMAGE ||
        t === e.PPIC ||
        t === e.PRODUCT ||
        t === e.PRODUCT_CATALOG_IMAGE ||
        t === e.PAYMENT_BG_IMAGE ||
        t === e.BIZ_COVER_PHOTO ||
        t === e.NATIVE_AD_IMAGE ||
        t === e.NEWSLETTER_IMAGE ||
        t === e.MUSIC_ARTWORK ||
        t === e.NEWSLETTER_MUSIC_ARTWORK
        ? "image"
        : t === e.VIDEO ||
            t === e.PTV ||
            t === e.NATIVE_AD_VIDEO ||
            t === e.NEWSLETTER_VIDEO ||
            t === e.NEWSLETTER_PTV
          ? "video"
          : t === e.GIF || t === e.NEWSLETTER_GIF
            ? "gif"
            : t === e.PTT || t === e.NEWSLETTER_PTT
              ? "audio"
              : t === e.STICKER_PACK || t === e.NEWSLETTER_STICKER_PACK
                ? "sticker-pack"
                : "document";
    }
    function p(t) {
      return t === e.IMAGE ||
        t === e.NEWSLETTER_IMAGE ||
        t === e.NATIVE_AD_IMAGE
        ? o("WAWebMsgType").MSG_TYPE.IMAGE
        : t === e.STICKER || t === e.NEWSLETTER_STICKER
          ? o("WAWebMsgType").MSG_TYPE.STICKER
          : t === e.VIDEO ||
              t === e.NEWSLETTER_VIDEO ||
              t === e.NATIVE_AD_VIDEO ||
              t === e.GIF ||
              t === e.NEWSLETTER_GIF
            ? o("WAWebMsgType").MSG_TYPE.VIDEO
            : t === e.AUDIO || t === e.NEWSLETTER_AUDIO
              ? o("WAWebMsgType").MSG_TYPE.AUDIO
              : t === e.PTT || t === e.NEWSLETTER_PTT
                ? o("WAWebMsgType").MSG_TYPE.PTT
                : t === e.PTV || t === e.NEWSLETTER_PTV
                  ? o("WAWebMsgType").MSG_TYPE.PTV
                  : null;
    }
    var _ = "audio/ogg; codecs=opus",
      f = "audio/mp4",
      g = "audio/mpeg",
      h = "audio/aac",
      y = "audio/amr",
      C = "image/jpeg",
      b = "image/png",
      v = "image/webp",
      S = "video/mp4",
      R = "video/3gpp";
    function L(e) {
      var t,
        n,
        r =
          ((t = {}),
          (t[(n = o("WAWebMsgType")).MSG_TYPE.IMAGE] = new Set([C, b, v])),
          (t[n.MSG_TYPE.STICKER] = o(
            "WAWebStickerMimeUtils",
          ).getValidStickerMimeTypes()),
          (t[n.MSG_TYPE.VIDEO] = new Set([S, R])),
          (t[n.MSG_TYPE.AUDIO] = new Set([_, f, g, h, y])),
          (t[n.MSG_TYPE.PTT] = new Set([_, f, g, h, y])),
          (t[n.MSG_TYPE.PTV] = new Set([S, R])),
          t);
      return e != null ? r[e] : null;
    }
    ((l.MEDIA_TYPES = e),
      (l.MEDIA_TYPE_VALUES = s),
      (l.castToV4 = u),
      (l.msgToMediaType = c),
      (l.getMsgMediaType = d),
      (l.mediaTypeToKaleidoscopeMediaType = m),
      (l.mediaTypeToMsgTypeSupportedByAllowlist = p),
      (l.getValidMimeTypes = L));
  },
  98,
);
