__d(
  "WAWebWebpMetadata",
  [
    "$InternalEnum",
    "WAWebStickerMetadataParsing",
    "WAWebWamEnumStickerMakerSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      CutoutImage: 1,
      WebStickerMaker: 2,
      IosStickerMaker: 3,
      AndroidStickerMaker: 4,
      TransparentImage: 5,
      GIF: 6,
    });
    function s(e) {
      return o("WAWebStickerMetadataParsing").toStickerMetadata(e);
    }
    function u(e) {
      var t = {};
      return (
        e.isFirstParty != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.isFirstParty
          ] = e.isFirstParty ? 1 : 0),
        e.isFromStickerMaker != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.isFromStickerMaker
          ] = e.isFromStickerMaker ? 1 : 0),
        e.emojis != null &&
          (t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.emojis] =
            e.emojis),
        e.stickerPackId != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerPackId
          ] = e.stickerPackId),
        e.stickerPackName != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerPackName
          ] = e.stickerPackName),
        e.stickerPackPublisher != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerPackPublisher
          ] = e.stickerPackPublisher),
        e.stickerPackPlayStoreLink != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerPackPlayStoreLink
          ] = e.stickerPackPlayStoreLink),
        e.stickerPackAppleStoreLink != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerPackAppleStoreLink
          ] = e.stickerPackAppleStoreLink),
        e.isAvatar != null &&
          (t[
            o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isAvatar
          ] = e.isAvatar ? 1 : 0),
        e.isAiSticker != null &&
          (t[
            o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isAiSticker
          ] = e.isAiSticker ? 1 : 0),
        e.stickerMakerSourceType != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.stickerMakerSourceType
          ] = e.stickerMakerSourceType),
        e.accessibilityLabel != null &&
          (t[
            o(
              "WAWebStickerMetadataParsing",
            ).STICKER_METADATA_FIELDS.accessibilityLabel
          ] = e.accessibilityLabel),
        t
      );
    }
    function c(t) {
      return t == null
        ? null
        : t === e.CutoutImage
          ? o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE
              .CUTOUT_IMAGE
          : t === e.WebStickerMaker
            ? o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE
                .WEB_STICKER_MAKER
            : t === e.IosStickerMaker
              ? o("WAWebWamEnumStickerMakerSourceType")
                  .STICKER_MAKER_SOURCE_TYPE.IOS_STICKER_MAKER
              : t === e.AndroidStickerMaker
                ? o("WAWebWamEnumStickerMakerSourceType")
                    .STICKER_MAKER_SOURCE_TYPE.ANDROID_STICKER_MAKER
                : t === e.TransparentImage
                  ? o("WAWebWamEnumStickerMakerSourceType")
                      .STICKER_MAKER_SOURCE_TYPE.TRANSPARENT_IMAGE
                  : t === e.GIF
                    ? o("WAWebWamEnumStickerMakerSourceType")
                        .STICKER_MAKER_SOURCE_TYPE.GIF
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    ((l.StickerMakerSourceType = e),
      (l.toWebpMetadata = s),
      (l.toRawWebpMetadata = u),
      (l.getStickerMakerSourceType = c));
  },
  98,
);
