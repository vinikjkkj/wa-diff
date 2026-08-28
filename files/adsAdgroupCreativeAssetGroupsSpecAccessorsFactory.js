__d(
  "adsAdgroupCreativeAssetGroupsSpecAccessorsFactory",
  ["AdsAPICreativeAssetGroupSpecFields", "AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          groups: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.groups;
            },
            [].concat(t, ["groups"]),
            Object.values(r("AdsAPICreativeAssetGroupSpecFields")),
          ),
          origins: o("AdsAdObjectsAccessorUtils").basicListFieldAccessorFactory(
            e,
            t,
            "origins",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
