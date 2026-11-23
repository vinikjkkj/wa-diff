__d(
  "WAParseConsumerMessagePollCreation",
  ["WAGlobals", "WAHex", "WAMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = {
        unstoredMsg: {
          type: o("WAMsgType").MSG_TYPE.FUTUREPROOF,
          msgContent: {
            protobuf: o("WAHex").bytesToBuffer(e),
            subtype: "pollCreationMessage",
          },
          id: t.id,
          ts: t.ts,
          sentTs: t.sentTs,
          serverTs: t.serverTs,
          ack: t.ack,
          reportingMeta: n,
        },
        unstoredMedia: null,
        unstoredQuotedMedia: null,
      };
      if (!r || !o("WAGlobals").getConfig().isPollsEnabled()) return a;
      var i = r.encKey,
        l = r.name,
        s = r.options,
        u = r.selectableOptionsCount,
        c = t.ack,
        d = t.id,
        m = t.ts;
      if (i == null || l == null || u == null) return a;
      var p = s
        .map(function (e) {
          return e.optionName;
        })
        .filter(Boolean);
      return {
        unstoredMsg: {
          ack: c,
          id: d,
          ts: m,
          type: o("WAMsgType").MSG_TYPE.GROUP_POLL_CREATE,
        },
        unstoredGroupPollCreateInfo: {
          encKey: i,
          name: l,
          selectableOptionsCount: u,
          options: p,
        },
        unstoredMedia: null,
        unstoredQuotedMedia: null,
      };
    }
    l.default = e;
  },
  98,
);
