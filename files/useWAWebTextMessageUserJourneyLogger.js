__d(
  "useWAWebTextMessageUserJourneyLogger",
  [
    "WAWebTextMessageUserJourneyLogger",
    "WAWebWamEnumTextMessageUserJourneyAction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(10),
        r = t === void 0 ? !1 : t,
        a = s(!1),
        i = s(!1),
        l = s(r),
        u;
      n[0] !== e
        ? ((u = function (n, r) {
            var t = a.current;
            if (l.current && !i.current) {
              i.current = !0;
              return;
            }
            var s = (a.current = n);
            !t && s
              ? o(
                  "WAWebTextMessageUserJourneyLogger",
                ).TextMessageUserJourneyLogger.log({
                  chatId: e,
                  action: o("WAWebWamEnumTextMessageUserJourneyAction")
                    .TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START,
                  hasDraft: l.current,
                  containsQuotedItem: r,
                })
              : (t || l.current) &&
                !s &&
                o(
                  "WAWebTextMessageUserJourneyLogger",
                ).TextMessageUserJourneyLogger.log({
                  chatId: e,
                  action: o("WAWebWamEnumTextMessageUserJourneyAction")
                    .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED,
                  hasDraft: l.current,
                  containsQuotedItem: r,
                });
          }),
          (n[0] = e),
          (n[1] = u))
        : (u = n[1]);
      var c = u,
        d;
      n[2] !== e
        ? ((d = function (n) {
            (o(
              "WAWebTextMessageUserJourneyLogger",
            ).TextMessageUserJourneyLogger.log({
              chatId: e,
              action: o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT,
              hasDraft: l.current,
              containsQuotedItem: n,
            }),
              (a.current = !1),
              (l.current = !1));
          }),
          (n[2] = e),
          (n[3] = d))
        : (d = n[3]);
      var m = d,
        p;
      n[4] !== e
        ? ((p = function (n) {
            var t = a.current
              ? o("WAWebWamEnumTextMessageUserJourneyAction")
                  .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED
              : o("WAWebWamEnumTextMessageUserJourneyAction")
                  .TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT;
            o(
              "WAWebTextMessageUserJourneyLogger",
            ).TextMessageUserJourneyLogger.log({
              chatId: e,
              action: t,
              hasDraft: l.current,
              containsQuotedItem: n,
            });
          }),
          (n[4] = e),
          (n[5] = p))
        : (p = n[5]);
      var _ = p,
        f;
      return (
        n[6] !== _ || n[7] !== m || n[8] !== c
          ? ((f = {
              handleTextMsgChangeForUJLogging: c,
              handleMsgSentForUJLogging: m,
              handleCloseForUJLogging: _,
            }),
            (n[6] = _),
            (n[7] = m),
            (n[8] = c),
            (n[9] = f))
          : (f = n[9]),
        f
      );
    }
    l.default = u;
  },
  98,
);
