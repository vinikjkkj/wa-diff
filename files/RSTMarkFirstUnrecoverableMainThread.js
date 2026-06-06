__d(
  "RSTMarkFirstUnrecoverableMainThread",
  ["FBLogger", "RSTLocalStorageMainThread", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "rst-first-unrecoverable-marking";
    async function s(t) {
      var n = t.incidentID,
        o = t.sessionID,
        a = o + ":first-unrecoverable";
      try {
        "locks" in navigator &&
          (await navigator.locks.request(e, function () {
            r("RSTLocalStorageMainThread").has(a) ||
              (r("RSTLocalStorageMainThread").set(a, n),
              (t.isFirstUnrecoverable = !0));
          }));
      } catch (e) {
        r("FBLogger")("responsive-tracker")
          .catching(r("getErrorSafe")(e))
          .warn(
            "Failed to acquire lock for marking first unrecoverable incident",
          );
      }
    }
    l.markFirstUnrecoverableIncident = s;
  },
  98,
);
