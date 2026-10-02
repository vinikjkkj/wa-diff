__d(
  "WASmaxOutKeyTransparencySingleSerializedLookupMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutKeyTransparencyADVOrDeviceKeyMixinGroup",
    "WASmaxOutKeyTransparencyAuditorSelectionMixin",
    "WASmaxOutKeyTransparencyLabelOrUserLabelLabelMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasAuditorSelection,
        n = e.labelOrUserLabelLabelMixinGroupArgs,
        r = e.aDVOrDeviceKeyMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutKeyTransparencyADVOrDeviceKeyMixinGroup")
            .mergeADVOrDeviceKeyMixinGroup,
          o(
            "WASmaxOutKeyTransparencyLabelOrUserLabelLabelMixinGroup",
          ).mergeLabelOrUserLabelLabelMixinGroup(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutKeyTransparencyAuditorSelectionMixin")
                .mergeAuditorSelectionMixin,
              o("WASmaxJsx").smax("single_serialized_lookup", null),
              t,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSingleSerializedLookupMixin = s;
  },
  98,
);
