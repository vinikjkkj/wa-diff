__d(
  "useWAWebCappingWarningBanner.react",
  [
    "WAWebCmd",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useReducer,
      d = s.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = d(!1),
        r = n[0],
        a = n[1],
        i = c(p, 0),
        l = i[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "new_chat_message_capping_state_change",
        l,
      );
      var s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData()),
          (t[0] = s))
        : (s = t[0]);
      var u = s,
        m =
          u != null &&
          u.dismissed_warning_level === String(u.capping_status) &&
          u.dismissed_cycle_start_timestamp === u.cycle_start_timestamp,
        _;
      t[1] !== e || t[2] !== r
        ? ((_ =
            !r &&
            !m &&
            o(
              "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
            ).isIndividualNewChatMessageCappingEnabled() &&
            o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).isUserWarned() &&
            !o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).canSendMsgWhileCapped({ chat: e, contact: e.contact })),
          (t[1] = e),
          (t[2] = r),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            (a(!0),
              u != null &&
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebIndividualNewChatMessageCappingLimitUtils")
                    .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
                  babelHelpers.extends({}, u, {
                    dismissed_warning_level: String(u.capping_status),
                    dismissed_cycle_start_timestamp: u.cycle_start_timestamp,
                  }),
                ));
          }),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      return (
        t[5] !== f ? ((y = [f, h]), (t[5] = f), (t[6] = y)) : (y = t[6]),
        y
      );
    }
    function p(e) {
      return e + 1;
    }
    l.default = m;
  },
  98,
);
