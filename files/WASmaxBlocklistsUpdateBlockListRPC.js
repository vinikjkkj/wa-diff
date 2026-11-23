__d(
  "WASmaxBlocklistsUpdateBlockListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInBlocklistsBlocklistIdentifierMixin",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxInBlocklistsIQErrorBadRequestMixin",
    "WASmaxInBlocklistsIQErrorForbiddenMixin",
    "WASmaxInBlocklistsIQErrorNotAcceptableMixin",
    "WASmaxInBlocklistsIQErrorRateOverlimitMixin",
    "WASmaxInBlocklistsIQErrorResponseMixin",
    "WASmaxInBlocklistsServerErrors",
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
      var n = C(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = _(r, n);
      if (a.success)
        return {
          name: "UpdateBlockListResponseSuccessWithMatch",
          value: a.value,
        };
      var i = g(r, n);
      if (i.success)
        return {
          name: "UpdateBlockListResponseSuccessWithMismatch",
          value: i.value,
        };
      var l = m(r, n);
      if (l.success)
        return {
          name: "UpdateBlockListResponseMigratedSuccessWithMismatch",
          value: l.value,
        };
      var s = u(r, n);
      if (s.success)
        return {
          name: "UpdateBlockListResponseCAPISuccessWithMismatch",
          value: s.value,
        };
      var d = c(r, n);
      if (d.success)
        return {
          name: "UpdateBlockListResponseInvalidRequest",
          value: d.value,
        };
      var f = p(r, n);
      if (f.success)
        return { name: "UpdateBlockListResponseServerError", value: f.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateBlockList", {
          SuccessWithMatch: a,
          SuccessWithMismatch: i,
          MigratedSuccessWithMismatch: l,
          CAPISuccessWithMismatch: s,
          InvalidRequest: d,
          ServerError: f,
        }),
      );
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "jid",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "active",
        "true",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInBlocklistsBlocklistIdentifierMixin",
      ).parseBlocklistIdentifierMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ jid: n.value, active: r.value }, a.value),
          )
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        u.value,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "false",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "item",
        "dhash",
      ]);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "c_dhash",
        m.value,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrString(r.value, "dhash");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        s,
      );
      return g.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listMatched: d.value,
            hasListCDhash: p.value != null,
            listDhash: _.value,
            listAddressingMode: f.value,
            listItem: g.value,
          })
        : g;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "addressing_mode",
        b,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInBlocklistsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!i.success) return i;
      var l = h(r.value);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ errorAddressingMode: a.value }, i.value, {
              errorUpdateBlocklistErrors: l.value,
            }),
          )
        : l;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "active",
        "true",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInBlocklistsBlocklistIdentifierMixin",
      ).parseBlocklistIdentifierMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ jid: n.value, active: r.value }, a.value),
          )
        : a;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "false",
      );
      if (!c.success) return c;
      var m = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "item",
        "dhash",
      ]);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "c_dhash",
        m.value,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrString(r.value, "dhash");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        d,
      );
      return g.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listMatched: c.value,
            hasListCDhash: p.value != null,
            listDhash: _.value,
            listAddressingMode: f.value,
            listItem: g.value,
          })
        : g;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBlocklistsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInBlocklistsServerErrors").parseServerErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorServerErrors: i.value }),
          )
        : i;
    }
    function _(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "true",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrString(r.value, "dhash");
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listMatched: c.value,
            listDhash: d.value,
          })
        : d;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        displayNameMixin: r.success ? r.value : null,
      });
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "false",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "item",
        "dhash",
      ]);
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "c_dhash",
        d.value,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrString(r.value, "dhash");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "pn",
      );
      if (!_.success) return _;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        f,
      );
      return g.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listMatched: c.value,
            hasListCDhash: m.value != null,
            listDhash: p.value,
            listAddressingMode: _.value,
            listItem: g.value,
          })
        : g;
    }
    function h(e) {
      var t = o(
        "WASmaxInBlocklistsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: t.value,
        });
      var n = o(
        "WASmaxInBlocklistsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o(
        "WASmaxInBlocklistsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInBlocklistsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = v(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorNotAllowed",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorNotAcceptable",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
            ],
            [t, n, r, a, i],
          );
    }
    function y(e) {
      var t,
        n,
        r = e.bizOptOutReason,
        a = e.bizOptOutReasonDescription,
        i = e.bizOptOutEntryPoint,
        l = e.bizOptOutFirstMessage,
        s = e.bizOptOutBusinessDiscoveryEntryPoint,
        u = e.bizOptOutBusinessDiscoveryTimestamp,
        c = e.bizOptOutBusinessDiscoveryId,
        d = o("WASmaxJsx").smax("biz_opt_out", {
          reason: (t = o("WASmaxAttrs")).OPTIONAL(
            (n = o("WAWap")).CUSTOM_STRING,
            r,
          ),
          reason_description: t.OPTIONAL(n.CUSTOM_STRING, a),
          entry_point: t.OPTIONAL(n.CUSTOM_STRING, i),
          first_message: t.OPTIONAL(n.CUSTOM_STRING, l),
          business_discovery_entry_point: t.OPTIONAL(n.CUSTOM_STRING, s),
          business_discovery_timestamp: t.OPTIONAL(n.INT, u),
          business_discovery_id: t.OPTIONAL(n.CUSTOM_STRING, c),
        });
      return d;
    }
    function C(e) {
      var t = e.bizOptOutArgs,
        n = e.updateBlockListReportBlockEntryPointMixinArgs,
        r = e.itemDhash,
        a = e.updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs,
        i = o("WASmaxMixins").optionalMerge(
          L,
          o("WASmaxJsx").smax(
            "iq",
            {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "blocklist",
              type: "set",
              id: o("WAWap").generateId(),
            },
            S(
              o("WASmaxJsx").smax(
                "item",
                {
                  dhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(y, t),
              ),
              a,
            ),
          ),
          n,
        );
      return i;
    }
    var b = { lid: "lid", pn: "pn" };
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-allowed",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        405,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function S(e, t) {
      if (t.updateBlockListBlockItem) return T(e, t.updateBlockListBlockItem);
      if (t.updateBlockListUnblockItem)
        return k(e, t.updateBlockListUnblockItem);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function R(e) {
      var t = e.entryPointSource,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("entry_point", {
            source: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", {
          action: "unblock",
          jid: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function I(e) {
      var t =
          e.updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs,
        n = D(o("WASmaxJsx").smax("item", { action: "block" }), t);
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e, t) {
      if (t.updateBlockListMigratedBlockItem)
        return $(e, t.updateBlockListMigratedBlockItem);
      if (t.updateBlockListNonMigratedBlockItem)
        return N(e, t.updateBlockListNonMigratedBlockItem);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function x(e) {
      var t = e.itemJid,
        n = w(o("WASmaxJsx").smax("item", { jid: o("WAWap").JID(t) }), e);
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M(e) {
      var t = e.anyCountryCode,
        n = e.blocklistIdsArgs,
        r = A(
          o("WASmaxJsx").smax("smax$any", {
            country_code: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
          }),
          n,
        );
      return r;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e, t) {
      if (t.username) return z(e, t.username);
      if (t.pnJid) return U(e, t.pnJid);
      if (t.guestNameAndDisplayName) return O(e, t.guestNameAndDisplayName);
      if (t.displayName) return K(e, t.displayName);
      if (t.guestName) return W(e, t.guestName);
      if (t.isUnknownIdentifier) return H(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function F(e) {
      var t = W(K(o("WASmaxJsx").smax("smax$any", null), e), e);
      return t;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = e.anyGuestName,
        n = o("WASmaxJsx").smax("smax$any", {
          guest_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e) {
      var t = e.anyPnJid,
        n = o("WASmaxJsx").smax("smax$any", { pn_jid: o("WAWap").JID(t) });
      return n;
    }
    function U(e, t) {
      var n = q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function V() {
      var e = o("WASmaxJsx").smax("smax$any", { unknown_identifier: "true" });
      return e;
    }
    function H(e) {
      var t = V();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function G(e) {
      var t = e.anyUsername,
        n = o("WASmaxJsx").smax("smax$any", {
          username: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e) {
      var t = e.anyDisplayName,
        n = o("WASmaxJsx").smax("smax$any", {
          display_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function K(e, t) {
      var n = j(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendUpdateBlockListRPC = e),
      (l.parseUpdateBlockListResponseCAPISuccessWithMismatch = u),
      (l.parseUpdateBlockListResponseInvalidRequest = c),
      (l.parseUpdateBlockListResponseMigratedSuccessWithMismatch = m),
      (l.parseUpdateBlockListResponseServerError = p),
      (l.parseUpdateBlockListResponseSuccessWithMatch = _),
      (l.parseUpdateBlockListResponseSuccessWithMismatch = g),
      (l.makeUpdateBlockListRequest = C),
      (l.ENUM_LID_PN = b));
  },
  98,
);
