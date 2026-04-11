__d(
  "WAWebParseVideoMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaProtoUtils",
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
        l = r.videoMessage;
      if (l != null) {
        if (
          o("WAWebMediaProtoUtils").isEmptyVideoMessage(l) &&
          o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(t)
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
              kind: o("WAWebMsgType").MsgKind.LoadingMedia,
              subtype: "loading_video",
            }),
            contextInfo: l.contextInfo,
          };
        var s = l.accessibilityLabel,
          u = l.annotations,
          c = l.caption,
          d = l.contextInfo,
          m = l.directPath,
          p = l.gifAttribution,
          _ = l.gifPlayback,
          f = l.height,
          g = l.interactiveAnnotations,
          h = l.jpegThumbnail,
          y = l.mediaKeyTimestamp,
          C = l.mimetype,
          b = l.seconds,
          v = l.staticUrl,
          S = l.streamingSidecar,
          R = l.thumbnailDirectPath,
          L = l.thumbnailEncSha256,
          E = l.thumbnailSha256,
          k = l.viewOnce,
          I = l.width,
          T = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            l,
            t,
            a,
            o("WAWebMsgType").MSG_TYPE.VIDEO,
          ),
          D = T.fileEncSha256,
          x = T.fileLength,
          $ = T.fileSha256,
          P = T.mediaKey,
          N = T.url,
          M = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.VIDEO,
            kind: o("WAWebMsgType").MsgKind.Video,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(N),
            directPath: m,
            staticUrl: v || "",
            mimetype: C,
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(c),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes($),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
            size: x,
            height: f,
            width: I,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(P),
            mediaKeyTimestamp:
              y != null
                ? o("WALongInt").numberOrThrowIfTooLarge(y)
                : o("WATimeUtils").unixTime(),
            duration: "" + (b || 0),
            body: o("WAWebE2EProtoParserApi").decodeBytes(h) || "",
            interactiveAnnotations: g != null && g.length > 0 ? g : u,
            isViewOnce: k === !0,
            thumbnailDirectPath: R,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(E),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(L),
            isGif: _,
            gifAttribution: p,
            accessibilityLabel: s,
            streamingSidecar: S,
            statusMentioned: i == null ? void 0 : i.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(M, l),
          n &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled())
        ) {
          var w = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(n, t, a),
            A = w.associationParentMsgKey,
            F = w.associationType,
            O = w.viewMode,
            B = babelHelpers.extends({}, M, {
              kind: "associatedVideo",
              parentMsgKey: A,
              associationType: F,
              viewMode: O,
            });
          return { msgData: B, contextInfo: d };
        }
        return { msgData: M, contextInfo: d };
      }
    }
    l.default = e;
  },
  98,
);
