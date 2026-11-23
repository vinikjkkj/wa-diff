__d(
  "AdPreferencesHideAdvertiserMutation.graphql",
  ["AdPreferencesHideAdvertiserMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "AdvertiserHideResponsePayload",
            kind: "LinkedField",
            name: "advertiser_hide",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TCAdvertiser",
                kind: "LinkedField",
                name: "advertiser",
                plural: !1,
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
                    args: null,
                    kind: "ScalarField",
                    name: "is_hidden",
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
          name: "AdPreferencesHideAdvertiserMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdPreferencesHideAdvertiserMutation",
          selections: t,
        },
        params: {
          id: n("AdPreferencesHideAdvertiserMutation_facebookRelayOperation"),
          metadata: {},
          name: "AdPreferencesHideAdvertiserMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
