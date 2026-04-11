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
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.associatedMessages,
        a = e.displayType,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["mediaData"]), (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebModelValues").useModelValues(i, l),
        d = u.mediaData;
      if (d && !n) {
        var m;
        return (
          t[1] !== a || t[2] !== d || t[3] !== i
            ? ((m = s.jsx(r("WAWebMediaMsgFailIcon.react"), {
                displayType: a,
                msg: i,
                mediaData: d,
              })),
              (t[1] = a),
              (t[2] = d),
              (t[3] = i),
              (t[4] = m))
            : (m = t[4]),
          m
        );
      }
      var p = i.errorCode;
      if (
        p ===
          o("WAWebErrorType").SendFailureErrorCode
            .UserReachedMaxMonthlyLimitForNewMessages &&
        o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped()
      ) {
        o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
          o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
          "message_nack",
          JSON.stringify(
            o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).getCappingData() || {},
          ),
        );
        var _;
        return (
          t[5] !== a
            ? ((_ = s.jsx(r("WAWebNewChatMsgCappingSendFailIcon.react"), {
                displayType: a,
              })),
              (t[5] = a),
              (t[6] = _))
            : (_ = t[6]),
          _
        );
      }
      var f;
      t[7] !== i ? ((f = i.safe()), (t[7] = i), (t[8] = f)) : (f = t[8]);
      var g;
      t[9] !== n
        ? ((g = n != null ? n : []), (t[9] = n), (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== f || t[12] !== g
        ? ((h = [f].concat(g.map(c))), (t[11] = f), (t[12] = g), (t[13] = h))
        : (h = t[13]);
      var y;
      return (
        t[14] !== a || t[15] !== h
          ? ((y = s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
              msgs: h,
              showForMessages: !0,
              showForAddOns: !0,
              displayType: a,
            })),
            (t[14] = a),
            (t[15] = h),
            (t[16] = y))
          : (y = t[16]),
        y
      );
    }
    function c(e) {
      return e.safe();
    }
    l.default = u;
  },
  98,
);
