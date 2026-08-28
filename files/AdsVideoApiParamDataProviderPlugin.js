__d(
  "AdsVideoApiParamDataProviderPlugin",
  ["AdsVideoDialogSortConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        param: { sort: r("AdsVideoDialogSortConstants").UPDATED_TIME_DESC },
      },
      s = r("immutable").Record(e),
      u = function () {
        return s();
      },
      c = { initialState: u() },
      d = c;
    l.default = d;
  },
  98,
);
