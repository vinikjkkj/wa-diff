__d(
  "adsMgmtLeftNavigationWidthSelector",
  ["cssVar", "adsCreateSelector", "adsMgmtIsLeftNavigationAvailableSelector"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = parseInt("56px", 10),
      u = r("adsCreateSelector")(
        [r("adsMgmtIsLeftNavigationAvailableSelector")],
        function (n) {
          return n ? e : 0;
        },
        { name: i.id + ".adsMgmtLeftNavigationWidthSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
