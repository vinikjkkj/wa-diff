__d(
  "adsMgmtHasTopNavSelector",
  [
    "adsCreateSelector",
    "adsMgmtHasTopNavSelectorUtils",
    "adsPENavStateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPENavStateSelector")],
        function (t) {
          return o("adsMgmtHasTopNavSelectorUtils").adsMgmtHasTopNav(t);
        },
        { name: i.id + ".adsMgmtHasTopNavSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
