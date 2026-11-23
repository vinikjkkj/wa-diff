__d(
  "WASmaxWaffleStateExistsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInWaffleEnums",
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "StateExistsResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "StateExistsResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("StateExists", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
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
              errorStateExistsErrors: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "suspended_state");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "npr",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      return n.success ? o("WAResultOrError").makeResult({ npr: n.value }) : n;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "wf_state");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "suspended_state",
        u,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentInt(r.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ wfStateElementValue: i.value }, l.value, {
              suspendedState: a.value,
            }),
          )
        : l;
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
              smax_id: o("WAWap").INT(142),
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
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorNotAllowed",
            value: l.value,
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
            ],
            [t, n, r, a, i, l],
          );
    }
    ((l.sendStateExistsRPC = e),
      (l.parseStateExistsResponseError = s),
      (l.parseStateExistsResponseSuccess = c),
      (l.makeStateExistsRequest = d));
  },
  98,
);
