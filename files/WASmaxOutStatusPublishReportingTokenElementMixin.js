__d(
  "WASmaxOutStatusPublishReportingTokenElementMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reportingTokenV,
        n = e.reportingTokenElementValue,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "reporting_token",
            { v: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t) },
            n,
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeReportingTokenElementMixin = s;
  },
  98,
);
