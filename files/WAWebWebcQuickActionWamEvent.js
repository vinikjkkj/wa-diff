__d(
  "WAWebWebcQuickActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcQuickActionEventType",
    "WAWebWamEnumWebcQuickActionId",
    "WAWebWamEnumWebcQuickActionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcQuickAction: [
            8326,
            {
              webcQuickActionEventType: [
                1,
                o("WAWebWamEnumWebcQuickActionEventType")
                  .WEBC_QUICK_ACTION_EVENT_TYPE,
              ],
              webcQuickActionId: [
                2,
                o("WAWebWamEnumWebcQuickActionId").WEBC_QUICK_ACTION_ID,
              ],
              webcQuickActionIsCustomized: [3, e.TYPES.BOOLEAN],
              webcQuickActionNumVisible: [4, e.TYPES.INTEGER],
              webcQuickActionSlotPosition: [5, e.TYPES.INTEGER],
              webcQuickActionSurface: [
                6,
                o("WAWebWamEnumWebcQuickActionSurface")
                  .WEBC_QUICK_ACTION_SURFACE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcQuickAction: [] },
      );
    l.WebcQuickActionWamEvent = s;
  },
  98,
);
