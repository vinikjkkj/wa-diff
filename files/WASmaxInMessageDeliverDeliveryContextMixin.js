__d(
  "WASmaxInMessageDeliverDeliveryContextMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "delivery_context",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "hsm_max_bid",
        1,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "optimization_goal",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_DELIVERY_IMPRESSIONS_LINKCLICKS_NOOPTIMIZATION_OFFSITECONVERSIONS_REPLIES,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "template_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "campaign_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "source_type",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ADSMANAGER_GRAPHAPI_MAIBA_MAIBAAIHUB_MARKETINGMESSAGESWITHOPTIMIZATIONS_UNIFIEDINBOX,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "tier_type",
        o("WASmaxInMessageDeliverEnums").ENUM_TIER3_TIER6MATCHED_TIER6UNMATCHED,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "delivery_type",
        o("WASmaxInMessageDeliverEnums").ENUM_ONDEMAND_SCHEDULED,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "client_token",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "price",
        1,
        void 0,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "waba_id",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "quality_flag",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "is_zero_rated_template",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "partner_id",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "app_id",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "vertical",
        -1,
        void 0,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "bm_message_limit_status",
        o("WASmaxInMessageDeliverEnums").ENUM_MESSAGELIMITREACHED_UNDERLIMIT,
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "is_extended_fep_window_eligible",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "disable_ios_autofill",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "auth_block_recent_registers",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "mask_linked_devices_without_resend",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "encrypted_deterministic_template_id",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "should_bypass_integrity_phone_limit",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "is_zero_priced_template",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "nascent_market_holdout_shadow_paused",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return T.success
        ? o("WAResultOrError").makeResult({
            bizDeliveryContextHsmMaxBid: a.value,
            bizDeliveryContextOptimizationGoal: i.value,
            bizDeliveryContextTemplateId: l.value,
            bizDeliveryContextCampaignId: s.value,
            bizDeliveryContextSourceType: u.value,
            bizDeliveryContextTierType: c.value,
            bizDeliveryContextDeliveryType: d.value,
            bizDeliveryContextClientToken: m.value,
            bizDeliveryContextPrice: p.value,
            bizDeliveryContextWabaId: _.value,
            bizDeliveryContextQualityFlag: f.value,
            bizDeliveryContextIsZeroRatedTemplate: g.value,
            bizDeliveryContextPartnerId: h.value,
            bizDeliveryContextAppId: y.value,
            bizDeliveryContextVertical: C.value,
            bizDeliveryContextBmMessageLimitStatus: b.value,
            bizDeliveryContextIsExtendedFepWindowEligible: v.value,
            bizDeliveryContextDisableIosAutofill: S.value,
            bizDeliveryContextAuthBlockRecentRegisters: R.value,
            bizDeliveryContextMaskLinkedDevicesWithoutResend: L.value,
            bizDeliveryContextEncryptedDeterministicTemplateId: E.value,
            bizDeliveryContextShouldBypassIntegrityPhoneLimit: k.value,
            bizDeliveryContextIsZeroPricedTemplate: I.value,
            bizDeliveryContextNascentMarketHoldoutShadowPaused: T.value,
          })
        : T;
    }
    l.parseDeliveryContextMixin = e;
  },
  98,
);
