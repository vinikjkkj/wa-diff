__d(
  "MAIBAGovernedActionCardApproveMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "action_id" },
          { defaultValue: null, kind: "LocalArgument", name: "digest" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "external_conversation_id",
          },
          { defaultValue: null, kind: "LocalArgument", name: "state_revision" },
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
                  { kind: "Variable", name: "digest", variableName: "digest" },
                  {
                    kind: "Variable",
                    name: "external_conversation_id",
                    variableName: "external_conversation_id",
                  },
                  {
                    kind: "Variable",
                    name: "state_revision",
                    variableName: "state_revision",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "MAIBAGovernedDecisionPayload",
            kind: "LinkedField",
            name: "maiba_approve_governed_action",
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
                    concreteType: "MAIBAGovernedActionCardSpec",
                    kind: "LinkedField",
                    name: "card",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "MAIBAGovernedCardLifecycle",
                        kind: "LinkedField",
                        name: "lifecycle",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "outcome_unknown",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
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
          name: "MAIBAGovernedActionCardApproveMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAGovernedActionCardApproveMutation",
          selections: t,
        },
        params: {
          id: "28985213107775652",
          metadata: {},
          name: "MAIBAGovernedActionCardApproveMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
