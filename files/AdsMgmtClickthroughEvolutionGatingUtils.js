__d(
  "AdsMgmtClickthroughEvolutionGatingUtils",
  ["AdsMgmtClickthroughEvolutionGatingConfig", "Instant", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1768032e3;
    function s() {
      return r("gkx")("10527");
    }
    function u() {
      return r("gkx")("10507");
    }
    function c() {
      var t = o("Instant").now(),
        n = r("AdsMgmtClickthroughEvolutionGatingConfig").timestampSecRollback;
      return (n != null && t >= n) || r("gkx")("18714")
        ? !1
        : t >= e && r("gkx")("10499")
          ? !0
          : t >=
                r("AdsMgmtClickthroughEvolutionGatingConfig")
                  .timestampSec100PercentRollout ||
              (t >=
                r("AdsMgmtClickthroughEvolutionGatingConfig")
                  .timestampSec001PercentRollout &&
                s())
            ? u()
            : !1;
    }
    l.getIsAccountInClickthroughEvolutionTestGroupWithoutExposure = c;
  },
  98,
);
