__d(
  "AdsPEFilterZeroResultRecoveryPreloader",
  ["AdsPEFilterZeroResultRecoveryGating", "JSResource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResource")("AdsPEFilterZeroResultRecoveryRow.react").__setRef(
      "AdsPEFilterZeroResultRecoveryPreloader",
    );
    function s(t, n) {
      !t ||
        n.trim() === "" ||
        (o(
          "AdsPEFilterZeroResultRecoveryGating",
        ).getIsAdsPEFilterZeroResultRecoveryEnabledWithoutExposure() &&
          e.preload());
    }
    l.preloadAdsPEFilterZeroResultRecovery = s;
  },
  98,
);
