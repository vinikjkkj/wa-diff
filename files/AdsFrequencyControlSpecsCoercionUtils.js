__d(
  "AdsFrequencyControlSpecsCoercionUtils",
  ["FrequencyControlEvents", "TypeCoercionUtils", "enumUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e == null
          ? void 0
          : e.map(function (e) {
              var n;
              return {
                event: o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerceFromKey(
                    e.event,
                    r("FrequencyControlEvents"),
                  ),
                  "frequency_control_specs[].event",
                  t,
                ),
                interval_days: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.interval_days,
                  "frequency_control_specs[].interval_days",
                  t,
                ),
                max_frequency: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.max_frequency,
                  "frequency_control_specs[].max_frequency",
                  t,
                ),
                type: (n = e.type) != null ? n : "NONE",
              };
            }),
      );
    }
    l.coerceFrequencyControlSpecs = e;
  },
  98,
);
