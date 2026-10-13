__d(
  "WAWebGroupHistoryInitialToggleState",
  [
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySentOnceAction",
    "WAWebGroupHistoryToggleActivation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t
        ? e != null
          ? {
              shouldSendGroupHistory: e,
              toggleActivation: babelHelpers.extends(
                {},
                o("WAWebGroupHistoryToggleActivation")
                  .NO_GROUP_HISTORY_TOGGLE_ACTIVATION,
                { togglePerGroupUsageActivated: !0 },
              ),
            }
          : o("WAWebGroupHistoryGating").isGroupHistorySendDefaultOnEnabled()
            ? {
                shouldSendGroupHistory: !0,
                toggleActivation: babelHelpers.extends(
                  {},
                  o("WAWebGroupHistoryToggleActivation")
                    .NO_GROUP_HISTORY_TOGGLE_ACTIVATION,
                  { toggleDefaultOn: !0 },
                ),
              }
            : o("WAWebGroupHistorySentOnceAction").hasSentGroupHistoryOnce() &&
                o(
                  "WAWebGroupHistoryGating",
                ).isGroupHistorySendOnceDefaultOnEnabled()
              ? {
                  shouldSendGroupHistory: !0,
                  toggleActivation: babelHelpers.extends(
                    {},
                    o("WAWebGroupHistoryToggleActivation")
                      .NO_GROUP_HISTORY_TOGGLE_ACTIVATION,
                    { toggleUserActivated: !0 },
                  ),
                }
              : {
                  shouldSendGroupHistory: !1,
                  toggleActivation: o("WAWebGroupHistoryToggleActivation")
                    .NO_GROUP_HISTORY_TOGGLE_ACTIVATION,
                }
        : {
            shouldSendGroupHistory: !1,
            toggleActivation: o("WAWebGroupHistoryToggleActivation")
              .NO_GROUP_HISTORY_TOGGLE_ACTIVATION,
          };
    }
    l.computeInitialGroupHistoryToggleState = e;
  },
  98,
);
