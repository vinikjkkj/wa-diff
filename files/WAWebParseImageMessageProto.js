__d(
  "WAWebParseImageMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageAssociation,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = e.msgMeta,
        l = r.imageMessage;
      if (l != null) {
        if (
          o("WAWebMediaProtoUtils").isEmptyImageMessage(l) &&
          o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(t)
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
              kind: o("WAWebMsgType").MsgKind.LoadingMedia,
              subtype: "loading_image",
            }),
            contextInfo: l.contextInfo,
          };
        var s = l.annotations,
          u = l.caption,
          c = l.contextInfo,
          d = l.directPath,
          m = l.height,
          p = l.jpegThumbnail,
          _ = l.mediaKeyTimestamp,
          f = l.mimetype,
          g = l.scanLengths,
          h = l.scansSidecar,
          y = l.staticUrl,
          C = l.thumbnailDirectPath,
          b = l.thumbnailEncSha256,
          v = l.thumbnailSha256,
          S = l.viewOnce,
          R = l.width,
          L = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            l,
            t,
            a,
            o("WAWebMsgType").MSG_TYPE.IMAGE,
          ),
          E = L.fileEncSha256,
          k = L.fileLength,
          I = L.fileSha256,
          T = L.mediaKey,
          D = L.url,
          x = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.IMAGE,
            kind: o("WAWebMsgType").MsgKind.Image,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(D),
            directPath: d || "",
            staticUrl: y || "",
            mimetype: f || "",
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(u),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(E),
            size: k,
            height: m || 0,
            width: R || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(T),
            mediaKeyTimestamp:
              _ != null
                ? o("WALongInt").numberOrThrowIfTooLarge(_)
                : o("WATimeUtils").unixTime(),
            body: o("WAWebE2EProtoParserApi").decodeBytes(p) || "",
            interactiveAnnotations: s,
            scanLengths: g,
            scansSidecar: h,
            isViewOnce: S === !0,
            thumbnailDirectPath: C,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(v),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(b),
            statusMentioned: i == null ? void 0 : i.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(x, l),
          n &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled())
        ) {
          var $ = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(n, t, a),
            P = $.associationParentMsgKey,
            N = $.associationType,
            M = $.viewMode;
          if (
            N ===
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_POLL &&
            !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(t)
          )
            return {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.IMAGE,
              }),
              contextInfo: c,
            };
          var w = babelHelpers.extends({}, x, {
            kind: "associatedImage",
            parentMsgKey: P,
            associationType: N,
            viewMode: M,
          });
          return { msgData: w, contextInfo: c };
        }
        return { msgData: x, contextInfo: c };
      }
    }
    l.default = e;
  },
  98,
);
