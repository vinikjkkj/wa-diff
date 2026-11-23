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
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "description",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcStore.react"),
          knowledgeType: "DESCRIPTION",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "address",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcLocationOn.react"),
          knowledgeType: "ADDRESS",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "business_hours",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcSchedule.react"),
          knowledgeType: "BUSINESS_HOURS",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "purchase_info",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcShoppingCart.react"),
          knowledgeType: "PURCHASE_INFO",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "payment_methods",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcPayments.react"),
          knowledgeType: "PAYMENT_METHODS",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "return_policy",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcSyncAlt.react"),
          knowledgeType: "RETURN_POLICY",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "discount_policy",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcRedeem.react"),
          knowledgeType: "DISCOUNT_POLICY",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "email",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcMail.react"),
          knowledgeType: "EMAIL",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "website",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcPublic.react"),
          knowledgeType: "WEBSITE",
          sampleLabel: s._(/*BTDS*/ ""),
        },
        {
          exampleQuestion: s._(/*BTDS*/ ""),
          fieldKey: "shipping_policy",
          fieldLabel: s._(/*BTDS*/ ""),
          icon: r("WDSIconIcDirectionsBoat.react"),
          knowledgeType: "SHIPPING_POLICY",
          sampleLabel: s._(/*BTDS*/ ""),
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
    function d(t) {
      var n;
      return (n = e().find(function (e) {
        return e.knowledgeType === t;
      })) != null
        ? n
        : null;
    }
    function m(e) {
      return u.includes(e) ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    ((l.getFilteredSuggestions = c),
      (l.getSuggestionByKnowledgeType = d),
      (l.getSuggestionTitle = m));
  },
  226,
);
