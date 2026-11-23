__d(
  "WAWebLabyrinthDebugPilotStatusController",
  [
    "WAWebLabyrinthCompanionOnboardingStatus",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugLoadForStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e,
        t,
        n = await Promise.all([
          o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            o("WAWebLabyrinthDebugLoadForStatus").loadForStatus,
          ),
          o(
            "WAWebLabyrinthCompanionOnboardingStatus",
          ).getLabyrinthCompanionOnboardingStatus(),
        ]),
        r = n[0],
        a = n[1];
      return {
        activeServerEpochId:
          r.success &&
          (e = (t = r.value) == null ? void 0 : t.activeServerEpochId) != null
            ? e
            : null,
        onboarding: a,
      };
    }
    l.getLabyrinthDebugPilotStatus = e;
  },
  98,
);
