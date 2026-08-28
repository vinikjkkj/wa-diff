__d(
  "AdsPEFilterUIStateProviderPlugin",
  ["ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        savedFilters: {},
        filterSet: null,
        labelFilterSet: null,
        wasModified: !1,
        selectedAccountID: null,
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
