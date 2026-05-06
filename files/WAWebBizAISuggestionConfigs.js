__d(
  "WAWebBizAISuggestionConfigs",
  [
    "fbt",
    "WDSIconIcDirectionsBoat.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcMail.react",
    "WDSIconIcPayments.react",
    "WDSIconIcPublic.react",
    "WDSIconIcRedeem.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcShoppingCart.react",
    "WDSIconIcStore.react",
    "WDSIconIcSyncAlt.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return [
        {
          exampleQuestion: s._(/*BTDS*/ "What does your business do or sell?"),
          fieldKey: "description",
          fieldLabel: s._(/*BTDS*/ "Business description"),
          icon: r("WDSIconIcStore.react"),
          knowledgeType: "DESCRIPTION",
          sampleLabel: s._(/*BTDS*/ "How to describe your business"),
        },
        {
          exampleQuestion: s._(/*BTDS*/ "Where is your business located?"),
          fieldKey: "address",
          fieldLabel: s._(/*BTDS*/ "Business address"),
          icon: r("WDSIconIcLocationOn.react"),
          knowledgeType: "ADDRESS",
          sampleLabel: s._(/*BTDS*/ "Your location"),
        },
        {
          exampleQuestion: s._(
            /*BTDS*/ "When is your business open or closed?",
          ),
          fieldKey: "business_hours",
          fieldLabel: s._(/*BTDS*/ "Business hours"),
          icon: r("WDSIconIcSchedule.react"),
          knowledgeType: "BUSINESS_HOURS",
          sampleLabel: s._(/*BTDS*/ "Your business hours"),
        },
        {
          exampleQuestion: s._(/*BTDS*/ "How can someone make a purchase?"),
          fieldKey: "purchase_info",
          fieldLabel: s._(/*BTDS*/ "Purchasing info"),
          icon: r("WDSIconIcShoppingCart.react"),
          knowledgeType: "PURCHASE_INFO",
          sampleLabel: s._(/*BTDS*/ "How to purchase"),
        },
        {
          exampleQuestion: s._(/*BTDS*/ "What payment methods do you accept?"),
          fieldKey: "payment_methods",
          fieldLabel: s._(/*BTDS*/ "Payment methods"),
          icon: r("WDSIconIcPayments.react"),
          knowledgeType: "PAYMENT_METHODS",
          sampleLabel: s._(/*BTDS*/ "Payment methods you accept"),
        },
        {
          exampleQuestion: s._(
            /*BTDS*/ "What's your policy about returns or exchanges?",
          ),
          fieldKey: "return_policy",
          fieldLabel: s._(/*BTDS*/ "Return policy"),
          icon: r("WDSIconIcSyncAlt.react"),
          knowledgeType: "RETURN_POLICY",
          sampleLabel: s._(/*BTDS*/ "How to make returns"),
        },
        {
          exampleQuestion: s._(
            /*BTDS*/ "What kinds of discounts do you offer?",
          ),
          fieldKey: "discount_policy",
          fieldLabel: s._(/*BTDS*/ "Discount info"),
          icon: r("WDSIconIcRedeem.react"),
          knowledgeType: "DISCOUNT_POLICY",
          sampleLabel: s._(/*BTDS*/ "Discounts you offer"),
        },
        {
          exampleQuestion: s._(/*BTDS*/ "What's your email address?"),
          fieldKey: "email",
          fieldLabel: s._(/*BTDS*/ "Business email"),
          icon: r("WDSIconIcMail.react"),
          knowledgeType: "EMAIL",
          sampleLabel: s._(/*BTDS*/ "Your email"),
        },
        {
          exampleQuestion: s._(/*BTDS*/ "What's your business website?"),
          fieldKey: "website",
          fieldLabel: s._(/*BTDS*/ "Website"),
          icon: r("WDSIconIcPublic.react"),
          knowledgeType: "WEBSITE",
          sampleLabel: s._(/*BTDS*/ "Your website"),
        },
        {
          exampleQuestion: s._(
            /*BTDS*/ "What should customers know about shipping and delivery?",
          ),
          fieldKey: "shipping_policy",
          fieldLabel: s._(/*BTDS*/ "Shipping info"),
          icon: r("WDSIconIcDirectionsBoat.react"),
          knowledgeType: "SHIPPING_POLICY",
          sampleLabel: s._(/*BTDS*/ "Your shipping policy"),
        },
      ];
    }
    var u = ["description", "address", "business_hours", "email", "website"];
    function c(t, n) {
      n === void 0 && (n = 2);
      var r = new Set(t);
      return e()
        .filter(function (e) {
          return !r.has(e.knowledgeType);
        })
        .slice(0, n);
    }
    function d(e) {
      return u.includes(e)
        ? s._(/*BTDS*/ "Add business info")
        : s._(/*BTDS*/ "Add purchasing info");
    }
    ((l.getFilteredSuggestions = c), (l.getSuggestionTitle = d));
  },
  226,
);
