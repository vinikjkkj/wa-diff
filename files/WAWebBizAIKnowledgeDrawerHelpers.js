__d(
  "WAWebBizAIKnowledgeDrawerHelpers",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAiExampleResponsesQuery",
    "WAWebBizAiKnowledgeSourcesQuery",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
        "Main",
        "AllProducts",
        "AllFaqs",
        "AllSources",
      ]),
      u = 3;
    function c(e) {
      if (e == null) return null;
      switch (e) {
        case "DESCRIPTION":
          return s._(/*BTDS*/ "Description");
        case "ADDRESS":
          return s._(/*BTDS*/ "Address");
        case "BUSINESS_HOURS":
          return s._(/*BTDS*/ "Business hours");
        case "WEBSITE":
          return s._(/*BTDS*/ "Website");
        case "EMAIL":
          return s._(/*BTDS*/ "Email");
        case "PAYMENT_METHODS":
          return s._(/*BTDS*/ "Payment methods");
        case "IS_NATIVE_PAYMENT_ENABLED":
          return s._(/*BTDS*/ "Native payments");
        case "RETURN_POLICY":
          return s._(/*BTDS*/ "Return policy");
        case "DISCOUNT_POLICY":
          return s._(/*BTDS*/ "Discounts");
        case "SHIPPING_POLICY":
          return s._(/*BTDS*/ "Shipping");
        case "PURCHASE_INFO":
          return s._(/*BTDS*/ "Purchase info");
        default:
          return null;
      }
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebBizAiExampleResponsesQuery",
          ).fetchExampleResponses();
          if (!e.isSuccess) return { faqs: [], filledKnowledgeTypes: [] };
          var t = [],
            n = [];
          for (var r of e.orderedKnowledge)
            if (
              (r.knowledge_type != null &&
                r.knowledge_type !== "FAQ" &&
                n.push(r.knowledge_type),
              r.knowledge_type === "FAQ" && r.faq_data != null)
            ) {
              var a = r.faq_data;
              if (a.question != null && a.answer != null) {
                var i;
                t.push({
                  answer: a.answer,
                  id: (i = a.id) != null ? i : null,
                  itemType: "faq",
                  knowledgeType: "FAQ",
                  question: a.question,
                });
              }
            } else if (r.string_data != null) {
              var l = r.string_data,
                s = c(r.knowledge_type);
              if (s != null) {
                var u;
                t.push({
                  answer: l,
                  id: null,
                  itemType: "text",
                  knowledgeType: (u = r.knowledge_type) != null ? u : "",
                  question: s,
                });
              }
            }
          return { faqs: t, filledKnowledgeTypes: n };
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebBizAiKnowledgeSourcesQuery",
          ).fetchKnowledgeSources();
          return e.isSuccess
            ? {
                chatHistoryExportStatus: e.chatHistoryExportStatus,
                sources: e.sources,
              }
            : { chatHistoryExportStatus: "NOT_ALLOWED", sources: [] };
        })),
        _.apply(this, arguments)
      );
    }
    var f = null;
    function g() {
      return f;
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBizAiExampleResponsesQuery").fetchProductInfo();
          if (!e.isSuccess) return null;
          var t = { isEligible: e.isEligible, products: e.products };
          return ((f = t), t);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.KnowledgeStep = e),
      (l.MAX_PREVIEW_ITEMS = u),
      (l.getKnowledgeTypeLabel = c),
      (l.fetchFaqItems = d),
      (l.fetchSourceItems = p),
      (l.getCachedProductData = g),
      (l.fetchProductData = h));
  },
  226,
);
