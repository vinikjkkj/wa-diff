__d(
  "WASmaxPrivatestatsSignCredentialRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return { name: "SignCredentialResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "SignCredentialResponseErrorNoRetry",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return { name: "SignCredentialResponseErrorRetry", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SignCredential", {
              Success: a,
              ErrorNoRetry: i,
              ErrorRetry: l,
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
      var a = h(e, t);
      if (!a.success) return a;
      var i = C(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSignCredentialNoRetryError: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = g(r.value);
      if (!a.success) return a;
      var i = h(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "config_id");
      if (!t.success) return t;
      var n = f(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            emptyConfigIdOrNonEmptyConfigIdEmptyConfigIdMixinGroup: n.value,
          })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "sign_credential");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "signed_credential",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "acs_public_key",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "dleq_proof",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").flattenedChildWithTag(l.value, "c");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").flattenedChildWithTag(l.value, "s");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "project_name",
      );
      if (!c.success) return c;
      var m = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "config_id",
        d,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        p.value,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        g.value,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrIntRange(r.value, "t", 0, void 0);
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").contentBytesRange(a.value, 32, 32);
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").contentBytesRange(i.value, 32, 32);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").contentBytesRange(s.value, 32, 32);
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").contentBytesRange(u.value, 32, 32);
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").contentString(c.value);
      return R.success
        ? o("WAResultOrError").makeResult({
            type: f.value,
            signCredentialT: y.value,
            signCredentialSignedCredentialElementValue: C.value,
            signCredentialAcsPublicKeyElementValue: b.value,
            signCredentialDleqProofCElementValue: v.value,
            signCredentialDleqProofSElementValue: S.value,
            signCredentialProjectNameElementValue: R.value,
            signCredentialConfigId: m.value,
          })
        : R;
    }
    function p(e) {
      var t = e.configIdElementValue,
        n = o("WASmaxJsx").smax("config_id", null, t);
      return n;
    }
    function _(e) {
      var t,
        n = e.configIdArgs,
        r = e.blindedCredentialElementValue,
        a = e.projectNameElementValue,
        i = (t = o("WASmaxJsx")).smax(
          "iq",
          {
            xmlns: "privatestats",
            id: o("WAWap").generateId(),
            type: "get",
            to: o("WAWap").S_WHATSAPP_NET,
          },
          t.smax(
            "sign_credential",
            { version: "2" },
            t.smax("blinded_credential", null, r),
            t.smax("project_name", null, a),
            o("WASmaxChildren").OPTIONAL_CHILD(p, n),
          ),
        );
      return i;
    }
    function f(e) {
      var t = b(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EmptyConfigId",
          value: t.value,
        });
      var n = y(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonEmptyConfigId",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EmptyConfigId", "NonEmptyConfigId"],
            [t, n],
          );
    }
    function g(e) {
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
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "config_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function C(e) {
      var t = v(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = S(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = R(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r],
          );
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "config_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 0, 0);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
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
    ((l.sendSignCredentialRPC = e),
      (l.parseSignCredentialResponseErrorNoRetry = u),
      (l.parseSignCredentialResponseErrorRetry = c),
      (l.parseSignCredentialResponseSuccessSignCredentialConfigId = d),
      (l.parseSignCredentialResponseSuccess = m),
      (l.makeSignCredentialRequestSignCredentialConfigId = p),
      (l.makeSignCredentialRequest = _),
      (l.parseEmptyConfigIdOrNonEmptyConfigIdEmptyConfigIdMixinGroup = f),
      (l.parseIQErrorInternalServerErrorMixin = g),
      (l.parseIQErrorResponseMixin = h),
      (l.parseNonEmptyConfigIdMixin = y),
      (l.parseSignCredentialNoRetryError = C),
      (l.parseEmptyConfigIdMixin = b),
      (l.parseIQErrorBadRequestMixin = v),
      (l.parseIQErrorFeatureNotImplementedMixin = S),
      (l.parseIQErrorServiceUnavailableMixin = R));
  },
  98,
);
