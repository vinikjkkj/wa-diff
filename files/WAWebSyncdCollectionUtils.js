__d(
  "WAWebSyncdCollectionUtils",
  ["WAWebSyncdConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null;
    }
    function s(e) {
      return e === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
        e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow
        ? !0
        : e === o("WAWebSyncdConst").CollectionName.Regular ||
            e === o("WAWebSyncdConst").CollectionName.RegularHigh ||
            e === o("WAWebSyncdConst").CollectionName.RegularLow
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
