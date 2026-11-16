__d(
  "WAWebVoipCallLogMessageTarget",
  ["WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        o = e.id;
      return o.remote.equals(t)
        ? e
        : babelHelpers.extends({}, e, {
            id: new (r("WAWebMsgKey"))({
              fromMe: o.fromMe,
              remote: t,
              id: o.id,
              participant: o.participant,
            }),
            from:
              ((n = e.from) == null ? void 0 : n.equals(o.remote)) === !0
                ? t
                : e.from,
            to: t,
          });
    }
    l.withCallLogChatId = e;
  },
  98,
);
