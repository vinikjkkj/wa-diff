__d(
  "ProfileCometActionDefaultHandler_handler$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometActionDefaultHandler_handler$normalization",
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
              name: "__typename",
              storageKey: null,
            },
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
      ],
    };
    a.exports = e;
  },
  null,
);
