__d(
  "WASmaxOutSpamMessageFrankingMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamClientFrankingTagMixin",
    "WASmaxOutSpamRawV3Mixin",
    "WASmaxOutSpamServerFrankingTagMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutSpamRawV3Mixin").mergeRawV3Mixin(
        o("WASmaxJsx").smax("raw", null),
        e,
      );
      return t;
    }
    function s(t) {
      var n = t.rawArgs,
        r = t.clientFrankingTagMixinArgs,
        a = o(
          "WASmaxOutSpamServerFrankingTagMixin",
        ).mergeServerFrankingTagMixin(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutSpamClientFrankingTagMixin")
              .mergeClientFrankingTagMixin,
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxChildren").OPTIONAL_CHILD(e, n),
            ),
            r,
          ),
          t,
        );
      return a;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeMessageFrankingRaw = e), (l.mergeMessageFrankingMixin = u));
  },
  98,
);
