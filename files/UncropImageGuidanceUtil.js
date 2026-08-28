__d(
  "UncropImageGuidanceUtil",
  ["fbt", "AdsInsightsCloseTheLoopUtil", "AdsObjectTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "uncrop_image",
        adObjectLevel: r("AdsObjectTypes").CAMPAIGN,
        adObjectLevelFbt: o("AdsInsightsCloseTheLoopUtil").adLevelFbt,
        guidanceAdoptedActionPopoverHeaderFbt: s._(
          /*BTDS*/ "automatically expanding your images",
        ),
        guidanceAdoptedActionPopoverBodyPositiveImpactSameGuidanceFbt: s._(
          /*BTDS*/ "used image expansion in this ad.",
        ),
        guidanceAdoptedActionTooltipBodyFbt: s._(
          /*BTDS*/ "using image expansion in {applicable ad objects}",
          [
            s._param(
              "applicable ad objects",
              o("AdsInsightsCloseTheLoopUtil").adLevelFbtShowCount(1),
            ),
          ],
        ),
        guidanceAdoptedActionTooltipAccordionBodyFbt: s._(
          /*BTDS*/ "used image expansion",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
