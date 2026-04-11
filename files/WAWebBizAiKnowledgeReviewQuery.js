__d(
  "WAWebBizAiKnowledgeReviewQuery",
  ["WAWebBizAiKnowledgeReviewQuery.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiKnowledgeReviewQuery.graphql")),
      u = "";
    function c() {
      return o("WAWebRelayClient")
        .fetchQuery(
          s,
          { timestamp: String(Date.now()) },
          { environmentType: "facebook" },
        )
        .then(function (e) {
          var t;
          if (e == null) return [];
          var n =
            (t = e.xfb_maiba_load_potential_knowledge_for_review) == null
              ? void 0
              : t.items;
          if (n == null) return [];
          var r = n.map(function (e) {
            var t, n, r, o, a, i;
            return {
              id: (t = e.id) != null ? t : u,
              type: (n = e.type) != null ? n : u,
              faq_question: (r = e.faq_question) != null ? r : u,
              faq_answer: (o = e.faq_answer) != null ? o : u,
              biz_info_attribute: (a = e.biz_info_attribute) != null ? a : u,
              biz_info_value: (i = e.biz_info_value) != null ? i : u,
            };
          });
          return r;
        })
        .catch(function (e) {
          return [];
        });
    }
    l.getAllPendingKnowledge = c;
  },
  98,
);
