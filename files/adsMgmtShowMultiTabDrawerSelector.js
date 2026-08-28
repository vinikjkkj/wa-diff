__d(
  "adsMgmtShowMultiTabDrawerSelector",
  [
    "adsCreateSelector",
    "adsMgmtShowMultiTabDrawerSelectorUtils",
    "adsPEManageAdsSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return o(
            "adsMgmtShowMultiTabDrawerSelectorUtils",
          ).adsMgmtShowMultiTabDrawer(t);
        },
        { name: i.id + ".adsMgmtShowMultiTabDrawerSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
