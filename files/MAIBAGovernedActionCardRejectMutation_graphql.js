__d(
  "MAIBAGovernedActionCardRejectMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "action_id" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "external_conversation_id",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "action_id",
                    variableName: "action_id",
                  },
                  {
                    kind: "Variable",
                    name: "external_conversation_id",
                    variableName: "external_conversation_id",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "MAIBAGovernedDecisionPayload",
            kind: "LinkedField",
            name: "maiba_reject_governed_action",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MAIBAGovernedAction",
                kind: "LinkedField",
                name: "action",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "state_revision",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "status",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
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
          name: "MAIBAGovernedActionCardRejectMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAGovernedActionCardRejectMutation",
          selections: t,
        },
        params: {
          id: "28322251747446557",
          metadata: {},
          name: "MAIBAGovernedActionCardRejectMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
