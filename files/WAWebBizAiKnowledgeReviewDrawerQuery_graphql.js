__d(
  "WAWebBizAiKnowledgeReviewDrawerQuery.graphql",
  ["WAWebBizAiKnowledgeReviewDrawerQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: "AUTO_SAVE",
          kind: "LocalArgument",
          name: "source",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "timestamp" },
        r = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "source", variableName: "source" },
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiKnowledgeReviewDrawerQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebBizAiKnowledgeReviewDrawerQuery",
          selections: r,
        },
        params: {
          id: n("WAWebBizAiKnowledgeReviewDrawerQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiKnowledgeReviewDrawerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
