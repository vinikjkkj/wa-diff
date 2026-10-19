__d(
  "WASmaxBizMsgUserFeedbackUpdatePreferenceRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "UpdatePreferenceResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "UpdatePreferenceResponseInvalidRequest",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "UpdatePreferenceResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UpdatePreference", {
              Success: a,
              InvalidRequest: i,
              ServerError: l,
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
      var a = g(e, t);
      if (!a.success) return a;
      var i = y(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUpdatePreferenceReqErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = g(e, t);
      if (!a.success) return a;
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUpdatePreferenceServerErrors: i.value,
            }),
          )
        : i;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = h(e, t);
      return (r.success, r);
    }
    function m(e) {
      var t = _(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: t.value,
        });
      var n = f(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorFeatureNotImplemented", "IQErrorInternalServerError"],
            [t, n],
          );
    }
    function p(e) {
      var t,
        n = e.userFeedbackAction,
        r = e.userFeedbackJid,
        a = e.userFeedbackFeedback,
        i = o("WASmaxJsx").smax(
          "iq",
          {
            xmlns: "w:biz:msg_feedback",
            to: (t = o("WAWap")).S_WHATSAPP_NET,
            id: t.generateId(),
            type: "set",
          },
          o("WASmaxJsx").smax("user_feedback", {
            action: t.CUSTOM_STRING(n),
            jid: t.USER_JID(r),
            feedback: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          }),
        );
      return i;
    }
    function _(e) {
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
    function f(e) {
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
    function g(e, t) {
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
    function h(e, t) {
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
    function y(e) {
      var t = S(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: t.value,
        });
      var n = C(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = b(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: r.value,
        });
      var a = R(e);
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
    function C(e) {
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
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "forbidden",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        403,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "field");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "reason");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, reason: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "field", v);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-acceptable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        406,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            code: a.value,
            field: n.value,
          })
        : a;
    }
    function R(e) {
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
    ((l.sendUpdatePreferenceRPC = e),
      (l.parseUpdatePreferenceResponseInvalidRequest = u),
      (l.parseUpdatePreferenceResponseServerError = c),
      (l.parseUpdatePreferenceResponseSuccess = d),
      (l.parseUpdatePreferenceServerErrors = m),
      (l.makeUpdatePreferenceRequest = p),
      (l.parseIQErrorFeatureNotImplementedMixin = _),
      (l.parseIQErrorInternalServerErrorMixin = f),
      (l.parseIQErrorResponseMixin = g),
      (l.parseIQResultResponseMixin = h),
      (l.parseUpdatePreferenceReqErrors = y),
      (l.parseIQErrorBadRequestMixin = C),
      (l.parseIQErrorForbiddenMixin = b),
      (l.parseIQErrorNotAcceptableField = v),
      (l.parseIQErrorNotAcceptableMixin = S),
      (l.parseIQErrorRateOverlimitMixin = R));
  },
  98,
);
