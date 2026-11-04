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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = R(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = f(r, n);
          if (a.success)
            return {
              name: "GetContactBlacklistResponseSuccessLID",
              value: a.value,
            };
          var i = m(r, n);
          if (i.success)
            return {
              name: "GetContactBlacklistResponseSuccess",
              value: i.value,
            };
          var l = u(r, n);
          if (l.success)
            return { name: "GetContactBlacklistResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetContactBlacklist", {
              SuccessLID: a,
              Success: i,
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
      var a = I(e, t);
      if (!a.success) return a;
      var i = g(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetPrivacyListError: i.value,
            }),
          )
        : i;
    }
    function c(e) {
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64e3, c);
      return r.success
        ? o("WAResultOrError").makeResult({ dhash: n.value, user: r.value })
        : r;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", d);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "pn",
      );
      if (!i.success) return i;
      var l = T(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "jid",
      );
      if (!n.success) return n;
      var r = S(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        privacyContactListIdentifierMixin: r.success ? r.value : null,
      });
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64e3, p);
      return r.success
        ? o("WAResultOrError").makeResult({ dhash: n.value, user: r.value })
        : r;
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", _);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!i.success) return i;
      var l = T(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    function g(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = y(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = v(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = b(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = C(e);
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
    function h(e) {
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
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
    function v(e) {
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
    function S(e) {
      var t = k(e);
      return t.success
        ? o("WAResultOrError").makeResult({ contactListIds: t.value })
        : t;
    }
    function R(e) {
      var t =
          e.getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs,
        n = E(
          o("WASmaxJsx").smax(
            "iq",
            null,
            w(o("WASmaxJsx").smax("privacy", null), t),
          ),
        );
      return n;
    }
    function L() {
      var e = M(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "privacy",
        }),
      );
      return e;
    }
    function E(e) {
      var t = L();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function k(e) {
      var t = P(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = $(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = D(e);
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
        x,
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
    function T(e, t) {
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
        x,
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
    function D(e) {
      return o("WASmaxParseUtils").voidSuccess;
    }
    var x = {
      validators: [o("WAJids").validateDomainJid, o("WAJids").validateUserJid],
      typeName: "DomainJid|UserJid",
    };
    function $(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ pnJid: t.value })
        : t;
    }
    function P(e) {
      var t = o("WASmaxParseUtils").attrString(e, "username");
      return t.success
        ? o("WAResultOrError").makeResult({ username: t.value })
        : t;
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
    function w(e, t) {
      if (t.getContactBlacklistGetContactBlacklistLID)
        return B(e, t.getContactBlacklistGetContactBlacklistLID);
      if (t.getContactBlacklistGetContactBlacklistPN)
        return F(e, t.getContactBlacklistGetContactBlacklistPN);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function A(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          null,
          q(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          { addressing_mode: "lid" },
          q(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W(e) {
      var t = e.anyName,
        n = o("WASmaxJsx").smax("smax$any", {
          name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function q(e, t) {
      var n = W(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetContactBlacklistRPC = e),
      (l.parseGetContactBlacklistResponseError = u),
      (l.parseGetContactBlacklistResponseSuccessPrivacyListUser = c),
      (l.parseGetContactBlacklistResponseSuccessPrivacyList = d),
      (l.parseGetContactBlacklistResponseSuccess = m),
      (l.parseGetContactBlacklistResponseSuccessLIDPrivacyListUser = p),
      (l.parseGetContactBlacklistResponseSuccessLIDPrivacyList = _),
      (l.parseGetContactBlacklistResponseSuccessLID = f),
      (l.parseGetPrivacyListError = g),
      (l.parseIQErrorBadRequestMixin = h),
      (l.parseIQErrorFeatureNotImplementedMixin = y),
      (l.parseIQErrorInternalServerErrorMixin = C),
      (l.parseIQErrorRateOverlimitMixin = b),
      (l.parseIQErrorServiceUnavailableMixin = v),
      (l.parsePrivacyContactListIdentifierMixin = S),
      (l.makeGetContactBlacklistRequest = R),
      (l.mergeGetIQMixin = E),
      (l.parseContactListIds = k),
      (l.parseDeprecatedIQErrorResponseOptionalFromMixin = I),
      (l.parseDeprecatedIQResultResponseOptionalFromMixin = T),
      (l.parseEmptyContactListIdentifierMixin = D),
      (l.DOMAINJID_USERJID = x),
      (l.parsePnJidMixin = $),
      (l.parseUsernameMixin = P),
      (l.mergeBaseIQGetRequestMixin = M),
      (l.mergeGetContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroup =
        w),
      (l.mergeGetContactBlacklistGetContactBlacklistPNMixin = F),
      (l.mergeGetContactBlacklistGetContactBlacklistLIDMixin = B),
      (l.mergeCategoryNamesForContactBlacklistMixin = q));
  },
  98,
);
