__d(
  "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseError",
  [
    "WAResultOrError",
    "WASmaxInSmbMeteredMessagingAccountGetSmbMeteredMessagingCheckoutIqErrors",
    "WASmaxInSmbMeteredMessagingAccountHackBaseIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInSmbMeteredMessagingAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInSmbMeteredMessagingAccountGetSmbMeteredMessagingCheckoutIqErrors",
      ).parseGetSmbMeteredMessagingCheckoutIqErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetSmbMeteredMessagingCheckoutIqErrors: i.value,
            }),
          )
        : i;
    }
    l.parseGetSMBMeteredMessagingCheckoutResponseError = e;
  },
  98,
);
