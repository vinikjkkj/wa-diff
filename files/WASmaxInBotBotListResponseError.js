__d(
  "WASmaxInBotBotListResponseError",
  [
    "WAResultOrError",
    "WASmaxInBotBotListErrors",
    "WASmaxInBotIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInBotIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o("WASmaxInBotBotListErrors").parseBotListErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorBotListErrors: i.value }),
          )
        : i;
    }
    l.parseBotListResponseError = e;
  },
  98,
);
