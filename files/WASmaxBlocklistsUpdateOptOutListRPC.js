__d(
  "WASmaxBlocklistsUpdateOptOutListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInBlocklistsBizOptOutResponseMixin",
    "WASmaxInBlocklistsIQErrorBadRequestMixin",
    "WASmaxInBlocklistsIQErrorForbiddenMixin",
    "WASmaxInBlocklistsIQErrorNotAcceptableMixin",
    "WASmaxInBlocklistsIQErrorRateOverlimitMixin",
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
      var n = f(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return {
          name: "UpdateOptOutListResponseSuccessWithMatch",
          value: a.value,
        };
      var i = p(r, n);
      if (i.success)
        return {
          name: "UpdateOptOutListResponseSuccessWithMismatch",
          value: i.value,
        };
      var l = s(r, n);
      if (l.success)
        return {
          name: "UpdateOptOutListResponseInvalidRequest",
          value: l.value,
        };
      var c = u(r, n);
      if (c.success)
        return { name: "UpdateOptOutListResponseServerError", value: c.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateOptOutList", {
          SuccessWithMatch: a,
          SuccessWithMismatch: i,
          InvalidRequest: l,
          ServerError: c,
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
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUpdateOptoutErrors: i.value,
            }),
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
      var i = o("WASmaxInBlocklistsServerErrors").parseServerErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorServerErrors: i.value }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBlocklistsBizOptOutResponseMixin",
      ).parseBizOptOutResponseMixin(e);
      return (n.success, n);
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "item", c);
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!u.success) return u;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        u.value,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "true",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrString(r.value, "dhash");
      return p.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            listMatched: m.value,
            listDhash: p.value,
            listItem: a.value,
          })
        : p;
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
      var f = o("WASmaxParseUtils").optionalLiteral(
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
    function _(e) {
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
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorNotAcceptable",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a],
          );
    }
    function f(e) {
      var t,
        n,
        r = e.itemJid,
        a = e.itemCategory,
        i = e.itemAction,
        l = e.itemDhash,
        s = e.itemReason,
        u = e.itemEntryPoint,
        c = e.itemSignupId,
        d = e.itemDuration,
        m = o("WASmaxJsx").smax(
          "iq",
          {
            to: (t = o("WAWap")).S_WHATSAPP_NET,
            xmlns: "optoutlist",
            type: "set",
            id: t.generateId(),
          },
          o("WASmaxJsx").smax("item", {
            jid: t.USER_JID(r),
            category: t.CUSTOM_STRING(a),
            action: t.CUSTOM_STRING(i),
            dhash: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, l),
            reason: n.OPTIONAL(t.CUSTOM_STRING, s),
            entry_point: n.OPTIONAL(t.CUSTOM_STRING, u),
            signup_id: n.OPTIONAL(t.CUSTOM_STRING, c),
            duration: n.OPTIONAL(t.INT, d),
          }),
        );
      return m;
    }
    ((l.sendUpdateOptOutListRPC = e),
      (l.parseUpdateOptOutListResponseInvalidRequest = s),
      (l.parseUpdateOptOutListResponseServerError = u),
      (l.parseUpdateOptOutListResponseSuccessWithMatch = d),
      (l.parseUpdateOptOutListResponseSuccessWithMismatch = p),
      (l.makeUpdateOptOutListRequest = f));
  },
  98,
);
