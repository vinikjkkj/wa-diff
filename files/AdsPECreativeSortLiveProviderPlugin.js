__d(
  "AdsPECreativeSortLiveProviderPlugin",
  ["AdsInsightsField", "AdsPESortInfo", "ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        sortInfo: new (r("AdsPESortInfo"))({
          dataKey: r("AdsInsightsField").SPEND,
          datePreset: "this_month",
          sorting: "DESC",
          comparisonColumnType: "",
        }),
        isSortEnabled: !0,
        objectLevel: "unique_adcreative",
      }),
      s = function () {
        return e();
      },
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
