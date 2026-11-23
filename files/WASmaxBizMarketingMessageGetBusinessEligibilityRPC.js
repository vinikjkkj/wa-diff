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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = L(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = f(r, n);
      if (a.success)
        return {
          name: "GetBusinessEligibilityResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return { name: "GetBusinessEligibilityResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetBusinessEligibility", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = g(e, t);
      if (!a.success) return a;
      var i = y(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_verified");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", x);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "should_show_privacy_interstitial_to_new_users",
        $,
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "marketing_messages");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", D);
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", x);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "v1_enabled",
        $,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            v1Enabled: r.value,
          })
        : r;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "genai_image");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", x);
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta_one");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", x);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "skip_pi",
        $,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "verification_eligibility",
        I,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            status: n.value,
            skipPi: r.value,
            verificationEligibility: a.value,
          })
        : a;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bb_pro");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "status", T);
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "meta_verified", u);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "marketing_messages",
        c,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(e, "genai", d);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "genai_image", m);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "meta_one", p);
      if (!s.success) return s;
      var f = o("WASmaxParseUtils").optionalChildWithTag(e, "bb_pro", _);
      if (!f.success) return f;
      var g = h(e, t);
      return g.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, g.value, {
              metaVerified: r.value,
              marketingMessages: a.value,
              genai: i.value,
              genaiImage: l.value,
              metaOne: s.value,
              bbPro: f.value,
            }),
          )
        : g;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!r.success) return r;
      var a = v(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
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
      var a = R(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ to: r.value }, a.value),
          )
        : a;
    }
    function y(e) {
      var t = P(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = C(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = b(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: r.value,
        });
      var a = S(e);
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
    function C(e) {
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
    function b(e) {
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
    function v(e, t) {
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
    function S(e) {
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
    function R(e, t) {
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
    function L(e) {
      var t,
        n,
        r = e.featuresMetaVerified,
        a = e.featuresMarketingMessages,
        i = e.featuresGenai,
        l = e.featuresGenaiImage,
        s = e.featuresMetaOne,
        u = e.featuresBbPro,
        c = k(
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
    function E(e) {
      var t = e.iqFrom,
        n = M(
          o("WASmaxJsx").smax("iq", {
            from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            to: o("WAWap").S_WHATSAPP_NET,
          }),
        );
      return n;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var I = { EBV: "EBV", NONE: "NONE", SBV: "SBV" },
      T = {
        ELIGIBLE_TO_ONBOARD: "ELIGIBLE_TO_ONBOARD",
        NOT_ELIGIBLE: "NOT_ELIGIBLE",
        ONBOARDED: "ONBOARDED",
      },
      D = {
        FAIL: "FAIL",
        PAUSED: "PAUSED",
        SUCCESS: "SUCCESS",
        WARNING: "WARNING",
      },
      x = { FAIL: "FAIL", SUCCESS: "SUCCESS" },
      $ = { false: "false", true: "true" };
    function P(e) {
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
    function N() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function M(e) {
      var t = N();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetBusinessEligibilityRPC = e),
      (l.parseGetBusinessEligibilityResponseError = s),
      (l.parseGetBusinessEligibilityResponseSuccess = f),
      (l.makeGetBusinessEligibilityRequest = L),
      (l.ENUM_EBV_NONE_SBV = I),
      (l.ENUM_ELIGIBLETOONBOARD_NOTELIGIBLE_ONBOARDED = T),
      (l.ENUM_FAIL_PAUSED_SUCCESS_WARNING = D),
      (l.ENUM_FAIL_SUCCESS = x),
      (l.ENUM_FALSE_TRUE = $));
  },
  98,
);
