__d(
  "WASmaxInMessagePublishAckPaidConversationMixin",
  ["WAResultOrError", "WASmaxInMessagePublishEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "delivery_context");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "optimization_goal",
        o("WASmaxInMessagePublishEnums").ENUM_DELIVERY_NOOPTIMIZATION,
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
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "conversation_status",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "latest_c2b_timestamp",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "analytics_conversation_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "b2c_timestamp",
        0,
        void 0,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            consumerCountryCode: n.value,
            businessCountryCode: r.value,
            conversationStatus: a.value,
            latestC2bTimestamp: i.value,
            analyticsConversationId: l.value,
            b2cTimestamp: s.value,
          })
        : s;
    }
    function m(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "biz");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "delivery_context",
        e,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "origin", c);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "pricing", d);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(r.value, "paid_convo_id");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "pricing_model",
        o("WASmaxInMessagePublishEnums").ENUM_CBP_NBP_PMP,
      );
      if (!u.success) return u;
      var m = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "billable",
        o("WASmaxInMessagePublishEnums").ENUM_FALSE_TRUE,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "expiration_timestamp",
        0,
        void 0,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "pricing_category",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "pricing_type",
        o("WASmaxInMessagePublishEnums")
          .ENUM_FREECUSTOMERSERVICE_FREEENTRYPOINT_REGULAR,
      );
      return f.success
        ? o("WAResultOrError").makeResult({
            bizPaidConvoId: s.value,
            bizPricingModel: u.value,
            bizBillable: m.value,
            bizExpirationTimestamp: p.value,
            bizPricingCategory: _.value,
            bizPricingType: f.value,
            bizDeliveryContext: a.value,
            bizOrigin: i.value,
            bizPricing: l.value,
          })
        : f;
    }
    ((l.parseAckPaidConversationBizDeliveryContext = e),
      (l.parseAckPaidConversationBizOriginReferralSourceUrl = s),
      (l.parseAckPaidConversationBizOriginReferral = u),
      (l.parseAckPaidConversationBizOrigin = c),
      (l.parseAckPaidConversationBizPricing = d),
      (l.parseAckPaidConversationMixin = m));
  },
  98,
);
