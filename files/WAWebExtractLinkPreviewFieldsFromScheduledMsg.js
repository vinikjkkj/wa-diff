__d(
  "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
  [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebParseExtendedTextMessageProtoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.extendedTextMessage;
      if (
        t == null ||
        !o("WAWebParseExtendedTextMessageProtoUtils").isUrlExtendedTextMessage(
          t,
        )
      )
        return {};
      var n =
        t.mediaKeyTimestamp != null
          ? o("WALongInt").numberOrThrowIfTooLarge(t.mediaKeyTimestamp)
          : void 0;
      return {
        subtype: "url",
        matchedText: t.matchedText,
        description: t.description,
        title: t.title,
        thumbnail:
          o("WAWebE2EProtoParserApi").decodeBytes(t.jpegThumbnail) || "",
        richPreviewType: t.previewType,
        doNotPlayInline: t.doNotPlayInline,
        mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(t.mediaKey),
        mediaKeyTimestamp: n,
        thumbnailDirectPath: t.thumbnailDirectPath,
        thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          t.thumbnailSha256,
        ),
        thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
          t.thumbnailEncSha256,
        ),
        thumbnailHeight: t.thumbnailHeight,
        thumbnailWidth: t.thumbnailWidth,
      };
    }
    l.extractLinkPreviewFieldsFromScheduledMsg = e;
  },
  98,
);
