__d(
  "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "passkey_request_options",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMdPasskeyRequestOptionsMixin",
      ).parsePasskeyRequestOptionsMixin(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { passkeyRequestOptionsPasskeyRequestOptionsMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGetPasskeyRequestOptionsResponseSuccess = e;
  },
  98,
);
