__d(
  "WAWebAwareWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAwareCategory",
    "WAWebWamEnumAwareEventName",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Aware: [
            7126,
            {
              awareCategory: [1, o("WAWebWamEnumAwareCategory").AWARE_CATEGORY],
              awareContext: [2, e.TYPES.STRING],
              awareDebounceCount: [16, e.TYPES.INTEGER],
              awareDestinationHash: [6, e.TYPES.INTEGER],
              awareDestinationName: [7, e.TYPES.STRING],
              awareDestinationProductArea: [8, e.TYPES.INTEGER],
              awareEventName: [
                3,
                o("WAWebWamEnumAwareEventName").AWARE_EVENT_NAME,
              ],
              awareMetadata: [4, e.TYPES.STRING],
              awareProcessId: [9, e.TYPES.INTEGER],
              awareScreenHash: [10, e.TYPES.INTEGER],
              awareScreenName: [11, e.TYPES.STRING],
              awareScreenProductArea: [12, e.TYPES.INTEGER],
              awareTargetTrackingHash: [13, e.TYPES.INTEGER],
              awareTargetTrackingId: [14, e.TYPES.STRING],
              awareTargetType: [15, e.TYPES.STRING],
              awareTimestampMs: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { Aware: [] },
      );
    l.AwareWamEvent = s;
  },
  98,
);
