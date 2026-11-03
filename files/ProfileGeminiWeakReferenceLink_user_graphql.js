__d(
  "ProfileGeminiWeakReferenceLink_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileGeminiWeakReferenceLink_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "WorkUserInfo",
          kind: "LinkedField",
          name: "work_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_active_account",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometProfileLink_actor",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
