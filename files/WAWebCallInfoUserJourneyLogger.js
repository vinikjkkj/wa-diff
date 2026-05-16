__d(
  "WAWebCallInfoUserJourneyLogger",
  ["WARandomHex", "WAWebCallInfoUserJourneyWamEvent", "WAWebWamEnumCallType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null));
      }
      var t = e.prototype;
      return (
        (t.newSession = function (t) {
          var e;
          ((this.$1 = o("WARandomHex").randomHex(16)),
            (this.$2 = o("WARandomHex").randomHex(16)),
            (this.$3 = t.callSizeType),
            (this.$4 = (e = t.callGroupSizeBucket) != null ? e : null));
        }),
        (t.newFunnel = function () {
          this.$2 = o("WARandomHex").randomHex(16);
        }),
        (t.logEvent = function (n) {
          var t = this.$1,
            r = this.$2;
          if (!(t == null || r == null)) {
            var a = {
              appSessionId: e.appSessionId,
              surfaceSessionId: t,
              userJourneyFunnelId: r,
              preCallActionType: n.preCallActionType,
              userJourneyEventMs: Date.now(),
            };
            (this.$3 != null && (a.callSizeType = this.$3),
              this.$4 != null && (a.callGroupSizeBucket = this.$4),
              n.isVideo === !0
                ? (a.callType = o("WAWebWamEnumCallType").CALL_TYPE.VIDEO)
                : n.isVideo === !1 &&
                  (a.callType = o("WAWebWamEnumCallType").CALL_TYPE.VOICE),
              n.participantActionSource != null &&
                (a.participantActionSource = n.participantActionSource),
              n.numParticipantsShown != null &&
                (a.numParticipantsShown = n.numParticipantsShown),
              new (o(
                "WAWebCallInfoUserJourneyWamEvent",
              ).CallInfoUserJourneyWamEvent)(a).commit());
          }
        }),
        (t.clearSession = function () {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null));
        }),
        (t.getSurfaceSessionIdForTest = function () {
          return this.$1;
        }),
        (t.getFunnelIdForTest = function () {
          return this.$2;
        }),
        e
      );
    })();
    e.appSessionId = o("WARandomHex").randomHex(16);
    var s = new e();
    ((l.WAWebCallInfoUserJourneyLogger = e), (l.CallInfoUserJourneyLogger = s));
  },
  98,
);
