__d(
  "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInBrPaymentCustomPaymentMethodMixin",
    "WASmaxInBrPaymentIQErrorGenericResponseMixin",
    "WASmaxInBrPaymentIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBrPaymentSetIQMixin",
    "WASmaxOutBrPaymentSignedChallengeMixin",
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
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return {
              name: "CreateCustomPaymentMethodResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "CreateCustomPaymentMethodResponseIQErrorWithCodeAndReason",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CreateCustomPaymentMethod",
              { Success: a, IQErrorWithCodeAndReason: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "account");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "custom_payment_method",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, [
        "account",
        "action",
      ]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "action",
        i.value,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInBrPaymentCustomPaymentMethodMixin",
      ).parseCustomPaymentMethodMixin(a.value);
      if (!s.success) return s;
      var u = o(
        "WASmaxInBrPaymentIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { accountCustomPaymentMethodCustomPaymentMethodMixin: s.value },
              u.value,
            ),
          )
        : u;
    }
    function d(e) {
      var t,
        n = e.accountDeviceId,
        r = e.signedChallengeMixinArgs,
        a = e.customPaymentMethodType,
        i = e.customPaymentMethodUpdate,
        l = e.customPaymentMethodFlow,
        s = e.customPaymentMethodSource,
        u = e.customPaymentMethodMetaDataInfoMixinArgs,
        c = o("WASmaxOutBrPaymentSetIQMixin").mergeSetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutBrPaymentSignedChallengeMixin")
                .mergeSignedChallengeMixin,
              o("WASmaxJsx").smax(
                "account",
                {
                  action: "create-custom-payment-method",
                  device_id: (t = o("WAWap")).CUSTOM_STRING(n),
                  country: "BR",
                },
                o("WASmaxMixins").optionalMerge(
                  p,
                  o("WASmaxJsx").smax("custom_payment_method", {
                    type: t.CUSTOM_STRING(a),
                    update: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
                    flow: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, l),
                    source: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, s),
                  }),
                  u,
                ),
              ),
              r,
            ),
          ),
        );
      return c;
    }
    function m(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        g(o("WASmaxJsx").smax("metadata_info", null), e),
      );
      return t;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _(e) {
      var t = e.metadataKey,
        n = e.metadataValue,
        r = o("WASmaxJsx").smax("metadata", {
          key: o("WAWap").CUSTOM_STRING(t),
          value: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function f(e) {
      var t = e.metadataArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxChildren").REPEATED_CHILD(_, t, 1, 5),
        );
      return n;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendCreateCustomPaymentMethodRPC = e),
      (l.parseCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason = u),
      (l.parseCreateCustomPaymentMethodResponseSuccess = c),
      (l.makeCreateCustomPaymentMethodRequest = d));
  },
  98,
);
