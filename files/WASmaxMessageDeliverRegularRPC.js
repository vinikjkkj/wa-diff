__d(
  "WASmaxMessageDeliverRegularRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInMessageDeliverAdminRevokeMixin",
    "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
    "WASmaxInMessageDeliverAvatarStickerTypeMixin",
    "WASmaxInMessageDeliverBizAcceptTsMixin",
    "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
    "WASmaxInMessageDeliverContentTypePollVoteMixin",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverDeviceIdentityMixin",
    "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInMessageDeliverEncListMixin",
    "WASmaxInMessageDeliverEncMediaTypeMixin",
    "WASmaxInMessageDeliverEncPayloadMixin",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxInMessageDeliverEncVersion2Mixin",
    "WASmaxInMessageDeliverEncVersionFutureproofMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverIndividualRegularMixin",
    "WASmaxInMessageDeliverMessageAssociationTypeMixin",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverPaddingMixin",
    "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
    "WASmaxInMessageDeliverQualityControlMixin",
    "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
    "WASmaxInMessageDeliverRegistrationIDMixin",
    "WASmaxInMessageDeliverReportingTagElementMixin",
    "WASmaxInMessageDeliverReportingTokenElementMixin",
    "WASmaxInMessageDeliverRetryMixin",
    "WASmaxInMessageDeliverRevokeMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxInMessageDeliverTraceContextMixin",
    "WASmaxInMessageDeliverVerifiedNameMixin",
    "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
    "WASmaxInMessageDeliverWaReportingMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Regular", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeRegularResponseMissingPlaceholder: function (n) {
          return u(n, e);
        },
        makeRegularResponseSuccess: function (n) {
          return c(n, e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!r.success) return r;
      var a = d(e);
      if (!a.success) return a;
      var i = $(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: n.value, t: r.value }, a.value, {
              messageDeliverTypes: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = Q(o("WASmaxJsx").smax("ack", { error: "404" }), e, t);
      return n;
    }
    function c(e, t) {
      var n = Q(o("WASmaxJsx").smax("ack", null), e, t);
      return n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = G(e),
        r = z(e),
        a = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        i = F(e),
        l = o(
          "WASmaxInMessageDeliverDeviceIdentityMixin",
        ).parseDeviceIdentityMixin(e),
        s = o("WASmaxInMessageDeliverVerifiedNameMixin").parseVerifiedNameMixin(
          e,
        ),
        u = m(e),
        c = N(e),
        d = A(e),
        p = w(e),
        _ = Y(e),
        f = L(e),
        g = o(
          "WASmaxInMessageDeliverRegistrationIDMixin",
        ).parseRegistrationIDMixin(e),
        C = k(e),
        b = I(e),
        v = o("WASmaxInMessageDeliverWaReportingMixin").parseWaReportingMixin(
          e,
        ),
        S = D(e),
        R = P(e),
        E = o("WASmaxInMessageDeliverTraceContextMixin").parseTraceContextMixin(
          e,
        ),
        T = o("WASmaxInMessageDeliverPaddingMixin").parsePaddingMixin(e),
        $ = x(e),
        M = j(e),
        O = o(
          "WASmaxInMessageDeliverMessageAssociationTypeMixin",
        ).parseMessageAssociationTypeMixin(e),
        B = y(e),
        W = h(e),
        U = q(e);
      return o("WAResultOrError").makeResult({
        triggerBlockMixin: n.success ? n.value : null,
        triggerMessageCSATMixin: r.success ? r.value : null,
        offlineMixin: a.success ? a.value : null,
        pushNameMixin: i.success ? i.value : null,
        deviceIdentityMixin: l.success ? l.value : null,
        verifiedNameMixin: s.success ? s.value : null,
        bizMixin: u.success ? u.value : null,
        hasMulticastMixin: c.success,
        hasPreFilledTextMixin: d.success,
        hasPreFilledNumberMixin: p.success,
        hasAutomatedMixin: _.success,
        dHashMixin: f.success ? f.value : null,
        registrationIDMixin: g.success ? g.value : null,
        folderMixin: C.success ? C.value : null,
        frankingMixin: b.success ? b.value : null,
        waReportingMixin: v.success ? v.value : null,
        internalTestMixin: S.success ? S.value : null,
        metaHideDecryptionPlaceholderMixin: R.success ? R.value : null,
        traceContextMixin: E.success ? E.value : null,
        paddingMixin: T.success ? T.value : null,
        lIDSessionDeprecationMixin: $.success ? $.value : null,
        webDriverConfigMixin: M.success ? M.value : null,
        messageAssociationTypeMixin: O.success ? O.value : null,
        contentTypeMixin: B.success ? B.value : null,
        collectionContentTypeMixin: W.success ? W.value : null,
        sharedSenderOrgIDsMixin: U.success ? U.value : null,
      });
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = T(e),
        r = f(e),
        a = J(e),
        i = o("WASmaxInMessageDeliverBizAcceptTsMixin").parseBizAcceptTsMixin(
          e,
        ),
        l = _(e),
        s = M(e),
        u = X(e),
        c = C(e),
        d = R(e),
        m = g(e),
        h = E(e),
        y = o(
          "WASmaxInMessageDeliverQualityControlMixin",
        ).parseQualityControlMixin(e),
        b = v(e),
        S = ee(e),
        L = p(e),
        k = Z(e),
        I = te(e);
      return o("WAResultOrError").makeResult({
        hsmMixin: n.success ? n.value : null,
        bizRolesMixin: r.success ? r.value : null,
        bizAutoResponseMixin: a.success ? a.value : null,
        bizAcceptTsMixin: i.success ? i.value : null,
        bizROIMetricsGatingFlagsMixin: l.success ? l.value : null,
        originalEnvelopeMixin: s.success ? s.value : null,
        authMixin: u.success ? u.value : null,
        conversionRecipientStatusMixin: c.success ? c.value : null,
        ctwaConversionMixin: d.success ? d.value : null,
        businessBotGatingMixin: m.success ? m.value : null,
        deliveryContextMixin: h.success ? h.value : null,
        qualityControlMixin: y.success ? y.value : null,
        ctwaAttributionMixin: b.success ? b.value : null,
        bizEngagementDataMixin: S.success ? S.value : null,
        bizPricingDataMixin: L.success ? L.value : null,
        bizCampaignMixin: k.success ? k.value : null,
        bizMessageType: I.success ? I.value : null,
      });
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "pricing");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "consumer_country_code",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "business_country_code",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizPricingConsumerCountryCode: a.value,
            bizPricingBusinessCountryCode: i.value,
          })
        : i;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "roi_enabled",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ bizRoiEnabled: r.value })
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "host_storage",
        1,
        100,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "actual_actors",
        1,
        100,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "privacy_mode_ts",
        1577865600,
        4102473600,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizHostStorage: r.value,
            bizActualActors: a.value,
            bizPrivacyModeTs: i.value,
          })
        : i;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "gating");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "bot");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "state",
        o("WASmaxInMessageDeliverEnums").ENUM_ALLOW_BYPASS_DENY_ERROR,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "v",
        1,
        void 0,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "limitation",
        o("WASmaxInMessageDeliverEnums").ENUM_NONE_SERVICEPROVIDER,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            bizGatingBotState: i.value,
            bizGatingBotV: l.value,
            bizGatingBotLimitation: s.value,
          })
        : s;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "collection_type",
        o("WASmaxInMessageDeliverEnums").ENUM_DOCUMENT_IMAGE_MIXED_VIDEO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaCollectionType: r.value })
        : r;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "content_type",
        o("WASmaxInMessageDeliverEnums").ENUM_ADDON_STATUSNOTIFY,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContentType: r.value })
        : r;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "conversion");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "recipient_status",
        o("WASmaxInMessageDeliverEnums").ENUM_MATCHED_UNMATCHED,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            conversionRecipientStatus: r.value,
          })
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa_attribution");
      if (!t.success) return t;
      var n = ae(e);
      return (n.success, n);
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "ctwa_attribution",
        b,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ ctwaAttribution: n.value })
        : n;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa");
      if (!t.success) return t;
      var n = le(e);
      return (n.success, n);
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "ctwa", S);
      return n.success ? o("WAResultOrError").makeResult({ ctwa: n.value }) : n;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      return n.success
        ? o("WAResultOrError").makeResult({ dhash: n.value })
        : n;
    }
    function E(e) {
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
        "is_coex_dual_send",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "is_zero_priced_template",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "nascent_market_holdout_shadow_paused",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "template_pausing_holdout_ids",
      );
      return x.success
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
            bizDeliveryContextIsCoexDualSend: I.value,
            bizDeliveryContextIsZeroPricedTemplate: T.value,
            bizDeliveryContextNascentMarketHoldoutShadowPaused: D.value,
            bizDeliveryContextTemplatePausingHoldoutIds: x.value,
          })
        : x;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = ue(n.value);
      return (r.success, r);
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = se(e),
        r = B(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { clientFrankingTagMixin: n.success ? n.value : null },
              r.value,
            ),
          )
        : r;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "hsm");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "v",
        "1",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "buttons",
        "1",
      );
      if (!a.success) return a;
      var i = pe(n.value);
      if (!i.success) return i;
      var l = O(n.value);
      return o("WAResultOrError").makeResult({
        hsmV: r.value,
        hsmButtons: a.value,
        hsmHSMReviewMetadataMixin: i.value,
        hsmQualityTokenMixin: l.success ? l.value : null,
      });
    }
    function D(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "test");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "config",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ testConfig: n.value })
        : n;
    }
    function x(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "deprecated_lid_session",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaDeprecatedLidSession: r.value })
        : r;
    }
    function $(e) {
      var t = _e(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = ce(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: n.value,
        });
      var r = U(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Status",
          value: r.value,
        });
      var a = re(e);
      return a.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: a.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "Group", "Status", "Broadcast"],
            [t, n, r, a],
          );
    }
    function P(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t.value,
        "decrypt-fail",
        "hide",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ metaDecryptFail: n.value })
        : n;
    }
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "multicast");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function M(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = ne(n.value);
      return (r.success, r);
    }
    function w(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "url_number");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function A(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "url_text");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function F(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "notify");
      return n.success
        ? o("WAResultOrError").makeResult({ notify: n.value })
        : n;
    }
    function O(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "hsm");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "quality_token");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "v",
        "1",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 16384);
      return a.success
        ? o("WAResultOrError").makeResult({
            qualityTokenV: r.value,
            qualityTokenElementValue: a.value,
          })
        : a;
    }
    function B(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "franking");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        t.value,
        "reporting_tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 9, 128);
      return r.success
        ? o("WAResultOrError").makeResult({
            frankingReportingTagElementValue: r.value,
          })
        : r;
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "org");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "org_id");
      return n.success
        ? o("WAResultOrError").makeResult({ orgId: n.value })
        : n;
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "shared_sender_orgs",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "org",
        1,
        10,
        W,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ metaSharedSenderOrgsOrg: a.value })
        : a;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrStatusJid,
        e,
        "from",
        "status@broadcast",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "participant_lid",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "original_addressing_mode",
        "lid",
      );
      if (!s.success) return s;
      var u = ft(e),
        c = H(e),
        d = Ue(e),
        m = V(e),
        p = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        _ = He(e),
        f = qe(e),
        g = Re(e),
        h = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        y = Se(e),
        C = Oe(e);
      if (!C.success) return C;
      var b = Ce(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantLid: i.value,
        participantUsername: l.value,
        originalAddressingMode: s.value,
        fanoutCountMixin: u.success ? u.value : null,
        statusSettingMixin: c.success ? c.value : null,
        statusMentionedMixin: d.success ? d.value : null,
        statusPushEligibleMixin: m.success ? m.value : null,
        appdataMetaAttributeMixin: p.success ? p.value : null,
        statusMentionedUsersMixin: _.success ? _.value : null,
        statusMentionSourceMixin: f.success ? f.value : null,
        metaIsGroupStatusMixin: g.success ? g.value : null,
        stsMixin: h.success ? h.value : null,
        messageSessionScopeMixin: y.success ? y.value : null,
        statusDualOrSingleEncMixinGroup: C.value,
        messageEditOrRevokeMixinGroup: b.success ? b.value : null,
      });
    }
    function V(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "push_eligible",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaPushEligible: r.value })
        : r;
    }
    function H(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "status_setting",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ALLOWLIST_CONTACTS_CUSTOMLIST_DENYLIST,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaStatusSetting: r.value })
        : r;
    }
    function G(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "tb_cooldown", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "tb_expiration_ts",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            tbCooldown: n.value,
            tbExpirationTs: r.value,
          })
        : r;
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = Qe(n.value);
      return (r.success, r);
    }
    function j(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "webdriver_config");
      return r.success
        ? o("WAResultOrError").makeResult({ metaWebdriverConfig: r.value })
        : r;
    }
    function K(e, t) {
      var n = e.ackRecipient,
        r = o("WASmaxParseReference").attrFromReference(
          o("WASmaxParseJid").attrJidEnum,
          t,
          ["from"],
          o("WASmaxInMessageDeliverEnums")
            .DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_DEVICEJID_STATUSJID,
        );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        ["id"],
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        t,
        ["type"],
      );
      if (!i.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(i.error);
      var l = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_USERJID_USERJID_DEVICEJID_LIDUSERJID_USERJID,
      );
      if (!l.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(l.error);
      var s = o("WASmaxJsx").smax("ack", {
        to: o("WAWap").JID(r.value),
        class: "message",
        id: o("WAWap").STANZA_ID(a.value),
        type: o("WAWap").CUSTOM_STRING(i.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, l.value),
        recipient: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, n),
      });
      return s;
    }
    function Q(e, t, n) {
      var r = K(t, n);
      return o("WASmaxMixins").mergeStanzas(e, r);
    }
    function X(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "auth");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "verification_timestamp",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "disable_ios_autofill",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "enable_risk_check",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            bizAuthVerificationTimestamp: a.value,
            bizAuthDisableIosAutofill: i.value,
            bizAuthEnableRiskCheck: l.value,
          })
        : l;
    }
    function Y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "automated");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function J(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "auto_response",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_COUNTRY_ES_REACT_SYSMSGVERSION_TOS3_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ bizAutoResponse: r.value })
        : r;
    }
    function Z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      return r.success
        ? o("WAResultOrError").makeResult({ bizCampaignId: r.value })
        : r;
    }
    function ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "engagement",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "conversation_state",
        o("WASmaxInMessageDeliverEnums").ENUM_CLOSED_OPEN,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "customer_service_state",
        o("WASmaxInMessageDeliverEnums").ENUM_CLOSED_OPEN,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizEngagementConversationState: a.value,
            bizEngagementCustomerServiceState: i.value,
          })
        : i;
    }
    function te(e) {
      var t = oe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Buttons",
          value: t.value,
        });
      var n = Ee(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NativeFlow",
          value: n.value,
        });
      var r = fe(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Interactive",
          value: r.value,
        });
      var a = ar(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSelectList",
          value: a.value,
        });
      var i = rr(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "Buttons",
              "NativeFlow",
              "Interactive",
              "SingleSelectList",
              "ProductList",
            ],
            [t, n, r, a, i],
          );
    }
    function ne(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "original_envelope",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 102400);
      return r.success
        ? o("WAResultOrError").makeResult({
            originalEnvelopeElementValue: r.value,
          })
        : r;
    }
    function re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrBroadcastJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInMessageDeliverEnums").DEVICEJID_DEVICEJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "participant_lid",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!l.success) return l;
      var s = ft(e),
        u = $t(e),
        c = Ne(e),
        d = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        m = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        p = ve(e),
        _ = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        f = st(e),
        g = rt(e);
      if (!g.success) return g;
      var h = be(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantLid: i.value,
        participantUsername: l.value,
        fanoutCountMixin: s.success ? s.value : null,
        sMBBroadcastSourceMixin: u.success ? u.value : null,
        sMBBroadcastSourceWithCampaignMixin: c.success ? c.value : null,
        appdataMetaAttributeMixin: d.success ? d.value : null,
        viewOnceMetaAttributeMixin: m.success ? m.value : null,
        messageReadMetaAttributeMixin: p.success ? p.value : null,
        stsMixin: _.success ? _.value : null,
        contextSourceMixin: f.success ? f.value : null,
        broadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup:
          g.value,
        messageEditOrRevokeOrBroadcastEphemeralMixinGroup: h.success
          ? h.value
          : null,
      });
    }
    function oe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "buttons");
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    function ae(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa_attribution");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 1024);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function ie(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "source_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function le(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "source_url", ie);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "conversion_source",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "conversion_data",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "source_type",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "entry_point_conversion_source",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "entry_point_conversion_app",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "signals",
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            conversionSource: r.value,
            conversionData: a.value,
            sourceType: i.value,
            entryPointConversionSource: l.value,
            entryPointConversionApp: s.value,
            signals: u.value,
            sourceUrl: n.value,
          })
        : u;
    }
    function se(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "franking");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        t.value,
        "franking_tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 16, 128);
      return r.success
        ? o("WAResultOrError").makeResult({
            frankingFrankingTagElementValue: r.value,
          })
        : r;
    }
    function ue(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "folder_id");
      return t.success
        ? o("WAResultOrError").makeResult({ folderId: t.value })
        : t;
    }
    function ce(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_USERJID_USERJID_LIDUSERJID_USERJID,
      );
      if (!r.success) return r;
      var a = vt(e),
        i = ft(e),
        l = ke(e),
        s = Ie(e),
        u = Te(e),
        c = ct(e),
        d = gt(e),
        m = nt(e),
        p = je(e),
        _ = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        f = Jn(e),
        g = Je(e),
        h = ht(e),
        y = yt(e),
        C = me(e),
        b = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        v = o(
          "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
        ).parseCountryCodeMetaTagMixin(e),
        S = o(
          "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
        ).parseRecipientCountryCodeMetaTagMixin(e),
        R = de(e),
        L = et(e),
        E = Ge(e),
        k = he(e),
        I = Re(e),
        T = Me(e),
        D = Se(e),
        x = ve(e),
        $ = kt(e),
        P = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        N = st(e),
        M = bt(e);
      if (!M.success) return M;
      var w = Ct(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        groupEphemeralMixin: a.success ? a.value : null,
        fanoutCountMixin: i.success ? i.value : null,
        participantLIDMixin: l.success ? l.value : null,
        participantPNMixin: s.success ? s.value : null,
        participantUsernameMixin: u.success ? u.value : null,
        displayNameMixin: c.success ? c.value : null,
        groupAddressingModeMixin: d.success ? d.value : null,
        botThreadIDMixin: m.success ? m.value : null,
        threadMsgMixin: p.success ? p.value : null,
        appdataMetaAttributeMixin: _.success ? _.value : null,
        liveLocationModeMixin: f.success ? f.value : null,
        botLocaleMixin: g.success ? g.value : null,
        groupCAPIMetaAttributeMixin: h.success ? h.value : null,
        groupCAPIShardRoutingStrategyMetaAttributeMixin: y.success
          ? y.value
          : null,
        groupWorkMetaAttributeMixin: C.success ? C.value : null,
        viewOnceMetaAttributeMixin: b.success ? b.value : null,
        countryCodeMetaTagMixin: v.success ? v.value : null,
        recipientCountryCodeMetaTagMixin: S.success ? S.value : null,
        groupStatusMentionMessageMixin: R.success ? R.value : null,
        botPlatformMixin: L.success ? L.value : null,
        statusMessageMetaAttributeMixin: E.success ? E.value : null,
        memberTagsMessageMetaAttributeMixin: k.success ? k.value : null,
        metaIsGroupStatusMixin: I.success ? I.value : null,
        senderAccountKindMixin: T.success ? T.value : null,
        messageSessionScopeMixin: D.success ? D.value : null,
        messageReadMetaAttributeMixin: x.success ? x.value : null,
        metaScheduledMessageMixin: $.success ? $.value : null,
        stsMixin: P.success ? P.value : null,
        contextSourceMixin: N.success ? N.value : null,
        groupEncTypes: M.value,
        groupEditMixins: w.success ? w.value : null,
      });
    }
    function de(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_group_status_mention",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsGroupStatusMention: r.value })
        : r;
    }
    function me(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "work",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaWork: r.value })
        : r;
    }
    function pe(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sub_tag",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "library_template_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_template_from_library_edited",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            category: t.value,
            tag: n.value,
            id: r.value,
            subTag: a.value,
            libraryTemplateId: i.value,
            isTemplateFromLibraryEdited: l.value,
          })
        : l;
    }
    function _e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID_DEVICEJID,
      );
      if (!n.success) return n;
      var r = $e(e),
        a = ct(e),
        i = St(e),
        l = Ae(e),
        s = we(e),
        u = Fe(e),
        c = Ke(e),
        d = or(e),
        m = nt(e),
        p = ge(e),
        _ = Je(e),
        f = o(
          "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
        ).parseAppdataMetaAttributeMixin(e),
        g = dt(e),
        h = o(
          "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
        ).parseViewOnceMetaAttributeMixin(e),
        y = Be(e),
        C = o(
          "WASmaxInMessageDeliverCountryCodeMetaTagMixin",
        ).parseCountryCodeMetaTagMixin(e),
        b = o(
          "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
        ).parseRecipientCountryCodeMetaTagMixin(e),
        v = et(e),
        S = Me(e),
        R = ve(e),
        L = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e),
        E = Xe(e),
        k = ut(e),
        I = st(e),
        T = ye(e),
        D = Ye(e);
      if (!D.success) return D;
      var x = xe(e),
        $ = er(e),
        P = De(e),
        N = Ze(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        recipientMixin: r.success ? r.value : null,
        displayNameMixin: a.success ? a.value : null,
        groupInviteTargetMixin: i.success ? i.value : null,
        senderPNMixin: l.success ? l.value : null,
        senderLIDMixin: s.success ? s.value : null,
        senderUsernameMixin: u.success ? u.value : null,
        threadTypeTagMixin: c.success ? c.value : null,
        recipientLatestLIDMixin: d.success ? d.value : null,
        botThreadIDMixin: m.success ? m.value : null,
        lidChatOriginMixin: p.success ? p.value : null,
        botLocaleMixin: _.success ? _.value : null,
        appdataMetaAttributeMixin: f.success ? f.value : null,
        hasEmptyBizDeprecatedMixin: g.success,
        viewOnceMetaAttributeMixin: h.success ? h.value : null,
        statusMentionMessageMixin: y.success ? y.value : null,
        countryCodeMetaTagMixin: C.success ? C.value : null,
        recipientCountryCodeMetaTagMixin: b.success ? b.value : null,
        botPlatformMixin: v.success ? v.value : null,
        senderAccountKindMixin: S.success ? S.value : null,
        messageReadMetaAttributeMixin: R.success ? R.value : null,
        stsMixin: L.success ? L.value : null,
        armadilloOriginalMessageTimestampMixin: E.success ? E.value : null,
        deliverLinkedDeviceScheduleMessageMixin: k.success ? k.value : null,
        contextSourceMixin: I.success ? I.value : null,
        messageEditOrMessagePinOrRevokeMixinGroup: T.success ? T.value : null,
        availableOrUnavailableIndividualMixinGroup: D.value,
        recipientLIDOrPNMixinGroup: x.success ? x.value : null,
        peerRecipientLIDOrPNMixinGroup: $.success ? $.value : null,
        recipientDisplayNameOrPeerRecipientUsernameMixinGroup: P.success
          ? P.value
          : null,
        botOrCoExV2ProactiveOrBotProactiveMessageMixinGroup: N.success
          ? N.value
          : null,
      });
    }
    function fe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "interactive",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "v",
        "1",
      );
      if (!a.success) return a;
      var i = Le(r.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            bizInteractiveV: a.value,
            bizInteractiveNativeFlowMessageTypeMixin: i.value,
          })
        : i;
    }
    function ge(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "origin",
        "ctwa",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaOrigin: r.value })
        : r;
    }
    function he(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "tag_reason",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_NEWMEMBER_REREGRECOVERYREQUEST_REREGRECOVERYRESPONSE_USERDELETE_USERUPDATE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaTagReason: r.value })
        : r;
    }
    function ye(e) {
      var t = Lt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MessageEdit",
          value: t.value,
        });
      var n = Et(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MessagePin",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({ name: "Revoke", value: r.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "MessagePin", "Revoke"],
            [t, n, r],
          );
    }
    function Ce(e) {
      var t = Lt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MessageEdit",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Revoke", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "Revoke"],
            [t, n],
          );
    }
    function be(e) {
      var t = Lt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MessageEdit",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Revoke",
          value: n.value,
        });
      var r = lr(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastEphemeral",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "Revoke", "BroadcastEphemeral"],
            [t, n, r],
          );
    }
    function ve(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "read",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaRead: r.value })
        : r;
    }
    function Se(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "session_scope",
        "status",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaSessionScope: r.value })
        : r;
    }
    function Re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "is_group_status",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsGroupStatus: r.value })
        : r;
    }
    function Le(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "interactive");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "native_flow");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "native_flow",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "name");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "v",
        1,
        void 0,
      );
      if (!i.success) return i;
      var l = _t(n.value),
        s = It(n.value);
      return o("WAResultOrError").makeResult({
        type: r.value,
        nativeFlowName: a.value,
        nativeFlowV: i.value,
        nativeFlowExtensionsMetadataMixin: l.success ? l.value : null,
        nativeFlowMixedMetadataMixin: s.success ? s.value : null,
      });
    }
    function Ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "native_flow_name",
        o("WASmaxInMessageDeliverEnums")
          .ENUM__CALLPERMISSIONREQUEST_CATALOGMESSAGE_MENUOPTIONS_ORDERDETAILS_ORDERSTATUS_OTP_PAYMENTINFO_PAYMENTKEYINFO_PAYMENTMETHOD_PAYMENTREQUEST_PAYMENTSTATUS_SPLITPAYMENT_VIDEOCALL_VOICECALL,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "native_flow_version",
        1,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            bizNativeFlowName: r.value,
            bizNativeFlowVersion: a.value,
          })
        : a;
    }
    function ke(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "participant_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ participantLid: n.value })
        : n;
    }
    function Ie(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "participant_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ participantPn: n.value })
        : n;
    }
    function Te(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "participant_username");
      return n.success
        ? o("WAResultOrError").makeResult({ participantUsername: n.value })
        : n;
    }
    function De(e) {
      var t = Tt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RecipientDisplayName",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
      ).parsePeerRecipientUsernameMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PeerRecipientUsername",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RecipientDisplayName", "PeerRecipientUsername"],
            [t, n],
          );
    }
    function xe(e) {
      var t = Dt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RecipientLID",
          value: t.value,
        });
      var n = Pe(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "RecipientPN",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RecipientLID", "RecipientPN"],
            [t, n],
          );
    }
    function $e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "recipient",
        o("WASmaxInMessageDeliverEnums").USERJID_USERJID,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ recipient: n.value })
        : n;
    }
    function Pe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "recipient_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientPn: n.value })
        : n;
    }
    function Ne(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "campaign_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "offer_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "free_reserved_msgs",
      );
      if (!i.success) return i;
      var l = $t(e);
      return o("WAResultOrError").makeResult({
        bizCampaignId: r.value,
        bizOfferId: a.value,
        bizFreeReservedMsgs: i.value,
        sMBBroadcastSourceMixin: l.success ? l.value : null,
      });
    }
    function Me(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "sender_account_kind",
        o("WASmaxInMessageDeliverEnums").ENUM_GUEST_WA_WORK,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaSenderAccountKind: r.value })
        : r;
    }
    function we(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "sender_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ senderLid: n.value })
        : n;
    }
    function Ae(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "sender_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ senderPn: n.value })
        : n;
    }
    function Fe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "username");
      return n.success
        ? o("WAResultOrError").makeResult({ username: n.value })
        : n;
    }
    function Oe(e) {
      var t = Nt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusDualEnc",
          value: t.value,
        });
      var n = ze(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusSingleEnc",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusDualEnc", "StatusSingleEnc"],
            [t, n],
          );
    }
    function Be(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_status_mention",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsStatusMention: r.value })
        : r;
    }
    function We(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInMessageDeliverEnums").GROUPJID_USERJID,
      );
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function qe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "mention_source",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "to", 1, 5, We);
      return a.success
        ? o("WAResultOrError").makeResult({ metaMentionSourceTo: a.value })
        : a;
    }
    function Ue(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "status_mentioned",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaStatusMentioned: r.value })
        : r;
    }
    function Ve(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInMessageDeliverEnums").GROUPJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "peer_pn_jid",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, peerPnJid: r.value })
        : r;
    }
    function He(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "mentioned_users",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "to", 1, 5, Ve);
      return a.success
        ? o("WAResultOrError").makeResult({ metaMentionedUsersTo: a.value })
        : a;
    }
    function Ge(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_status_message",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsStatusMessage: r.value })
        : r;
    }
    function ze(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Pt(e);
      if (!n.success) return n;
      var r = xt(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusDeliverContentTypeMixins: n.value,
            retryOrBroadcastRegularMixinGroup: r.value,
          })
        : r;
    }
    function je(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(n.value, "thread_msg_id");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(n.value, "thread_msg_sender_jid");
      return a.success
        ? o("WAResultOrError").makeResult({
            metaThreadMsgId: r.value,
            metaThreadMsgSenderJid: a.value,
          })
        : a;
    }
    function Ke(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = wt(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            metaThreadTypeTagEnumOrLegacyMixinGroup: r.value,
          })
        : r;
    }
    function Qe(e) {
      var t = o("WASmaxParseUtils").attrIntRange(
        e,
        "tm_csat_cooldown",
        0,
        void 0,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "tm_csat_exp_ts",
        0,
        void 0,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            tmCsatCooldown: t.value,
            tmCsatExpTs: n.value,
          })
        : n;
    }
    function Xe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "original_msg_t",
        15778656e5,
        41024736e5,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaOriginalMsgT: r.value })
        : r;
    }
    function Ye(e) {
      var t = qt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Available",
          value: t.value,
        });
      var n = Bt(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Available", "UnavailableIndividual"],
            [t, n],
          );
    }
    function Je(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "locale");
      return n.success
        ? o("WAResultOrError").makeResult({ locale: n.value })
        : n;
    }
    function Ze(e) {
      var t = Vt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BotMessage",
          value: t.value,
        });
      var n = at(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "CoExV2ProactiveMessage",
          value: n.value,
        });
      var r = tt(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BotProactiveMessage",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BotMessage", "CoExV2ProactiveMessage", "BotProactiveMessage"],
            [t, n, r],
          );
    }
    function et(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "sender_platform");
      return r.success
        ? o("WAResultOrError").makeResult({ metaSenderPlatform: r.value })
        : r;
    }
    function tt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = Rn(n.value);
      if (!r.success) return r;
      var a = Ut(n.value);
      return o("WAResultOrError").makeResult({
        botBotResponseMixin: r.value,
        botBotClientMultiThreadIDMixin: a.success ? a.value : null,
      });
    }
    function nt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ threadId: n.value })
        : n;
    }
    function rt(e) {
      var t = Ht(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastDualEnc",
          value: t.value,
        });
      var n = ot(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastSingleEnc",
          value: n.value,
        });
      var r = Ft(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableBroadcast",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BroadcastDualEnc", "BroadcastSingleEnc", "UnavailableBroadcast"],
            [t, n, r],
          );
    }
    function ot(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = lt(e);
      if (!n.success) return n;
      var r = xt(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentTypeTextOrMediaSingleMixinGroup: n.value,
            retryOrBroadcastRegularMixinGroup: r.value,
          })
        : r;
    }
    function at(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!r.success) return r;
      var a = Rn(n.value);
      if (!a.success) return a;
      var i = Ut(n.value),
        l = it(r.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: a.value,
            botBotClientMultiThreadIDMixin: i.success ? i.value : null,
            metaCoExV2ProactiveMetaMixin: l.value,
          })
        : l;
    }
    function it(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "target_chat_jid",
        o("WASmaxInMessageDeliverEnums").GROUPJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrLidUserJid(e, "from");
      return r.success
        ? o("WAResultOrError").makeResult({
            targetChatJid: n.value,
            from: r.value,
          })
        : r;
    }
    function lt(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = tn(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeMediaSingle",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ContentTypeText", "ContentTypeMediaSingle"],
            [t, n],
          );
    }
    function st(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "context_source",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_CHANNELSINVITATION_EVENTINVITATION,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContextSource: r.value })
        : r;
    }
    function ut(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
      ).parseEncHideDecryptionPlaceholderMixin(n.value);
      if (!r.success) return r;
      var a = kt(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encEncHideDecryptionPlaceholderMixin: r.value },
              a.value,
            ),
          )
        : a;
    }
    function ct(e) {
      var t = o("WASmaxParseUtils").attrString(e, "display_name");
      return t.success
        ? o("WAResultOrError").makeResult({ displayName: t.value })
        : t;
    }
    function dt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function mt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "capability");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function pt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "capabilities");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "capability",
        1,
        50,
        mt,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ capability: n.value })
        : n;
    }
    function _t(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_flow");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "extensions_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "capabilities",
        pt,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "well_version",
        1,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "data_api_version",
        1,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "flow_message_version",
        1,
        void 0,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            extensionsMetadataWellVersion: a.value,
            extensionsMetadataDataApiVersion: i.value,
            extensionsMetadataFlowMessageVersion: l.value,
            extensionsMetadataCapabilities: r.value,
          })
        : l;
    }
    function ft(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "count");
      return t.success
        ? o("WAResultOrError").makeResult({ count: t.value })
        : t;
    }
    function gt(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "addressing_mode",
        o("WASmaxInMessageDeliverEnums").ENUM_LID_PN,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ addressingMode: t.value })
        : t;
    }
    function ht(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "capi",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaCapi: r.value })
        : r;
    }
    function yt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "capi_shard_routing_strategy",
        o("WASmaxInMessageDeliverEnums").ENUM_GROUP_SENDER,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            metaCapiShardRoutingStrategy: r.value,
          })
        : r;
    }
    function Ct(e) {
      var t = Lt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MessageEdit",
          value: t.value,
        });
      var n = Et(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MessagePin",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Revoke",
          value: r.value,
        });
      var a = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "AdminRevoke",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MessageEdit", "MessagePin", "Revoke", "AdminRevoke"],
            [t, n, r, a],
          );
    }
    function bt(e) {
      var t = ln(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDualEnc",
          value: t.value,
        });
      var n = Rt(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "GroupSingleEnc",
          value: n.value,
        });
      var r = Ot(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableGroup",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDualEnc", "GroupSingleEnc", "UnavailableGroup"],
            [t, n, r],
          );
    }
    function vt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "expiration",
        0,
        2147483647,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ expiration: n.value })
        : n;
    }
    function St(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrGroupJid(n.value, "group_invite");
      return r.success
        ? o("WAResultOrError").makeResult({ metaGroupInvite: r.value })
        : r;
    }
    function Rt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Xt(e);
      if (!n.success) return n;
      var r = sn(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentSingleMixins: n.value,
            groupMessageTypes: r.value,
          })
        : r;
    }
    function Lt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "edit",
        "1",
      );
      return n.success ? o("WAResultOrError").makeResult({ edit: n.value }) : n;
    }
    function Et(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "edit",
        "2",
      );
      return n.success ? o("WAResultOrError").makeResult({ edit: n.value }) : n;
    }
    function kt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "key");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "scheduled_message",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "st",
        1577865600,
        4102473600,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "rkid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 32, 32);
      return s.success
        ? o("WAResultOrError").makeResult({
            metaType: a.value,
            metaSt: i.value,
            metaKeyRkid: l.value,
            metaKeyElementValue: s.value,
          })
        : s;
    }
    function It(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_flow");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mixed_metadata");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "payments_metadata",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(r.value, "version", 1, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            mixedMetadataPaymentsMetadataVersion: a.value,
          })
        : a;
    }
    function Tt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "recipient_display_name");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientDisplayName: n.value })
        : n;
    }
    function Dt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "recipient_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientLid: n.value })
        : n;
    }
    function xt(e) {
      var t = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: t.value,
        });
      var n = Gt(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastRegular",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "BroadcastRegular"],
            [t, n],
          );
    }
    function $t(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "biz_source",
        o("WASmaxInMessageDeliverEnums").ENUM_SMBMM_SMBPROMO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaBizSource: r.value })
        : r;
    }
    function Pt(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = tn(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypePollVote",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMediaSingle",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollVote",
            ],
            [t, n, r, a, i],
          );
    }
    function Nt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Mt(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            statusDualEncStatusDualEncNonMediaOrStatusDualEncMediaMediaMixinGroup:
              n.value,
          })
        : n;
    }
    function Mt(e) {
      var t = Cn(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusDualEncNonMedia",
          value: t.value,
        });
      var n = hn(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusDualEncMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusDualEncNonMedia", "StatusDualEncMedia"],
            [t, n],
          );
    }
    function wt(e) {
      var t = bn(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ThreadTypeTagEnum",
          value: t.value,
        });
      var n = At(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ThreadTypeTagLegacy",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ThreadTypeTagEnum", "ThreadTypeTagLegacy"],
            [t, n],
          );
    }
    function At(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "thread_type");
      return n.success
        ? o("WAResultOrError").makeResult({ threadType: n.value })
        : n;
    }
    function Ft(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Wt(e);
      if (!n.success) return n;
      var r = $n(e),
        a = o(
          "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
        ).parseContentTypeTextOrMediaMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              broadcastParticipantsMixin: r.success ? r.value : null,
              contentTypeTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    function Ot(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Wt(e);
      if (!n.success) return n;
      var r = Pn(e),
        a = Qt(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              hasBypassedMixin: r.success,
              contentGroupUnavailableMixins: a.value,
            }),
          )
        : a;
    }
    function Bt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = jt(e),
        r = Wt(e);
      if (!r.success) return r;
      var a = rn(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { businessBotMessageMixin: n.success ? n.value : null },
              r.value,
              { contentUnavailableMixins: a.value },
            ),
          )
        : a;
    }
    function Wt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "unavailable");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_HOSTED_SENDERDROP_VIEWONCE,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "hosted",
        "true",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").countChildrenWithTag(
        e,
        "enc",
        0,
        1 / 0,
        o("WAResultOrError").makeResult,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            unavailableType: r.value,
            unavailableHosted: a.value,
            countEnc: i.value,
          })
        : i;
    }
    function qt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e),
        a = jt(e),
        i = zt(e),
        l = vn(e),
        s = mn(e);
      if (!s.success) return s;
      var u = Kt(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            revokeMixin: r.success ? r.value : null,
            businessBotMessageMixin: a.success ? a.value : null,
            businessBotMessageFeedbackRequestedMixin: i.success
              ? i.value
              : null,
            aCPMetaAttributeMixin: l.success ? l.value : null,
            retryOrIndividualRegularOrBotResponseMessageMixinGroup: s.value,
            contentAvailableMixins: u.value,
          })
        : u;
    }
    function Ut(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "client_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ clientThreadId: n.value })
        : n;
    }
    function Vt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!r.success) return r;
      var a = Rn(n.value);
      if (!a.success) return a;
      var i = Zn(r.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: a.value,
            metaMessageTargetMixin: i.value,
          })
        : i;
    }
    function Ht(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = $n(e),
        r = Ln(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            broadcastParticipantsMixin: n.success ? n.value : null,
            broadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup:
              r.value,
          })
        : r;
    }
    function Gt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = $n(e),
        a = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      if (!a.success) return a;
      var i = an(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            broadcastParticipantsMixin: r.success ? r.value : null,
            encEncVersion: a.value,
            encEncTypeIndividualOrSenderKeyMixinGroup: i.value,
          })
        : i;
    }
    function zt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "feedback_requested",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ botFeedbackRequested: r.value })
        : r;
    }
    function jt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "biz_bot",
        o("WASmaxInMessageDeliverEnums").ENUM_1_3,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "edit",
        o("WASmaxInMessageDeliverEnums").ENUM_FIRST_FULL_INNER_LAST,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            botBizBot: r.value,
            botEdit: a.value,
          })
        : a;
    }
    function Kt(e) {
      var t = Yt(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeListDeprecated",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: n.value,
        });
      var r = Jt(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeList",
          value: r.value,
        });
      var a = Zt(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeLiveLocationSingle",
          value: a.value,
        });
      var i = tn(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: i.value,
        });
      var l = Nn(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayIndividual",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: u.value,
        });
      var c = fr(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: d.value,
        });
      var m = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: m.value,
        });
      var p = _r(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: p.value,
        });
      var _ = dr(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedianotify",
          value: _.value,
        });
      var f = ur(e);
      return f.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: f.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeListDeprecated",
              "ContentTypeText",
              "ContentTypeList",
              "ContentTypeLiveLocationSingle",
              "ContentTypeMediaSingle",
              "ContentTypePayIndividual",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeMedianotify",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _, f],
          );
    }
    function Qt(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: n.value,
        });
      var r = dr(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedianotify",
          value: r.value,
        });
      var a = pr(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePay",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: l.value,
        });
      var s = fr(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: c.value,
        });
      var d = _r(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: d.value,
        });
      var m = ur(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypeMedianotify",
              "ContentTypePay",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    function Xt(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = Zt(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeLiveLocationSingle",
          value: n.value,
        });
      var r = tn(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMediaSingle",
          value: r.value,
        });
      var a = mr(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayGroup",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: i.value,
        });
      var l = nn(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeProductList",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: s.value,
        });
      var u = fr(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: u.value,
        });
      var c = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: c.value,
        });
      var d = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: d.value,
        });
      var m = _r(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: m.value,
        });
      var p = ur(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: p.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeLiveLocationSingle",
              "ContentTypeMediaSingle",
              "ContentTypePayGroup",
              "ContentTypeReaction",
              "ContentTypeProductList",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    function Yt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(
          n.value,
        ),
        a = o(
          "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
        ).parseContentTypeTextOrMediaMixinGroup(e);
      if (!a.success) return a;
      var i = pn(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            encEncListMixin: r.success ? r.value : null,
            contentTypeTextOrMediaMixinGroup: a.value,
            singleSelectListOrProductListDeprecatedOrProductListMixinGroup:
              i.value,
          })
        : i;
    }
    function Jt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(
        n.value,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!a.success) return a;
      var i = _n(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ encEncListMixin: r.value }, a.value, {
          singleSelectOrProductListMixinGroup: i.success ? i.value : null,
        }),
      );
    }
    function Zt(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!r.success) return r;
      var a = Jn(e),
        i = on(n.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              liveLocationModeMixin: a.success ? a.value : null,
              encEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    function en(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function tn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "rcat", en);
      if (!r.success) return r;
      var a = wr(n.value),
        i = cr(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            encEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup:
              a.success ? a.value : null,
            contentTypeMediaOrMedianotifyMixinGroup: i.value,
            rcat: r.value,
          })
        : i;
    }
    function nn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(
        n.value,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!a.success) return a;
      var i = rr(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encEncListMixin: r.value },
              a.value,
              i.value,
            ),
          )
        : i;
    }
    function rn(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: n.value,
        });
      var r = Nn(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayIndividual",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: i.value,
        });
      var l = fr(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: s.value,
        });
      var u = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: u.value,
        });
      var c = _r(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: c.value,
        });
      var d = ur(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypePayIndividual",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    function on(e) {
      var t = Eo(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncLiveLocation",
          value: t.value,
        });
      var n = An(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncLiveLocationDeprecated",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncLiveLocation", "EncLiveLocationDeprecated"],
            [t, n],
          );
    }
    function an(e) {
      var t = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeIndividual",
          value: t.value,
        });
      var n = Br(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeSenderKey",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeIndividual", "EncTypeSenderKey"],
            [t, n],
          );
    }
    function ln(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Un(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            groupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup:
              n.value,
          })
        : n;
    }
    function sn(e) {
      var t = cn(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupRetry",
          value: t.value,
        });
      var n = Sn(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "BotResponseMessage",
          value: n.value,
        });
      var r = un(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "GroupRegular",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupRetry", "BotResponseMessage", "GroupRegular"],
            [t, n, r],
          );
    }
    function un(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = Cr(n.value),
        a = Xn(e),
        i = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      if (!i.success) return i;
      var l = Fn(n.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            encEncMediaTypeDeprecatedMixin: r.success ? r.value : null,
            groupHistoryBundleReportingReceiveMixin: a.success ? a.value : null,
            encEncVersion: i.value,
            encEncSenderType: l.value,
          })
        : l;
    }
    function cn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (!n.success) return n;
      var r = Pn(e),
        a = dn(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          hasBypassedMixin: r.success,
          liveLocationS516575FixMixin: a.success ? a.value : null,
        }),
      );
    }
    function dn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!n.success) return n;
      var r = Jn(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function mn(e) {
      var t = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverIndividualRegularMixin",
      ).parseIndividualRegularMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualRegular",
          value: n.value,
        });
      var r = Sn(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BotResponseMessage",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "IndividualRegular", "BotResponseMessage"],
            [t, n, r],
          );
    }
    function pn(e) {
      var t = ar(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSelectList",
          value: t.value,
        });
      var n = nr(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ProductListDeprecated",
          value: n.value,
        });
      var r = rr(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSelectList", "ProductListDeprecated", "ProductList"],
            [t, n, r],
          );
    }
    function _n(e) {
      var t = ar(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSelectList",
          value: t.value,
        });
      var n = rr(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ProductList",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSelectList", "ProductList"],
            [t, n],
          );
    }
    function fn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = Wn(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encTypeSenderKeyAndStatusMediaOrIndividualMixinGroup: r.value,
          })
        : r;
    }
    function gn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function hn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "rcat", gn);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, fn);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { rcat: n.value, enc: a.value }),
          )
        : a;
    }
    function yn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = Lr(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encTypeSenderKeyOrOneTimeSenderKeyOrIndividualMixinGroup: r.value,
          })
        : r;
    }
    function Cn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Mn(e);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, yn);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentTypeTextOrReactionOrPollCreationOrPollVoteMixinGroup:
              n.value,
            enc: r.value,
          })
        : r;
    }
    function bn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrInt(e, "thread_type");
      return n.success
        ? o("WAResultOrError").makeResult({ threadType: n.value })
        : n;
    }
    function vn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "acp",
        "2",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaAcp: r.value })
        : r;
    }
    function Sn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!a.success) return a;
      var i = Rn(n.value);
      if (!i.success) return i;
      var l = Zn(r.value);
      if (!l.success) return l;
      var s = On(a.value);
      if (!s.success) return s;
      var u = wn(e),
        c = qn(a.value);
      return c.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: i.value,
            metaMessageTargetMixin: l.value,
            encEncTypeMessageSecretMessageMixin: s.value,
            hasEmptyBizMixin: u.success,
            encEncVersionBot: c.value,
          })
        : c;
    }
    function Rn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "edit_target_id",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "sender_timestamp_ms",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "edit",
        o("WASmaxInMessageDeliverEnums").ENUM_FIRST_FULL_INNER_LAST,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "voice",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            editTargetId: n.value,
            senderTimestampMs: r.value,
            edit: a.value,
            type: i.value,
          })
        : i;
    }
    function Ln(e) {
      var t = In(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastDualEncMedia",
          value: t.value,
        });
      var n = Dn(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastDualEncNonMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BroadcastDualEncMedia", "BroadcastDualEncNonMedia"],
            [t, n],
          );
    }
    function En(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = Bn(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup: r.value,
          })
        : r;
    }
    function kn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function In(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "rcat", kn);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, En);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { rcat: n.value, enc: a.value }),
          )
        : a;
    }
    function Tn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = Fn(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encSenderType: r.value,
          })
        : r;
    }
    function Dn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, Tn);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, { enc: r.value }),
          )
        : r;
    }
    function xn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = ir(e);
      if (!n.success) return n;
      var r = lr(e),
        a = or(e),
        i = o(
          "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
        ).parsePeerRecipientUsernameMixin(e),
        l = er(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          broadcastEphemeralMixin: r.success ? r.value : null,
          recipientLatestLIDMixin: a.success ? a.value : null,
          peerRecipientUsernameMixin: i.success ? i.value : null,
          peerRecipientLIDOrPNMixinGroup: l.success ? l.value : null,
        }),
      );
    }
    function $n(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "participants");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "to",
        0,
        2e3,
        xn,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ participantsTo: r.value })
        : r;
    }
    function Pn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bypassed");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function Nn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = pr(e);
      if (!n.success) return n;
      var r = Yn(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          individualDeliverPayNodeOrPayTransactionMessageMixinGroup: r.success
            ? r.value
            : null,
        }),
      );
    }
    function Mn(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypePollVote",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollVote",
            ],
            [t, n, r, a],
          );
    }
    function wn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function An(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "livelocation",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "duration",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            mediatype: n.value,
            duration: r.value,
          })
        : r;
    }
    function Fn(e) {
      var t = Br(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKey",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeSenderKey", "EncTypeIndividual"],
            [t, n],
          );
    }
    function On(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "msmsg",
      );
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncPayloadMixin").parseEncPayloadMixin(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value }, r.value),
          )
        : r;
    }
    function Bn(e) {
      var t = vr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyAndBroadcastMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeSenderKeyAndBroadcastMedia", "EncTypeIndividual"],
            [t, n],
          );
    }
    function Wn(e) {
      var t = Rr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyAndStatusMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeSenderKeyAndStatusMedia", "EncTypeIndividual"],
            [t, n],
          );
    }
    function qn(e) {
      var t = o("WASmaxInMessageDeliverEncVersion2Mixin").parseEncVersion2Mixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncVersion2",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncVersionFutureproofMixin",
      ).parseEncVersionFutureproofMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncVersionFutureproof",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncVersion2", "EncVersionFutureproof"],
            [t, n],
          );
    }
    function Un(e) {
      var t = Gn(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDualEncMedia",
          value: t.value,
        });
      var n = jn(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupDualEncNonMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDualEncMedia", "GroupDualEncNonMedia"],
            [t, n],
          );
    }
    function Vn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = br(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encSenderIndividualTypes: r.value,
          })
        : r;
    }
    function Hn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function Gn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "rcat", Hn);
      if (!n.success) return n;
      var r = Qn(e),
        a = cr(e);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, Vn);
      return i.success
        ? o("WAResultOrError").makeResult({
            groupHistoryBundleReportingDualEncReceiveMixin: r.success
              ? r.value
              : null,
            contentTypeMediaOrMedianotifyMixinGroup: a.value,
            rcat: n.value,
            enc: i.value,
          })
        : i;
    }
    function zn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = Cr(e),
        r = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!r.success) return r;
      var a = Lr(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            encMediaTypeDeprecatedMixin: n.success ? n.value : null,
            encVersion: r.value,
            encTypeSenderKeyOrOneTimeSenderKeyOrIndividualMixinGroup: a.value,
          })
        : a;
    }
    function jn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = sr(e);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, zn);
      return r.success
        ? o("WAResultOrError").makeResult({
            contentDualMixins: n.value,
            enc: r.value,
          })
        : r;
    }
    function Kn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = yr(e);
      return (n.success, n);
    }
    function Qn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Tr(e);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "enc", 2, 2, Kn);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, { enc: r.value }),
          )
        : r;
    }
    function Xn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = yr(n.value);
      if (!r.success) return r;
      var a = Tr(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ encEncGroupHistoryMixin: r.value }, a.value),
          )
        : a;
    }
    function Yn(e) {
      var t = Dr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualDeliverPayNodeMessage",
          value: t.value,
        });
      var n = $r(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PayTransactionMessage",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IndividualDeliverPayNodeMessage", "PayTransactionMessage"],
            [t, n],
          );
    }
    function Jn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "liveloc_mode",
        o("WASmaxInMessageDeliverEnums").ENUM_LID_PN,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaLivelocMode: r.value })
        : r;
    }
    function Zn(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "target_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "target_sender_jid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "target_chat_jid",
        o("WASmaxInMessageDeliverEnums").USERJID_GROUPJID_USERJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "target_chat_jid_lid",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "from",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            targetId: n.value,
            targetSenderJid: r.value,
            targetChatJid: a.value,
            targetChatJidLid: i.value,
            from: l.value,
          })
        : l;
    }
    function er(e) {
      var t = Pr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PeerRecipientLID",
          value: t.value,
        });
      var n = tr(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PeerRecipientPN",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRecipientLID", "PeerRecipientPN"],
            [t, n],
          );
    }
    function tr(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "peer_recipient_pn");
      return t.success
        ? o("WAResultOrError").makeResult({ peerRecipientPn: t.value })
        : t;
    }
    function nr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "product_list",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "v",
        o("WASmaxInMessageDeliverEnums").ENUM_1_2,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizListType: a.value,
            bizListV: i.value,
          })
        : i;
    }
    function rr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "product_list",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "v",
        o("WASmaxInMessageDeliverEnums").ENUM_1_2,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizListType: a.value,
            bizListV: i.value,
          })
        : i;
    }
    function or(e) {
      var t = o("WASmaxParseJid").attrLidUserJid(e, "recipient_latest_lid");
      return t.success
        ? o("WAResultOrError").makeResult({ recipientLatestLid: t.value })
        : t;
    }
    function ar(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "single_select",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "v",
        o("WASmaxInMessageDeliverEnums").ENUM_1_2,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizListType: a.value,
            bizListV: i.value,
          })
        : i;
    }
    function ir(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function lr(e) {
      var t = o("WASmaxParseUtils").attrString(e, "eph_setting");
      return t.success
        ? o("WAResultOrError").makeResult({ ephSetting: t.value })
        : t;
    }
    function sr(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: t.value,
        });
      var n = mr(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePayGroup",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeReaction",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: a.value,
        });
      var i = fr(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollEdit",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollVote",
          value: l.value,
        });
      var s = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollResultSnapshot",
          value: s.value,
        });
      var u = _r(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollAddOption",
          value: u.value,
        });
      var c = ur(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeEvent",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContentTypeText",
              "ContentTypePayGroup",
              "ContentTypeReaction",
              "ContentTypePollCreation",
              "ContentTypePollEdit",
              "ContentTypePollVote",
              "ContentTypePollResultSnapshot",
              "ContentTypePollAddOption",
              "ContentTypeEvent",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    function ur(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "event",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "event_type",
        o("WASmaxInMessageDeliverEnums").ENUM_CREATION_EDIT_RESPONSE,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaEventType: a.value,
          })
        : a;
    }
    function cr(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: t.value,
        });
      var n = dr(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeMedianotify",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ContentTypeMedia", "ContentTypeMedianotify"],
            [t, n],
          );
    }
    function dr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "medianotify",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function mr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = pr(e);
      if (!n.success) return n;
      var r = kr(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          groupDeliverPayNodeOrPayTransactionMessageMixinGroup: r.success
            ? r.value
            : null,
        }),
      );
    }
    function pr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "pay",
      );
      if (!n.success) return n;
      var r = hr(e);
      return o("WAResultOrError").makeResult({
        type: n.value,
        deprecatedPayTypeMixin: r.success ? r.value : null,
      });
    }
    function _r(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "poll",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "polltype",
        "add_option",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "message_association_type",
        "poll_add_option",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaPolltype: a.value,
            metaMessageAssociationType: i.value,
          })
        : i;
    }
    function fr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "poll",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "polltype",
        "edit",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaPolltype: a.value,
          })
        : a;
    }
    function gr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "pay",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function hr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapHomogeneousChildrenWithTag(e, "enc", gr);
      return n.success ? o("WAResultOrError").makeResult({ enc: n.value }) : n;
    }
    function yr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "group_history",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function Cr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "mediatype",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_AUDIO_AVATARSTICKER_BUTTONSRESPONSE_CATALOGLINK_CONTACT_CONTACTARRAY_DOCUMENT_FEEDRESHARE_GIF_HISTORY_IMAGE_LISTRESPONSE_LOCATION_NATIVEFLOWRESPONSE_ORDER_PRODUCT_PRODUCTLINK_PTT_PTV_STICKER_STORYREPLY_URL_VCARD_VIDEO_XMA,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "native_flow_name",
        o("WASmaxInMessageDeliverEnums").ENUM_ADDRESSMESSAGE_GALAXYMESSAGE,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverAvatarStickerTypeMixin",
      ).parseAvatarStickerTypeMixin(e);
      return o("WAResultOrError").makeResult({
        mediatype: n.value,
        nativeFlowName: r.value,
        avatarStickerTypeMixin: a.success ? a.value : null,
      });
    }
    function br(e) {
      var t = Sr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyAndGroupMedia",
          value: t.value,
        });
      var n = Er(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyWithoutMediatype",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "EncTypeSenderKeyAndGroupMedia",
              "EncTypeSenderKeyWithoutMediatype",
              "EncTypeIndividual",
            ],
            [t, n, r],
          );
    }
    function vr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = Br(e);
      if (!n.success) return n;
      var r = wr(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              encMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup:
                r.value,
            }),
          )
        : r;
    }
    function Sr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = Fr(e);
      if (!n.success) return n;
      var r = Mr(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup:
              n.value,
            encLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup:
              r.value,
          })
        : r;
    }
    function Rr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = Fr(e);
      if (!n.success) return n;
      var r = wr(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup:
              n.value,
            encMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup:
              r.value,
          })
        : r;
    }
    function Lr(e) {
      var t = Br(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKey",
          value: t.value,
        });
      var n = Or(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeOneTimeSenderKey",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "EncTypeSenderKey",
              "EncTypeOneTimeSenderKey",
              "EncTypeIndividual",
            ],
            [t, n, r],
          );
    }
    function Er(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
      ).parseEncHideDecryptionPlaceholderMixin(e);
      if (!n.success) return n;
      var r = Fr(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup:
                r.value,
            }),
          )
        : r;
    }
    function kr(e) {
      var t = Wr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDeliverPayNodeMessage",
          value: t.value,
        });
      var n = $r(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PayTransactionMessage",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDeliverPayNodeMessage", "PayTransactionMessage"],
            [t, n],
          );
    }
    function Ir(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverReportingTagElementMixin",
      ).parseReportingTagElementMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverReportingTokenElementMixin",
      ).parseReportingTokenElementMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ id: n.value }, r.value, {
          reportingTokenElementMixin: a.success ? a.value : null,
        }),
      );
    }
    function Tr(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
        ).parseClientReportingTokenValidationPolicyMixin(t.value),
        r = o("WASmaxParseUtils").mapChildrenWithTag(
          t.value,
          "message",
          0,
          1 / 0,
          Ir,
        );
      return r.success
        ? o("WAResultOrError").makeResult({
            reportingClientReportingTokenValidationPolicyMixin: n.success
              ? n.value
              : null,
            reportingMessage: r.value,
          })
        : r;
    }
    function Dr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pay");
      if (!n.success) return n;
      var r = xr(n.value);
      return (r.success, r);
    }
    function xr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = zr(e),
        r = jr(e),
        a = Nr(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            individualRequestPayNodeMixin: n.success ? n.value : null,
            legacyAmountMixin: r.success ? r.value : null,
            bRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup:
              a.value,
          })
        : a;
    }
    function $r(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "transaction");
      if (!n.success) return n;
      var r = Kr(n.value);
      return (r.success, r);
    }
    function Pr(e) {
      var t = o("WASmaxParseJid").attrLidUserJid(e, "peer_recipient_lid");
      return t.success
        ? o("WAResultOrError").makeResult({ peerRecipientLid: t.value })
        : t;
    }
    function Nr(e) {
      var t = ta(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BRMessageDeliverSendNode",
          value: t.value,
        });
      var n = Qo(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "UPIMessageDeliverSendPayNode",
          value: n.value,
        });
      var r = ho(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "XBMessageDeliverSendNode",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BRMessageDeliverSendNode",
              "UPIMessageDeliverSendPayNode",
              "XBMessageDeliverSendNode",
            ],
            [t, n, r],
          );
    }
    function Mr(e) {
      var t = Eo(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncLiveLocation",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncList",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncMediaTypeMixin",
      ).parseEncMediaTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "EncMediaType",
          value: r.value,
        });
      var a = Ar(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "EncMediaTypeFutureproof",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "EncLiveLocation",
              "EncList",
              "EncMediaType",
              "EncMediaTypeFutureproof",
            ],
            [t, n, r, a],
          );
    }
    function wr(e) {
      var t = o(
        "WASmaxInMessageDeliverEncMediaTypeMixin",
      ).parseEncMediaTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncMediaType",
          value: t.value,
        });
      var n = Ar(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncMediaTypeFutureproof",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncMediaType", "EncMediaTypeFutureproof"],
            [t, n],
          );
    }
    function Ar(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "mediatype");
      return n.success
        ? o("WAResultOrError").makeResult({ mediatype: n.value })
        : n;
    }
    function Fr(e) {
      var t = Br(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKey",
          value: t.value,
        });
      var n = Or(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeOneTimeSenderKey",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeSenderKey", "EncTypeOneTimeSenderKey"],
            [t, n],
          );
    }
    function Or(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "otsk",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 0, 1048576);
      if (!r.success) return r;
      var a = o(
          "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
        ).parseEncHideDecryptionPlaceholderMixin(e),
        i = ko(e);
      return o("WAResultOrError").makeResult({
        type: n.value,
        elementValue: r.value,
        encHideDecryptionPlaceholderMixin: a.success ? a.value : null,
        encSenderKeyBucketMixin: i.success ? i.value : null,
      });
    }
    function Br(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "skmsg",
      );
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverEncHideDecryptionPlaceholderMixin",
        ).parseEncHideDecryptionPlaceholderMixin(e),
        a = ko(e),
        i = o("WASmaxInMessageDeliverEncPayloadMixin").parseEncPayloadMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: n.value,
                encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
                encSenderKeyBucketMixin: a.success ? a.value : null,
              },
              i.value,
            ),
          )
        : i;
    }
    function Wr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pay");
      if (!n.success) return n;
      var r = qr(n.value);
      return (r.success, r);
    }
    function qr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = Ur(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            groupDeliverSendOrRequestPayNodeMixinGroup: n.value,
          })
        : n;
    }
    function Ur(e) {
      var t = Hr(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDeliverSendPayNode",
          value: t.value,
        });
      var n = Gr(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupRequestPayNode",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDeliverSendPayNode", "GroupRequestPayNode"],
            [t, n],
          );
    }
    function Vr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function Hr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "amount", Vr);
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "receiver");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "sender",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!s.success) return s;
      var u = ra(e);
      if (!u.success) return u;
      var c = Sa(e),
        d = jr(e),
        m = ha(e),
        p = vo(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            receiver: r.value,
            sender: a.value,
            transactionId: i.value,
            id: l.value,
            group: s.value,
          },
          u.value,
          {
            transactionSyncStatusMixin: c.success ? c.value : null,
            legacyAmountMixin: d.success ? d.value : null,
            orderMetadataMixin: m.success ? m.value : null,
            bRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup:
              p.success ? p.value : null,
            amount: n.value,
          },
        ),
      );
    }
    function Gr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "receiver",
      );
      if (!r.success) return r;
      var a = zr(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { group: n.value, receiver: r.value },
              a.value,
            ),
          )
        : a;
    }
    function zr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "sender",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "expiry-ts");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "request-id");
      if (!a.success) return a;
      var i = ra(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { sender: n.value, expiryTs: r.value, requestId: a.value },
              i.value,
            ),
          )
        : i;
    }
    function jr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "currency");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "amount");
      return r.success
        ? o("WAResultOrError").makeResult({
            currency: n.value,
            amount: r.value,
          })
        : r;
    }
    function Kr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = Qr(e);
      return n.success
        ? o("WAResultOrError").makeResult({ payTransactions: n.value })
        : n;
    }
    function Qr(e) {
      var t = eo(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "UPITransaction",
          value: t.value,
        });
      var n = wo(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MXTransaction",
          value: n.value,
        });
      var r = No(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransaction",
          value: r.value,
        });
      var a = So(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "BRTransaction",
          value: a.value,
        });
      var i = Zr(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "UPIPartialTransaction",
          value: i.value,
        });
      var l = Lo(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "CAPITransaction",
          value: l.value,
        });
      var s = bo(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "XBTransaction",
          value: s.value,
        });
      var u = Po(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "FailedTransaction",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "UPITransaction",
              "MXTransaction",
              "IDTransaction",
              "BRTransaction",
              "UPIPartialTransaction",
              "CAPITransaction",
              "XBTransaction",
              "FailedTransaction",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    function Xr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = Zo(e);
      return (n.success, n);
    }
    function Yr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = Wo(e);
      return (n.success, n);
    }
    function Jr(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = qo(e);
      return (n.success, n);
    }
    function Zr(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "mandate", Xr);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "complaint", Yr);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "international-transaction-detail",
        Jr,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "sender",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "receiver",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrIntRange(
        e,
        "ts",
        1577865600,
        4102473600,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrString(e, "status");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        "message-id",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrIntRange(e, "counter", 0, void 0);
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-mandate",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "split_id",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrStringEnum(
        e,
        "sync-status",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_FULL_MISSINGFIELDNOTPARTIAL_PARTIAL,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "version",
        "2",
      );
      return h.success
        ? o("WAResultOrError").makeResult({
            id: i.value,
            sender: l.value,
            receiver: s.value,
            group: u.value,
            ts: c.value,
            status: d.value,
            messageId: m.value,
            counter: p.value,
            isMandate: _.value,
            splitId: f.value,
            syncStatus: g.value,
            version: h.value,
            mandate: n.value,
            complaint: r.value,
            internationalTransactionDetail: a.value,
          })
        : h;
    }
    function eo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = la(e);
      if (!n.success) return n;
      var r = ro(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function to(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = Wo(e);
      return (n.success, n);
    }
    function no(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = qo(e);
      return (n.success, n);
    }
    function ro(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "complaint", to);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "international-transaction-detail",
        no,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-alias",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-alias",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-name",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-transaction-id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "seq-no",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is_vpa",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "ref-url",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mcc",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "initiation-mode",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_send_again_enabled",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_amount_fixed",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-mandate",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-collect",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrStringEnum(
        e,
        "nodal",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-complaint-eligible",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!C.success) return C;
      var b = _o(e),
        v = po(e);
      return o("WAResultOrError").makeResult({
        senderAlias: a.value,
        receiverAlias: i.value,
        receiverName: l.value,
        bankTransactionId: s.value,
        seqNo: u.value,
        isVpa: c.value,
        refUrl: d.value,
        mcc: m.value,
        initiationMode: p.value,
        isSendAgainEnabled: _.value,
        isAmountFixed: f.value,
        isMandate: g.value,
        isCollect: h.value,
        nodal: y.value,
        isComplaintEligible: C.value,
        uPITransactionWithMandateMixin: b.success ? b.value : null,
        uPITransactionProtocolP2PMixin: v.success ? v.value : null,
        complaint: n.value,
        internationalTransactionDetail: r.value,
      });
    }
    function oo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function ao(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "external_payment_method");
      if (!t.success) return t;
      var n = Fo(e);
      return (n.success, n);
    }
    function io(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function lo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fee");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function so(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "gst");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function uo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount_modifiers");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "fee", lo);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "gst", so);
      return r.success
        ? o("WAResultOrError").makeResult({ fee: n.value, gst: r.value })
        : r;
    }
    function co(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bill_metadata");
      if (!t.success) return t;
      var n = Ro(e);
      return (n.success, n);
    }
    function mo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payment_link");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "order_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "message_id");
      return r.success
        ? o("WAResultOrError").makeResult({
            orderId: n.value,
            messageId: r.value,
          })
        : r;
    }
    function po(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "external_payment_method",
        ao,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_amount", io);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "amount_modifiers",
        uo,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "bill_metadata",
        co,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "payment_link", mo);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-tpap-name",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "lite_purpose",
        o("WASmaxInMessageDeliverEnums").ENUM_DEREGISTER_INITTOPUP_PAY_TOPUP,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction_referral",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "split_id",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "payment_instrument_type",
        o("WASmaxInMessageDeliverEnums").ENUM_HPPPAYMENTLINK_UPI,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_p2m_hybrid",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "psp_transaction_id",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider-type",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_interop",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "incentive-rewards-reserved",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "original-transaction-id",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").mapChildrenWithTag(e, "offer", 0, 255, oo);
      return C.success
        ? o("WAResultOrError").makeResult({
            receiverTpapName: s.value,
            litePurpose: u.value,
            transactionReferral: c.value,
            splitId: d.value,
            paymentInstrumentType: m.value,
            isP2mHybrid: p.value,
            pspTransactionId: _.value,
            providerType: f.value,
            isInterop: g.value,
            incentiveRewardsReserved: h.value,
            originalTransactionId: y.value,
            externalPaymentMethod: n.value,
            offerAmount: r.value,
            amountModifiers: a.value,
            billMetadata: i.value,
            paymentLink: l.value,
            offer: C.value,
          })
        : C;
    }
    function _o(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mandate");
      if (!n.success) return n;
      var r = Go(n.value);
      if (!r.success) return r;
      var a = zo(n.value);
      return o("WAResultOrError").makeResult({
        mandateUPIMandateBaseMixin: r.value,
        mandateUPIMandateWithUpdateMixin: a.success ? a.value : null,
      });
    }
    function fo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sender_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function go(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receiver_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function ho(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "sender_amount",
        fo,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "receiver_amount",
        go,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2P_REMITTANCE,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner_name",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider_type",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner_display_name",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender_name",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver_name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver_country",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner-transaction-id",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "tracking-url",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender_tracking_url",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-created-timestamp",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-updated-timestamp",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-estimated-delivery-timestamp",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-estimated-delivery-date",
      );
      return v.success
        ? o("WAResultOrError").makeResult({
            transactionId: a.value,
            country: i.value,
            transactionType: l.value,
            status: s.value,
            partnerName: u.value,
            providerType: c.value,
            partnerDisplayName: d.value,
            senderName: m.value,
            receiverName: p.value,
            receiverCountry: _.value,
            partnerTransactionId: f.value,
            trackingUrl: g.value,
            senderTrackingUrl: h.value,
            transactionCreatedTimestamp: y.value,
            transactionUpdatedTimestamp: C.value,
            transactionEstimatedDeliveryTimestamp: b.value,
            transactionEstimatedDeliveryDate: v.value,
            senderAmount: n.value,
            receiverAmount: r.value,
          })
        : v;
    }
    function yo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sender_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function Co(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receiver_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function bo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "sender_amount",
        yo,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "receiver_amount",
        Co,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "transaction_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-type",
        "remittance",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner_name",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider_type",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner_display_name",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender_name",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver_name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver_country",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "send",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "partner-transaction-id",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "tracking-url",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender_tracking_url",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-created-timestamp",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-updated-timestamp",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-estimated-delivery-timestamp",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction-estimated-delivery-date",
      );
      return S.success
        ? o("WAResultOrError").makeResult({
            transactionId: a.value,
            transactionType: i.value,
            country: l.value,
            status: s.value,
            partnerName: u.value,
            providerType: c.value,
            partnerDisplayName: d.value,
            senderName: m.value,
            receiverName: p.value,
            receiverCountry: _.value,
            type: f.value,
            partnerTransactionId: g.value,
            trackingUrl: h.value,
            senderTrackingUrl: y.value,
            transactionCreatedTimestamp: C.value,
            transactionUpdatedTimestamp: b.value,
            transactionEstimatedDeliveryTimestamp: v.value,
            transactionEstimatedDeliveryDate: S.value,
            senderAmount: n.value,
            receiverAmount: r.value,
          })
        : S;
    }
    function vo(e) {
      var t = ta(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BRMessageDeliverSendNode",
          value: t.value,
        });
      var n = Qo(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UPIMessageDeliverSendPayNode",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BRMessageDeliverSendNode", "UPIMessageDeliverSendPayNode"],
            [t, n],
          );
    }
    function So(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = la(e);
      if (!n.success) return n;
      var r = Bo(e);
      if (!r.success) return r;
      var a = na(e),
        i = Oo(e),
        l = Ca(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          bRP2MHPPTransactionMixin: a.success ? a.value : null,
          p2MTransactionProtocolMixin: i.success ? i.value : null,
          paymentInitiatorMixin: l.success ? l.value : null,
        }),
      );
    }
    function Ro(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bill_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "biller_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "bill_status",
        o("WASmaxInMessageDeliverEnums").ENUM_FAILED_PENDING_SUCCESS,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bill_ref_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "biller_name");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "biller_image",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bill_ref_number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "txn_ref_id",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error_code",
        1,
        1e7,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "refund_state",
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            billerId: n.value,
            billStatus: r.value,
            billRefId: a.value,
            billerName: i.value,
            billerImage: l.value,
            billRefNumber: s.value,
            txnRefId: u.value,
            errorCode: c.value,
            refundState: d.value,
          })
        : d;
    }
    function Lo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "sender");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(e, "receiver");
      return a.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            sender: r.value,
            receiver: a.value,
          })
        : a;
    }
    function Eo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "livelocation",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "duration", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({
            mediatype: n.value,
            duration: r.value,
          })
        : r;
    }
    function ko(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bucket");
      return n.success
        ? o("WAResultOrError").makeResult({ bucket: n.value })
        : n;
    }
    function Io(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_claim");
      if (!t.success) return t;
      var n = da(e);
      return (n.success, n);
    }
    function To(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function Do(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = Wo(e);
      return (n.success, n);
    }
    function xo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = Go(e);
      if (!n.success) return n;
      var r = zo(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          uPIMandateWithUpdateMixin: r.success ? r.value : null,
        }),
      );
    }
    function $o(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = qo(e);
      return (n.success, n);
    }
    function Po(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_claim", Io);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "amount", To);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "complaint", Do);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(e, "mandate", xo);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "international-transaction-detail",
        $o,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_AUTHCANCELFAILED_AUTHCANCELFAILEDPROCESSING_COLLECTEXPIRED_COLLECTFAILED_COLLECTFAILEDRISK_COLLECTREJECTED_EXPIRED_FAILED_FAILEDDA_FAILEDDAFINAL_FAILEDPROCESSING_FAILEDRECEIVERPROCESSING_FAILEDRISK_FAILURE_REFUNDFAILED_REFUNDFAILEDDA_REFUNDFAILEDPROCESSING,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "sender",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-alias",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-name",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "receiver",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "currency",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "amount",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "credential-id",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "ts",
        1577865600,
        4102473600,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "created-ts",
        0,
        void 0,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        "message-id",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "counter",
        0,
        300,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "expiry-ts",
        0,
        void 0,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "service",
        o("WASmaxInMessageDeliverEnums").ENUM_FBPAY_UPI,
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "merchant-name",
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "note",
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "reference-id",
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "error-text",
      );
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-alias",
      );
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bank-transaction-id",
      );
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "seq-no",
      );
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_vpa",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!M.success) return M;
      var w = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "ref-url",
      );
      if (!w.success) return w;
      var A = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mcc",
      );
      if (!A.success) return A;
      var F = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_send_again_enabled",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!F.success) return F;
      var O = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_amount_fixed",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!O.success) return O;
      var B = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-mandate",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!B.success) return B;
      var W = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-collect",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!W.success) return W;
      var q = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "nodal",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!q.success) return q;
      var U = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is-complaint-eligible",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!U.success) return U;
      var V = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-tpap-name",
      );
      if (!V.success) return V;
      var H = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "lite_purpose",
        o("WASmaxInMessageDeliverEnums").ENUM_DEREGISTER_INITTOPUP_PAY_TOPUP,
      );
      if (!H.success) return H;
      var G = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction_referral",
      );
      if (!G.success) return G;
      var z = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "split_id",
      );
      if (!z.success) return z;
      var j = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "payment_instrument_type",
        o("WASmaxInMessageDeliverEnums").ENUM_HPPPAYMENTLINK_UPI,
      );
      if (!j.success) return j;
      var K = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_interop",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!K.success) return K;
      var Q = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "incentive-rewards-reserved",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!Q.success) return Q;
      var X = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "original-transaction-id",
      );
      if (!X.success) return X;
      var Y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_p2m_hybrid",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!Y.success) return Y;
      var J = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "psp_transaction_id",
      );
      if (!J.success) return J;
      var Z = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "provider-type",
      );
      if (!Z.success) return Z;
      var ee = Ra(e),
        te = Sa(e),
        ne = Ca(e),
        re = Bo(e);
      return o("WAResultOrError").makeResult({
        status: s.value,
        id: u.value,
        sender: c.value,
        senderAlias: d.value,
        senderName: m.value,
        receiverName: p.value,
        receiver: _.value,
        currency: f.value,
        amount: g.value,
        credentialId: h.value,
        ts: y.value,
        createdTs: C.value,
        messageId: b.value,
        counter: v.value,
        expiryTs: S.value,
        version: R.value,
        group: L.value,
        service: E.value,
        merchantName: k.value,
        note: I.value,
        referenceId: T.value,
        errorCode: D.value,
        errorText: x.value,
        receiverAlias: $.value,
        bankTransactionId: P.value,
        seqNo: N.value,
        isVpa: M.value,
        refUrl: w.value,
        mcc: A.value,
        isSendAgainEnabled: F.value,
        isAmountFixed: O.value,
        isMandate: B.value,
        isCollect: W.value,
        nodal: q.value,
        isComplaintEligible: U.value,
        receiverTpapName: V.value,
        litePurpose: H.value,
        transactionReferral: G.value,
        splitId: z.value,
        paymentInstrumentType: j.value,
        isInterop: K.value,
        incentiveRewardsReserved: Q.value,
        originalTransactionId: X.value,
        isP2mHybrid: Y.value,
        pspTransactionId: J.value,
        providerType: Z.value,
        transactionTypeMixin: ee.success ? ee.value : null,
        transactionSyncStatusMixin: te.success ? te.value : null,
        paymentInitiatorMixin: ne.success ? ne.value : null,
        transactionNUXReceiverMixin: re.success ? re.value : null,
        offerClaim: n.value,
        childAmount: r.value,
        complaint: a.value,
        mandate: i.value,
        internationalTransactionDetail: l.value,
      });
    }
    function No(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = la(e);
      if (!n.success) return n;
      var r = Mo(e);
      if (!r.success) return r;
      var a = Bo(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    function Mo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = sa(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            iDTransactionGoPayOrOttoCashOrOvoMixinGroup: n.value,
          })
        : n;
    }
    function wo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = la(e);
      if (!n.success) return n;
      var r = Ao(e);
      if (!r.success) return r;
      var a = Bo(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    function Ao(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bank-transaction-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "spei-transaction-id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "spei-ref-num", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            bankTransactionId: n.value,
            speiTransactionId: r.value,
            speiRefNum: a.value,
          })
        : a;
    }
    function Fo(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_CARD_EXTERNALWALLET_HPPPAYMENTLINK_NETBANKING_UPI_WALLET,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success
        ? o("WAResultOrError").makeResult({ type: t.value, name: n.value })
        : n;
    }
    function Oo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "psp_transaction_id");
      return n.success
        ? o("WAResultOrError").makeResult({ pspTransactionId: n.value })
        : n;
    }
    function Bo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-nux-receiver",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ isNuxReceiver: n.value })
        : n;
    }
    function Wo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "complaint-status",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "created-ts",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "updated-ts",
        0,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            complaintStatus: n.value,
            createdTs: r.value,
            updatedTs: a.value,
          })
        : a;
    }
    function qo(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "fx-detail");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "invoice-number",
      );
      if (!r.success) return r;
      var a = La(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            invoiceNumber: r.value,
            fxDetailUPIInternationalFxDetailMixin: a.value,
          })
        : a;
    }
    function Uo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ status: n.value, id: r.value })
        : r;
    }
    function Vo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "original-amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function Ho(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pause-resume-status-details");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "pause-start-ts",
        0,
        void 0,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "pause-end-ts",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            pauseStartTs: n.value,
            pauseEndTs: r.value,
            status: a.value,
            action: i.value,
          })
        : i;
    }
    function Go(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "original-amount",
        Vo,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "pause-resume-status-details",
        Ho,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "mandate-no");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "amount-rule",
        o("WASmaxInMessageDeliverEnums").ENUM_EXACT_MAX,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(e, "start-ts", 0, void 0);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(e, "end-ts", 0, void 0);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-revocable",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "purpose-code",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mandate-name",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "original-amount",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "debit-ts",
        0,
        void 0,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "total-expected-txns",
        0,
        void 0,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "recurrence-day",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "next-payment-start-ts",
        0,
        void 0,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "next-payment-end-ts",
        0,
        void 0,
      );
      if (!y.success) return y;
      var C = oa(e),
        b = ba(e),
        v = o("WASmaxParseUtils").mapChildrenWithTag(
          e,
          "transaction",
          0,
          1e4,
          Uo,
        );
      return v.success
        ? o("WAResultOrError").makeResult({
            mandateNo: a.value,
            amountRule: i.value,
            startTs: l.value,
            endTs: s.value,
            isRevocable: u.value,
            purposeCode: c.value,
            mandateName: d.value,
            errorCode: m.value,
            originalAmount: p.value,
            debitTs: _.value,
            totalExpectedTxns: f.value,
            recurrenceDay: g.value,
            nextPaymentStartTs: h.value,
            nextPaymentEndTs: y.value,
            frequencyRuleMixin: C.success ? C.value : null,
            recurrenceRuleMixin: b.success ? b.value : null,
            childOriginalAmount: n.value,
            pauseResumeStatusDetails: r.value,
            transaction: v.value,
          })
        : v;
    }
    function zo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mandate-update");
      if (!n.success) return n;
      var r = Ia(n.value);
      return (r.success, r);
    }
    function jo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "upi_lite_details");
      if (!t.success) return t;
      var n = Ea(e);
      return (n.success, n);
    }
    function Ko(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "upi");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "upi_lite_details",
        jo,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "token",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            token: r.value,
            upiLiteDetails: n.value,
          })
        : r;
    }
    function Qo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "upi", Ko);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_REQUEST_SEND,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_first_send",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mcc",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "ref-id",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "purpose-code",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "credential-id",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "device-id",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "expiry-ts",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mpin",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mode",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "upi_intent",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "nonce",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-vpa",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-vpa-id",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-name",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "payee-name",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "request-id",
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-vpa",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-vpa-id",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-name",
      );
      if (!k.success) return k;
      var I = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "seq-no",
      );
      if (!I.success) return I;
      var T = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "token",
      );
      if (!T.success) return T;
      var D = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "device_ssid",
      );
      if (!D.success) return D;
      var x = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "cl_version",
      );
      if (!x.success) return x;
      var $ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "note",
      );
      if (!$.success) return $;
      var P = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2M_P2P,
      );
      if (!P.success) return P;
      var N = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "upi-bank-info",
      );
      if (!N.success) return N;
      var M = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "split_id",
      );
      if (!M.success) return M;
      var w = Ca(e);
      return o("WAResultOrError").makeResult({
        type: r.value,
        country: a.value,
        version: i.value,
        isFirstSend: l.value,
        id: s.value,
        mcc: u.value,
        refId: c.value,
        purposeCode: d.value,
        credentialId: m.value,
        deviceId: p.value,
        expiryTs: _.value,
        mpin: f.value,
        mode: g.value,
        upiIntent: h.value,
        nonce: y.value,
        receiverVpa: C.value,
        receiverVpaId: b.value,
        receiverName: v.value,
        payeeName: S.value,
        requestId: R.value,
        senderVpa: L.value,
        senderVpaId: E.value,
        senderName: k.value,
        seqNo: I.value,
        token: T.value,
        deviceSsid: D.value,
        clVersion: x.value,
        note: $.value,
        transactionType: P.value,
        upiBankInfo: N.value,
        splitId: M.value,
        paymentInitiatorMixin: w.success ? w.value : null,
        upi: n.value,
      });
    }
    function Xo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ status: n.value, id: r.value })
        : r;
    }
    function Yo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pause-resume-status-details");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "pause-start-ts",
        0,
        void 0,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "pause-end-ts",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            pauseStartTs: n.value,
            pauseEndTs: r.value,
            status: a.value,
            action: i.value,
          })
        : i;
    }
    function Jo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate-update");
      if (!t.success) return t;
      var n = ea(e);
      return (n.success, n);
    }
    function Zo(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "pause-resume-status-details",
        Yo,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "mandate-update",
        Jo,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "mandate-no");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "amount-rule",
        o("WASmaxInMessageDeliverEnums").ENUM_EXACT_MAX,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(e, "start-ts", 0, void 0);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(e, "end-ts", 0, void 0);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-revocable",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "frequency-rule",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ASPRESENTED_BIMONTHLY_DAILY_FORTNIGHTLY_HALFYEARLY_MONTHLY_ONETIME_QUARTERLY_UNKNOWN_WEEKLY_YEARLY,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "recurrence-rule",
        o("WASmaxInMessageDeliverEnums").ENUM_AFTER_BEFORE_ON,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "purpose-code",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "mandate-name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "original-amount",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "debit-ts",
        0,
        void 0,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "total-expected-txns",
        0,
        void 0,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "recurrence-day",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "next-payment-start-ts",
        0,
        void 0,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "next-payment-end-ts",
        0,
        void 0,
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "transaction",
        0,
        1e4,
        Xo,
      );
      return v.success
        ? o("WAResultOrError").makeResult({
            mandateNo: a.value,
            amountRule: i.value,
            startTs: l.value,
            endTs: s.value,
            isRevocable: u.value,
            frequencyRule: c.value,
            recurrenceRule: d.value,
            purposeCode: m.value,
            mandateName: p.value,
            errorCode: _.value,
            originalAmount: f.value,
            debitTs: g.value,
            totalExpectedTxns: h.value,
            recurrenceDay: y.value,
            nextPaymentStartTs: C.value,
            nextPaymentEndTs: b.value,
            pauseResumeStatusDetails: n.value,
            mandateUpdate: r.value,
            transaction: v.value,
          })
        : v;
    }
    function ea(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate-update");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "end-ts",
        0,
        void 0,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "seq-no",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "mandate-update-info");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "status",
        o("WASmaxInMessageDeliverEnums").ENUM_FAILURE_INIT_SUCCESS,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "action",
        o("WASmaxInMessageDeliverEnums").ENUM_ACCEPT_REJECT_UNKNOWN,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "amount",
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            endTs: n.value,
            seqNo: r.value,
            mandateUpdateInfo: a.value,
            status: i.value,
            action: l.value,
            errorCode: s.value,
            amount: u.value,
          })
        : u;
    }
    function ta(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "credential-id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "device-id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "nonce",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2M_P2P,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(e, "trusted-device-info");
      if (!s.success) return s;
      var u = ra(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                credentialId: n.value,
                deviceId: r.value,
                id: a.value,
                nonce: i.value,
                transactionType: l.value,
                trustedDeviceInfo: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    function na(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is_hpp",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "gateway_name",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            isHpp: n.value,
            gatewayName: r.value,
          })
        : r;
    }
    function ra(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_first_send",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!a.success) return a;
      var i = ya(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { country: n.value, version: r.value, isFirstSend: a.value },
              i.value,
            ),
          )
        : i;
    }
    function oa(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "frequency-rule",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ASPRESENTED_BIMONTHLY_DAILY_FORTNIGHTLY_HALFYEARLY_MONTHLY_ONETIME_QUARTERLY_UNKNOWN_WEEKLY_YEARLY,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ frequencyRule: t.value })
        : t;
    }
    function aa(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_claim");
      if (!t.success) return t;
      var n = da(e);
      return (n.success, n);
    }
    function ia(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function la(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "offer_claim", aa);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "amount", ia);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrUserJid(e, "sender");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-alias",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sender-name",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-name",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "receiver",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrString(e, "currency");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(e, "amount");
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "credential-id",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrIntRange(e, "ts", 0, void 0);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "created-ts",
        0,
        void 0,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrString(e, "status");
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        "message-id",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrIntRange(e, "counter", 0, void 0);
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "expiry-ts",
        0,
        void 0,
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        0,
        void 0,
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "group",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "service",
        o("WASmaxInMessageDeliverEnums").ENUM_FBPAY_UPI,
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "merchant-name",
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "note",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "reference-id",
      );
      if (!E.success) return E;
      var k = va(e),
        I = Ra(e);
      if (!I.success) return I;
      var T = Sa(e);
      if (!T.success) return T;
      var D = ga(e),
        x = ha(e),
        $ = _a(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            id: a.value,
            sender: i.value,
            senderAlias: l.value,
            senderName: s.value,
            receiverName: u.value,
            receiver: c.value,
            currency: d.value,
            amount: m.value,
            credentialId: p.value,
            ts: _.value,
            createdTs: f.value,
            status: g.value,
            messageId: h.value,
            counter: y.value,
            expiryTs: C.value,
            version: b.value,
            group: v.value,
            service: S.value,
            merchantName: R.value,
            note: L.value,
            referenceId: E.value,
            transactionErrorMixin: k.success ? k.value : null,
          },
          I.value,
          T.value,
          {
            orderInPaymentMixin: D.success ? D.value : null,
            orderMetadataMixin: x.success ? x.value : null,
            installmentMixin: $.success ? $.value : null,
            offerClaim: n.value,
            childAmount: r.value,
          },
        ),
      );
    }
    function sa(e) {
      var t = $a(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransactionGoPay",
          value: t.value,
        });
      var n = ua(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransactionOttoCash",
          value: n.value,
        });
      var r = ca(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IDTransactionOvo",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IDTransactionGoPay", "IDTransactionOttoCash", "IDTransactionOvo"],
            [t, n, r],
          );
    }
    function ua(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "OTTO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "OTTO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "OttoCash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    function ca(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "OVO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "OVO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "OVO",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    function da(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_claim");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "offer_id", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "id",
        1,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "incentive_payment_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "parent_transaction_id",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            offerId: n.value,
            id: r.value,
            incentivePaymentId: a.value,
            parentTransactionId: i.value,
          })
        : i;
    }
    function ma(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "due_amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function pa(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "interest");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function _a(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "installment");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        t.value,
        "due_amount",
        ma,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t.value,
        "interest",
        pa,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t.value,
        "max_count",
        1,
        50,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        t.value,
        "selected_count",
        1,
        50,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            installmentMaxCount: a.value,
            installmentSelectedCount: i.value,
            installmentDueAmount: n.value,
            installmentInterest: r.value,
          })
        : i;
    }
    function fa(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiaries");
      if (!t.success) return t;
      var n = Da(e);
      return (n.success, n);
    }
    function ga(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "order");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        t.value,
        "beneficiaries",
        fa,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t.value, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        t.value,
        "message_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "payment_config_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "type",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            orderId: r.value,
            orderMessageId: a.value,
            orderPaymentConfigId: i.value,
            orderType: l.value,
            orderBeneficiaries: n.value,
          })
        : l;
    }
    function ha(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "order_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "receipt",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "udf",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "processing-provider",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            orderMetadataReceipt: n.value,
            orderMetadataUdf: r.value,
            orderMetadataProcessingProvider: a.value,
          })
        : a;
    }
    function ya(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pay");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_REQUEST_SEND,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function Ca(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "payment_initiator",
        o("WASmaxInMessageDeliverEnums").ENUM_BUYER_SELLER,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ paymentInitiator: t.value })
        : t;
    }
    function ba(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "recurrence-rule",
        o("WASmaxInMessageDeliverEnums").ENUM_AFTER_BEFORE_ON,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ recurrenceRule: t.value })
        : t;
    }
    function va(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "error-code", 1, 1e7);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "error-text");
      return r.success
        ? o("WAResultOrError").makeResult({
            errorCode: n.value,
            errorText: r.value,
          })
        : r;
    }
    function Sa(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "sync-status",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_FULL_MISSINGFIELDNOTPARTIAL_PARTIAL,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ syncStatus: t.value })
        : t;
    }
    function Ra(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_BR_INCENTIVE_P2M_P2P_PAYOUT_REMITTANCE_UPI_UPILITE,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ transactionType: t.value })
        : t;
    }
    function La(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fx-detail");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "base-amount");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "currency-fx");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "currency-markup");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "base-currency");
      return i.success
        ? o("WAResultOrError").makeResult({
            baseAmount: n.value,
            currencyFx: r.value,
            currencyMarkup: a.value,
            baseCurrency: i.value,
          })
        : i;
    }
    function Ea(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "upi_lite_details");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "lite_reference_number");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "lite_arqc");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        e,
        "lite_timestamp",
        1577865600,
        4102473600,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "lite_purpose",
        o("WASmaxInMessageDeliverEnums").ENUM_DEREGISTER_INITTOPUP_PAY_TOPUP,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            liteReferenceNumber: n.value,
            liteArqc: r.value,
            liteTimestamp: a.value,
            litePurpose: i.value,
          })
        : i;
    }
    function ka(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = Pa(e);
      return (n.success, n);
    }
    function Ia(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate-update");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "amount", ka);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "end-ts", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "seq-no");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "mandate-update-info");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInMessageDeliverEnums").ENUM_FAILURE_INIT_SUCCESS,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "action",
        o("WASmaxInMessageDeliverEnums").ENUM_ACCEPT_REJECT_UNKNOWN,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "error-code",
        1,
        1e7,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "amount",
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            endTs: r.value,
            seqNo: a.value,
            mandateUpdateInfo: i.value,
            status: l.value,
            action: s.value,
            errorCode: u.value,
            amount: c.value,
            childAmount: n.value,
          })
        : c;
    }
    function Ta(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiary");
      if (!t.success) return t;
      var n = xa(e);
      return (n.success, n);
    }
    function Da(e) {
      var t = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "beneficiary",
        1,
        5,
        Ta,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ beneficiary: t.value })
        : t;
    }
    function xa(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiary");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "address_line1");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "address_line2",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "city",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "state",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "phone_number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrString(e, "country");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrString(e, "postal_code");
      return c.success
        ? o("WAResultOrError").makeResult({
            name: n.value,
            addressLine1: r.value,
            addressLine2: a.value,
            city: i.value,
            state: l.value,
            phoneNumber: s.value,
            country: u.value,
            postalCode: c.value,
          })
        : c;
    }
    function $a(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "GO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "GO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "GoPay",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    function Pa(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "money");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(t.value, "value");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t.value, "offset");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t.value, "currency");
      return a.success
        ? o("WAResultOrError").makeResult({
            moneyValue: n.value,
            moneyOffset: r.value,
            moneyCurrency: a.value,
          })
        : a;
    }
    ((l.receiveRegularRPC = e),
      (l.parseRegularRequest = s),
      (l.makeRegularResponseMissingPlaceholder = u),
      (l.makeRegularResponseSuccess = c),
      (l.parseBaseMixin = d),
      (l.parseBizMixin = m),
      (l.parseBizPricingDataMixin = p),
      (l.parseBizROIMetricsGatingFlagsMixin = _),
      (l.parseBizRolesMixin = f),
      (l.parseBusinessBotGatingMixin = g),
      (l.parseCollectionContentTypeMixin = h),
      (l.parseContentTypeMixin = y),
      (l.parseConversionRecipientStatusMixin = C),
      (l.parseCtwaAttributionCtwaAttribution = b),
      (l.parseCtwaAttributionMixin = v),
      (l.parseCtwaConversionCtwa = S),
      (l.parseCtwaConversionMixin = R),
      (l.parseDHashMixin = L),
      (l.parseDeliveryContextMixin = E),
      (l.parseFolderMixin = k),
      (l.parseFrankingMixin = I),
      (l.parseHsmMixin = T),
      (l.parseInternalTestMixin = D),
      (l.parseLIDSessionDeprecationMixin = x),
      (l.parseMessageDeliverTypes = $),
      (l.parseMetaHideDecryptionPlaceholderMixin = P),
      (l.parseMulticastMixin = N),
      (l.parseOriginalEnvelopeMixin = M),
      (l.parsePreFilledNumberMixin = w),
      (l.parsePreFilledTextMixin = A),
      (l.parsePushNameMixin = F),
      (l.parseQualityTokenMixin = O),
      (l.parseServerFrankingTagMixin = B),
      (l.parseSharedSenderOrgIDsMetaSharedSenderOrgsOrg = W),
      (l.parseSharedSenderOrgIDsMixin = q),
      (l.parseStatusMixin = U),
      (l.parseStatusPushEligibleMixin = V),
      (l.parseStatusSettingMixin = H),
      (l.parseTriggerBlockMixin = G),
      (l.parseTriggerMessageCSATMixin = z),
      (l.parseWebDriverConfigMixin = j),
      (l.mergeAckMixin = Q),
      (l.parseAuthMixin = X),
      (l.parseAutomatedMixin = Y),
      (l.parseBizAutoResponseMixin = J),
      (l.parseBizCampaignMixin = Z),
      (l.parseBizEngagementDataMixin = ee),
      (l.parseBizMessageType = te),
      (l.parseBizOriginalEnvelopeMixin = ne),
      (l.parseBroadcastMixin = re),
      (l.parseButtonsMixin = oe),
      (l.parseClickToWhatsAppAttributionMixin = ae),
      (l.parseClickToWhatsAppTypeSourceUrl = ie),
      (l.parseClickToWhatsAppTypeMixin = le),
      (l.parseClientFrankingTagMixin = se),
      (l.parseFolderIDMixin = ue),
      (l.parseGroupMixin = ce),
      (l.parseGroupStatusMentionMessageMixin = de),
      (l.parseGroupWorkMetaAttributeMixin = me),
      (l.parseHSMReviewMetadataMixin = pe),
      (l.parseIndividualMixin = _e),
      (l.parseInteractiveMixin = fe),
      (l.parseLidChatOriginMixin = ge),
      (l.parseMemberTagsMessageMetaAttributeMixin = he),
      (l.parseMessageEditOrMessagePinOrRevokeMixinGroup = ye),
      (l.parseMessageEditOrRevokeMixinGroup = Ce),
      (l.parseMessageEditOrRevokeOrBroadcastEphemeralMixinGroup = be),
      (l.parseMessageReadMetaAttributeMixin = ve),
      (l.parseMessageSessionScopeMixin = Se),
      (l.parseMetaIsGroupStatusMixin = Re),
      (l.parseNativeFlowMessageTypeMixin = Le),
      (l.parseNativeFlowMixin = Ee),
      (l.parseParticipantLIDMixin = ke),
      (l.parseParticipantPNMixin = Ie),
      (l.parseParticipantUsernameMixin = Te),
      (l.parseRecipientDisplayNameOrPeerRecipientUsernameMixinGroup = De),
      (l.parseRecipientLIDOrPNMixinGroup = xe),
      (l.parseRecipientMixin = $e),
      (l.parseRecipientPNMixin = Pe),
      (l.parseSMBBroadcastSourceWithCampaignMixin = Ne),
      (l.parseSenderAccountKindMixin = Me),
      (l.parseSenderLIDMixin = we),
      (l.parseSenderPNMixin = Ae),
      (l.parseSenderUsernameMixin = Fe),
      (l.parseStatusDualOrSingleEncMixinGroup = Oe),
      (l.parseStatusMentionMessageMixin = Be),
      (l.parseStatusMentionSourceMetaMentionSourceTo = We),
      (l.parseStatusMentionSourceMixin = qe),
      (l.parseStatusMentionedMixin = Ue),
      (l.parseStatusMentionedUsersMetaMentionedUsersTo = Ve),
      (l.parseStatusMentionedUsersMixin = He),
      (l.parseStatusMessageMetaAttributeMixin = Ge),
      (l.parseStatusSingleEncMixin = ze),
      (l.parseThreadMsgMixin = je),
      (l.parseThreadTypeTagMixin = Ke),
      (l.parseTriggerMessageCSATAttributesMixin = Qe),
      (l.parseArmadilloOriginalMessageTimestampMixin = Xe),
      (l.parseAvailableOrUnavailableIndividualMixinGroup = Ye),
      (l.parseBotLocaleMixin = Je),
      (l.parseBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup = Ze),
      (l.parseBotPlatformMixin = et),
      (l.parseBotProactiveMessageMixin = tt),
      (l.parseBotThreadIDMixin = nt),
      (l.parseBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup =
        rt),
      (l.parseBroadcastSingleEncMixin = ot),
      (l.parseCoExV2ProactiveMessageMixin = at),
      (l.parseCoExV2ProactiveMetaMixin = it),
      (l.parseContentTypeTextOrMediaSingleMixinGroup = lt),
      (l.parseContextSourceMixin = st),
      (l.parseDeliverLinkedDeviceScheduleMessageMixin = ut),
      (l.parseDisplayNameMixin = ct),
      (l.parseEmptyBizDeprecatedMixin = dt),
      (l.parseExtensionsMetadataExtensionsMetadataCapabilitiesCapability = mt),
      (l.parseExtensionsMetadataExtensionsMetadataCapabilities = pt),
      (l.parseExtensionsMetadataMixin = _t),
      (l.parseFanoutCountMixin = ft),
      (l.parseGroupAddressingModeMixin = gt),
      (l.parseGroupCAPIMetaAttributeMixin = ht),
      (l.parseGroupCAPIShardRoutingStrategyMetaAttributeMixin = yt),
      (l.parseGroupEditMixins = Ct),
      (l.parseGroupEncTypes = bt),
      (l.parseGroupEphemeralMixin = vt),
      (l.parseGroupInviteTargetMixin = St),
      (l.parseGroupSingleEncMixin = Rt),
      (l.parseMessageEditMixin = Lt),
      (l.parseMessagePinMixin = Et),
      (l.parseMetaScheduledMessageMixin = kt),
      (l.parseMixedMetadataMixin = It),
      (l.parseRecipientDisplayNameMixin = Tt),
      (l.parseRecipientLIDMixin = Dt),
      (l.parseRetryOrBroadcastRegularMixinGroup = xt),
      (l.parseSMBBroadcastSourceMixin = $t),
      (l.parseStatusDeliverContentTypeMixins = Pt),
      (l.parseStatusDualEncMixin = Nt),
      (l.parseStatusDualEncStatusDualEncNonMediaOrStatusDualEncMediaMediaMixinGroup =
        Mt),
      (l.parseThreadTypeTagEnumOrLegacyMixinGroup = wt),
      (l.parseThreadTypeTagLegacyMixin = At),
      (l.parseUnavailableBroadcastMixin = Ft),
      (l.parseUnavailableGroupMixin = Ot),
      (l.parseUnavailableIndividualMixin = Bt),
      (l.parseUnavailableMixin = Wt),
      (l.parseAvailableMixin = qt),
      (l.parseBotClientMultiThreadIDMixin = Ut),
      (l.parseBotMessageMixin = Vt),
      (l.parseBroadcastDualEncMixin = Ht),
      (l.parseBroadcastRegularMixin = Gt),
      (l.parseBusinessBotMessageFeedbackRequestedMixin = zt),
      (l.parseBusinessBotMessageMixin = jt),
      (l.parseContentAvailableMixins = Kt),
      (l.parseContentGroupUnavailableMixins = Qt),
      (l.parseContentSingleMixins = Xt),
      (l.parseContentTypeListDeprecatedMixin = Yt),
      (l.parseContentTypeListMixin = Jt),
      (l.parseContentTypeLiveLocationSingleMixin = Zt),
      (l.parseContentTypeMediaSingleRcat = en),
      (l.parseContentTypeMediaSingleMixin = tn),
      (l.parseContentTypeProductListMixin = nn),
      (l.parseContentUnavailableMixins = rn),
      (l.parseEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup =
        on),
      (l.parseEncTypeIndividualOrSenderKeyMixinGroup = an),
      (l.parseGroupDualEncMixin = ln),
      (l.parseGroupMessageTypes = sn),
      (l.parseGroupRegularMixin = un),
      (l.parseGroupRetryMixin = cn),
      (l.parseLiveLocationS516575FixMixin = dn),
      (l.parseRetryOrIndividualRegularOrBotResponseMessageMixinGroup = mn),
      (l.parseSingleSelectListOrProductListDeprecatedOrProductListMixinGroup =
        pn),
      (l.parseSingleSelectOrProductListMixinGroup = _n),
      (l.parseStatusDualEncMediaEnc = fn),
      (l.parseStatusDualEncMediaRcat = gn),
      (l.parseStatusDualEncMediaMixin = hn),
      (l.parseStatusDualEncNonMediaEnc = yn),
      (l.parseStatusDualEncNonMediaMixin = Cn),
      (l.parseThreadTypeTagEnumMixin = bn),
      (l.parseACPMetaAttributeMixin = vn),
      (l.parseBotResponseMessageMixin = Sn),
      (l.parseBotResponseMixin = Rn),
      (l.parseBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup =
        Ln),
      (l.parseBroadcastDualEncMediaEnc = En),
      (l.parseBroadcastDualEncMediaRcat = kn),
      (l.parseBroadcastDualEncMediaMixin = In),
      (l.parseBroadcastDualEncNonMediaEnc = Tn),
      (l.parseBroadcastDualEncNonMediaMixin = Dn),
      (l.parseBroadcastParticipantsParticipantsTo = xn),
      (l.parseBroadcastParticipantsMixin = $n),
      (l.parseBypassedMixin = Pn),
      (l.parseContentTypePayIndividualMixin = Nn),
      (l.parseContentTypeTextOrReactionOrPollCreationOrPollVoteMixinGroup = Mn),
      (l.parseEmptyBizMixin = wn),
      (l.parseEncLiveLocationDeprecatedMixin = An),
      (l.parseEncSenderType = Fn),
      (l.parseEncTypeMessageSecretMessageMixin = On),
      (l.parseEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup = Bn),
      (l.parseEncTypeSenderKeyAndStatusMediaOrIndividualMixinGroup = Wn),
      (l.parseEncVersionBot = qn),
      (l.parseGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup =
        Un),
      (l.parseGroupDualEncMediaEnc = Vn),
      (l.parseGroupDualEncMediaRcat = Hn),
      (l.parseGroupDualEncMediaMixin = Gn),
      (l.parseGroupDualEncNonMediaEnc = zn),
      (l.parseGroupDualEncNonMediaMixin = jn),
      (l.parseGroupHistoryBundleReportingDualEncReceiveEnc = Kn),
      (l.parseGroupHistoryBundleReportingDualEncReceiveMixin = Qn),
      (l.parseGroupHistoryBundleReportingReceiveMixin = Xn),
      (l.parseIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup = Yn),
      (l.parseLiveLocationModeMixin = Jn),
      (l.parseMessageTargetMixin = Zn),
      (l.parsePeerRecipientLIDOrPNMixinGroup = er),
      (l.parsePeerRecipientPNMixin = tr),
      (l.parseProductListDeprecatedMixin = nr),
      (l.parseProductListMixin = rr),
      (l.parseRecipientLatestLIDMixin = or),
      (l.parseSingleSelectListMixin = ar),
      (l.parseToUserMixin = ir),
      (l.parseBroadcastEphemeralMixin = lr),
      (l.parseContentDualMixins = sr),
      (l.parseContentTypeEventMixin = ur),
      (l.parseContentTypeMediaOrMedianotifyMixinGroup = cr),
      (l.parseContentTypeMedianotifyMixin = dr),
      (l.parseContentTypePayGroupMixin = mr),
      (l.parseContentTypePayMixin = pr),
      (l.parseContentTypePollAddOptionMixin = _r),
      (l.parseContentTypePollEditMixin = fr),
      (l.parseDeprecatedPayTypeEnc = gr),
      (l.parseDeprecatedPayTypeMixin = hr),
      (l.parseEncGroupHistoryMixin = yr),
      (l.parseEncMediaTypeDeprecatedMixin = Cr),
      (l.parseEncSenderIndividualTypes = br),
      (l.parseEncTypeSenderKeyAndBroadcastMediaMixin = vr),
      (l.parseEncTypeSenderKeyAndGroupMediaMixin = Sr),
      (l.parseEncTypeSenderKeyAndStatusMediaMixin = Rr),
      (l.parseEncTypeSenderKeyOrOneTimeSenderKeyOrIndividualMixinGroup = Lr),
      (l.parseEncTypeSenderKeyWithoutMediatypeMixin = Er),
      (l.parseGroupDeliverPayNodeOrPayTransactionMessageMixinGroup = kr),
      (l.parseGroupHistoryBundleReportingMessagesReceiveReportingMessage = Ir),
      (l.parseGroupHistoryBundleReportingMessagesReceiveMixin = Tr),
      (l.parseIndividualDeliverPayNodeMessageMixin = Dr),
      (l.parseIndividualDeliverPayNodeMixin = xr),
      (l.parsePayTransactionMessageMixin = $r),
      (l.parsePeerRecipientLIDMixin = Pr),
      (l.parseBRMessageDeliverSendOrUPIMessageDeliverSendPayOrXBMessageDeliverSendNodeMixinGroup =
        Nr),
      (l.parseEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup =
        Mr),
      (l.parseEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup = wr),
      (l.parseEncMediaTypeFutureproofMixin = Ar),
      (l.parseEncTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup =
        Fr),
      (l.parseEncTypeOneTimeSenderKeyMixin = Or),
      (l.parseEncTypeSenderKeyMixin = Br),
      (l.parseGroupDeliverPayNodeMessageMixin = Wr),
      (l.parseGroupDeliverPayNodeMixin = qr),
      (l.parseGroupDeliverSendOrRequestPayNodeMixinGroup = Ur),
      (l.parseGroupDeliverSendPayNodeAmount = Vr),
      (l.parseGroupDeliverSendPayNodeMixin = Hr),
      (l.parseGroupRequestPayNodeMixin = Gr),
      (l.parseIndividualRequestPayNodeMixin = zr),
      (l.parseLegacyAmountMixin = jr),
      (l.parsePayTransactionAnyMixin = Kr),
      (l.parsePayTransactions = Qr),
      (l.parseUPIPartialTransactionMandate = Xr),
      (l.parseUPIPartialTransactionComplaint = Yr),
      (l.parseUPIPartialTransactionInternationalTransactionDetail = Jr),
      (l.parseUPIPartialTransactionMixin = Zr),
      (l.parseUPITransactionMixin = eo),
      (l.parseUPITransactionProtocolComplaint = to),
      (l.parseUPITransactionProtocolInternationalTransactionDetail = no),
      (l.parseUPITransactionProtocolMixin = ro),
      (l.parseUPITransactionProtocolP2POffer = oo),
      (l.parseUPITransactionProtocolP2PExternalPaymentMethod = ao),
      (l.parseUPITransactionProtocolP2POfferAmount = io),
      (l.parseUPITransactionProtocolP2PAmountModifiersFee = lo),
      (l.parseUPITransactionProtocolP2PAmountModifiersGst = so),
      (l.parseUPITransactionProtocolP2PAmountModifiers = uo),
      (l.parseUPITransactionProtocolP2PBillMetadata = co),
      (l.parseUPITransactionProtocolP2PPaymentLink = mo),
      (l.parseUPITransactionProtocolP2PMixin = po),
      (l.parseUPITransactionWithMandateMixin = _o),
      (l.parseXBMessageDeliverSendNodeSenderAmount = fo),
      (l.parseXBMessageDeliverSendNodeReceiverAmount = go),
      (l.parseXBMessageDeliverSendNodeMixin = ho),
      (l.parseXBTransactionSenderAmount = yo),
      (l.parseXBTransactionReceiverAmount = Co),
      (l.parseXBTransactionMixin = bo),
      (l.parseBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup =
        vo),
      (l.parseBRTransactionMixin = So),
      (l.parseBillMetadataMixin = Ro),
      (l.parseCAPITransactionMixin = Lo),
      (l.parseEncLiveLocationMixin = Eo),
      (l.parseEncSenderKeyBucketMixin = ko),
      (l.parseFailedTransactionOfferClaim = Io),
      (l.parseFailedTransactionAmount = To),
      (l.parseFailedTransactionComplaint = Do),
      (l.parseFailedTransactionMandate = xo),
      (l.parseFailedTransactionInternationalTransactionDetail = $o),
      (l.parseFailedTransactionMixin = Po),
      (l.parseIDTransactionMixin = No),
      (l.parseIDTransactionProtocolMixin = Mo),
      (l.parseMXTransactionMixin = wo),
      (l.parseMXTransactionProtocolMixin = Ao),
      (l.parseP2MHybridExternalPaymentMethodMixin = Fo),
      (l.parseP2MTransactionProtocolMixin = Oo),
      (l.parseTransactionNUXReceiverMixin = Bo),
      (l.parseUPIComplaintMixin = Wo),
      (l.parseUPIInternationalTransactionDetailMixin = qo),
      (l.parseUPIMandateBaseTransaction = Uo),
      (l.parseUPIMandateBaseOriginalAmount = Vo),
      (l.parseUPIMandateBasePauseResumeStatusDetails = Ho),
      (l.parseUPIMandateBaseMixin = Go),
      (l.parseUPIMandateWithUpdateMixin = zo),
      (l.parseUPIMessageDeliverSendPayNodeUpiUpiLiteDetails = jo),
      (l.parseUPIMessageDeliverSendPayNodeUpi = Ko),
      (l.parseUPIMessageDeliverSendPayNodeMixin = Qo),
      (l.parseUPIPartialMandateBaseTransaction = Xo),
      (l.parseUPIPartialMandateBasePauseResumeStatusDetails = Yo),
      (l.parseUPIPartialMandateBaseMandateUpdate = Jo),
      (l.parseUPIPartialMandateBaseMixin = Zo),
      (l.parseUPIPartialMandateUpdateBaseMixin = ea),
      (l.parseBRMessageDeliverSendNodeMixin = ta),
      (l.parseBRP2MHPPTransactionMixin = na),
      (l.parseBasePayNodeMixin = ra),
      (l.parseFrequencyRuleMixin = oa),
      (l.parseFullTransactionBaseOfferClaim = aa),
      (l.parseFullTransactionBaseAmount = ia),
      (l.parseFullTransactionBaseMixin = la),
      (l.parseIDTransactionGoPayOrOttoCashOrOvoMixinGroup = sa),
      (l.parseIDTransactionOttoCashMixin = ua),
      (l.parseIDTransactionOvoMixin = ca),
      (l.parseIncentiveOfferClaimMixin = da),
      (l.parseInstallmentInstallmentDueAmount = ma),
      (l.parseInstallmentInstallmentInterest = pa),
      (l.parseInstallmentMixin = _a),
      (l.parseOrderInPaymentOrderBeneficiaries = fa),
      (l.parseOrderInPaymentMixin = ga),
      (l.parseOrderMetadataMixin = ha),
      (l.parsePayNodeTypeMixin = ya),
      (l.parsePaymentInitiatorMixin = Ca),
      (l.parseRecurrenceRuleMixin = ba),
      (l.parseTransactionErrorMixin = va),
      (l.parseTransactionSyncStatusMixin = Sa),
      (l.parseTransactionTypeMixin = Ra),
      (l.parseUPIInternationalFxDetailMixin = La),
      (l.parseUPILiteDetailsMixin = Ea),
      (l.parseUPIMandateUpdateBaseAmount = ka),
      (l.parseUPIMandateUpdateBaseMixin = Ia),
      (l.parseBeneficiariesBeneficiary = Ta),
      (l.parseBeneficiariesMixin = Da),
      (l.parseBeneficiaryMixin = xa),
      (l.parseIDTransactionGoPayMixin = $a),
      (l.parseMoneyMixin = Pa));
  },
  98,
);
