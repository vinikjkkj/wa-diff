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
            var e,
              n = new (o(
                "WAWebSmbUserJourneyWamEvent",
              ).SmbUserJourneyWamEvent)();
            ((n.smbFeatureName = t.featureName),
              (n.smbUserActionType = t.userActionType),
              (n.surface = t.surface),
              (n.smbUserSessionId = this.$1),
              (n.seqId = this.$2),
              t.entryPoint != null &&
                t.stickyEntryPoint !== !1 &&
                this.$3.set(t.featureName, t.entryPoint));
            var r =
              t.stickyEntryPoint === !1
                ? t.entryPoint
                : (e = t.entryPoint) != null
                  ? e
                  : this.$3.get(t.featureName);
            (r != null && (n.entryPoint = r),
              t.entryPointDetails != null &&
                this.$4.set(t.featureName, t.entryPointDetails));
            var a = this.$4.get(t.featureName);
            (a != null && (n.entryPointDetails = a),
              t.userActionTarget != null &&
                (n.userActionTarget = t.userActionTarget),
              t.extraAttributes != null &&
                (n.extraAttributes = JSON.stringify(t.extraAttributes)),
              t.bbTier != null && (n.bbTier = t.bbTier),
              n.commit(),
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
