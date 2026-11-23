__d(
  "WebMpsInsertionCleaners",
  [
    "MAWMpsCleanersContants",
    "MpsDeletedCleaner",
    "MpsEphemeralCleaner",
    "MpsErrors",
    "MpsTypes",
    "WATimeUtils",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        (await Promise.all(e.map(s)), await Promise.all(e.map(c)));
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "schedule_cleaners",
            "purge_failed",
          ),
        );
      }
    }
    function s(e) {
      return e.directive.actionType ===
        o("MpsTypes").ActionType.DeleteTopLevel ||
        e.directive.actionType ===
          o("MpsTypes").ActionType.DeleteSupplemental ||
        e.directive.actionType === o("MpsTypes").ActionType.DeleteThread
        ? u(e.message.timestampMs)
        : e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel ||
            e.directive.actionType ===
              o("MpsTypes").ActionType.UpsertSupplemental ||
            e.directive.actionType ===
              o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder ||
            e.directive.actionType === o("MpsTypes").ActionType.Noop
          ? Promise.resolve()
          : e.directive.actionType === o("MpsTypes").ActionType.Unknown ||
              e.directive.actionType === o("MpsTypes").ActionType.Preprocess
            ? Promise.reject(
                o("MpsErrors").MpsErrors.error(
                  "invariant",
                  "this should not happen",
                ),
              )
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e.directive.actionType,
                );
              })();
    }
    function u(e) {
      var t = o("WATimeUtils").castToUnixTime(
        Math.ceil(
          (e + o("MAWMpsCleanersContants").REPORTING_WINDOW_IN_MS) / 1e3,
        ),
      );
      return (
        o("MpsDeletedCleaner").addNewMpsDeletedTimestamp(t),
        Promise.resolve()
      );
    }
    function c(e) {
      var t = e.directive.expiryTimestampMs;
      if (t == null) return Promise.resolve();
      var n = o("WATimeUtils").castToUnixTime(Math.ceil(t / 1e3));
      return (
        o("MpsEphemeralCleaner").addNewMpsEphemeralTimestamp(n),
        Promise.resolve()
      );
    }
    l.scheduleCleaners = e;
  },
  98,
);
