__d(
  "WAWebBizAdManagementStatusCell.react",
  ["WAWebBizBoostingStatusUtils", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.boostingStatus,
        n = e.boostingStatusDisplayText,
        a = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(t, n);
      if (a == null) return null;
      var i = o("WAWebBizBoostingStatusUtils").getBoostingStatusColorName(t);
      return s.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: i,
        maxLines: 1,
        children: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
