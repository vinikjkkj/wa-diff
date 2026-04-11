__d(
  "RSTMetadataCollectorMainThread",
  [
    "FBLogger",
    "QPLCrashResiliencePlugin",
    "RSTInteractionTrackingMainThread",
    "RSTRecoverableUnresponsivenessTrackingMainThread",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      if (!e)
        try {
          (o("RSTInteractionTrackingMainThread").start(),
            o("RSTRecoverableUnresponsivenessTrackingMainThread").start(),
            o("QPLCrashResiliencePlugin").startQPLCrashResilience(),
            (e = !0));
        } catch (e) {
          r("FBLogger")("responsive-tracker")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to start RST metadata collector");
        }
    }
    l.start = s;
  },
  98,
);
