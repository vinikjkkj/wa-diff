__d(
  "WAWebHandleMsgCommon",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = {
        text: "text",
        media: "media",
        medianotify: "medianotify",
        pay: "pay",
        poll: "poll",
        reaction: "reaction",
        event: "event",
      },
      s = { peer: "peer" },
      u = { ctwa: "ctwa" },
      c = { pn: "pn", lid: "lid" },
      d = {
        creation: "creation",
        quiz_creation: "quiz_creation",
        vote: "vote",
        result_snapshot: "result_snapshot",
        edit: "edit",
      },
      m = { creation: "creation", response: "response", edit: "edit" },
      p = { high: "high", low: "low", unknown: "unknown" },
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "HSMMismatchError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      f = {
        send: "send",
        request: "request",
        futureproof: "futureproof",
        "request-decline": "request-decline",
        "request-cancel": "request-cancel",
        invite: "invite",
      },
      g = "biz_source",
      h = "channels_invitation",
      y = {
        default: "default",
        member_tag: "member_tag",
        group_history: "group_history",
      };
    ((l.STANZA_MSG_TYPES = e),
      (l.MSG_CATEGORY = s),
      (l.STANZA_MSG_ORIGIN = u),
      (l.STANZA_MSG_ADDRESSING_MODE = c),
      (l.POLL_TYPES = d),
      (l.EVENT_TYPES = m),
      (l.MSG_VERIFIED_LEVEL = p),
      (l.HsmMismatchError = _),
      (l.PAY_NODE_TYPES = f),
      (l.BIZ_SOURCE_ATTR = g),
      (l.CONTEXT_SOURCE = h),
      (l.APPDATA = y));
  },
  98,
);
