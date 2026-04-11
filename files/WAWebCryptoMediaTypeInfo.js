__d(
  "WAWebCryptoMediaTypeInfo",
  ["WAWebMmsMediaTypes", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO)
          return "WhatsApp Audio Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT)
          return "WhatsApp Document Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF)
          return "WhatsApp Video Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE)
          return "WhatsApp Image Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC)
          throw r("err")("Cannot create media keys for profile pics");
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
          return "WhatsApp Image Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT)
          return "WhatsApp Audio Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
          return "WhatsApp Image Keys";
        if (
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTV
        )
          return "WhatsApp Video Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT)
          return "WhatsApp Document Thumbnail Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER_PACK)
          return "WhatsApp Sticker Pack Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_STICKER_PACK)
          return "WhatsApp Sticker Pack Thumbnail Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE)
          return "WhatsApp Image Thumbnail Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO)
          return "WhatsApp Video Thumbnail Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK)
          return "WhatsApp Link Thumbnail Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.TEMPLATE)
          throw r("err")("Cannot create media keys for template");
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC)
          return "WhatsApp History Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.MD_APP_STATE)
          return "WhatsApp App State Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT_CATALOG_IMAGE)
          throw r("err")("Cannot create media keys for product catalog image");
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PAYMENT_BG_IMAGE)
          return "WhatsApp Payment Background Keys";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE)
          return "ads-image";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO)
          return "ads-video";
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.MUSIC_ARTWORK)
          return "WhatsApp Music Artwork Keys";
        if (
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_DOCUMENT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_GIF ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER_PACK ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_MUSIC_ARTWORK ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.WAFFLE_IMAGE ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.WAFFLE_VIDEO
        )
          throw r("err")("createKeys: newsletter media is not encrypted: " + e);
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY)
          return "Group History";
        if (e === "biz-cover-photo" || e === "native_flow" || e === "preview")
          return;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.getMediaTypeInfo = e;
  },
  98,
);
