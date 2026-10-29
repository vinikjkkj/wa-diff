__d(
  "WAWebBizAIQEQuery.graphql",
  ["WAWebBizAIQEQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "params" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "params", variableName: "params" },
            ],
            concreteType: "XFBMetaAIBizAgentWAWebExperimentValue",
            kind: "LinkedField",
            name: "xfb_meta_ai_biz_agent_wa_web_experiments",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "universe",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "param",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "value",
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
          name: "WAWebBizAIQEQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAIQEQuery",
          selections: t,
        },
        params: {
          id: n("WAWebBizAIQEQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIQEQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
