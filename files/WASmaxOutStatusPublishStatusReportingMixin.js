__d(
  "WASmaxOutStatusPublishStatusReportingMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishClientReportingTokenMixin",
    "WASmaxOutStatusPublishServerReportingTokenMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.serverReportingTokenMixinArgs,
        n = e.clientReportingTokenMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutStatusPublishClientReportingTokenMixin")
            .mergeClientReportingTokenMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishServerReportingTokenMixin")
              .mergeServerReportingTokenMixin,
            o("WASmaxJsx").smax("status", null),
            t,
          ),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusReportingMixin = s;
  },
  98,
);
