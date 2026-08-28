__d(
  "BudgetLimitedGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "budget_limited",
        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").campaignLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "increasing your budget",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "increased it for this ad set.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "increasing your budget for {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").campaignLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "increased your budget",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
