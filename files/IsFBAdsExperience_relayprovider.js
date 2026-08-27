__d(
  "IsFBAdsExperience.relayprovider",
  ["IsLWIConsistenceExperimentEnabled.relayprovider", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      get: function (t) {
        return (
          t === void 0 && (t = !1),
          r("IsLWIConsistenceExperimentEnabled.relayprovider").get(t)
            ? t
              ? r("qex")._("349") === !0
              : r("qex")._("1433") === !0
            : !r("gkx")("21034")
        );
      },
    };
    l.default = e;
  },
  98,
);
