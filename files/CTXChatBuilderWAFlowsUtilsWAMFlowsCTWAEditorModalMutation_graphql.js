__d(
  "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XFBWhatsAppExtension",
                kind: "LinkedField",
                name: "xfb_wa_flows_hsm_save_flow",
                plural: !1,
                selections: [
                  { kind: "RequiredField", field: n, action: "THROW" },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBWhatsAppExtension",
              kind: "LinkedField",
              name: "xfb_wa_flows_hsm_save_flow",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26336150576021452",
          metadata: {},
          name: "CTXChatBuilderWAFlowsUtilsWAMFlowsCTWAEditorModalMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
