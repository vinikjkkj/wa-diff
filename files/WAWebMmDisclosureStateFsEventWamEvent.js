__d(
  "WAWebMmDisclosureStateFsEventWamEvent",
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
          MmDisclosureStateFsEvent: [
            6796,
            {
              disclosureEventType: [
                1,
                o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE,
              ],
              disclosureInteraction: [
                2,
                o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION,
              ],
              disclosureSource: [
                3,
                o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE,
              ],
              disclosureSuppressionReason: [
                4,
                o("WAWebWamEnumDisclosureSuppressionReason")
                  .DISCLOSURE_SUPPRESSION_REASON,
              ],
              disclosureSurface: [
                5,
                o("WAWebWamEnumDisclosureSurface").DISCLOSURE_SURFACE,
              ],
              isCompanionDevice: [6, e.TYPES.BOOLEAN],
              isUserDisclosed: [7, e.TYPES.BOOLEAN],
              mmDisclosureFlags: [12, e.TYPES.INTEGER],
              mmHasDisclosedUrl: [8, e.TYPES.BOOLEAN],
              mmHasShowDisclosureFlag: [9, e.TYPES.BOOLEAN],
              threadIdHmac: [10, e.TYPES.STRING],
              userBecameDisclosed: [11, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MmDisclosureStateFsEvent: [] },
      );
    l.MmDisclosureStateFsEventWamEvent = s;
  },
  98,
);
