__d(
  "WAAsConsumerApplication",
  [
    "WAAssertUnreachable",
    "WAConsumerApplication.pb",
    "WAMsgIdToMessageKey",
    "WAMsgType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "image/jpeg",
      s = "video/mp4";
    function u(e) {
      switch (e.type) {
        case o("WAMsgType").MSG_TYPE.TEXT:
          return c(e);
        case o("WAMsgType").MSG_TYPE.REACTION:
          return d(e);
        case o("WAMsgType").MSG_TYPE.REVOKED:
          return m(e);
        default:
          return r("WAAssertUnreachable")(e.type);
      }
    }
    function c(e) {
      var t = {
        payload: {
          content: {
            messageText: { mentionedJid: [], text: e.msgContent.content },
          },
        },
      };
      if (e.specialTextSize != null) {
        var n =
          e.specialTextSize === 1
            ? o("WAConsumerApplication.pb")
                .CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.SMALL
            : e.specialTextSize === 2
              ? o("WAConsumerApplication.pb")
                  .CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.MEDIUM
              : o("WAConsumerApplication.pb")
                  .CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.LARGE;
        t.metadata = { specialTextSize: n };
      }
      return t;
    }
    function d(e) {
      if (e.reactToMsgId == null)
        throw r("err")("cannot send reaction that reacts to no message");
      var t = o("WAMsgIdToMessageKey").msgIdToMessageKey(e.reactToMsgId),
        n = {
          groupingKey: e.groupingKey == null ? void 0 : e.groupingKey,
          key: t,
          senderTimestampMs: e.ts,
          text: e.reaction == null ? void 0 : e.reaction,
        };
      return { payload: { content: { reactionMessage: n } } };
    }
    function m(e) {
      var t = { remoteJid: e.id.chat, fromMe: !0, id: e.revokedExternalId };
      return { payload: { applicationData: { revoke: { key: t } } } };
    }
    ((l.IMAGE_MIME_TYPE = e),
      (l.VIDEO_MIME_TYPE = s),
      (l.asConsumerApplication = u));
  },
  98,
);
