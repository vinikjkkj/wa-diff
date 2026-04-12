__d(
  "WAWebMsgFailIcon.react",
  [
    "WAWebErrorType",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebMediaMsgFailIcon.react",
    "WAWebMsgSendFailIcon.react",
    "WAWebNewChatMsgCappingSendFailIcon.react",
    "WAWebWamEnumSurfaceType",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.associatedMessages,
        n = e.displayType,
        a = e.msg,
        i = o("useWAWebModelValues").useModelValues(a, ["mediaData"]),
        l = i.mediaData;
      if (l && !t)
        return s.jsx(r("WAWebMediaMsgFailIcon.react"), {
          displayType: n,
          msg: a,
          mediaData: l,
        });
      var u = a.errorCode;
      return u ===
        o("WAWebErrorType").SendFailureErrorCode
          .UserReachedMaxMonthlyLimitForNewMessages &&
        o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()
        ? (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
            "message_nack",
            JSON.stringify(
              o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).getCappingData() || {},
            ),
          ),
          s.jsx(r("WAWebNewChatMsgCappingSendFailIcon.react"), {
            displayType: n,
          }))
        : s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
            msgs: [a.safe()].concat(
              (t != null ? t : []).map(function (e) {
                return e.safe();
              }),
            ),
            showForMessages: !0,
            showForAddOns: !0,
            displayType: n,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
