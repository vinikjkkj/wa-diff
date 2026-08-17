__d(
  "WAWebParseImageMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebIsAlbumV2ReceiverEnabled",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaProtoUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageAssociation,
        a = e.messageProtobuf,
        i = e.msgContext,
        l = e.msgMeta,
        s = a.imageMessage;
      if (s != null) {
        if (
          o("WAWebMediaProtoUtils").isEmptyImageMessage(s) &&
          o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(n)
        )
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
              kind: o("WAWebMsgType").MsgKind.LoadingMedia,
              subtype: "loading_image",
            }),
            contextInfo: s.contextInfo,
          };
        var u = s.annotations,
          c = s.caption,
          d = s.contextInfo,
          m = s.directPath,
          p = s.height,
          _ = s.jpegThumbnail,
          f = s.mediaKeyTimestamp,
          g = s.mimetype,
          h = s.scanLengths,
          y = s.scansSidecar,
          C = s.staticUrl,
          b = s.thumbnailDirectPath,
          v = s.thumbnailEncSha256,
          S = s.thumbnailSha256,
          R = s.viewOnce,
          L = s.width,
          E = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            s,
            n,
            i,
            o("WAWebMsgType").MSG_TYPE.IMAGE,
          ),
          k = E.fileEncSha256,
          I = E.fileLength,
          T = E.fileSha256,
          D = E.mediaKey,
          x = E.url,
          $ = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.IMAGE,
            kind: o("WAWebMsgType").MsgKind.Image,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(x),
            directPath: m || "",
            staticUrl:
              (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(C)) != null
                ? t
                : "",
            mimetype: g || "",
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(c),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(T),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(k),
            size: I,
            height: p || 0,
            width: L || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(D),
            mediaKeyTimestamp:
              f != null
                ? o("WALongInt").numberOrThrowIfTooLarge(f)
                : o("WATimeUtils").unixTime(),
            body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
            interactiveAnnotations: u,
            scanLengths: h,
            scansSidecar: y,
            isViewOnce: R === !0,
            thumbnailDirectPath: b,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(v),
            statusMentioned: l == null ? void 0 : l.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties($, s),
          r &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled())
        ) {
          var P = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(r, n, i),
            N = P.associationParentMsgKey,
            M = P.associationType,
            w = P.viewMode;
          if (
            M ===
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_POLL &&
            !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(n)
          )
            return {
              msgData: babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.IMAGE,
              }),
              contextInfo: d,
            };
          if (
            M ===
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_ALBUM &&
            !o("WAWebIsAlbumV2ReceiverEnabled").isAlbumV2MsgReceiverEnabled(n)
          )
            return {
              msgData: babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.IMAGE,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              }),
              contextInfo: d,
            };
          var A = babelHelpers.extends({}, $, {
            kind: "associatedImage",
            parentMsgKey: N,
            associationType: M,
            viewMode: w,
          });
          return { msgData: A, contextInfo: d };
        }
        return { msgData: $, contextInfo: d };
      }
    }
    l.default = e;
  },
  98,
);
