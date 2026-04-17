__d(
  "CometFeedStoryDefaultContextLayoutStrategy_contextLayout.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultContextLayoutStrategy_contextLayout",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryMenuSection_promotion",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "debug_info",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "serialized_frtp_identifiers",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_viewer_see_menu",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryBaseContextLayout_story",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryEasyHideButtonMatchRenderer_story",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_regulation_enforced",
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
