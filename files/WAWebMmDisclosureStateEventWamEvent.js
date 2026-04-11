__d(
  "WAWebMmDisclosureStateEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureInteraction",
    "WAWebWamEnumDisclosureSource",
    "WAWebWamEnumDisclosureSuppressionReason",
    "WAWebWamEnumDisclosureSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MmDisclosureStateEvent: [
            6552,
            {
              businessLidOrJid: [1, e.TYPES.STRING],
              deltaTimeReceived: [15, e.TYPES.INTEGER],
              disclosureEventType: [
                3,
                o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE,
              ],
              disclosureInteraction: [
                4,
                o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION,
              ],
              disclosureSource: [
                5,
                o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE,
              ],
              disclosureSuppressionReason: [
                6,
                o("WAWebWamEnumDisclosureSuppressionReason")
                  .DISCLOSURE_SUPPRESSION_REASON,
              ],
              disclosureSurface: [
                7,
                o("WAWebWamEnumDisclosureSurface").DISCLOSURE_SURFACE,
              ],
              entSourceSubplatform: [16, e.TYPES.STRING],
              isCompanionDevice: [14, e.TYPES.BOOLEAN],
              isNetworkAvailable: [18, e.TYPES.BOOLEAN],
              isUserDisclosed: [8, e.TYPES.BOOLEAN],
              mmDisclosureFlags: [19, e.TYPES.INTEGER],
              mmHasDisclosedUrl: [9, e.TYPES.BOOLEAN],
              mmHasShowDisclosureFlag: [10, e.TYPES.BOOLEAN],
              templateId: [11, e.TYPES.STRING],
              userBecameDisclosed: [13, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { MmDisclosureStateEvent: [] },
      );
    l.MmDisclosureStateEventWamEvent = s;
  },
  98,
);
