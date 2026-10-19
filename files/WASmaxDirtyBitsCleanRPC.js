__d(
  "WASmaxDirtyBitsCleanRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "CleanResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success) return { name: "CleanResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Clean", {
              Success: a,
              Error: i,
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
      var a = d(e, t);
      if (!a.success) return a;
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCleanErrorTypes: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = m(e, t);
      return (r.success, r);
    }
    function d(e, t) {
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
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function m(e, t) {
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
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function p(e) {
      var t = e.typeCleanOrCleanWithTimestampMixinGroupArgs,
        n = v(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "urn:xmpp:whatsapp:dirty" },
            _(o("WASmaxJsx").smax("clean", null), t),
          ),
        );
      return n;
    }
    function _(e, t) {
      if (t.cleanType) return R(e, t.cleanType);
      if (t.cleanTypeWithTimestamp) return E(e, t.cleanTypeWithTimestamp);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
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
      var r = C(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = y(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
              "IQErrorInternalServerError",
            ],
            [t, n, r, a],
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
    function b() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function v(e) {
      var t = b();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function S(e) {
      var t = e.cleanType,
        n = e.cleanTimestamp,
        r = o("WASmaxJsx").smax("clean", {
          type: o("WAWap").CUSTOM_STRING(t),
          timestamp: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = e.cleanTimestamp,
        n = o("WASmaxJsx").smax("clean", {
          type: "syncd_app_state",
          timestamp: o("WAWap").INT(t),
        });
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendCleanRPC = e),
      (l.parseCleanResponseError = u),
      (l.parseCleanResponseSuccess = c),
      (l.parseIQErrorResponseMixin = d),
      (l.parseIQResultResponseMixin = m),
      (l.makeCleanRequest = p),
      (l.mergeTypeCleanOrCleanWithTimestampMixinGroup = _),
      (l.parseCleanErrorTypes = f),
      (l.parseIQErrorBadRequestMixin = g),
      (l.parseIQErrorFeatureNotImplementedMixin = h),
      (l.parseIQErrorInternalServerErrorMixin = y),
      (l.parseIQErrorServiceUnavailableMixin = C),
      (l.mergeBaseIQSetRequestMixin = v),
      (l.mergeCleanTypeMixin = R),
      (l.mergeCleanTypeWithTimestampMixin = E));
  },
  98,
);
