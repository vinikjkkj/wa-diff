__d(
  "WASmaxInChatstateStateTypes",
  [
    "WAResultOrError",
    "WASmaxInChatstateComposingMixin",
    "WASmaxInChatstatePausedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInChatstateComposingMixin").parseComposingMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Composing",
          value: t.value,
        });
      var n = o("WASmaxInChatstatePausedMixin").parsePausedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Paused", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Composing", "Paused"],
            [t, n],
          );
    }
    l.parseStateTypes = e;
  },
  98,
);
