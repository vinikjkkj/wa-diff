__d(
  "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "delivery_context");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "optimization_goal",
        o("WASmaxInReceiptEnums").ENUM_DELIVERY_NOOPTIMIZATION,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ optimizationGoal: n.value })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "source_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "referral");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "source_url", s);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "source_type",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            sourceType: r.value,
            sourceUrl: n.value,
          })
        : r;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "origin");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "referral", u);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "type");
      return r.success
        ? o("WAResultOrError").makeResult({ type: r.value, referral: n.value })
        : r;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pricing");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "consumer_country_code",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "business_country_code",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            consumerCountryCode: n.value,
            businessCountryCode: r.value,
          })
        : r;
    }
    function m(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "item");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "delivery_context",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "origin", c);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(t, "pricing", d);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStanzaId(t, "id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(t, "paid_convo_id");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        t,
        "pricing_model",
        o("WASmaxInReceiptEnums").ENUM_CBP_NBP_PMP,
      );
      if (!u.success) return u;
      var m = o("WASmaxParseUtils").attrStringEnum(
        t,
        "billable",
        o("WASmaxInReceiptEnums").ENUM_FALSE_TRUE,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "pricing_category",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "pricing_type",
        o("WASmaxInReceiptEnums")
          .ENUM_FREECUSTOMERSERVICE_FREEENTRYPOINT_REGULAR,
      );
      return _.success
        ? o("WAResultOrError").makeResult({
            id: l.value,
            paidConvoId: s.value,
            pricingModel: u.value,
            billable: m.value,
            pricingCategory: p.value,
            pricingType: _.value,
            deliveryContext: r.value,
            origin: a.value,
            pricing: i.value,
          })
        : _;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "paid_messaging",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        128e3,
        m,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ bizPaidMessagingItem: a.value })
        : a;
    }
    ((l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemDeliveryContext =
      e),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOriginReferralSourceUrl =
        s),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOriginReferral =
        u),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOrigin = c),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemPricing = d),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItem = m),
      (l.parseDeliverPaidConversationAggregatedMixin = p));
  },
  98,
);
