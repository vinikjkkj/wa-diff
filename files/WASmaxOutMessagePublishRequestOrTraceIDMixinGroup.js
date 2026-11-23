__d(
  "WASmaxOutMessagePublishRequestOrTraceIDMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishRequestIDMixin",
    "WASmaxOutMessagePublishTraceIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.requestID)
        return o("WASmaxOutMessagePublishRequestIDMixin").mergeRequestIDMixin(
          e,
          t.requestID,
        );
      if (t.traceID)
        return o("WASmaxOutMessagePublishTraceIDMixin").mergeTraceIDMixin(
          e,
          t.traceID,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeRequestOrTraceIDMixinGroup = e;
  },
  98,
);
