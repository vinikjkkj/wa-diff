__d(
  "MAIBAComposerThinkingToggleQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "tool" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountID",
              },
              { kind: "Variable", name: "tool", variableName: "tool" },
            ],
            concreteType: "XFBMAIBAThinkingModeEligibility",
            kind: "LinkedField",
            name: "xfb_maiba_thinking_mode_eligibility",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_eligible",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "max_effort",
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
          name: "MAIBAComposerThinkingToggleQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAComposerThinkingToggleQuery",
          selections: t,
        },
        params: {
          id: "28491567020484827",
          metadata: {},
          name: "MAIBAComposerThinkingToggleQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
