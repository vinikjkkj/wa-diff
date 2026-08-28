__d(
  "adsPEObjectTypeSelector",
  ["AdsObjectUtils", "adsCreateSelector", "adsPEManageAdsSectionSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return r("AdsObjectUtils").getObjectTypeFromNavSection(t || "L3");
        },
        { name: i.id + ".adsPEObjectTypeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
