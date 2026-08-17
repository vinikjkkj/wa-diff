__d(
  "WAWebParseVideoMessageProto",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebIsAlbumV2ReceiverEnabled",
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
        s = a.videoMessage;
      if (s != null) {
        if (
          o("WAWebMediaProtoUtils").isEmptyVideoMessage(s) &&
          o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(n)
        )
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
              kind: o("WAWebMsgType").MsgKind.LoadingMedia,
              subtype: "loading_video",
            }),
            contextInfo: s.contextInfo,
          };
        var u = s.accessibilityLabel,
          c = s.annotations,
          d = s.caption,
          m = s.contextInfo,
          p = s.directPath,
          _ = s.gifAttribution,
          f = s.gifPlayback,
          g = s.height,
          h = s.interactiveAnnotations,
          y = s.jpegThumbnail,
          C = s.mediaKeyTimestamp,
          b = s.mimetype,
          v = s.seconds,
          S = s.staticUrl,
          R = s.streamingSidecar,
          L = s.thumbnailDirectPath,
          E = s.thumbnailEncSha256,
          k = s.thumbnailSha256,
          I = s.viewOnce,
          T = s.width,
          D = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            s,
            n,
            i,
            o("WAWebMsgType").MSG_TYPE.VIDEO,
          ),
          x = D.fileEncSha256,
          $ = D.fileLength,
          P = D.fileSha256,
          N = D.mediaKey,
          M = D.url,
          w = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.VIDEO,
            kind: o("WAWebMsgType").MsgKind.Video,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(M),
            directPath: p,
            staticUrl:
              (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(S)) != null
                ? t
                : "",
            mimetype: b,
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(d),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(P),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(x),
            size: $,
            height: g,
            width: T,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(N),
            mediaKeyTimestamp:
              C != null
                ? o("WALongInt").numberOrThrowIfTooLarge(C)
                : o("WATimeUtils").unixTime(),
            duration: "" + (v || 0),
            body: o("WAWebE2EProtoParserApi").decodeBytes(y) || "",
            interactiveAnnotations: h != null && h.length > 0 ? h : c,
            isViewOnce: I === !0,
            thumbnailDirectPath: L,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(k),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(E),
            isGif: f,
            gifAttribution: _,
            accessibilityLabel: u,
            streamingSidecar: R,
            statusMentioned: l == null ? void 0 : l.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(w, s),
          r &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled())
        ) {
          var A = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(r, n, i),
            F = A.associationParentMsgKey,
            O = A.associationType,
            B = A.viewMode;
          if (
            O ===
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_ALBUM &&
            !o("WAWebIsAlbumV2ReceiverEnabled").isAlbumV2MsgReceiverEnabled(n)
          )
            return {
              msgData: babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType: o("WAWebMsgType").MSG_TYPE.VIDEO,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              }),
              contextInfo: m,
            };
          var W = babelHelpers.extends({}, w, {
            kind: "associatedVideo",
            parentMsgKey: F,
            associationType: O,
            viewMode: B,
          });
          return { msgData: W, contextInfo: m };
        }
        return { msgData: w, contextInfo: m };
      }
    }
    l.default = e;
  },
  98,
);
