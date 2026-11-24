__d(
  "WASmaxPrivacyGetContactBlacklistRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInPrivacyEnums",
    "WASmaxInPrivacyGetPrivacyListError",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutPrivacyGetIQMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = g(e),
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
      var a = y(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInPrivacyGetPrivacyListError").parseGetPrivacyListError(
        r.value,
      );
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
      var l = C(e, t);
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
      var r = f(e);
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
      var l = C(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ privacyAddressingMode: i.value }, l.value, {
              privacyList: a.value,
            }),
          )
        : l;
    }
    function f(e) {
      var t = h(e);
      return t.success
        ? o("WAResultOrError").makeResult({ contactListIds: t.value })
        : t;
    }
    function g(e) {
      var t =
          e.getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs,
        n = o("WASmaxOutPrivacyGetIQMixin").mergeGetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            R(o("WASmaxJsx").smax("privacy", null), t),
          ),
        );
      return n;
    }
    function h(e) {
      var t = S(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = v(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = b(e);
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
    function y(e, t) {
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
        o("WASmaxInPrivacyEnums").DOMAINJID_USERJID,
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
    function C(e, t) {
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
        o("WASmaxInPrivacyEnums").DOMAINJID_USERJID,
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
    function b(e) {
      return o("WASmaxParseUtils").voidSuccess;
    }
    function v(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ pnJid: t.value })
        : t;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").attrString(e, "username");
      return t.success
        ? o("WAResultOrError").makeResult({ username: t.value })
        : t;
    }
    function R(e, t) {
      if (t.getContactBlacklistGetContactBlacklistLID)
        return I(e, t.getContactBlacklistGetContactBlacklistLID);
      if (t.getContactBlacklistGetContactBlacklistPN)
        return E(e, t.getContactBlacklistGetContactBlacklistPN);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function L(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          null,
          D(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.categoryNamesForContactBlacklistMixinArgs,
        n = o("WASmaxJsx").smax(
          "privacy",
          { addressing_mode: "lid" },
          D(o("WASmaxJsx").smax("list", { value: "contact_blacklist" }), t),
        );
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t = e.anyName,
        n = o("WASmaxJsx").smax("smax$any", {
          name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetContactBlacklistRPC = e),
      (l.parseGetContactBlacklistResponseError = s),
      (l.parseGetContactBlacklistResponseSuccess = d),
      (l.parseGetContactBlacklistResponseSuccessLID = _),
      (l.makeGetContactBlacklistRequest = g));
  },
  98,
);
