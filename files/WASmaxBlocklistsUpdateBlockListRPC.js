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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = b(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = f(r, n);
          if (a.success)
            return {
              name: "UpdateBlockListResponseSuccessWithMatch",
              value: a.value,
            };
          var i = h(r, n);
          if (i.success)
            return {
              name: "UpdateBlockListResponseSuccessWithMismatch",
              value: i.value,
            };
          var l = p(r, n);
          if (l.success)
            return {
              name: "UpdateBlockListResponseMigratedSuccessWithMismatch",
              value: l.value,
            };
          var s = c(r, n);
          if (s.success)
            return {
              name: "UpdateBlockListResponseCAPISuccessWithMismatch",
              value: s.value,
            };
          var u = d(r, n);
          if (u.success)
            return {
              name: "UpdateBlockListResponseInvalidRequest",
              value: u.value,
            };
          var m = _(r, n);
          if (m.success)
            return {
              name: "UpdateBlockListResponseServerError",
              value: m.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateBlockList", {
              SuccessWithMatch: a,
              SuccessWithMismatch: i,
              MigratedSuccessWithMismatch: l,
              CAPISuccessWithMismatch: s,
              InvalidRequest: u,
              ServerError: m,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    function c(e, t) {
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
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
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
        u,
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
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "addressing_mode",
        v,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInBlocklistsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!i.success) return i;
      var l = y(r.value);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ errorAddressingMode: a.value }, i.value, {
              errorUpdateBlocklistErrors: l.value,
            }),
          )
        : l;
    }
    function m(e) {
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
    function p(e, t) {
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
      var p = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "c_dhash",
        d.value,
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
        m,
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
    function _(e, t) {
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
    function f(e, t) {
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
    function g(e) {
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
    function h(e, t) {
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
      var f = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        g,
      );
      return f.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listMatched: c.value,
            hasListCDhash: m.value != null,
            listDhash: p.value,
            listAddressingMode: _.value,
            listItem: f.value,
          })
        : f;
    }
    function y(e) {
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
      var i = S(e);
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
    function C(e) {
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
    function b(e) {
      var t = e.bizOptOutArgs,
        n = e.updateBlockListReportBlockEntryPointMixinArgs,
        r = e.itemDhash,
        a = e.updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs,
        i = o("WASmaxMixins").optionalMerge(
          E,
          o("WASmaxJsx").smax(
            "iq",
            {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "blocklist",
              type: "set",
              id: o("WAWap").generateId(),
            },
            R(
              o("WASmaxJsx").smax(
                "item",
                {
                  dhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(C, t),
              ),
              a,
            ),
          ),
          n,
        );
      return i;
    }
    var v = { lid: "lid", pn: "pn" };
    function S(e) {
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
    function R(e, t) {
      if (t.updateBlockListBlockItem) return D(e, t.updateBlockListBlockItem);
      if (t.updateBlockListUnblockItem)
        return I(e, t.updateBlockListUnblockItem);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function L(e) {
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
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", {
          action: "unblock",
          jid: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t =
          e.updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs,
        n = x(o("WASmaxJsx").smax("item", { action: "block" }), t);
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e, t) {
      if (t.updateBlockListMigratedBlockItem)
        return P(e, t.updateBlockListMigratedBlockItem);
      if (t.updateBlockListNonMigratedBlockItem)
        return M(e, t.updateBlockListNonMigratedBlockItem);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function $(e) {
      var t = e.itemJid,
        n = A(o("WASmaxJsx").smax("item", { jid: o("WAWap").JID(t) }), e);
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.anyCountryCode,
        n = e.blocklistIdsArgs,
        r = F(
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
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e, t) {
      if (t.username) return j(e, t.username);
      if (t.pnJid) return V(e, t.pnJid);
      if (t.guestNameAndDisplayName) return B(e, t.guestNameAndDisplayName);
      if (t.displayName) return Q(e, t.displayName);
      if (t.guestName) return q(e, t.guestName);
      if (t.isUnknownIdentifier) return G(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function O(e) {
      var t = q(Q(o("WASmaxJsx").smax("smax$any", null), e), e);
      return t;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W(e) {
      var t = e.anyGuestName,
        n = o("WASmaxJsx").smax("smax$any", {
          guest_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function q(e, t) {
      var n = W(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function U(e) {
      var t = e.anyPnJid,
        n = o("WASmaxJsx").smax("smax$any", { pn_jid: o("WAWap").JID(t) });
      return n;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H() {
      var e = o("WASmaxJsx").smax("smax$any", { unknown_identifier: "true" });
      return e;
    }
    function G(e) {
      var t = H();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function z(e) {
      var t = e.anyUsername,
        n = o("WASmaxJsx").smax("smax$any", {
          username: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function j(e, t) {
      var n = z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function K(e) {
      var t = e.anyDisplayName,
        n = o("WASmaxJsx").smax("smax$any", {
          display_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function Q(e, t) {
      var n = K(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendUpdateBlockListRPC = e),
      (l.parseUpdateBlockListResponseCAPISuccessWithMismatchListItem = u),
      (l.parseUpdateBlockListResponseCAPISuccessWithMismatch = c),
      (l.parseUpdateBlockListResponseInvalidRequest = d),
      (l.parseUpdateBlockListResponseMigratedSuccessWithMismatchListItem = m),
      (l.parseUpdateBlockListResponseMigratedSuccessWithMismatch = p),
      (l.parseUpdateBlockListResponseServerError = _),
      (l.parseUpdateBlockListResponseSuccessWithMatch = f),
      (l.parseUpdateBlockListResponseSuccessWithMismatchListItem = g),
      (l.parseUpdateBlockListResponseSuccessWithMismatch = h),
      (l.parseUpdateBlocklistErrors = y),
      (l.makeUpdateBlockListRequestItemBizOptOut = C),
      (l.makeUpdateBlockListRequest = b),
      (l.ENUM_LID_PN = v),
      (l.parseIQErrorNotAllowedMixin = S),
      (l.mergeUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup = R),
      (l.mergeUpdateBlockListReportBlockEntryPointMixin = E),
      (l.mergeUpdateBlockListUnblockItemMixin = I),
      (l.mergeUpdateBlockListBlockItemMixin = D),
      (l.mergeUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup =
        x),
      (l.mergeUpdateBlockListMigratedBlockItemMixin = P),
      (l.mergeUpdateBlockListNonMigratedBlockItemMixin = M),
      (l.mergeBlocklistIdentifierMixin = A),
      (l.mergeBlocklistIds = F),
      (l.mergeGuestNameAndDisplayNameMixin = B),
      (l.mergeGuestNameMixin = q),
      (l.mergePnJidMixin = V),
      (l.mergeUnknownIdentifierMixin = G),
      (l.mergeUsernameMixin = j),
      (l.mergeDisplayNameMixin = Q));
  },
  98,
);
