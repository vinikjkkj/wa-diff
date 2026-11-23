__d(
  "WASmaxBlocklistsGetOptOutListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInBlocklistsBizOptOutResponseMixin",
    "WASmaxInBlocklistsGetBlocklistErrors",
    "WASmaxInBlocklistsIQErrorResponseMixin",
    "WASmaxInBlocklistsServerErrors",
    "WASmaxJsx",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = _(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success)
        return {
          name: "GetOptOutListResponseSuccessWithMismatch",
          value: a.value,
        };
      var i = c(r, n);
      if (i.success)
        return {
          name: "GetOptOutListResponseSuccessWithMatch",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return { name: "GetOptOutListResponseInvalidRequest", value: l.value };
      var d = s(r, n);
      if (d.success)
        return {
          name: "GetOptOutListResponseInternalServerError",
          value: d.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetOptOutList", {
          SuccessWithMismatch: a,
          SuccessWithMatch: i,
          InvalidRequest: l,
          InternalServerError: d,
        }),
      );
    }
    function s(e, t) {
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
    function u(e, t) {
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
    function c(e, t) {
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
      var l = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "category",
      ]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        u.value,
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            type: i.value,
            hasCategory: s.value != null,
          })
        : c;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBlocklistsBizOptOutResponseMixin",
      ).parseBizOptOutResponseMixin(e);
      return (n.success, n);
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
      var m = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        d,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: c.value,
            listItem: m.value,
          })
        : m;
    }
    function p(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function _(e) {
      var t = e.itemArgs,
        n = e.iqCategory,
        r = o("WASmaxJsx").smax(
          "iq",
          {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "optoutlist",
            type: "get",
            category: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
            id: o("WAWap").generateId(),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(p, t),
        );
      return r;
    }
    ((l.sendGetOptOutListRPC = e),
      (l.parseGetOptOutListResponseInternalServerError = s),
      (l.parseGetOptOutListResponseInvalidRequest = u),
      (l.parseGetOptOutListResponseSuccessWithMatch = c),
      (l.parseGetOptOutListResponseSuccessWithMismatch = m),
      (l.makeGetOptOutListRequest = _));
  },
  98,
);
