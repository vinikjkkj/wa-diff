__d(
  "WAWebMusicCreationReportingDebug",
  ["WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "WAWebMusicStubbedCreationReporting";
    function s() {
      return (
        (r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(e)) === "true"
      );
    }
    function u(t) {
      t
        ? r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(e, "true")
        : r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").removeItem(e);
    }
    ((l.isStubbedCreationReportingEnabled = s),
      (l.enableStubbedCreationReporting = u));
  },
  98,
);
