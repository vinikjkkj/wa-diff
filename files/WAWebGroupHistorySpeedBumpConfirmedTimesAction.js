__d(
  "WAWebGroupHistorySpeedBumpConfirmedTimesAction",
  ["WALogger", "WAWebGroupHistoryGating", "WAWebUserPrefsLocalStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e;
      return (e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        d(),
      )) != null
        ? e
        : 0;
    }
    function u() {
      try {
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(d(), s() + 1);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "recordGroupHistorySpeedBumpConfirmed: failed to persist count: ",
                "",
              ])),
            t,
          )
          .sendLogs("group-history-speed-bump-persist-failed");
      }
    }
    function c() {
      return (
        s() <
        o(
          "WAWebGroupHistoryGating",
        ).getGroupHistorySpeedBumpDialogDisplayTimes()
      );
    }
    function d() {
      return o(
        "WAWebGroupHistoryGating",
      ).isGroupHistorySendDefaultOnEnabled() ||
        o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()
        ? "WAGroupHistorySpeedBumpConfirmedTimesDefaultOn"
        : "WAGroupHistorySpeedBumpConfirmedTimes";
    }
    ((l.getGroupHistorySpeedBumpConfirmedTimes = s),
      (l.recordGroupHistorySpeedBumpConfirmed = u),
      (l.isGroupHistorySpeedBumpNeeded = c));
  },
  98,
);
