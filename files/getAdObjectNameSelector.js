__d(
  "getAdObjectNameSelector",
  [
    "AdsAdObjectLevelToPESelectors",
    "LoadObject",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsNotImplementedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelectorsByLevel")(function (e) {
      return r("adsCreateDynamicSelector")(
        r("adsCreateSelector")(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                return t;
              },
              { name: i.id },
            ),
            o("AdsAdObjectLevelToPESelectors").getAllByFieldsSelectorMap.get(
              e,
              r("adsNotImplementedSelector"),
            ),
          ],
          function (t, n) {
            var e;
            return (
              (e = n([t], { name: null }).get(t)) != null
                ? e
                : r("LoadObject").loading({ creatorModuleID: i.id })
            ).mapValue(function (e) {
              var t = e.name;
              return t;
            });
          },
          { name: i.id },
        ),
      );
    });
    l.default = e;
  },
  98,
);
