__d(
  "WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutPushConfigSetClearMixin",
    "WASmaxOutPushConfigSetSetConfigMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.setSetConfig)
        return o("WASmaxOutPushConfigSetSetConfigMixin").mergeSetSetConfigMixin(
          e,
          t.setSetConfig,
        );
      if (t.setClear)
        return o("WASmaxOutPushConfigSetClearMixin").mergeSetClearMixin(
          e,
          t.setClear,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeSetSetConfigOrSetClearMixinGroup = e;
  },
  98,
);
