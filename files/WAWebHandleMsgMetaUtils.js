__d(
  "WAWebHandleMsgMetaUtils",
  ["WAWebHandleMsgCommon", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
          o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction
        );
      },
      s = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll &&
          (t == null ? void 0 : t.pollType) ===
            o("WAWebHandleMsgCommon").POLL_TYPES.vote
        );
      },
      u = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text &&
          (t == null ? void 0 : t.threadMsgId) != null &&
          (t == null ? void 0 : t.threadMsgSenderJid) != null
        );
      },
      c = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event &&
          (t == null ? void 0 : t.eventType) ===
            o("WAWebHandleMsgCommon").EVENT_TYPES.response
        );
      },
      d = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event &&
          (t == null ? void 0 : t.eventType) ===
            o("WAWebHandleMsgCommon").EVENT_TYPES.edit
        );
      },
      m = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
          o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media
        );
      },
      p = function (t) {
        return (
          (t == null ? void 0 : t.type) ===
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll &&
          (t == null ? void 0 : t.pollType) ===
            o("WAWebHandleMsgCommon").POLL_TYPES.edit
        );
      },
      _ = function (t) {
        return (
          (t == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.member_tag
        );
      };
    function f(e) {
      if (e != null && u(e)) return o("WAWebMsgType").MSG_TYPE.COMMENT;
    }
    ((l.isReactionMsgMeta = e),
      (l.isPollVoteMsgMeta = s),
      (l.isCommentMsgMeta = u),
      (l.isEventResponseMsgMeta = c),
      (l.isEventEditMsgMeta = d),
      (l.isMediaMsgMeta = m),
      (l.isPollEditMsgMeta = p),
      (l.isMemberTagMsgMeta = _),
      (l.getMsgTypeFromMsgMeta = f));
  },
  98,
);
