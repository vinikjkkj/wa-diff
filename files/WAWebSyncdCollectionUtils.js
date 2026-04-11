__d(
  "WAWebSyncdCollectionUtils",
  ["WASyncdConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null;
    }
    function s(e) {
      return e === o("WASyncdConst").CollectionName.CriticalBlock ||
        e === o("WASyncdConst").CollectionName.CriticalUnblockLow
        ? !0
        : e === o("WASyncdConst").CollectionName.Regular ||
            e === o("WASyncdConst").CollectionName.RegularHigh ||
            e === o("WASyncdConst").CollectionName.RegularLow
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.isBootstrap = e), (l.isCriticalCollection = s));
  },
  98,
);
