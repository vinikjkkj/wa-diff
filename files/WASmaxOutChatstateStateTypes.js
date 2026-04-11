__d(
  "WASmaxOutChatstateStateTypes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutChatstateComposingMixin",
    "WASmaxOutChatstatePausedMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.composing)
        return o("WASmaxOutChatstateComposingMixin").mergeComposingMixin(
          e,
          t.composing,
        );
      if (t.isPaused)
        return o("WASmaxOutChatstatePausedMixin").mergePausedMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStateTypes = e;
  },
  98,
);
