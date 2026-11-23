__d(
  "AdPreferencesDFCABusinessOptOutMutation.graphql",
  ["AdPreferencesDFCABusinessOptOutMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "UpdateDfcaOptoutResponsePayload",
            kind: "LinkedField",
            name: "update_dfca_optout",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TCBusiness",
                kind: "LinkedField",
                name: "business_info",
                plural: !1,
                selections: [
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdPreferencesDFCABusinessOptOutMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdPreferencesDFCABusinessOptOutMutation",
          selections: t,
        },
        params: {
          id: n(
            "AdPreferencesDFCABusinessOptOutMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "AdPreferencesDFCABusinessOptOutMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
