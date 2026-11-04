__d(
  "WASmaxWaffleGenerateWAEntACUserRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
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
    "WASmaxInWaffleIQErrorWFNotFoundMixin",
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
          var n = g(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return {
              name: "GenerateWAEntACUserResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return { name: "GenerateWAEntACUserResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateWAEntACUser", {
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
              errorGenerateWaEntAcUserErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "wf_notif_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 64);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "encryption_metadata",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "wf_notif_id", c);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(r.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encryptionMetadataRSAEncryptionMetadataMixin: i.value },
              l.value,
              { wfNotifId: a.value },
            ),
          )
        : l;
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
      var _ = p(e);
      return _.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFJurisdictionGating",
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
              "IQErrorWFJurisdictionGating",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, _],
          );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "wf-jurisdiction-gating",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        418,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function _(e) {
      var t = e.sourceElementValue,
        n = o("WASmaxJsx").smax("source", null, o("WAWap").INT(t));
      return n;
    }
    function f(e) {
      var t = e.fbidElementValue,
        n = o("WASmaxJsx").smax("fbid", null, t);
      return n;
    }
    function g(e) {
      var t,
        n,
        r = e.sourceArgs,
        a = e.fbidArgs,
        i =
          e.rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs,
        l = e.timestampElementValue,
        s = e.disclosureId,
        u = e.disclosureVersion,
        c = e.disclosureLg,
        d = e.disclosureLc,
        m = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: (n = o("WAWap")).INT(37),
              to: n.S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
            ).mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup(
              t.smax("encryption_metadata", null),
              i,
            ),
            t.smax("timestamp", null, n.INT(l)),
            t.smax("disclosure", {
              id: n.INT(s),
              version: n.CUSTOM_STRING(u),
              lg: n.CUSTOM_STRING(c),
              lc: n.CUSTOM_STRING(d),
            }),
            o("WASmaxChildren").OPTIONAL_CHILD(_, r),
            o("WASmaxChildren").OPTIONAL_CHILD(f, a),
          ),
        );
      return m;
    }
    ((l.sendGenerateWAEntACUserRPC = e),
      (l.parseGenerateWAEntACUserResponseError = u),
      (l.parseGenerateWAEntACUserResponseSuccessWfNotifId = c),
      (l.parseGenerateWAEntACUserResponseSuccess = d),
      (l.parseGenerateWaEntAcUserErrors = m),
      (l.parseIQErrorWFJurisdictionGatingMixin = p),
      (l.makeGenerateWAEntACUserRequestSource = _),
      (l.makeGenerateWAEntACUserRequestFbid = f),
      (l.makeGenerateWAEntACUserRequest = g));
  },
  98,
);
