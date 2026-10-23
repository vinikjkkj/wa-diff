__d(
  "WASmaxWaffleGetCertificateRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorResponseMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
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
            return { name: "GetCertificateResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "GetCertificateResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetCertificate", {
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
      var a = o("WASmaxInWaffleIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetCertificateErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reply");
      if (!r.success) return r;
      var a = y(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { replyGetCertificateResponseMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d() {
      var e = o("WASmaxJsx").smax("payload_enc_certificates", null);
      return e;
    }
    function m() {
      var e = o("WASmaxJsx").smax("password_pem", null);
      return e;
    }
    function p(e) {
      var t = e.hasPayloadEncCertificates,
        n = e.hasPasswordPem,
        r = e.timestampElementValue,
        a = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(51),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(r)),
            o("WASmaxChildren").HAS_OPTIONAL_CHILD(d, t),
            o("WASmaxChildren").HAS_OPTIONAL_CHILD(m, n),
          ),
        );
      return a;
    }
    function _(e) {
      var t = o(
        "WASmaxInWaffleIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInWaffleIQErrorRequestTimeoutMixin",
      ).parseIQErrorRequestTimeoutMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRequestTimeout",
          value: n.value,
        });
      var r = o(
        "WASmaxInWaffleIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: r.value,
        });
      var a = o(
        "WASmaxInWaffleIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: a.value,
        });
      var i = o(
        "WASmaxInWaffleIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInWaffleIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: l.value,
        });
      var s = C(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRequestTimeout",
              "IQErrorNotAllowed",
              "IQErrorInternalServerError",
              "IQErrorRateOverlimit",
              "IQErrorServiceUnavailable",
              "IQErrorFeatureNotImplemented",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "encryption_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return r.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "signature_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return r.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "password_pem");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "key_id", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
      return a.success
        ? o("WAResultOrError").makeResult({
            ttl: n.value,
            keyId: r.value,
            elementValue: a.value,
          })
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "encryption_pem",
        f,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "signature_pem", g);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "password_pem", h);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "timestamp", 1, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            timestamp: a.value,
            encryptionPem: t.value,
            signaturePem: n.value,
            passwordPem: r.value,
          })
        : a;
    }
    function C(e) {
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
    ((l.sendGetCertificateRPC = e),
      (l.parseGetCertificateResponseError = u),
      (l.parseGetCertificateResponseSuccess = c),
      (l.makeGetCertificateRequestPayloadEncCertificates = d),
      (l.makeGetCertificateRequestPasswordPem = m),
      (l.makeGetCertificateRequest = p),
      (l.parseGetCertificateErrors = _),
      (l.parseGetCertificateResponseEncryptionPem = f),
      (l.parseGetCertificateResponseSignaturePem = g),
      (l.parseGetCertificateResponsePasswordPem = h),
      (l.parseGetCertificateResponseMixin = y),
      (l.parseIQErrorFeatureNotImplementedMixin = C));
  },
  98,
);
