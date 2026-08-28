__d(
  "FragmentationGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "fragmentation",
        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").campaignLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "combining similar ad sets",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "combined ad sets.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "combining {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").campaignLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "combined ad sets",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
