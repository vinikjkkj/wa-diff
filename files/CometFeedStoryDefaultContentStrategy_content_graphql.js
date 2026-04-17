__d(
  "CometFeedStoryDefaultContentStrategy_content.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAboveMessageSection_story",
        },
        t = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStorySeoLLMTitleSection_story",
        },
        n = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryOptimisticMediaAttachmentSection_story",
        },
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachmentSection_story",
        },
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachedStorySection_story",
        },
        a = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryMessageContainerSection_story",
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryDefaultContentStrategy_content",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              e,
              t,
              n,
              r,
              o,
              a,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAggregatedStoriesSection_story",
              },
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [e, t, n, r, o, a],
                storageKey: null,
              },
              {
                kind: "ClientExtension",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "optimistic_loading_type",
                    storageKey: null,
                  },
                ],
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometFeedStoryDefaultContentStrategy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
