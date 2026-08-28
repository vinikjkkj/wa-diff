__d(
  "adsLoadAllStudiesSelector",
  ["adsCreateSelector", "adsTALGetImpactingAdStudiesCursorSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsTALGetImpactingAdStudiesCursorSelector")],
        function (t) {
          return t({ filter: "All", loadOption: "load_all_at_once" });
        },
        { name: i.id + ".adsLoadAllStudiesSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
