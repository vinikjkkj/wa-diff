__d(
  "WAWebMexTransferCommunityOwnershipJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2GroupParticipantsRolesUpdateResponse",
            kind: "LinkedField",
            name: "xwa2_group_update_users_role",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "group_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XWA2GroupLIDMigrationState",
                kind: "LinkedField",
                name: "lid_migration_state",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "addressing_mode",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexTransferCommunityOwnershipJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexTransferCommunityOwnershipJobMutation",
          selections: t,
        },
        params: {
          id: "29643783178598899",
          metadata: {},
          name: "WAWebMexTransferCommunityOwnershipJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
