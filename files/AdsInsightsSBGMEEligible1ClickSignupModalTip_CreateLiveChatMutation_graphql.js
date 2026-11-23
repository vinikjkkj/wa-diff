__d(
  "AdsInsightsSBGMEEligible1ClickSignupModalTip_CreateLiveChatMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SBGEngagementConnectionCreateResponse",
            kind: "LinkedField",
            name: "sbg_engagement_connection_create",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "SBGEngagementConnection",
                kind: "LinkedField",
                name: "connection",
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
                    concreteType: "SBGEngagementConnectionDetails",
                    kind: "LinkedField",
                    name: "connection_details",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "status",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "routing_uri",
                        storageKey: null,
                      },
                    ],
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
          name: "AdsInsightsSBGMEEligible1ClickSignupModalTip_CreateLiveChatMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsInsightsSBGMEEligible1ClickSignupModalTip_CreateLiveChatMutation",
          selections: t,
        },
        params: {
          id: "25522135034137086",
          metadata: {},
          name: "AdsInsightsSBGMEEligible1ClickSignupModalTip_CreateLiveChatMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
