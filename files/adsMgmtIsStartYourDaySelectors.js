__d(
  "adsMgmtIsStartYourDaySelectors",
  ["AdsApplicationUtils", "adsCreateSelector", "adsPEManageAdsSectionSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsPEManageAdsSectionSelector")],
      function (t) {
        return o("AdsApplicationUtils").isPowerEditor() && t === "ACCOUNT";
      },
      { name: i.id + ".adsMgmtIsStartYourDaySectionSelector" },
    );
    l.adsMgmtIsStartYourDaySectionSelector = e;
  },
  98,
);
