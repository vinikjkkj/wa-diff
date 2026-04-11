__d(
  "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CanonicalEntRecoveryCriticalEvent: [
            7442,
            {
              canonicalEntRecoveryCriticalEventMetadata: [1, e.TYPES.STRING],
              canonicalEntRecoveryCriticalEventName: [2, e.TYPES.STRING],
              canonicalEntRegistrationTraceId: [3, e.TYPES.STRING],
              canonicalEntRequestId: [4, e.TYPES.STRING],
              canonicalEntSequenceNumberSinceLastRegistration: [
                7,
                e.TYPES.INTEGER,
              ],
              deviceId: [5, e.TYPES.STRING],
              familyDeviceId: [6, e.TYPES.STRING],
              traceIdInt: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CanonicalEntRecoveryCriticalEvent: [] },
      );
    l.CanonicalEntRecoveryCriticalEventWamEvent = s;
  },
  98,
);
