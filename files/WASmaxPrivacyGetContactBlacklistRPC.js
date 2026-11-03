__d(
  "WASmaxPrivacyGetContactBlacklistRPC",
  [
    "WAComms",
    "WAJids",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
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
      var n = S(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = _(r, n);
      if (a.success)
        return {
          name: "GetContactBlacklistResponseSuccessLID",
          value: a.value,
        };
      var i = d(r, n);
      if (i.success)
        return { name: "GetContactBlacklistResponseSuccess", value: i.value };
      var l = s(r, n);
      if (l.success)
        return { name: "GetContactBlacklistResponseError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetContactBlacklist", {
          SuccessLID: a,
          Success: i,
          Error: l,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = k(e, t);
      if (!a.success) return a;
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetPrivacyListError: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "lid",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, lid: r.value })
        : r;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64e3, u);
      return r.success
        ? o("WAResultOrError").makeResult({ dhash: n.value, user: r.value })
        : r;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", c);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "pn",
      );
      if (!i.success) return i;
      var l = I(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "jid",
      );
      if (!n.success) return n;
      var r = v(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        privacyContactListIdentifierMixin: r.success ? r.value : null,
      });
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64e3, m);
      return r.success
        ? o("WAResultOrError").makeResult({ dhash: n.value, user: r.value })
        : r;
    }
    function _(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", p);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!i.success) return i;
      var l = I(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    function f(e) {
      var t = g(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = h(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = b(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = C(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = y(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
              "IQErrorInternalServerError",
            ],
            [t, n, r, a, i],
          );
    }
    function g(e) {
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
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "feature-not-implemented",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        501,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function y(e) {
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
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "rate-overlimit",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        429,
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
    function v(e) {
      var t = E(e);
      return t.success
        ? o("WAResultOrError").makeResult({ contactListIds: t.value })
        : t;
    }
    function S(e) {
      var t =
          e.getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs,
        n = L(
          o("WASmaxJsx").smax(
            "iq",
            null,
            M(o("WASmaxJsx").smax("privacy", null), t),
          ),
        );
      return n;
    }
    function R() {
      var e = N(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "privacy",
        }),
      );
      return e;
    }
    function L(e) {
      var t = R();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function E(e) {
      var t = $(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = x(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = T(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EmptyContactListIdentifier",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Username", "PnJid", "EmptyContactListIdentifier"],
            [t, n, r],
          );
    }
    function k(e, t) {
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        D,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return l.success
        ? o("WAResultOrError").makeResult({ from: i.value, type: l.value })
        : l;
    }
    function I(e, t) {
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        D,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return l.success
        ? o("WAResultOrError").makeResult({ from: i.value, type: l.value })
        : l;
    }
    function T(e) {
      return o("WASmaxParseUtils").voidSuccess;
    }
    var D = {
      validators: [o("WAJids").validateDomainJid, o("WAJids").validateUserJid],
      typeName: "DomainJid|UserJid",
    };
    function x(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ pnJid: t.value })
        : t;
    }
    function $(e) {
      var t = o("WASmaxParseUtils").attrString(e, "username");
      return t.success
        ? o("WAResultOrError").makeResult({ username: t.value })
        : t;
    }
    function P() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function N(e) {
      var t = P();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function M(e, t) {
      if (t.getContactBlacklistGetContactBlacklistLID)
        return O(e, t.getContactBlacklistGetContactBlacklistLID);
      if (t.getContactBlacklistGetContactBlacklistPN)
        return A(e, t.getContactBlacklistGetContactBlacklistPN);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function w(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          null,
          W(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          { addressing_mode: "lid" },
          W(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = e.anyName,
        n = o("WASmaxJsx").smax("smax$any", {
          name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetContactBlacklistRPC = e),
      (l.parseGetContactBlacklistResponseError = s),
      (l.parseGetContactBlacklistResponseSuccessPrivacyListUser = u),
      (l.parseGetContactBlacklistResponseSuccessPrivacyList = c),
      (l.parseGetContactBlacklistResponseSuccess = d),
      (l.parseGetContactBlacklistResponseSuccessLIDPrivacyListUser = m),
      (l.parseGetContactBlacklistResponseSuccessLIDPrivacyList = p),
      (l.parseGetContactBlacklistResponseSuccessLID = _),
      (l.parseGetPrivacyListError = f),
      (l.parseIQErrorBadRequestMixin = g),
      (l.parseIQErrorFeatureNotImplementedMixin = h),
      (l.parseIQErrorInternalServerErrorMixin = y),
      (l.parseIQErrorRateOverlimitMixin = C),
      (l.parseIQErrorServiceUnavailableMixin = b),
      (l.parsePrivacyContactListIdentifierMixin = v),
      (l.makeGetContactBlacklistRequest = S),
      (l.mergeGetIQMixin = L),
      (l.parseContactListIds = E),
      (l.parseDeprecatedIQErrorResponseOptionalFromMixin = k),
      (l.parseDeprecatedIQResultResponseOptionalFromMixin = I),
      (l.parseEmptyContactListIdentifierMixin = T),
      (l.DOMAINJID_USERJID = D),
      (l.parsePnJidMixin = x),
      (l.parseUsernameMixin = $),
      (l.mergeBaseIQGetRequestMixin = N),
      (l.mergeGetContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroup =
        M),
      (l.mergeGetContactBlacklistGetContactBlacklistPNMixin = A),
      (l.mergeGetContactBlacklistGetContactBlacklistLIDMixin = O),
      (l.mergeCategoryNamesForContactBlacklistMixin = W));
  },
  98,
);
