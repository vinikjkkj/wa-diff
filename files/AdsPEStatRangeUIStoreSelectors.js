__d(
  "AdsPEStatRangeUIStoreSelectors",
  ["AdsPEStatRangeUIStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsPEStatRangeUIStore")),
        function () {
          return r("AdsPEStatRangeUIStore").getRangeType();
        },
      ),
      c = e(s, function () {
        return r("AdsPEStatRangeUIStore").getStatRangeWithoutAccount();
      }),
      d = e(s, function (e) {
        return r("AdsPEStatRangeUIStore").getStatRange(e);
      }),
      m = e(s, function () {
        return r("AdsPEStatRangeUIStore").getStatRangeString();
      }),
      p = e(s, function () {
        return r("AdsPEStatRangeUIStore").getComparisonOrNull();
      }),
      _ = e(s, function () {
        return r("AdsPEStatRangeUIStore").getShowPopover();
      });
    ((l.getRangeTypeSelector = u),
      (l.getStatRangeWithoutAccountSelector = c),
      (l.getStatRangeSelector = d),
      (l.getStatRangeStringSelector = m),
      (l.getComparisonOrNullSelector = p),
      (l.getShowPopoverSelector = _));
  },
  98,
);
