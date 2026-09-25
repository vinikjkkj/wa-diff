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
          p = s.dashManifestUrl,
          _ = s.directPath,
          f = s.gifAttribution,
          g = s.gifPlayback,
          h = s.height,
          y = s.interactiveAnnotations,
          C = s.jpegThumbnail,
          b = s.mediaKeyTimestamp,
          v = s.mimetype,
          S = s.seconds,
          R = s.staticUrl,
          L = s.streamingSidecar,
          E = s.thumbnailDirectPath,
          k = s.thumbnailEncSha256,
          I = s.thumbnailSha256,
          T = s.viewOnce,
          D = s.width,
          x = o(
            "WAWebMediaMessageGetValidatedProperties",
          ).getValidatedMediaMessageProperties(
            s,
            n,
            i,
            o("WAWebMsgType").MSG_TYPE.VIDEO,
          ),
          $ = x.fileEncSha256,
          P = x.fileLength,
          N = x.fileSha256,
          M = x.mediaKey,
          w = x.url,
          A = babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.VIDEO,
            kind: o("WAWebMsgType").MsgKind.Video,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(w),
            directPath: _,
            staticUrl:
              (t = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(R)) != null
                ? t
                : "",
            dashManifestUrl: p,
            mimetype: v,
            caption:
              o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(d),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(N),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes($),
            size: P,
            height: h,
            width: D,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(M),
            mediaKeyTimestamp:
              b != null
                ? o("WALongInt").numberOrThrowIfTooLarge(b)
                : o("WATimeUtils").unixTime(),
            duration: "" + (S || 0),
            body: o("WAWebE2EProtoParserApi").decodeBytes(C) || "",
            interactiveAnnotations: y != null && y.length > 0 ? y : c,
            isViewOnce: T === !0,
            thumbnailDirectPath: E,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(I),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(k),
            isGif: g,
            gifAttribution: f,
            accessibilityLabel: u,
            streamingSidecar: L,
            statusMentioned: l == null ? void 0 : l.statusMentioned,
          });
        if (
          (o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(A, s), r)
        ) {
          var F = o(
              "WAWebAssociationProtoUtils",
            ).getValidatedAssociationFieldsFromProto(r, n, i),
            O = F.associationParentMsgKey,
            B = F.associationType,
            W = F.viewMode;
          if (
            B ===
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
          var q = babelHelpers.extends({}, A, {
            kind: "associatedVideo",
            parentMsgKey: O,
            associationType: B,
            viewMode: W,
          });
          return { msgData: q, contextInfo: m };
        }
        return { msgData: A, contextInfo: m };
      }
    }
    l.default = e;
  },
  98,
);
