__d(
  "MWChatBusinessCTAAdsSenderMutation.graphql",
  ["MWChatBusinessCTAAdsSenderMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "action_link", variableName: "input" },
            ],
            kind: "ScalarField",
            name: "messenger_business_ads_sender",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MWChatBusinessCTAAdsSenderMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MWChatBusinessCTAAdsSenderMutation",
          selections: t,
        },
        params: {
          id: n("MWChatBusinessCTAAdsSenderMutation_facebookRelayOperation"),
          metadata: {},
          name: "MWChatBusinessCTAAdsSenderMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
