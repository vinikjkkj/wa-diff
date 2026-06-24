__d(
  "WAWebScheduledMsgOutgoingMsgKey",
  ["WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      try {
        var o = r("WAWebMsgKey").fromString(e);
        return t.equals(o.remote)
          ? o
          : new (r("WAWebMsgKey"))({
              fromMe: o.fromMe,
              remote: t,
              id: o.id,
              participant: o.participant,
            });
      } catch (o) {
        return new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: t,
          id: e,
          participant: t.isGroup() ? n : void 0,
        });
      }
    }
    l.buildScheduledMsgOutgoingMsgKey = e;
  },
  98,
);
