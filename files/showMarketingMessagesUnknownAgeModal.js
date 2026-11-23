__d(
  "showMarketingMessagesUnknownAgeModal",
  [
    "AdsDataAtom",
    "AdsPlacementChangeSource",
    "AdsWAMMUnknownAgeModalShowAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      t === 0 ||
        n !== r("AdsPlacementChangeSource").PLACEMENT_COMPONENT ||
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("AdsWAMMUnknownAgeModalShowAction").dispatch(
            { adsetCount: t, isVisible: !0 },
            {
              line: "33",
              module: "showMarketingMessagesUnknownAgeModal.js",
              moduleID: i.id,
            },
          );
        });
    }
    l.default = s;
  },
  98,
);
