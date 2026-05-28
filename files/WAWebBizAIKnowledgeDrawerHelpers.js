__d(
  "WAWebBizAIKnowledgeDrawerHelpers",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBizAiExampleResponsesQuery",
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
    var d = null;
    function m() {
      return d;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBizAiExampleResponsesQuery").fetchProductInfo();
          if (!e.isSuccess) return null;
          var t = { isEligible: e.isEligible, products: e.products };
          return ((d = t), t);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.KnowledgeStep = e),
      (l.MAX_PREVIEW_ITEMS = u),
      (l.getKnowledgeTypeLabel = c),
      (l.getCachedProductData = m),
      (l.fetchProductData = p));
  },
  226,
);
