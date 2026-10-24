__d(
  "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = E(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = g(r, n);
          if (a.success)
            return {
              name: "GetBusinessEligibilityResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetBusinessEligibilityResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetBusinessEligibility",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = h(e, t);
      if (!a.success) return a;
      var i = C(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_verified");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", $);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "should_show_privacy_interstitial_to_new_users",
        P,
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "marketing_messages");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", x);
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", $);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "v1_enabled",
        P,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            v1Enabled: r.value,
          })
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai_image");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", $);
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_one");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", $);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "skip_pi",
        P,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "verification_eligibility",
        T,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            skipPi: r.value,
            verificationEligibility: a.value,
          })
        : a;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bb_pro");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", D);
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "meta_verified", c);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "marketing_messages",
        d,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(e, "genai", m);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "genai_image", p);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "meta_one", _);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(e, "bb_pro", f);
      if (!u.success) return u;
      var g = y(e, t);
      return g.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, g.value, {
              metaVerified: r.value,
              marketingMessages: a.value,
              genai: i.value,
              genaiImage: l.value,
              metaOne: s.value,
              bbPro: u.value,
            }),
          )
        : g;
    }
    function h(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = S(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function y(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = L(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function C(e) {
      var t = N(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = b(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = v(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: r.value,
        });
      var a = R(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r, a],
          );
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "forbidden",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        403,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "internal-server-error",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function S(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "service-unavailable",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        503,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function L(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function E(e) {
      var t,
        n,
        r = e.featuresMetaVerified,
        a = e.featuresMarketingMessages,
        i = e.featuresGenai,
        l = e.featuresGenaiImage,
        s = e.featuresMetaOne,
        u = e.featuresBbPro,
        c = I(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: (t = o("WAWap")).INT(139) },
            o("WASmaxJsx").smax("features", {
              meta_verified: (n = o("WASmaxAttrs")).OPTIONAL(
                t.CUSTOM_STRING,
                r,
              ),
              marketing_messages: n.OPTIONAL(t.CUSTOM_STRING, a),
              genai: n.OPTIONAL(t.CUSTOM_STRING, i),
              genai_image: n.OPTIONAL(t.CUSTOM_STRING, l),
              meta_one: n.OPTIONAL(t.CUSTOM_STRING, s),
              bb_pro: n.OPTIONAL(t.CUSTOM_STRING, u),
            }),
          ),
          e,
        );
      return c;
    }
    function k(e) {
      var t = e.iqFrom,
        n = w(
          o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET,
          }),
        );
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var T = { EBV: "EBV", NONE: "NONE", SBV: "SBV" },
      D = {
        ELIGIBLE_TO_ONBOARD: "ELIGIBLE_TO_ONBOARD",
        NOT_ELIGIBLE: "NOT_ELIGIBLE",
        ONBOARDED: "ONBOARDED",
      },
      x = {
        FAIL: "FAIL",
        PAUSED: "PAUSED",
        SUCCESS: "SUCCESS",
        WARNING: "WARNING",
      },
      $ = { FAIL: "FAIL", SUCCESS: "SUCCESS" },
      P = { false: "false", true: "true" };
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function M() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function w(e) {
      var t = M();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetBusinessEligibilityRPC = e),
      (l.parseGetBusinessEligibilityResponseError = u),
      (l.parseGetBusinessEligibilityResponseSuccessMetaVerified = c),
      (l.parseGetBusinessEligibilityResponseSuccessMarketingMessages = d),
      (l.parseGetBusinessEligibilityResponseSuccessGenai = m),
      (l.parseGetBusinessEligibilityResponseSuccessGenaiImage = p),
      (l.parseGetBusinessEligibilityResponseSuccessMetaOne = _),
      (l.parseGetBusinessEligibilityResponseSuccessBbPro = f),
      (l.parseGetBusinessEligibilityResponseSuccess = g),
      (l.parseHackBaseIQErrorResponseMixin = h),
      (l.parseHackBaseIQResultResponseMixin = y),
      (l.parseIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup =
        C),
      (l.parseIQErrorForbiddenMixin = b),
      (l.parseIQErrorInternalServerErrorMixin = v),
      (l.parseIQErrorResponseMixin = S),
      (l.parseIQErrorServiceUnavailableMixin = R),
      (l.parseIQResultResponseMixin = L),
      (l.makeGetBusinessEligibilityRequest = E),
      (l.mergeHackBaseIQGetRequestMixin = I),
      (l.ENUM_EBV_NONE_SBV = T),
      (l.ENUM_ELIGIBLETOONBOARD_NOTELIGIBLE_ONBOARDED = D),
      (l.ENUM_FAIL_PAUSED_SUCCESS_WARNING = x),
      (l.ENUM_FAIL_SUCCESS = $),
      (l.ENUM_FALSE_TRUE = P),
      (l.parseIQErrorBadRequestMixin = N),
      (l.mergeBaseIQGetRequestMixin = w));
  },
  98,
);
