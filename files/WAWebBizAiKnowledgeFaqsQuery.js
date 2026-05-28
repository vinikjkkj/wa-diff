__d(
  "WAWebBizAiKnowledgeFaqsQuery",
  ["WAWebBizAIKnowledgeDrawerHelpers", "WAWebBizAiKnowledgeFaqsQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiKnowledgeFaqsQuery.graphql"));
    function u(e) {
      var t,
        n =
          (t = e.xfb_meta_ai_biz_agent_wa_ai_home) == null
            ? void 0
            : t.ordered_knowledge;
      if (n == null) return { faqs: [], filledKnowledgeTypes: [] };
      var r = [],
        a = [];
      for (var i of n)
        if (i != null) {
          if (
            (i.knowledge_type != null &&
              i.knowledge_type !== "FAQ" &&
              a.push(i.knowledge_type),
            i.knowledge_type === "FAQ" && i.faq_data != null)
          ) {
            var l = i.faq_data;
            if (l.question != null && l.answer != null) {
              var s;
              r.push({
                answer: l.answer,
                id: (s = l.id) != null ? s : null,
                itemType: "faq",
                knowledgeType: "FAQ",
                question: l.question,
              });
            }
          } else if (i.string_data != null) {
            var u = i.string_data,
              c = o("WAWebBizAIKnowledgeDrawerHelpers").getKnowledgeTypeLabel(
                i.knowledge_type,
              );
            if (c != null) {
              var d;
              r.push({
                answer: u,
                id: null,
                itemType: "text",
                knowledgeType: (d = i.knowledge_type) != null ? d : "",
                question: c,
              });
            }
          }
        }
      return { faqs: r, filledKnowledgeTypes: a };
    }
    ((l.KnowledgeFaqsQuery = s), (l.deriveFaqItems = u));
  },
  98,
);
