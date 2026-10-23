__d(
  "WASmaxWaffleRefreshAccessTokensRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorConflictMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorNotAuthorizedMixin",
    "WASmaxInWaffleIQErrorPayloadEncDecMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorResponseMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQErrorWFNotAuthorizedInvalidPasswordMixin",
    "WASmaxInWaffleIQErrorWFNotFoundMixin",
    "WASmaxInWaffleIQErrorWFStateMismatchMixin",
    "WASmaxInWaffleIQErrorWFSuspendedMixin",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxInWaffleRSAEncryptionMetadataMixin",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
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
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return {
              name: "RefreshAccessTokensResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return { name: "RefreshAccessTokensResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("RefreshAccessTokens", {
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
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorRefreshAccessTokensErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "encryption_metadata",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encryptionMetadataRSAEncryptionMetadataMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e) {
      var t,
        n =
          e.rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs,
        r = e.timestampElementValue,
        a = e.fbidElementValue,
        i = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(46),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
            ).mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup(
              t.smax("encryption_metadata", null),
              n,
            ),
            t.smax("timestamp", null, o("WAWap").INT(r)),
            t.smax("fbid", null, a),
          ),
        );
      return i;
    }
    function m(e) {
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
        "WASmaxInWaffleIQErrorPayloadEncDecMixin",
      ).parseIQErrorPayloadEncDecMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayloadEncDec",
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
        "WASmaxInWaffleIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: i.value,
        });
      var l = o(
        "WASmaxInWaffleIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: l.value,
        });
      var s = o(
        "WASmaxInWaffleIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: s.value,
        });
      var u = o(
        "WASmaxInWaffleIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: u.value,
        });
      var c = o("WASmaxInWaffleIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: c.value,
        });
      var d = o(
        "WASmaxInWaffleIQErrorWFNotFoundMixin",
      ).parseIQErrorWFNotFoundMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFNotFound",
          value: d.value,
        });
      var m = o(
        "WASmaxInWaffleIQErrorWFSuspendedMixin",
      ).parseIQErrorWFSuspendedMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFSuspended",
          value: m.value,
        });
      var _ = o(
        "WASmaxInWaffleIQErrorWFStateMismatchMixin",
      ).parseIQErrorWFStateMismatchMixin(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFStateMismatch",
          value: _.value,
        });
      var f = o(
        "WASmaxInWaffleIQErrorWFNotAuthorizedInvalidPasswordMixin",
      ).parseIQErrorWFNotAuthorizedInvalidPasswordMixin(e);
      if (f.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFNotAuthorizedInvalidPassword",
          value: f.value,
        });
      var g = p(e);
      return g.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFNotAuthorizedInvalidNonce",
            value: g.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRequestTimeout",
              "IQErrorPayloadEncDec",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorNotAuthorized",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorConflict",
              "IQErrorWFNotFound",
              "IQErrorWFSuspended",
              "IQErrorWFStateMismatch",
              "IQErrorWFNotAuthorizedInvalidPassword",
              "IQErrorWFNotAuthorizedInvalidNonce",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, _, f, g],
          );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "wf-not-authorized-invalid-nonce",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        417,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    ((l.sendRefreshAccessTokensRPC = e),
      (l.parseRefreshAccessTokensResponseError = u),
      (l.parseRefreshAccessTokensResponseSuccess = c),
      (l.makeRefreshAccessTokensRequest = d),
      (l.parseRefreshAccessTokensErrors = m),
      (l.parseIQErrorWFNotAuthorizedInvalidNonceMixin = p));
  },
  98,
);
