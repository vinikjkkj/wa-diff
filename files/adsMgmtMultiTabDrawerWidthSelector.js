__d(
  "adsMgmtMultiTabDrawerWidthSelector",
  [
    "adsCreateSelector",
    "adsMgmtMultiTabDrawerWidthSelectorUtils",
    "adsMgmtShowMultiTabDrawerSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsMgmtShowMultiTabDrawerSelector")],
        function (t) {
          return o(
            "adsMgmtMultiTabDrawerWidthSelectorUtils",
          ).adsMgmtMultiTabDrawerWidth(t);
        },
        { name: i.id + ".adsMgmtMultiTabDrawerWidthSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
