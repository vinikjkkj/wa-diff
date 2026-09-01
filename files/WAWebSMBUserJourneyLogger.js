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
            (this.$4.delete(n), this.$3.set(n, t));
          }),
          (t.getEntryPoint = function (t) {
            return this.$3.get(t);
          }),
          (t.setEntryPointDetails = function (t, n) {
            this.$4.set(n, t);
          }),
          (t.log = function (t) {
            var e,
              n,
              r = new (o(
                "WAWebSmbUserJourneyWamEvent",
              ).SmbUserJourneyWamEvent)();
            ((r.smbFeatureName = t.featureName),
              (r.smbUserActionType = t.userActionType),
              (r.surface = t.surface),
              (r.smbUserSessionId = this.$1),
              (r.seqId = this.$2));
            var a = t.entryPoint;
            if (a != null && t.stickyEntryPoint !== !1) {
              var i = this.$3.get(t.featureName);
              (i != null &&
                i !== a &&
                t.entryPointDetails == null &&
                this.$4.delete(t.featureName),
                this.$3.set(t.featureName, a));
            }
            var l =
              t.stickyEntryPoint === !1
                ? t.entryPoint
                : (e = t.entryPoint) != null
                  ? e
                  : this.$3.get(t.featureName);
            (l != null && (r.entryPoint = l),
              t.entryPointDetails != null &&
                t.stickyEntryPoint !== !1 &&
                this.$4.set(t.featureName, t.entryPointDetails));
            var s =
              (n = t.entryPointDetails) != null
                ? n
                : this.$4.get(t.featureName);
            (s != null && (r.entryPointDetails = s),
              t.userActionTarget != null &&
                (r.userActionTarget = t.userActionTarget),
              t.extraAttributes != null &&
                (r.extraAttributes = JSON.stringify(t.extraAttributes)),
              t.bbTier != null && (r.bbTier = t.bbTier),
              r.commit(),
              (this.$2 += 1));
          }),
          e
        );
      })(),
      s = new e();
    ((l.WAWebSMBUserJourneyLogger = e), (l.SMBUserJourneyLogger = s));
  },
  98,
);
