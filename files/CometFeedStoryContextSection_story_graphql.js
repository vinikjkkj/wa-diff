__d(
  "CometFeedStoryContextSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryContextSection_story",
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
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryContextSectionMatchRenderer_story",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryClickablePostPermalink_story",
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
