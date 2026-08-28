__d(
  "TwoStepVerificationSelfieBasePageQuery.graphql",
  ["TwoStepVerificationSelfieBasePageQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "product" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "product", variableName: "product" },
            ],
            concreteType: "XFBSelfieVerificationIXTWizardInput",
            kind: "LinkedField",
            name: "xfb_gen_fb_wizard_trigger_security_tuple_for_graph_ql",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "external_flow_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "security_token",
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
          name: "TwoStepVerificationSelfieBasePageQuery",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "TwoStepVerificationSelfieBasePageQuery",
          selections: t,
        },
        params: {
          id: n(
            "TwoStepVerificationSelfieBasePageQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "TwoStepVerificationSelfieBasePageQuery",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
