__d(
  "WASmaxOutStatusPublishClientReportingTokenMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishReportingTokenElementMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reportingTokenElementMixinArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishReportingTokenElementMixin")
              .mergeReportingTokenElementMixin,
            o("WASmaxJsx").smax("reporting", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeClientReportingTokenMixin = s;
  },
  98,
);
