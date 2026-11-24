__d(
  "WAWebVoipCallLogOrderingTimestampRepair",
  [
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebMsgDataUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    async function s(t, n, r, a, i) {
      if (!(a == null || !i.includes(a))) {
        var l = e;
        await t.between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(r),
          o("WAWebDBMessageUtils").endOfChat(r),
          { shouldDecrypt: !1 },
          void 0,
          function (t) {
            var n = o("WAWebDBMessageSerialization").messageFromDbRow(
              babelHelpers.extends({}, t, { msgRowOpaqueData: void 0 }),
            );
            if (
              o("WAWebMsgDataUtils").eventTypeFromMsgType(n) !==
              o("WAWebCommonMsgUtils").EventType.IGNORE
            ) {
              var r;
              l = Math.max(l, (r = n.t) != null ? r : e);
            }
            return !1;
          },
        );
        var s = Math.min(a, l);
        return (await n.merge(r.toString(), { t: s }), s);
      }
    }
    l.repairStoredChatTimestamp = s;
  },
  98,
);
