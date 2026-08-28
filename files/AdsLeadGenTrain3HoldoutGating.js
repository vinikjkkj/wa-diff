__d(
  "AdsLeadGenTrain3HoldoutGating",
  ["AdsInterfacesLogger", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (!r("justknobx")._("1837")) return !1;
      var n = r("gkx")("5213");
      return (
        r("AdsInterfacesLogger").log({
          eventName: "lg_2026_h1_train3_centralized_holdout_exposure",
          data: ((t = {}), (t.message = e), (t.is_enabled = n), t),
        }),
        n
      );
    }
    l.isInLeadGenCentralizedHoldout2026H1Train3 = e;
  },
  98,
);
