__d(
  "AdsTALReportAIInsightResultsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "studyID" }],
        t = [{ kind: "Variable", name: "id", variableName: "studyID" }],
        n = {
          alias: null,
          args: null,
          concreteType: "SplitTestAIInsight",
          kind: "LinkedField",
          name: "split_test_ai_insight",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "intro",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "SplitTestAIInsightSection",
              kind: "LinkedField",
              name: "sections",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "heading",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "body",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "feedback",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsTALReportAIInsightResultsQuery",
          selections: [
            {
              alias: "study",
              args: t,
              concreteType: "AdStudy",
              kind: "LinkedField",
              name: "fetch__AdStudy",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsTALReportAIInsightResultsQuery",
          selections: [
            {
              alias: "study",
              args: t,
              concreteType: "AdStudy",
              kind: "LinkedField",
              name: "fetch__AdStudy",
              plural: !1,
              selections: [
                n,
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
        params: {
          id: "27030539143238241",
          metadata: {},
          name: "AdsTALReportAIInsightResultsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
