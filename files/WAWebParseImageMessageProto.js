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
          h = s.qrUrl,
          y = s.scanLengths,
          C = s.scansSidecar,
          b = s.staticUrl,
          v = s.thumbnailDirectPath,
          S = s.thumbnailEncSha256,
          R = s.thumbnailSha256,
          L = s.viewOnce,
          E = s.width,
          k = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            s,
            n,
            i,
            o("WAWebMsgType").MSG_TYPE.IMAGE,
          ),
          I = k.fileEncSha256,
          T = k.fileLength,
          D = k.fileSha256,
          x = k.mediaKey,
          $ = k.url,
          P = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.IMAGE,
            kind: o("WAWebMsgType").MsgKind.Image,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl($),
            directPath: m || "",
            staticUrl:
              (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(b)) != null
                ? t
                : "",
            qrUrl: h,
            mimetype: g || "",
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(c),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
            size: T,
            height: p || 0,
            width: E || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(x),
            mediaKeyTimestamp:
              f != null
                ? o("WALongInt").numberOrThrowIfTooLarge(f)
                : o("WATimeUtils").unixTime(),
            body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
            interactiveAnnotations: u,
            scanLengths: y,
            scansSidecar: C,
            isViewOnce: L === !0,
            thumbnailDirectPath: v,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
            statusMentioned: l == null ? void 0 : l.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(P, s),
          r &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled())
        ) {
          var N = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(r, n, i),
            M = N.associationParentMsgKey,
            w = N.associationType,
            A = N.viewMode;
          if (
            w ===
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
            w ===
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
          var F = babelHelpers.extends({}, P, {
            kind: "associatedImage",
            parentMsgKey: M,
            associationType: w,
            viewMode: A,
          });
          return { msgData: F, contextInfo: d };
        }
        return { msgData: P, contextInfo: d };
      }
    }
    l.default = e;
  },
  98,
);
