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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = f(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = p(r, n);
          if (a.success)
            return {
              name: "GetOptOutListResponseSuccessWithMismatch",
              value: a.value,
            };
          var i = d(r, n);
          if (i.success)
            return {
              name: "GetOptOutListResponseSuccessWithMatch",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetOptOutListResponseInvalidRequest",
              value: l.value,
            };
          var s = u(r, n);
          if (s.success)
            return {
              name: "GetOptOutListResponseInternalServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetOptOutList", {
              SuccessWithMismatch: a,
              SuccessWithMatch: i,
              InvalidRequest: l,
              InternalServerError: s,
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
    function c(e, t) {
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
    function d(e, t) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBlocklistsBizOptOutResponseMixin",
      ).parseBizOptOutResponseMixin(e);
      return (n.success, n);
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
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "dhash",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        64e3,
        m,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            listDhash: c.value,
            listItem: d.value,
          })
        : d;
    }
    function _(e) {
      var t = e.itemDhash,
        n = o("WASmaxJsx").smax("item", { dhash: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function f(e) {
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
          o("WASmaxChildren").OPTIONAL_CHILD(_, t),
        );
      return r;
    }
    ((l.sendGetOptOutListRPC = e),
      (l.parseGetOptOutListResponseInternalServerError = u),
      (l.parseGetOptOutListResponseInvalidRequest = c),
      (l.parseGetOptOutListResponseSuccessWithMatch = d),
      (l.parseGetOptOutListResponseSuccessWithMismatchListItem = m),
      (l.parseGetOptOutListResponseSuccessWithMismatch = p),
      (l.makeGetOptOutListRequestItem = _),
      (l.makeGetOptOutListRequest = f));
  },
  98,
);
