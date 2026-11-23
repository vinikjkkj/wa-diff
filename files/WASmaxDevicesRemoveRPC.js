__d(
  "WASmaxDevicesRemoveRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInDevicesIQErrorBadRequestMixin",
    "WASmaxInDevicesIQErrorItemNotFoundMixin",
    "WASmaxInDevicesIQErrorResponseMixin",
    "WASmaxInDevicesIQResultResponseMixin",
    "WASmaxInDevicesRetryableIQErrorMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutDevicesBaseIQSetRequestMixin",
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
      if (a.success) return { name: "RemoveResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "RemoveResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Remove", {
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
      var a = o(
        "WASmaxInDevicesIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = d(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorRemoveDeviceErrors: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInDevicesIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function c(e) {
      var t = e.removeId,
        n = e.identityKeyMixinArgs,
        r = o(
          "WASmaxOutDevicesBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "fbid:devices" },
            p(o("WASmaxJsx").smax("remove", { id: o("WAWap").INT(t) }), n),
          ),
        );
      return r;
    }
    function d(e) {
      var t = o(
        "WASmaxInDevicesRetryableIQErrorMixin",
      ).parseRetryableIQErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RetryableIQError",
          value: t.value,
        });
      var n = g(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonRetryableRemoveDeviceIQError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RetryableIQError", "NonRetryableRemoveDeviceIQError"],
            [t, n],
          );
    }
    function m(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        f(o("WASmaxJsx").smax("identity", null), e),
      );
      return t;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = h(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            removeDeviceNonRetryableErrors: n.value,
          })
        : n;
    }
    function h(e) {
      var t = o(
        "WASmaxInDevicesIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInDevicesIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorItemNotFound",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorBadRequest", "IQErrorItemNotFound"],
            [t, n],
          );
    }
    ((l.sendRemoveRPC = e),
      (l.parseRemoveResponseError = s),
      (l.parseRemoveResponseSuccess = u),
      (l.makeRemoveRequest = c));
  },
  98,
);
