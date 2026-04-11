__d(
  "WAWebCanonicalEntRecoveryCompanionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CanonicalEntRecoveryCompanion: [
            7434,
            {
              canonicalEntEventCompanionMarker: [
                1,
                o("WAWebWamEnumCanonicalEntEventMarker")
                  .CANONICAL_ENT_EVENT_MARKER,
              ],
              canonicalEntFeatureName: [8, e.TYPES.STRING],
              canonicalEntRecoveryCompanionEvent: [
                2,
                o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
                  .CANONICAL_ENT_RECOVERY_COMPANION_EVENT,
              ],
              canonicalEntRecoveryTimeoutSeconds: [9, e.TYPES.INTEGER],
              canonicalEntRegistrationTraceId: [3, e.TYPES.STRING],
              canonicalEntRequestId: [4, e.TYPES.STRING],
              canonicalEntSequenceNumberSinceLastRegistration: [
                7,
                e.TYPES.INTEGER,
              ],
              canonicalEntStorageSource: [10, e.TYPES.STRING],
              deviceId: [5, e.TYPES.STRING],
              familyDeviceId: [6, e.TYPES.STRING],
              traceIdInt: [11, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CanonicalEntRecoveryCompanion: [] },
      );
    l.CanonicalEntRecoveryCompanionWamEvent = s;
  },
  98,
);
