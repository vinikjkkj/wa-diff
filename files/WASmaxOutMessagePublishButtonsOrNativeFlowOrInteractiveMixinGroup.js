__d(
  "WASmaxOutMessagePublishButtonsOrNativeFlowOrInteractiveMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishButtonsMixin",
    "WASmaxOutMessagePublishInteractiveMixin",
    "WASmaxOutMessagePublishNativeFlowMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isButtons)
        return o("WASmaxOutMessagePublishButtonsMixin").mergeButtonsMixin(e);
      if (t.nativeFlow)
        return o("WASmaxOutMessagePublishNativeFlowMixin").mergeNativeFlowMixin(
          e,
          t.nativeFlow,
        );
      if (t.interactive)
        return o(
          "WASmaxOutMessagePublishInteractiveMixin",
        ).mergeInteractiveMixin(e, t.interactive);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeButtonsOrNativeFlowOrInteractiveMixinGroup = e;
  },
  98,
);
