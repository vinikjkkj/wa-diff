__d(
  "CometFeedStoryTitleAggregatedUsersRenderer_entities.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometFeedStoryTitleAggregatedUsersRenderer_entities",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "sample_entities",
            plural: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: e,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: e,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: e,
                type: "InstagramUserV2",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "AggregatedEntitiesAtRange",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
