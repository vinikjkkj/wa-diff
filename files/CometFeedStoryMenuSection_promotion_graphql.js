__d(
  "CometFeedStoryMenuSection_promotion.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMenuSection_promotion",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "QuickPromotion",
          kind: "LinkedField",
          name: "local_alerts_story_menu_promotion",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometTooltipQP_quickPromotion",
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryDefaultContextLayoutStrategy",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
