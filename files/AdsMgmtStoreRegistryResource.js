__d(
  "AdsMgmtStoreRegistryResource",
  ["JSResource", "ifRequireable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.getPreviousRoute()
        ? r("JSResource")("AdsMgmtStoreRegistry")
            .__setRef("AdsMgmtStoreRegistryResource")
            .load()
        : r("ifRequireable")(
            "AdsMgmtStoreRegistry",
            function () {
              return {};
            },
            function () {
              return r("JSResource")("AdsMgmtStoreRegistry")
                .__setRef("AdsMgmtStoreRegistryResource")
                .load();
            },
          );
    }
    l.load = e;
  },
  98,
);
