__d(
  "WAWebParseDocumentMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaCleanFileName",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebServerPropConstants",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.documentMessage;
      if (a != null) {
        var i = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            a,
            t,
            r,
            o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          ),
          l = i.fileEncSha256,
          s = i.fileLength,
          u = s === void 0 ? 0 : s,
          c = i.fileSha256,
          d = i.mediaKey,
          m = i.url,
          p = o("WAWebMediaCleanFileName").cleanIncomingFilename(
            a.fileName || a.title,
          ),
          _ = a.caption != null && a.caption !== "",
          f = _
            ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                a.caption,
              )
            : p,
          g = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
            kind: o("WAWebMsgType").MsgKind.Document,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(m),
            directPath: a.directPath,
            mimetype: a.mimetype,
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(c),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
            size: u,
            pageCount: a.pageCount || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(d),
            mediaKeyTimestamp:
              a.mediaKeyTimestamp != null
                ? o("WALongInt").numberOrThrowIfTooLarge(a.mediaKeyTimestamp)
                : o("WATimeUtils").unixTime(),
            filename: p,
            isCaptionByUser: _,
            caption: f,
            body:
              o("WAWebE2EProtoParserApi").decodeBytes(a.jpegThumbnail) || "",
            isVcardOverMmsDocument:
              !!a.contactVcard &&
              u <= o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024,
            thumbnailDirectPath: a.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(
              a.thumbnailSha256,
            ),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(
              a.thumbnailEncSha256,
            ),
            thumbnailHeight: a.thumbnailHeight,
            thumbnailWidth: a.thumbnailWidth,
          });
        return { msgData: g, contextInfo: a.contextInfo };
      }
    }
    l.default = e;
  },
  98,
);
