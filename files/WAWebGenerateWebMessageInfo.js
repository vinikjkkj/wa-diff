__d(
  "WAWebGenerateWebMessageInfo",
  [
    "WAWebCompactMapString",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebGenerateProtocolMessageEditProto",
    "WAWebMessageSecretLocationUtils",
    "WAWebMessagingGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i,
        l,
        u,
        c,
        d = babelHelpers.extends({}, t),
        m = e.type,
        p = s(m)
          ? {
              url: e.deprecatedMms3Url,
              directPath: e.directPath,
              encFilehash: e.encFilehash,
              mediaKey: e.mediaKey,
              mediaKeyTimestamp: e.mediaKeyTimestamp,
              filehash: (n = e.filehash) != null ? n : "",
              type: m,
              mimetype: (a = e.mimetype) != null ? a : "",
              filename: (i = e.filename) != null ? i : "",
              duration: (l = e.duration) != null ? l : "",
              width: (u = e.width) != null ? u : 0,
              height: (c = e.height) != null ? c : 0,
              firstFrameLength: e.firstFrameLength,
              isAnimated: e.isAnimated,
              isLottie: e.isLottie,
              stickerPremiumStatus: e.stickerPremiumStatus,
              thumbnailDirectPath: e.thumbnailDirectPath,
              thumbnailSha256: e.thumbnailSha256,
              thumbnailEncSha256: e.thumbnailEncSha256,
              thumbnailHeight: e.thumbnailHeight,
              thumbnailWidth: e.thumbnailWidth,
              waveform: e.waveform,
              staticUrl: e.staticUrl,
              metadataUrl: e.metadataUrl,
            }
          : void 0,
        _ = o("WAWebE2EProtoGenerator").createProtobuf(e, p);
      if (e.latestEditMsgKey != null && e.latestEditSenderTimestampMs != null) {
        var f,
          g,
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
          b =
            ((f = _.messageContextInfo) == null ? void 0 : f.messageSecret) !=
              null &&
            o("WAWebMessagingGatingUtils").isMoveMessageSecretTopLevelEnabled(),
          v = b
            ? babelHelpers.extends({}, _, {
                messageContextInfo: babelHelpers.extends(
                  {},
                  _.messageContextInfo,
                  { messageSecret: void 0 },
                ),
              })
            : _;
        d.message = babelHelpers.extends(
          {
            editedMessage: {
              message: babelHelpers.extends({}, C, {
                protocolMessage: babelHelpers.extends({}, C.protocolMessage, {
                  editedMessage: v,
                }),
              }),
            },
          },
          b
            ? {
                messageContextInfo: {
                  messageSecret:
                    (g = _.messageContextInfo) == null
                      ? void 0
                      : g.messageSecret,
                },
              }
            : void 0,
        );
      } else d.message = _;
      return (
        d.message != null &&
          o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
            d.message,
            o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
              .Sender,
            void 0,
            o("WAWebMessageSecretLocationUtils")
              .MESSAGE_SECRET_RULE_ID_GROUP_HISTORY,
          ),
        d
      );
    }
    function s(e) {
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
