__d(
  "WAWebParseExtendedTextMessageProtoUtils",
  [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        !!(e != null && e.matchedText) ||
        !!(e != null && e.description) ||
        !!(e != null && e.title)
      );
    }
    function s(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.extendedTextMessage;
      if (r != null) {
        var a = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType,
          i;
        if ((r == null ? void 0 : r.font) != null)
          switch (r.font) {
            case a.SYSTEM:
            case a.SYSTEM_TEXT:
            case a.FB_SCRIPT:
            case a.SYSTEM_BOLD:
            case a.MORNINGBREEZE_REGULAR:
            case a.CALISTOGA_REGULAR:
            case a.EXO2_EXTRABOLD:
            case a.COURIERPRIME_BOLD:
              i = r.font;
              break;
          }
        var l = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            (r == null ? void 0 : r.text) || "",
          ),
          matchedText: r == null ? void 0 : r.matchedText,
          description: r == null ? void 0 : r.description,
          title: r == null ? void 0 : r.title,
          thumbnail:
            o("WAWebE2EProtoParserApi").decodeBytes(
              r == null ? void 0 : r.jpegThumbnail,
            ) || "",
          richPreviewType: r == null ? void 0 : r.previewType,
          doNotPlayInline: r == null ? void 0 : r.doNotPlayInline,
          textColor: r == null ? void 0 : r.textArgb,
          backgroundColor: r == null ? void 0 : r.backgroundArgb,
          mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(
            r == null ? void 0 : r.mediaKey,
          ),
          mediaKeyTimestamp:
            (r == null ? void 0 : r.mediaKeyTimestamp) != null
              ? o("WALongInt").numberOrThrowIfTooLarge(r.mediaKeyTimestamp)
              : t.mediaKeyTimestamp,
          thumbnailDirectPath: r == null ? void 0 : r.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
            r == null ? void 0 : r.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
            r == null ? void 0 : r.thumbnailEncSha256,
          ),
          thumbnailHeight: r == null ? void 0 : r.thumbnailHeight,
          thumbnailWidth: r == null ? void 0 : r.thumbnailWidth,
          inviteGrpType:
            (r == null ? void 0 : r.inviteLinkGroupTypeV2) != null
              ? o("WAWebE2EProtoParserApi").parseInviteGrpType(
                  r == null ? void 0 : r.inviteLinkGroupTypeV2,
                )
              : t.inviteGrpType,
          font: i != null ? i : t.font,
          paymentLinkMetadata: r == null ? void 0 : r.paymentLinkMetadata,
          faviconMMSMetadata: u(
            r == null ? void 0 : r.faviconMMSMetadata,
            t.mediaKeyTimestamp,
          ),
        });
        return { msgData: l, contextInfo: r == null ? void 0 : r.contextInfo };
      }
    }
    function u(e, t) {
      return e == null
        ? null
        : {
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(e.mediaKey),
            mediaKeyTimestamp:
              e.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(e.mediaKeyTimestamp)
                : t,
            thumbnailDirectPath: e.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
              e.thumbnailSha256,
            ),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
              e.thumbnailEncSha256,
            ),
            thumbnail: null,
          };
    }
    ((l.isUrlExtendedTextMessage = e),
      (l.parseExtendedTextMessageProto = s),
      (l.parseFaviconMMSMetadata = u));
  },
  98,
);
