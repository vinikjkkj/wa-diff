__d(
  "WAWebGroupHistorySentOnceAction",
  ["WAWebUserPrefsLocalStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        "WAGroupHistorySentOnce",
        !0,
      );
    }
    function s() {
      return (
        r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
          "WAGroupHistorySentOnce",
        ) === !0
      );
    }
    ((l.markGroupHistorySentOnce = e), (l.hasSentGroupHistoryOnce = s));
  },
  98,
);
