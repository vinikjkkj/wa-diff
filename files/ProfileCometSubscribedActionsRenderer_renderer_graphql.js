__d(
  "ProfileCometSubscribedActionsRenderer_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometSubscribedActionsRenderer_renderer",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "profile_owner",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                action: "THROW",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
      ],
      type: "XFBProfileSubscribedActionsRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
