__d(
  "WAWebCloudApiSignalEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCloudApiSignalCtaAction",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumCloudApiSignalType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CloudApiSignalEvent: [
            8572,
            {
              cloudApiSignalCarouselCardIndex: [1, e.TYPES.INTEGER],
              cloudApiSignalCtaAction: [
                2,
                o("WAWebWamEnumCloudApiSignalCtaAction")
                  .CLOUD_API_SIGNAL_CTA_ACTION,
              ],
              cloudApiSignalCtaButtonIndex: [3, e.TYPES.INTEGER],
              cloudApiSignalData: [4, e.TYPES.STRING],
              cloudApiSignalTemplateType: [
                5,
                o("WAWebWamEnumCloudApiSignalTemplateType")
                  .CLOUD_API_SIGNAL_TEMPLATE_TYPE,
              ],
              cloudApiSignalType: [
                6,
                o("WAWebWamEnumCloudApiSignalType").CLOUD_API_SIGNAL_TYPE,
              ],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { CloudApiSignalEvent: [] },
      );
    l.CloudApiSignalEventWamEvent = s;
  },
  98,
);
