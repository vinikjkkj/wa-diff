__d(
  "WAWebGenerateWebMessageInfo",
  [
    "WAWebCompactMapString",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebGenerateProtocolMessageEditProto",
    "WAWebMessageSecretLocationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i,
        l,
        c,
        d,
        m = babelHelpers.extends({}, t),
        p = e.type,
        _ = u(p)
          ? {
              url: e.deprecatedMms3Url,
              directPath: e.directPath,
              encFilehash: e.encFilehash,
              mediaKey: e.mediaKey,
              mediaKeyTimestamp: e.mediaKeyTimestamp,
              filehash: (n = e.filehash) != null ? n : "",
              type: p,
              mimetype: (a = e.mimetype) != null ? a : "",
              filename: (i = e.filename) != null ? i : "",
              duration: (l = e.duration) != null ? l : "",
              width: (c = e.width) != null ? c : 0,
              height: (d = e.height) != null ? d : 0,
              firstFrameLength: e.firstFrameLength,
              isAnimated: e.isAnimated,
              isLottie: e.isLottie,
              isAiSticker: e.isAiSticker,
              stickerPremiumStatus: e.stickerPremiumStatus,
              thumbnailDirectPath: e.thumbnailDirectPath,
              thumbnailSha256: e.thumbnailSha256,
              thumbnailEncSha256: e.thumbnailEncSha256,
              thumbnailHeight: e.thumbnailHeight,
              thumbnailWidth: e.thumbnailWidth,
              waveform: e.waveform,
              staticUrl: e.staticUrl,
              metadataUrl: e.metadataUrl,
              dashManifestUrl: e.dashManifestUrl,
            }
          : void 0,
        f = s(o("WAWebE2EProtoGenerator").createProtobuf(e, _));
      if (e.latestEditMsgKey != null && e.latestEditSenderTimestampMs != null) {
        var g,
          h = {
            mentionedJid: [],
            groupMentions: [],
            statusAttributions: [],
            experienceIds: [],
          };
        (e.mentionedJidList &&
          e.mentionedJidList.length > 0 &&
          (h.mentionedJid = r("WAWebCompactMapString")(
            e.mentionedJidList,
            o("WAWebE2EProtoUtils").encodeJid,
          )),
          e.groupMentions &&
            e.groupMentions.length > 0 &&
            (h.groupMentions = e.groupMentions.map(function (e) {
              var t, n;
              return {
                groupSubject: (t = e.groupSubject) != null ? t : "",
                groupJid:
                  (n = o("WAWebE2EProtoUtils").encodeJid(e.groupJid)) != null
                    ? n
                    : "",
              };
            })));
        var y = h.mentionedJid.length > 0 || h.groupMentions.length > 0,
          C = r("WAWebGenerateProtocolMessageEditProto")({
            json: babelHelpers.extends({}, e, {
              protocolMessageKey: e.id,
              editMsgType: e.type,
            }),
            contextInfo: y ? h : null,
          }),
          b = (g = f.messageContextInfo) == null ? void 0 : g.messageSecret,
          v =
            b != null
              ? babelHelpers.extends({}, f, {
                  messageContextInfo: babelHelpers.extends(
                    {},
                    f.messageContextInfo,
                    { messageSecret: void 0 },
                  ),
                })
              : f;
        m.message = babelHelpers.extends(
          {
            editedMessage: {
              message: babelHelpers.extends({}, C, {
                protocolMessage: babelHelpers.extends({}, C.protocolMessage, {
                  editedMessage: v,
                }),
              }),
            },
          },
          b != null ? { messageContextInfo: { messageSecret: b } } : void 0,
        );
      } else m.message = f;
      return (
        m.message != null &&
          o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
            context: o("WAWebMessageSecretLocationUtils")
              .MessageSecretCheckContext.Sender,
            proto: m.message,
            ruleId: o("WAWebMessageSecretLocationUtils")
              .MESSAGE_SECRET_RULE_ID_GROUP_HISTORY,
          }),
        m
      );
    }
    function s(e) {
      var t,
        n,
        r = (t = e.audioStickerMessage) == null ? void 0 : t.message;
      if (r == null) return e;
      var o =
        ((n = r.stickerMessage) == null ? void 0 : n.isLottie) === !0
          ? { lottieStickerMessage: { message: r } }
          : r;
      return babelHelpers.extends({}, o, {
        messageContextInfo: e.messageContextInfo,
      });
    }
    function u(e) {
      return (
        e === "video" ||
        e === "sticker" ||
        e === "ptv" ||
        e === "ptt" ||
        e === "image" ||
        e === "document" ||
        e === "audio"
      );
    }
    l.default = e;
  },
  98,
);
