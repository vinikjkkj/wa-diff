__d(
  "ProfileCometActionDefaultHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionDefaultHandler_handler",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "profile_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_action_type",
              storageKey: null,
            },
            {
              alias: null,
              args: [{ kind: "Literal", name: "site", value: "www" }],
              kind: "ScalarField",
              name: "uri",
              storageKey: 'uri(site:"www")',
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionDefaultHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
