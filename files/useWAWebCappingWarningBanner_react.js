__d(
  "useWAWebCappingWarningBanner.react",
  [
    "WAWebCmd",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "react",
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
      var t = d(!1),
        n = t[0],
        r = t[1],
        a = c(function (e) {
          return e + 1;
        }, 0),
        i = a[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "new_chat_message_capping_state_change",
        i,
      );
      var l = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).getCappingData(),
        s =
          l != null &&
          l.dismissed_warning_level === String(l.capping_status) &&
          l.dismissed_cycle_start_timestamp === l.cycle_start_timestamp,
        m =
          !n &&
          !s &&
          o(
            "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
          ).isIndividualNewChatMessageCappingEnabled() &&
          o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserWarned() &&
          !o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).canSendMsgWhileCapped({ chat: e, contact: e.contact }),
        p = u(
          function () {
            (r(!0),
              l != null &&
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebIndividualNewChatMessageCappingLimitUtils")
                    .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
                  babelHelpers.extends({}, l, {
                    dismissed_warning_level: String(l.capping_status),
                    dismissed_cycle_start_timestamp: l.cycle_start_timestamp,
                  }),
                ));
          },
          [l],
        );
      return [m, p];
    }
    l.default = m;
  },
  98,
);
