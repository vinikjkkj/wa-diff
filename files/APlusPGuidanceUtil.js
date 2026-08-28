__d(
  "APlusPGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "automatic_placements",
        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").campaignLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "using Advantage+ placements",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "used Advantage+ placements in this ad set.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "using Advantage+ placements in {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").campaignLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "used Advantage+ placements",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
