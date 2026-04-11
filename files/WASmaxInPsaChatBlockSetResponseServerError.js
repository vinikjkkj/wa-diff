__d(
  "WASmaxInPsaChatBlockSetResponseServerError",
  [
    "WAResultOrError",
    "WASmaxInPsaChatBlockError",
    "WASmaxInPsaIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInPsaIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o("WASmaxInPsaChatBlockError").parseChatBlockError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorChatBlockError: i.value }),
          )
        : i;
    }
    l.parseChatBlockSetResponseServerError = e;
  },
  98,
);
