__d(
  "WASmaxInMessageDeliverEncMediaTypeDeprecatedMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAvatarStickerTypeMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "mediatype",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_AUDIO_AVATARSTICKER_BUTTONSRESPONSE_CATALOGLINK_CONTACT_CONTACTARRAY_DOCUMENT_FEEDRESHARE_GIF_HISTORY_IMAGE_LISTRESPONSE_LOCATION_NATIVEFLOWRESPONSE_ORDER_PRODUCT_PRODUCTLINK_PTT_PTV_STICKER_STORYREPLY_URL_VCARD_VIDEO_XMA,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "native_flow_name",
        o("WASmaxInMessageDeliverEnums").ENUM_ADDRESSMESSAGE_GALAXYMESSAGE,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverAvatarStickerTypeMixin",
      ).parseAvatarStickerTypeMixin(e);
      return o("WAResultOrError").makeResult({
        mediatype: n.value,
        nativeFlowName: r.value,
        avatarStickerTypeMixin: a.success ? a.value : null,
      });
    }
    l.parseEncMediaTypeDeprecatedMixin = e;
  },
  98,
);
