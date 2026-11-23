__d(
  "WAMFlowsCTWAEditorModalQuery.graphql",
  ["WAMFlowsCTWAEditorModalQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adObjective",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "businessName" },
        r = { defaultValue: null, kind: "LocalArgument", name: "flowId" },
        o = { defaultValue: null, kind: "LocalArgument", name: "skipRequest" },
        a = [{ kind: "Variable", name: "id", variableName: "flowId" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "welj",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        s = {
          alias: "flowJSON",
          args: [
            {
              kind: "Variable",
              name: "ad_objective",
              variableName: "adObjective",
            },
            {
              kind: "Variable",
              name: "business_name",
              variableName: "businessName",
            },
          ],
          kind: "ScalarField",
          name: "xfb_wa_flows_template_for_ctwa",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "WAMFlowsCTWAEditorModalQuery",
          selections: [
            {
              condition: "skipRequest",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: "flow",
                    args: a,
                    concreteType: "XFBWhatsAppExtension",
                    kind: "LinkedField",
                    name: "fetch__XFBWhatsAppExtension",
                    plural: !1,
                    selections: [
                      { kind: "RequiredField", field: i, action: "THROW" },
                      { kind: "RequiredField", field: l, action: "THROW" },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                },
              ],
            },
            s,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, o, e, t],
          kind: "Operation",
          name: "WAMFlowsCTWAEditorModalQuery",
          selections: [
            {
              condition: "skipRequest",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: "flow",
                  args: a,
                  concreteType: "XFBWhatsAppExtension",
                  kind: "LinkedField",
                  name: "fetch__XFBWhatsAppExtension",
                  plural: !1,
                  selections: [
                    i,
                    l,
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
            },
            s,
          ],
        },
        params: {
          id: n("WAMFlowsCTWAEditorModalQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAMFlowsCTWAEditorModalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
