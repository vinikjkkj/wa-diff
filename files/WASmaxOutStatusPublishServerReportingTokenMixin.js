__d(
  "WASmaxOutStatusPublishServerReportingTokenMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishReportingTagElementMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o(
          "WASmaxOutStatusPublishReportingTagElementMixin",
        ).mergeReportingTagElementMixin(
          o("WASmaxJsx").smax("reporting", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeServerReportingTokenMixin = s;
  },
  98,
);
