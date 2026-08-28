__d(
  "AdsPEAdgroupSortLiveProviderPlugin",
  ["AdsPESortInfo", "ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        sortInfo: new (r("AdsPESortInfo"))(),
        isSortEnabled: !0,
        objectLevel: "ad",
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
