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
        r = e.msgMeta,
        a = n.extendedTextMessage;
      if (a != null) {
        var i = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType,
          l;
        if ((a == null ? void 0 : a.font) != null)
          switch (a.font) {
            case i.SYSTEM:
            case i.SYSTEM_TEXT:
            case i.FB_SCRIPT:
            case i.SYSTEM_BOLD:
            case i.MORNINGBREEZE_REGULAR:
            case i.CALISTOGA_REGULAR:
            case i.EXO2_EXTRABOLD:
            case i.COURIERPRIME_BOLD:
              l = a.font;
              break;
          }
        var s = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            (a == null ? void 0 : a.text) || "",
          ),
          matchedText: a == null ? void 0 : a.matchedText,
          description: a == null ? void 0 : a.description,
          title: a == null ? void 0 : a.title,
          thumbnail:
            o("WAWebE2EProtoParserApi").decodeBytes(
              a == null ? void 0 : a.jpegThumbnail,
            ) || "",
          richPreviewType: a == null ? void 0 : a.previewType,
          doNotPlayInline: a == null ? void 0 : a.doNotPlayInline,
          textColor: a == null ? void 0 : a.textArgb,
          backgroundColor: a == null ? void 0 : a.backgroundArgb,
          mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(
            a == null ? void 0 : a.mediaKey,
          ),
          mediaKeyTimestamp:
            (a == null ? void 0 : a.mediaKeyTimestamp) != null
              ? o("WALongInt").numberOrThrowIfTooLarge(a.mediaKeyTimestamp)
              : t.mediaKeyTimestamp,
          thumbnailDirectPath: a == null ? void 0 : a.thumbnailDirectPath,
          thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
            a == null ? void 0 : a.thumbnailSha256,
          ),
          thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
            a == null ? void 0 : a.thumbnailEncSha256,
          ),
          thumbnailHeight: a == null ? void 0 : a.thumbnailHeight,
          thumbnailWidth: a == null ? void 0 : a.thumbnailWidth,
          inviteGrpType:
            (a == null ? void 0 : a.inviteLinkGroupTypeV2) != null
              ? o("WAWebE2EProtoParserApi").parseInviteGrpType(
                  a == null ? void 0 : a.inviteLinkGroupTypeV2,
                )
              : t.inviteGrpType,
          font: l != null ? l : t.font,
          paymentLinkMetadata: a == null ? void 0 : a.paymentLinkMetadata,
          faviconMMSMetadata: u(
            a == null ? void 0 : a.faviconMMSMetadata,
            t.mediaKeyTimestamp,
          ),
          statusMentioned: r == null ? void 0 : r.statusMentioned,
        });
        return { msgData: s, contextInfo: a == null ? void 0 : a.contextInfo };
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
