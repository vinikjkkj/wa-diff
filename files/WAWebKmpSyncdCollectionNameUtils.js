__d(
  "WAWebKmpSyncdCollectionNameUtils",
  ["WAWebSyncdConst", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e: {
        if (e.name === "Regular")
          return o("WAWebSyncdConst").CollectionName.Regular;
        if (e.name === "RegularLow")
          return o("WAWebSyncdConst").CollectionName.RegularLow;
        if (e.name === "RegularHigh")
          return o("WAWebSyncdConst").CollectionName.RegularHigh;
        if (e.name === "CriticalBlock")
          return o("WAWebSyncdConst").CollectionName.CriticalBlock;
        if (e.name === "CriticalUnblockLow")
          return o("WAWebSyncdConst").CollectionName.CriticalUnblockLow;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.name,
        );
      }
    }
    function s(e) {
      e: {
        if (e === o("WAWebSyncdConst").CollectionName.Regular)
          return o("wa-kmp-syncd-engine-api").KmpSyncdCollectionName.Regular;
        if (e === o("WAWebSyncdConst").CollectionName.RegularLow)
          return o("wa-kmp-syncd-engine-api").KmpSyncdCollectionName.RegularLow;
        if (e === o("WAWebSyncdConst").CollectionName.RegularHigh)
          return o("wa-kmp-syncd-engine-api").KmpSyncdCollectionName
            .RegularHigh;
        if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock)
          return o("wa-kmp-syncd-engine-api").KmpSyncdCollectionName
            .CriticalBlock;
        if (e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow)
          return o("wa-kmp-syncd-engine-api").KmpSyncdCollectionName
            .CriticalUnblockLow;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.asWebCollectionName = e), (l.asKmpSyncdCollectionName = s));
  },
  98,
);
