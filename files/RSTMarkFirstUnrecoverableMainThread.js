__d(
  "RSTMarkFirstUnrecoverableMainThread",
  [
    "AirwaveAppIdUtils",
    "CurrentUser",
    "FBLogger",
    "RSTLocalStorageMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "rst-first-unrecoverable-marking";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.incidentID,
            a = t.sessionID,
            i = a + ":first-unrecoverable",
            l = function () {
              r("RSTLocalStorageMainThread").has(i) ||
                (r("RSTLocalStorageMainThread").set(i, n),
                (t.isFirstUnrecoverable = !0));
            };
          try {
            if ("locks" in navigator) yield navigator.locks.request(e, l);
            else {
              var s = r("CurrentUser").getAppID();
              o("AirwaveAppIdUtils").isAirwaveWebAppId(s) && l();
            }
          } catch (e) {
            r("FBLogger")("responsive-tracker")
              .catching(r("getErrorSafe")(e))
              .warn(
                "Failed to acquire lock for marking first unrecoverable incident",
              );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.markFirstUnrecoverableIncident = s;
  },
  98,
);
