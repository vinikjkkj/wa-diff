__d(
  "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizMarketingMessageEnums",
    "WASmaxInBizMarketingMessageHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_verified");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_SUCCESS,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "should_show_privacy_interstitial_to_new_users",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FALSE_TRUE,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "additional_params",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            shouldShowPrivacyInterstitialToNewUsers: r.value,
            additionalParams: a.value,
          })
        : a;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "marketing_messages");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_PAUSED_SUCCESS_WARNING,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "expiration",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            expiration: r.value,
          })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_SUCCESS,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "v1_enabled",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            v1Enabled: r.value,
          })
        : r;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai_image");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_SUCCESS,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_one");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_SUCCESS,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bb_pro");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "status",
        o("WASmaxInBizMarketingMessageEnums")
          .ENUM_ELIGIBLETOONBOARD_NOTELIGIBLE_ONBOARDED,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function p(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "meta_verified", e);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "marketing_messages",
        s,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(t, "genai", u);
      if (!l.success) return l;
      var p = o("WASmaxParseUtils").optionalChildWithTag(t, "genai_image", c);
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(t, "meta_one", d);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChildWithTag(t, "bb_pro", m);
      if (!f.success) return f;
      var g = o(
        "WASmaxInBizMarketingMessageHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(t, n);
      return g.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, g.value, {
              metaVerified: a.value,
              marketingMessages: i.value,
              genai: l.value,
              genaiImage: p.value,
              metaOne: _.value,
              bbPro: f.value,
            }),
          )
        : g;
    }
    ((l.parseGetBusinessEligibilityResponseSuccessMetaVerified = e),
      (l.parseGetBusinessEligibilityResponseSuccessMarketingMessages = s),
      (l.parseGetBusinessEligibilityResponseSuccessGenai = u),
      (l.parseGetBusinessEligibilityResponseSuccessGenaiImage = c),
      (l.parseGetBusinessEligibilityResponseSuccessMetaOne = d),
      (l.parseGetBusinessEligibilityResponseSuccessBbPro = m),
      (l.parseGetBusinessEligibilityResponseSuccess = p));
  },
  98,
);
