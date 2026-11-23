__d(
  "MAIBABusinessSetupApplyMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "op_kind",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          concreteType: "XFBGenAIBusinessSetupLinkedPage",
          kind: "LinkedField",
          name: "linked_page",
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
              name: "name",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        r = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBGenaiBusinessSetupApplyResponsePayload",
            kind: "LinkedField",
            name: "xfb_genai_business_setup_apply",
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
                kind: "ScalarField",
                name: "business_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBGenAIBusinessSetupError",
                kind: "LinkedField",
                name: "errors",
                plural: !0,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "op_status",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_message",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "asset_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "field_name",
                    storageKey: null,
                  },
                  n,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBGenAIBusinessSetupOpResult",
                kind: "LinkedField",
                name: "op_results",
                plural: !0,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity_ids",
                    storageKey: null,
                  },
                  n,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "replayed",
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
          name: "MAIBABusinessSetupApplyMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBABusinessSetupApplyMutation",
          selections: r,
        },
        params: {
          id: "29000258519636718",
          metadata: {},
          name: "MAIBABusinessSetupApplyMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
