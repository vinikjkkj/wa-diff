__d(
  "WAWebNewsletterMsgEditUtils",
  ["WAWebMsgKey", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        subtype: "message_edit",
        protocolMessageKey: e.id,
        latestEditMsgKey: e.id,
        latestEditSenderTimestampMs: e.t,
      });
    }
    function s(e, t) {
      var n = e.id.clone(),
        a = new (r("WAWebMsgKey"))({
          remote: e.id.remote,
          fromMe: e.id.fromMe,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return babelHelpers.extends({}, e, {
        id: a,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        subtype: "message_edit",
        editMsgType: e.type,
        protocolMessageKey: n,
        latestEditMsgKey: a,
        latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
      });
    }
    ((l.mapMsgToEditProtocolMsgLegacy = e), (l.mapMsgToEditProtocolMsg = s));
  },
  98,
);
