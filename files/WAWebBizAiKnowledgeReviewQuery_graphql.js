__d(
  "WAWebBizAiKnowledgeReviewQuery.graphql",
  ["WAWebBizAiKnowledgeReviewQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "timestamp" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "timestamp",
                variableName: "timestamp",
              },
            ],
            concreteType: "XFBMAIBALoadKnowledgeForReviewResponse",
            kind: "LinkedField",
            name: "xfb_maiba_load_potential_knowledge_for_review",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBMAIBAPotentialKnowlege",
                kind: "LinkedField",
                name: "items",
                plural: !0,
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
                    name: "type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "faq_question",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "faq_answer",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "biz_info_attribute",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "biz_info_value",
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
          name: "WAWebBizAiKnowledgeReviewQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiKnowledgeReviewQuery",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiKnowledgeReviewQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiKnowledgeReviewQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
