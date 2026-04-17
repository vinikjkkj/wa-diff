__d(
  "ProfileCometProfileLink_actor.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometProfileLink_actor",
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
              alias: "profile_url",
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
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
