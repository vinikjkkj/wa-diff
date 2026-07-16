__d(
  "WAWebAddonSendMsgData",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebMsgType").MSG_TYPE.REACTION,
      o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
    ]);
    function s(t) {
      return e.has(t.type)
        ? !0
        : new Set(["reaction", "poll_update", "comment", "event_response"]).has(
            t.type,
          );
    }
    l.isOptimisticAddonSendSupported = s;
  },
  98,
);
