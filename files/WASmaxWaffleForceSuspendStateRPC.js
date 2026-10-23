__d(
  "WASmaxWaffleForceSuspendStateRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorConflictMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorResponseMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQErrorWFNotFoundMixin",
    "WASmaxInWaffleIQErrorWFStateMismatchMixin",
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
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "ForceSuspendStateResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "ForceSuspendStateResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ForceSuspendState", {
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
              errorForceSuspendStateErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "npr");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentStringEnum(
        r.value,
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ nprElementValue: a.value }, i.value),
          )
        : i;
    }
    function d(e) {
      var t = e.timestampElementValue,
        n = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(84),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(t)),
          ),
        );
      return n;
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
        "WASmaxInWaffleIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: r.value,
        });
      var a = o(
        "WASmaxInWaffleIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
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
        "WASmaxInWaffleIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: l.value,
        });
      var s = o("WASmaxInWaffleIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: s.value,
        });
      var u = o(
        "WASmaxInWaffleIQErrorWFNotFoundMixin",
      ).parseIQErrorWFNotFoundMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFNotFound",
          value: u.value,
        });
      var c = o(
        "WASmaxInWaffleIQErrorWFStateMismatchMixin",
      ).parseIQErrorWFStateMismatchMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFStateMismatch",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRequestTimeout",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorConflict",
              "IQErrorWFNotFound",
              "IQErrorWFStateMismatch",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    ((l.sendForceSuspendStateRPC = e),
      (l.parseForceSuspendStateResponseError = u),
      (l.parseForceSuspendStateResponseSuccess = c),
      (l.makeForceSuspendStateRequest = d),
      (l.parseForceSuspendStateErrors = m));
  },
  98,
);
