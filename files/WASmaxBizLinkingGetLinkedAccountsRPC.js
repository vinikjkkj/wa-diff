__d(
  "WASmaxBizLinkingGetLinkedAccountsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
    "WASmaxJsx",
    "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
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
          var n = S(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = f(r, n);
          if (a.success)
            return { name: "GetLinkedAccountsResponseSuccess", value: a.value };
          var i = c(r, n);
          if (i.success)
            return {
              name: "GetLinkedAccountsResponseForbidden",
              value: i.value,
            };
          var l = u(r, n);
          if (l.success)
            return { name: "GetLinkedAccountsResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedAccounts", {
              Success: a,
              Forbidden: i,
              Error: l,
            }),
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
      var a = o(
        "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = b(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorForbiddenMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_page");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "whatsapp_as_page_button",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(n.value, "state", $);
      if (!r.success) return r;
      var a = k(e);
      if (!a.success) return a;
      var i = h(e),
        l = y(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ whatsappAsPageButtonState: r.value }, a.value, {
          hasProfilePictureMixin: i.success ? i.value : null,
          hasShowOnProfileMixin: l.success ? l.value : null,
        }),
      );
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_biz");
      if (!t.success) return t;
      var n = L(e);
      return (n.success, n);
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
      if (!t.success) return t;
      var n = C(e);
      if (!n.success) return n;
      var r = h(e),
        a = I(e),
        i = y(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          hasProfilePictureMixin: r.success ? r.value : null,
          hasDisplayNameMixin: a.success ? a.value : null,
          hasShowOnProfileMixin: i.success ? i.value : null,
        }),
      );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
      if (!t.success) return t;
      var n = v(e);
      return (n.success, n);
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "linked_accounts");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "fb_page", d);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "fb_biz", m);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "ig_professional",
        p,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "whatsapp_ad_identity",
        _,
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, u.value, {
              linkedAccountsFbPage: a.value,
              linkedAccountsFbBiz: i.value,
              linkedAccountsIgProfessional: l.value,
              linkedAccountsWhatsappAdIdentity: s.value,
            }),
          )
        : u;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bytes");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "profile_picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t.value, "bytes", g);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentString(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            profilePictureUrlElementValue: a.value,
            profilePictureBytes: r.value,
          })
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "show_on_profile");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentStringEnum(t.value, x);
      return n.success
        ? o("WAResultOrError").makeResult({
            showOnProfileElementValue: n.value,
          })
        : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ig_handle");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ igHandleElementValue: r.value })
        : r;
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
      var t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = T(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: n.value }, r.value),
          )
        : r;
    }
    function S(e) {
      var t = o(
        "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
      ).mergeHackBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(42) },
          o("WASmaxJsx").smax("linked_accounts", null),
        ),
        e,
      );
      return t;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "catalog");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "state", D);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ state: n.value, id: r.value })
        : r;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "catalog", R);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      if (!r.success) return r;
      var a = I(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: r.value }, a.value, {
              catalog: n.value,
            }),
          )
        : a;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "profile_sync");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(e, "state", D);
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fb_page");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "profile_sync", E);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      if (!r.success) return r;
      var a = I(e);
      if (!a.success) return a;
      var i = T(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: r.value }, a.value, i.value, {
              profileSync: n.value,
            }),
          )
        : i;
    }
    function I(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "display_name");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({ displayNameElementValue: n.value })
        : n;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "ad_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        t.value,
        "has_created_ad",
        x,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        t.value,
        "has_active_ctwa_ad",
        x,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t.value,
        "has_ads_eligible_for_recreation",
        x,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t.value,
        "has_active_ctwa_ad_l28",
        x,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            adStatusHasCreatedAd: n.value,
            adStatusHasActiveCtwaAd: r.value,
            adStatusHasAdsEligibleForRecreation: a.value,
            adStatusHasActiveCtwaAdL28: i.value,
          })
        : i;
    }
    var D = { disable: "disable", import: "import" },
      x = { false: "false", true: "true" },
      $ = { off: "off", on: "on" };
    ((l.sendGetLinkedAccountsRPC = e),
      (l.parseGetLinkedAccountsResponseError = u),
      (l.parseGetLinkedAccountsResponseForbidden = c),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbPage = d),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbBiz = m),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsIgProfessional = p),
      (l.parseGetLinkedAccountsResponseSuccessLinkedAccountsWhatsappAdIdentity =
        _),
      (l.parseGetLinkedAccountsResponseSuccess = f),
      (l.parseHasProfilePictureProfilePictureBytes = g),
      (l.parseHasProfilePictureMixin = h),
      (l.parseHasShowOnProfileMixin = y),
      (l.parseIGProfessionalResponseBaseMixin = C),
      (l.parseIQErrorForbiddenMixin = b),
      (l.parseWhatsAppAdIdentityResponseMixin = v),
      (l.makeGetLinkedAccountsRequest = S),
      (l.parseFBBizResponseCatalog = R),
      (l.parseFBBizResponseMixin = L),
      (l.parseFBPageResponseBaseProfileSync = E),
      (l.parseFBPageResponseBaseMixin = k),
      (l.parseHasDisplayNameMixin = I),
      (l.parseAdStatusMixin = T),
      (l.ENUM_DISABLE_IMPORT = D),
      (l.ENUM_FALSE_TRUE = x),
      (l.ENUM_OFF_ON = $));
  },
  98,
);
