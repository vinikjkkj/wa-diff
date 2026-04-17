__d(
  "WorkCometDeactivatedAccountRenderer_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "WorkCometDeactivatedAccountRenderer_user",
      selections: [
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
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
