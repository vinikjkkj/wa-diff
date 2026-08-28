__d(
  "APlusAGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "advantage_plus_audience",
        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").campaignLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "using Advantage+ audience",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "used Advantage+ audience in this ad set.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "using Advantage+ audience in {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").campaignLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "used Advantage+ audience",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
