__d(
  "WASmaxOutSpamWaMessageReportingMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamClientReportingContentValidationMixin",
    "WASmaxOutSpamRawV2Mixin",
    "WASmaxOutSpamServerReportingTokenMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutSpamRawV2Mixin").mergeRawV2Mixin(
        o("WASmaxJsx").smax("raw", null),
      );
      return e;
    }
    function s(t) {
      var n = t.hasRaw,
        r = t.clientReportingContentValidationMixinArgs,
        a = t.serverReportingTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamServerReportingTokenMixin")
            .mergeServerReportingTokenMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutSpamClientReportingContentValidationMixin")
              .mergeClientReportingContentValidationMixin,
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, n),
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeWaMessageReportingRaw = e), (l.mergeWaMessageReportingMixin = u));
  },
  98,
);
