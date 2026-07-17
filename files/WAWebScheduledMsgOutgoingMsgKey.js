__d(
  "WAWebScheduledMsgOutgoingMsgKey",
  ["WAWebMsgKey", "WAWebWidFactory"],
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
    function s(e, t, n) {
      var a;
      if (t.isGroup() && n != null)
        try {
          a = o("WAWebWidFactory").asUserWidOrThrow(
            o("WAWebWidFactory").createWid(n),
          );
        } catch (e) {
          a = void 0;
        }
      return new (r("WAWebMsgKey"))({
        fromMe: !1,
        remote: t,
        id: e,
        participant: a,
      });
    }
    ((l.buildScheduledMsgOutgoingMsgKey = e),
      (l.buildScheduledMsgIncomingMsgKey = s));
  },
  98,
);
