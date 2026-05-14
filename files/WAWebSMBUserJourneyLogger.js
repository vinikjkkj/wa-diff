__d(
  "WAWebSMBUserJourneyLogger",
  [
    "WAWebGetSharedSessionId",
    "WAWebSmbUserJourneyWamEvent",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          var e;
          ((this.$1 =
            (e = o(
              "WAWebUnifiedSession",
            ).UnifiedSessionManager.getSessionId()) != null
              ? e
              : o("WAWebGetSharedSessionId").getSharedSessionId()),
            (this.$2 = 0),
            (this.$3 = new Map()),
            (this.$4 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.setEntryPoint = function (t, n) {
            this.$3.set(n, t);
          }),
          (t.setEntryPointDetails = function (t, n) {
            this.$4.set(n, t);
          }),
          (t.log = function (t) {
            var e = new (o(
              "WAWebSmbUserJourneyWamEvent",
            ).SmbUserJourneyWamEvent)();
            ((e.smbFeatureName = t.featureName),
              (e.smbUserActionType = t.userActionType),
              (e.surface = t.surface),
              (e.smbUserSessionId = this.$1),
              (e.seqId = this.$2),
              t.entryPoint != null && this.$3.set(t.featureName, t.entryPoint));
            var n = this.$3.get(t.featureName);
            (n != null && (e.entryPoint = n),
              t.entryPointDetails != null &&
                this.$4.set(t.featureName, t.entryPointDetails));
            var r = this.$4.get(t.featureName);
            (r != null && (e.entryPointDetails = r),
              t.userActionTarget != null &&
                (e.userActionTarget = t.userActionTarget),
              t.extraAttributes != null &&
                (e.extraAttributes = JSON.stringify(t.extraAttributes)),
              e.commit(),
              (this.$2 += 1));
          }),
          e
        );
      })(),
      s = new e();
    l.SMBUserJourneyLogger = s;
  },
  98,
);
