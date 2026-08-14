__d(
  "WASmaxInStatusDeliverMediaTypeMixin",
  ["WAResultOrError", "WASmaxInStatusDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "mediatype",
        o("WASmaxInStatusDeliverEnums")
          .ENUM_1PSTICKER_AUDIO_AVATARSTICKER_BUTTONSRESPONSE_CATALOGLINK_COLLECTION_CONTACT_CONTACTARRAY_DOCUMENT_FEEDRESHARE_GENAISTICKER_GIF_GROUPHISTORY_HISTORY_IMAGE_LISTRESPONSE_LOCATION_MOTIONPHOTO_MOTIONVIDEO_NATIVEFLOWRESPONSE_ORDER_PRODUCT_PRODUCTLINK_PTT_PTV_STICKER_STICKERPACK_STORYREPLY_URL_USERCREATEDSTICKER_VCARD_VIDEO_XMA,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    l.parseMediaTypeMixin = e;
  },
  98,
);
