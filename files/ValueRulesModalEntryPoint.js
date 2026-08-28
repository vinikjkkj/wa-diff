__d(
  "ValueRulesModalEntryPoint",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      ADVERTISING_SETTINGS: 0,
      L2_CONVERSION_LOCATION: 1,
      L2_GLOBAL: 2,
      L2_PLACEMENT: 3,
      L2_NCA_GOAL: 4,
      L2_AUDIENCE: 5,
      L2_BROAD_GOAL: 6,
    });
    function s(t) {
      return t == null || t === e.ADVERTISING_SETTINGS || t === e.L2_GLOBAL;
    }
    function u(t) {
      return t === e.ADVERTISING_SETTINGS
        ? "ADVERTISING_SETTINGS"
        : t === e.L2_CONVERSION_LOCATION
          ? "L2_CONVERSION_LOCATION"
          : t === e.L2_GLOBAL
            ? "L2_GLOBAL"
            : t === e.L2_PLACEMENT
              ? "L2_PLACEMENT"
              : t === e.L2_NCA_GOAL
                ? "L2_NCA_GOAL"
                : t === e.L2_AUDIENCE
                  ? "L2_AUDIENCE"
                  : t === e.L2_BROAD_GOAL
                    ? "L2_NCA_GOAL"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    ((l.ValueRulesModalEntryPoint = e),
      (l.usesConsolidatedValueRulesModalDescription = s),
      (l.toXFBEntryPointType = u));
  },
  98,
);
