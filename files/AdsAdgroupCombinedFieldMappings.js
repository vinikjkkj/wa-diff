__d(
  "AdsAdgroupCombinedFieldMappings",
  ["AdsAdgroupSemanticFieldMappings", "AdsUnifiedCreativeAPIFieldMappings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze(
        Object.fromEntries(
          Object.keys(r("AdsUnifiedCreativeAPIFieldMappings")).map(
            function (e) {
              return [
                e,
                [
                  r("AdsUnifiedCreativeAPIFieldMappings")[e],
                  o("AdsAdgroupSemanticFieldMappings")
                    .AdsAdgroupSemanticFieldMappings[e],
                ],
              ];
            },
          ),
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
