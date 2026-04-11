__d(
  "WAWebGenerateWebMessageInfo",
  [
    "WAWebCompactMapString",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebGenerateProtocolMessageEditProto",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
    function s(t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = babelHelpers.extends({}, n),
        m = t.type,
        p = e(m)
          ? {
              url: t.deprecatedMms3Url,
              directPath: t.directPath,
              encFilehash: t.encFilehash,
              mediaKey: t.mediaKey,
              mediaKeyTimestamp: t.mediaKeyTimestamp,
              filehash: (a = t.filehash) != null ? a : "",
              type: m,
              mimetype: (i = t.mimetype) != null ? i : "",
              filename: (l = t.filename) != null ? l : "",
              duration: (s = t.duration) != null ? s : "",
              width: (u = t.width) != null ? u : 0,
              height: (c = t.height) != null ? c : 0,
              firstFrameLength: t.firstFrameLength,
              isAnimated: t.isAnimated,
              isLottie: t.isLottie,
              stickerPremiumStatus: t.stickerPremiumStatus,
              thumbnailDirectPath: t.thumbnailDirectPath,
              thumbnailSha256: t.thumbnailSha256,
              thumbnailEncSha256: t.thumbnailEncSha256,
              thumbnailHeight: t.thumbnailHeight,
              thumbnailWidth: t.thumbnailWidth,
              waveform: t.waveform,
              staticUrl: t.staticUrl,
              metadataUrl: t.metadataUrl,
            }
          : void 0,
        _ = o("WAWebE2EProtoGenerator").createProtobuf(t, p);
      if (t.latestEditMsgKey != null && t.latestEditSenderTimestampMs != null) {
        var f = { mentionedJid: [], groupMentions: [], statusAttributions: [] };
        (t.mentionedJidList &&
          t.mentionedJidList.length > 0 &&
          (f.mentionedJid = r("WAWebCompactMapString")(
            t.mentionedJidList,
            o("WAWebE2EProtoUtils").encodeJid,
          )),
          t.groupMentions &&
            t.groupMentions.length > 0 &&
            (f.groupMentions = t.groupMentions.map(function (e) {
              var t, n;
              return {
                groupSubject: (t = e.groupSubject) != null ? t : "",
                groupJid:
                  (n = o("WAWebE2EProtoUtils").encodeJid(e.groupJid)) != null
                    ? n
                    : "",
              };
            })));
        var g = f.mentionedJid.length > 0 || f.groupMentions.length > 0,
          h = r("WAWebGenerateProtocolMessageEditProto")({
            json: babelHelpers.extends({}, t, {
              protocolMessageKey: t.id,
              editMsgType: t.type,
            }),
            contextInfo: g ? f : null,
          });
        d.message = {
          editedMessage: {
            message: babelHelpers.extends({}, h, {
              protocolMessage: babelHelpers.extends({}, h.protocolMessage, {
                editedMessage: _,
              }),
            }),
          },
        };
      } else d.message = _;
      return d;
    }
    l.default = s;
  },
  98,
);
