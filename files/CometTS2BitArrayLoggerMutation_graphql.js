__d(
  "CometTS2BitArrayLoggerMutation.graphql",
  ["CometTS2BitArrayLoggerMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "app_id" },
          { defaultValue: null, kind: "LocalArgument", name: "end_time" },
          { defaultValue: null, kind: "LocalArgument", name: "start_time" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  { kind: "Variable", name: "app_id", variableName: "app_id" },
                  {
                    kind: "Variable",
                    name: "end_time",
                    variableName: "end_time",
                  },
                  {
                    kind: "Variable",
                    name: "start_time",
                    variableName: "start_time",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "XFBTimeSpentBitArrayResponsePayload",
            kind: "LinkedField",
            name: "xfb_time_spent_bit_array",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "CometTS2BitArrayLoggerMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometTS2BitArrayLoggerMutation",
          selections: t,
        },
        params: {
          id: n("CometTS2BitArrayLoggerMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometTS2BitArrayLoggerMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
