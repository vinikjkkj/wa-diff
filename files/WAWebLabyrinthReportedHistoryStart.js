__d(
  "WAWebLabyrinthReportedHistoryStart",
  [
    "WALogger",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .LABYRINTH_REPORTED_HISTORY_START_SEC,
      );
      return typeof e == "number" && e > 0 ? e : null;
    }
    function u(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .LABYRINTH_REPORTED_HISTORY_START_SEC,
        Math.floor(e),
      );
    }
    async function c(t) {
      try {
        t == null
          ? await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .LABYRINTH_REPORTED_HISTORY_START_SEC,
            )
          : await u(t);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth] storing the reported history start failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("labyrinth-reported-history-start-store-failed");
      }
    }
    ((l.getLabyrinthReportedHistoryStartSec = s),
      (l.saveLabyrinthReportedHistoryStart = u),
      (l.keepLabyrinthReportedHistoryStartFromPairing = c));
  },
  98,
);
