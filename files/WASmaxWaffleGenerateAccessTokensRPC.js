__d(
  "WASmaxWaffleGenerateAccessTokensRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInWaffleIQErrorAlreadyExistsMixin",
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
              name: "GenerateAccessTokensResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GenerateAccessTokensResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateAccessTokens", {
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
              errorGenerateAccessTokensErrors: i.value,
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
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping_interval");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentInt(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(r.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pingIntervalElementValue: i.value,
                encryptionMetadataRSAEncryptionMetadataMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    function d(e) {
      var t,
        n =
          e.rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs,
        r = e.timestampElementValue,
        a = e.fbidElementValue,
        i = e.idSignElementValue,
        l = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(38),
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
            t.smax("id_sign", null, i),
          ),
        );
      return l;
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
        "WASmaxInWaffleIQErrorAlreadyExistsMixin",
      ).parseIQErrorAlreadyExistsMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorAlreadyExists",
          value: d.value,
        });
      var m = o(
        "WASmaxInWaffleIQErrorWFNotFoundMixin",
      ).parseIQErrorWFNotFoundMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFNotFound",
          value: m.value,
        });
      var p = o(
        "WASmaxInWaffleIQErrorWFStateMismatchMixin",
      ).parseIQErrorWFStateMismatchMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFStateMismatch",
          value: p.value,
        });
      var _ = o(
        "WASmaxInWaffleIQErrorWFNotAuthorizedInvalidPasswordMixin",
      ).parseIQErrorWFNotAuthorizedInvalidPasswordMixin(e);
      return _.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFNotAuthorizedInvalidPassword",
            value: _.value,
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
              "IQErrorAlreadyExists",
              "IQErrorWFNotFound",
              "IQErrorWFStateMismatch",
              "IQErrorWFNotAuthorizedInvalidPassword",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _],
          );
    }
    ((l.sendGenerateAccessTokensRPC = e),
      (l.parseGenerateAccessTokensResponseError = u),
      (l.parseGenerateAccessTokensResponseSuccess = c),
      (l.makeGenerateAccessTokensRequest = d),
      (l.parseGenerateAccessTokensErrors = m));
  },
  98,
);
