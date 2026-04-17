__d(
  "CometFeedStoryTitleEntity_actor.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTitleEntity_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryTitleEntityRenderersRelay_entity",
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    a.exports = e;
  },
  null,
);
