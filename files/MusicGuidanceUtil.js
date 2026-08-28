__d(
  "MusicGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "music",
        adObjectLevel: r("AdsObjectTypes").ADGROUP,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").adLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "automatically adding music to ads",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "automatically added music to this ad.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "automatically adding music to {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").adLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "added music",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
