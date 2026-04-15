__d(
  "WAWebRingtoneScreenWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumRingtoneEntryType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          RingtoneScreen: [
            7608,
            {
              premiumRingtonesDownloadedCount: [1, e.TYPES.INTEGER],
              ringtoneChangeApplied: [2, e.TYPES.BOOLEAN],
              ringtoneId: [3, e.TYPES.STRING],
              ringtoneReset: [7, e.TYPES.BOOLEAN],
              ringtoneSelectionCancelled: [4, e.TYPES.BOOLEAN],
              ringtoneSource: [
                5,
                o("WAWebWamEnumRingtoneEntryType").RINGTONE_ENTRY_TYPE,
              ],
              ringtoneSubscribeSelected: [6, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { RingtoneScreen: [] },
      );
    l.RingtoneScreenWamEvent = s;
  },
  98,
);
