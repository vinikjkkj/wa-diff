__d(
  "useWAWebTextMessageUserJourneyLogger",
  [
    "WAWebTextMessageUserJourneyLogger",
    "WAWebWamEnumTextMessageUserJourneyAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e, t) {
      t === void 0 && (t = !1);
      var n = s(!1),
        r = s(!1),
        a = s(t),
        i = function (i, l) {
          var t = n.current;
          if (a.current && !r.current) {
            r.current = !0;
            return;
          }
          var s = (n.current = i);
          !t && s
            ? o(
                "WAWebTextMessageUserJourneyLogger",
              ).TextMessageUserJourneyLogger.log({
                chatId: e,
                action: o("WAWebWamEnumTextMessageUserJourneyAction")
                  .TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START,
                hasDraft: a.current,
                containsQuotedItem: l,
              })
            : (t || a.current) &&
              !s &&
              o(
                "WAWebTextMessageUserJourneyLogger",
              ).TextMessageUserJourneyLogger.log({
                chatId: e,
                action: o("WAWebWamEnumTextMessageUserJourneyAction")
                  .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED,
                hasDraft: a.current,
                containsQuotedItem: l,
              });
        },
        l = function (r) {
          (o(
            "WAWebTextMessageUserJourneyLogger",
          ).TextMessageUserJourneyLogger.log({
            chatId: e,
            action: o("WAWebWamEnumTextMessageUserJourneyAction")
              .TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT,
            hasDraft: a.current,
            containsQuotedItem: r,
          }),
            (n.current = !1),
            (a.current = !1));
        },
        u = function (r) {
          var t = n.current
            ? o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED
            : o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT;
          o(
            "WAWebTextMessageUserJourneyLogger",
          ).TextMessageUserJourneyLogger.log({
            chatId: e,
            action: t,
            hasDraft: a.current,
            containsQuotedItem: r,
          });
        };
      return {
        handleTextMsgChangeForUJLogging: i,
        handleMsgSentForUJLogging: l,
        handleCloseForUJLogging: u,
      };
    }
    l.default = u;
  },
  98,
);
