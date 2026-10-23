__d(
  "WASmaxWaffleEncryptedPayloadRequestRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInWaffleEnums",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return {
              name: "EncryptedPayloadRequestResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "EncryptedPayloadRequestResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "EncryptedPayloadRequest",
              { Success: a, Error: i },
            ),
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
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorEncryptedPayloadRequestErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "wf_deleted");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentStringEnum(
        e,
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
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
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "wf_deleted", c);
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
              { wfDeleted: a.value },
            ),
          )
        : l;
    }
    function m(e) {
      var t = e.androidIdElementValue,
        n = o("WASmaxJsx").smax("android_id", null, t);
      return n;
    }
    function p(e) {
      var t = e.iosIdElementValue,
        n = o("WASmaxJsx").smax("ios_id", null, t);
      return n;
    }
    function _(e) {
      var t,
        n = e.androidIdArgs,
        r = e.iosIdArgs,
        a =
          e.rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs,
        i = e.timestampElementValue,
        l = e.fbidElementValue,
        s = e.actionElementValue,
        u = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(47),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
            ).mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup(
              t.smax("encryption_metadata", null),
              a,
            ),
            t.smax("timestamp", null, o("WAWap").INT(i)),
            t.smax("fbid", null, l),
            t.smax("action", null, s),
            o("WASmaxChildren").OPTIONAL_CHILD(m, n),
            o("WASmaxChildren").OPTIONAL_CHILD(p, r),
          ),
        );
      return u;
    }
    function f(e) {
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
      var p = o(
        "WASmaxInWaffleIQErrorWFStateMismatchMixin",
      ).parseIQErrorWFStateMismatchMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFStateMismatch",
            value: p.value,
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
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    ((l.sendEncryptedPayloadRequestRPC = e),
      (l.parseEncryptedPayloadRequestResponseError = u),
      (l.parseEncryptedPayloadRequestResponseSuccessWfDeleted = c),
      (l.parseEncryptedPayloadRequestResponseSuccess = d),
      (l.makeEncryptedPayloadRequestRequestAndroidId = m),
      (l.makeEncryptedPayloadRequestRequestIosId = p),
      (l.makeEncryptedPayloadRequestRequest = _),
      (l.parseEncryptedPayloadRequestErrors = f));
  },
  98,
);
