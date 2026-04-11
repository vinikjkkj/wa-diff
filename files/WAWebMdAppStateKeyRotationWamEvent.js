__d(
  "WAWebMdAppStateKeyRotationWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMdAppStateKeyRotationReasonCode"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdAppStateKeyRotation: [
            2518,
            {
              appSessionId: [2, e.TYPES.STRING],
              companionSessionIds: [3, e.TYPES.STRING],
              mdAppStateKeyRotationReason: [
                1,
                o("WAWebWamEnumMdAppStateKeyRotationReasonCode")
                  .MD_APP_STATE_KEY_ROTATION_REASON_CODE,
              ],
              oldSyncdKeyhash: [6, e.TYPES.STRING],
              oldSyncdKeyid: [7, e.TYPES.STRING],
              seqNumber: [8, e.TYPES.INTEGER],
              syncdKeyhashAfterRotation: [9, e.TYPES.STRING],
              syncdKeyidAfterRotation: [10, e.TYPES.STRING],
            },
            [1, 20, 1e3],
            "regular",
          ],
        },
        { MdAppStateKeyRotation: [] },
      );
    l.MdAppStateKeyRotationWamEvent = s;
  },
  98,
);
