__d(
  "ProfileCometUserClearsMentionsTabBadgeMutation.graphql",
  ["ProfileCometUserClearsMentionsTabBadgeMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "UserClearsMentionsTabBadgeResponsePayload",
            kind: "LinkedField",
            name: "user_clears_mentions_tab_badge",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "ProfileCometUserClearsMentionsTabBadgeMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ProfileCometUserClearsMentionsTabBadgeMutation",
          selections: t,
        },
        params: {
          id: n(
            "ProfileCometUserClearsMentionsTabBadgeMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "ProfileCometUserClearsMentionsTabBadgeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
