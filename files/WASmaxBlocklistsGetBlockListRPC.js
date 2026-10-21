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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = v(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = C(r, n);
          if (a.success)
            return {
              name: "GetBlockListResponseSuccessWithMismatch",
              value: a.value,
            };
          var i = g(r, n);
          if (i.success)
            return {
              name: "GetBlockListResponseMigratedSuccessWithMismatch",
              value: i.value,
            };
          var l = m(r, n);
          if (l.success)
            return {
              name: "GetBlockListResponseForceMigratedSuccessWithMismatch",
              value: l.value,
            };
          var s = c(r, n);
          if (s.success)
            return {
              name: "GetBlockListResponseCAPISuccessWithMismatch",
              value: s.value,
            };
          var u = h(r, n);
          if (u.success)
            return {
              name: "GetBlockListResponseSuccessWithMatch",
              value: u.value,
            };
          var d = _(r, n);
          if (d.success)
            return {
              name: "GetBlockListResponseInvalidRequest",
              value: d.value,
            };
          var f = p(r, n);
          if (f.success)
            return {
              name: "GetBlockListResponseInternalServerError",
              value: f.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetBlockList", {
              SuccessWithMismatch: a,
              MigratedSuccessWithMismatch: i,
              ForceMigratedSuccessWithMismatch: l,
              CAPISuccessWithMismatch: s,
              SuccessWithMatch: u,
              InvalidRequest: d,
              InternalServerError: f,
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
        u,
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
    function d(e) {
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
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!c.success) return c;
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
        d,
      );
      return _.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: c.value,
            listAddressingMode: m.value,
            listDirty: p.value,
            listItem: _.value,
          })
        : _;
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
    function f(e) {
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
        f,
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
    function h(e, t) {
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
    function y(e) {
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
    function C(e, t) {
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
        y,
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
    function b(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function v(e) {
      var t = e.itemArgs,
        n = o("WASmaxJsx").smax(
          "iq",
          {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "blocklist",
            type: "get",
            id: o("WAWap").generateId(),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(b, t),
        );
      return n;
    }
    ((l.sendGetBlockListRPC = e),
      (l.parseGetBlockListResponseCAPISuccessWithMismatchListItem = u),
      (l.parseGetBlockListResponseCAPISuccessWithMismatch = c),
      (l.parseGetBlockListResponseForceMigratedSuccessWithMismatchListItem = d),
      (l.parseGetBlockListResponseForceMigratedSuccessWithMismatch = m),
      (l.parseGetBlockListResponseInternalServerError = p),
      (l.parseGetBlockListResponseInvalidRequest = _),
      (l.parseGetBlockListResponseMigratedSuccessWithMismatchListItem = f),
      (l.parseGetBlockListResponseMigratedSuccessWithMismatch = g),
      (l.parseGetBlockListResponseSuccessWithMatch = h),
      (l.parseGetBlockListResponseSuccessWithMismatchListItem = y),
      (l.parseGetBlockListResponseSuccessWithMismatch = C),
      (l.makeGetBlockListRequestItem = b),
      (l.makeGetBlockListRequest = v));
  },
  98,
);
