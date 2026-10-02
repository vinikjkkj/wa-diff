__d(
  "WASmaxOutKeyTransparencyMultiSerializedLookupRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin",
    "WASmaxOutKeyTransparencySingleSerializedLookupMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutKeyTransparencySingleSerializedLookupMixin",
      ).mergeSingleSerializedLookupMixin(
        o("WASmaxJsx").smax("single_serialized_lookup", null),
        e,
      );
      return t;
    }
    function s(t) {
      var n = t.singleSerializedLookupArgs,
        r = t.multiSerializedLookupVersion,
        a = o(
          "WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin",
        ).mergeKeyTransparencyGetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            [
              o("WASmaxJsx").smax("multi_serialized_lookup", {
                version: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
              }),
            ].concat(o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 2)),
          ),
        );
      return a;
    }
    ((l.makeMultiSerializedLookupRequestSingleSerializedLookup = e),
      (l.makeMultiSerializedLookupRequest = s));
  },
  98,
);
