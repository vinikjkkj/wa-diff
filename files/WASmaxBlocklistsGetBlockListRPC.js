__d(
  "WASmaxBlocklistsGetBlockListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInBlocklistsBlocklistIdentifierMixin",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxInBlocklistsGetBlocklistErrors",
    "WASmaxInBlocklistsIQErrorResponseMixin",
    "WASmaxInBlocklistsServerErrors",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = b(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = y(r, n);
      if (a.success)
        return {
          name: "GetBlockListResponseSuccessWithMismatch",
          value: a.value,
        };
      var i = f(r, n);
      if (i.success)
        return {
          name: "GetBlockListResponseMigratedSuccessWithMismatch",
          value: i.value,
        };
      var l = d(r, n);
      if (l.success)
        return {
          name: "GetBlockListResponseForceMigratedSuccessWithMismatch",
          value: l.value,
        };
      var s = u(r, n);
      if (s.success)
        return {
          name: "GetBlockListResponseCAPISuccessWithMismatch",
          value: s.value,
        };
      var c = g(r, n);
      if (c.success)
        return { name: "GetBlockListResponseSuccessWithMatch", value: c.value };
      var _ = p(r, n);
      if (_.success)
        return { name: "GetBlockListResponseInvalidRequest", value: _.value };
      var h = m(r, n);
      if (h.success)
        return {
          name: "GetBlockListResponseInternalServerError",
          value: h.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetBlockList", {
          SuccessWithMismatch: a,
          MigratedSuccessWithMismatch: i,
          ForceMigratedSuccessWithMismatch: l,
          CAPISuccessWithMismatch: s,
          SuccessWithMatch: c,
          InvalidRequest: _,
          InternalServerError: h,
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
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        s,
      );
      return p.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: d.value,
            listAddressingMode: m.value,
            listItem: p.value,
          })
        : p;
    }
    function c(e) {
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
    function d(e, t) {
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
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dirty",
        "true",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        c,
      );
      return _.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: d.value,
            listAddressingMode: m.value,
            listDirty: p.value,
            listItem: _.value,
          })
        : _;
    }
    function m(e, t) {
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
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBlocklistsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInBlocklistsGetBlocklistErrors").parseGetBlocklistErrors(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetBlocklistErrors: i.value,
            }),
          )
        : i;
    }
    function _(e) {
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
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "lid",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        _,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: c.value,
            listAddressingMode: d.value,
            listItem: m.value,
          })
        : m;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      return s.success ? o("WAResultOrError").makeResult({ type: i.value }) : s;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "lid",
      );
      if (!r.success) return r;
      var a = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        lid: r.value,
        displayNameMixin: a.success ? a.value : null,
      });
    }
    function y(e, t) {
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
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "addressing_mode",
        "pn",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        h,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: c.value,
            listAddressingMode: d.value,
            listItem: m.value,
          })
        : m;
    }
    function C(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function b(e) {
      var t = e.itemArgs,
        n = o("WASmaxJsx").smax(
          "iq",
          {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "blocklist",
            type: "get",
            id: o("WAWap").generateId(),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(C, t),
        );
      return n;
    }
    ((l.sendGetBlockListRPC = e),
      (l.parseGetBlockListResponseCAPISuccessWithMismatch = u),
      (l.parseGetBlockListResponseForceMigratedSuccessWithMismatch = d),
      (l.parseGetBlockListResponseInternalServerError = m),
      (l.parseGetBlockListResponseInvalidRequest = p),
      (l.parseGetBlockListResponseMigratedSuccessWithMismatch = f),
      (l.parseGetBlockListResponseSuccessWithMatch = g),
      (l.parseGetBlockListResponseSuccessWithMismatch = y),
      (l.makeGetBlockListRequest = b));
  },
  98,
);
