__d(
  "MAIBAInterviewerEligibilityQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "surface" },
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
              { kind: "Variable", name: "surface", variableName: "surface" },
            ],
            kind: "ScalarField",
            name: "xfb_maiba_interviewer_eligibility",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAInterviewerEligibilityQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAInterviewerEligibilityQuery",
          selections: t,
        },
        params: {
          id: "27224468053920563",
          metadata: {},
          name: "MAIBAInterviewerEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
