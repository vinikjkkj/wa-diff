__d(
  "WAParseConsumerMessagePollUpdate",
  ["WAGlobals", "WAMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = t.ack,
        i = t.id,
        l = t.ts;
      return r == null || !o("WAGlobals").getConfig().isPollsEnabled()
        ? { unstoredMsg: null, unstoredMedia: null, unstoredQuotedMedia: null }
        : {
            unstoredMsg: {
              ack: a,
              id: i,
              ts: l,
              type: o("WAMsgType").MSG_TYPE.GROUP_POLL_UPDATE,
            },
            unstoredGroupPollUpdateInfo: {
              pollUpdateMessage: r,
              type: o("WAMsgType").MSG_TYPE.GROUP_POLL_UPDATE,
            },
            unstoredMedia: null,
            unstoredQuotedMedia: null,
          };
    }
    l.default = e;
  },
  98,
);
