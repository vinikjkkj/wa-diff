__d(
  "WASmaxMdCompanionFinishRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInMdIQErrorBadRequestMixin",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutMdBaseIQSetRequestMixin",
    "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup",
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
            return { name: "CompanionFinishResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "CompanionFinishResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionFinish", {
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
      var a = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCompanionFinishErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e) {
      var t,
        n = e.linkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroupArgs,
        r = e.linkCodePairingWrappedKeyBundleElementValue,
        a = e.companionIdentityPublicElementValue,
        i = e.linkCodePairingRefElementValue,
        l = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            { xmlns: "md", to: o("WAWap").S_WHATSAPP_NET },
            o(
              "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup",
            ).mergeLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup(
              t.smax(
                "link_code_companion_reg",
                { stage: "companion_finish" },
                t.smax("link_code_pairing_wrapped_key_bundle", null, r),
                t.smax("companion_identity_public", null, a),
                t.smax("link_code_pairing_ref", null, i),
              ),
              n,
            ),
          ),
        );
      return l;
    }
    function m(e) {
      var t = o(
        "WASmaxInMdIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o("WASmaxInMdIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorBadRequest",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorInternalServerError", "IQErrorBadRequest"],
            [t, n],
          );
    }
    ((l.sendCompanionFinishRPC = e),
      (l.parseCompanionFinishResponseError = u),
      (l.parseCompanionFinishResponseSuccess = c),
      (l.makeCompanionFinishRequest = d),
      (l.parseCompanionFinishErrors = m));
  },
  98,
);
