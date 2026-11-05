__d(
  "WASmaxMdCompanionHelloRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInMdIQErrorBadRequestMixin",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return {
              name: "CompanionHelloResponseNotifyCompanion",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return { name: "CompanionHelloResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionHello", {
              NotifyCompanion: a,
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
      var i = d(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorIqMixinErrors: i.value }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "link_code_companion_reg",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "link_code_pairing_ref",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "stage",
        "companion_hello",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytes(a.value);
      if (!l.success) return l;
      var s = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                linkCodeCompanionRegStage: i.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    function d(e) {
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
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = y(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotAvailable",
          value: r.value,
        });
      var a = b(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = C(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorForbidden",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorFeatureNotAvailable",
              "IQErrorRateOverlimit",
              "IQErrorForbidden",
            ],
            [t, n, r, a, i],
          );
    }
    function m(e) {
      var t = e.linkCodePairingNonceElementValue,
        n = o("WASmaxJsx").smax("link_code_pairing_nonce", null, t);
      return n;
    }
    function p(e) {
      var t,
        n = e.linkCodePairingNonceArgs,
        r = e.linkCodeCompanionRegShouldShowPushNotification,
        a = e.linkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroupArgs,
        i = e.linkCodePairingWrappedCompanionEphemeralPubElementValue,
        l = e.companionServerAuthKeyPubElementValue,
        s = e.companionPlatformIdElMixinArgs,
        u = e.companionPlatformDisplayElMixinArgs,
        c = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            { xmlns: "md", to: o("WAWap").S_WHATSAPP_NET },
            o(
              "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup",
            ).mergeLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup(
              t.smax(
                "link_code_companion_reg",
                {
                  stage: "companion_hello",
                  should_show_push_notification: o("WASmaxAttrs").OPTIONAL(
                    o("WAWap").CUSTOM_STRING,
                    r,
                  ),
                },
                t.smax(
                  "link_code_pairing_wrapped_companion_ephemeral_pub",
                  null,
                  i,
                ),
                t.smax("companion_server_auth_key_pub", null, l),
                h(t.smax("companion_platform_id", null), s),
                f(t.smax("companion_platform_display", null), u),
                o("WASmaxChildren").OPTIONAL_CHILD(m, n),
              ),
              a,
            ),
          ),
        );
      return c;
    }
    function _(e) {
      var t = e.companionPlatformDisplayElementValue,
        n = o("WASmaxJsx").smax("companion_platform_display", null, t);
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = e.companionPlatformIdElementValue,
        n = o("WASmaxJsx").smax("companion_platform_id", null, t);
      return n;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "feature-not-available",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        452,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function C(e) {
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
    function b(e) {
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
    ((l.sendCompanionHelloRPC = e),
      (l.parseCompanionHelloResponseError = u),
      (l.parseCompanionHelloResponseNotifyCompanion = c),
      (l.parseIqMixinErrors = d),
      (l.makeCompanionHelloRequestLinkCodeCompanionRegLinkCodePairingNonce = m),
      (l.makeCompanionHelloRequest = p),
      (l.mergeCompanionPlatformDisplayElMixin = f),
      (l.mergeCompanionPlatformIdElMixin = h),
      (l.parseIQErrorFeatureNotAvailableMixin = y),
      (l.parseIQErrorForbiddenMixin = C),
      (l.parseIQErrorRateOverlimitMixin = b));
  },
  98,
);
