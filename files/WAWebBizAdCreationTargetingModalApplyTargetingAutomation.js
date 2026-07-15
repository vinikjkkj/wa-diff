__d(
  "WAWebBizAdCreationTargetingModalApplyTargetingAutomation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 18;
    function l(t, n) {
      if (((t.targeting_automation = { advantage_audience: n ? 1 : 0 }), n)) {
        var r,
          o,
          a,
          i = Math.max((r = t.age_min) != null ? r : e, e);
        ((t.age_range = [i, Math.max(i, (o = t.age_max) != null ? o : 65)]),
          (t.age_min = Math.min(
            25,
            Math.max((a = t.age_min) != null ? a : e, e),
          )),
          (t.age_max = 65),
          (t.targeting_optimization = "expansion_all"));
      } else
        (t.age_range != null &&
          ((t.age_min = t.age_range[0]),
          (t.age_max = t.age_range[1]),
          delete t.age_range),
          t.targeting_optimization === "expansion_all" &&
            (t.targeting_optimization = "none"));
    }
    i.default = l;
  },
  66,
);
