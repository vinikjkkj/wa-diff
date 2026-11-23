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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return {
          name: "CreateCustomPaymentMethodResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
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
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInBrPaymentIQErrorGenericResponseMixin",
      ).parseIQErrorGenericResponseMixin(e, t);
      return (r.success, r);
    }
    function u(e, t) {
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
    function c(e) {
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
                  m,
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
    function d(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        f(o("WASmaxJsx").smax("metadata_info", null), e),
      );
      return t;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function p(e) {
      var t = e.metadataKey,
        n = e.metadataValue,
        r = o("WASmaxJsx").smax("metadata", {
          key: o("WAWap").CUSTOM_STRING(t),
          value: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function _(e) {
      var t = e.metadataArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 5),
        );
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendCreateCustomPaymentMethodRPC = e),
      (l.parseCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason = s),
      (l.parseCreateCustomPaymentMethodResponseSuccess = u),
      (l.makeCreateCustomPaymentMethodRequest = c));
  },
  98,
);
