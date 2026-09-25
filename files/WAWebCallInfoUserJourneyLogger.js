__d(
  "WAWebCallInfoUserJourneyLogger",
  [
    "WARandomHex",
    "WAWebCallInfoUserJourneyWamEvent",
    "WAWebCallUserJourneyAppSessionId",
    "WAWebCallUserJourneyGating",
    "WAWebUserJourneyEventMs",
    "WAWebWamEnumCallType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null));
      }
      var t = e.prototype;
      return (
        (t.newSession = function (t) {
          var e, n;
          ((this.$1 = o("WARandomHex").randomHex(16)),
            (this.$2 = o("WARandomHex").randomHex(16)),
            (this.$3 = t.callSizeType),
            (this.$4 = (e = t.callGroupSizeBucket) != null ? e : null),
            (this.$5 = (n = t.isVideo) != null ? n : null));
        }),
        (t.newFunnel = function () {
          this.$2 = o("WARandomHex").randomHex(16);
        }),
        (t.updateSessionIsVideo = function (t) {
          this.$5 = t != null ? t : null;
        }),
        (t.logEvent = function (n) {
          var t,
            r = this.$1,
            a = this.$2;
          if (!(r == null || a == null)) {
            var i = {
                appSessionId: o(
                  "WAWebCallUserJourneyAppSessionId",
                ).callUserJourneyAppSessionId(e.appSessionId),
                surfaceSessionId: r,
                userJourneyFunnelId: a,
                preCallActionType: n.preCallActionType,
              },
              l = o("WAWebUserJourneyEventMs").userJourneyEventMs();
            (l != null && (i.userJourneyEventMs = l),
              this.$3 != null && (i.callSizeType = this.$3),
              this.$4 != null && (i.callGroupSizeBucket = this.$4));
            var s =
              (t = n.isVideo) != null
                ? t
                : o(
                      "WAWebCallUserJourneyGating",
                    ).isCallUserJourneyLoggingEnabled()
                  ? this.$5
                  : null;
            (s === !0
              ? (i.callType = o("WAWebWamEnumCallType").CALL_TYPE.VIDEO)
              : s === !1 &&
                (i.callType = o("WAWebWamEnumCallType").CALL_TYPE.VOICE),
              n.participantActionSource != null &&
                (i.participantActionSource = n.participantActionSource),
              n.numParticipantsShown != null &&
                (i.numParticipantsShown = n.numParticipantsShown),
              new (o(
                "WAWebCallInfoUserJourneyWamEvent",
              ).CallInfoUserJourneyWamEvent)(i).commit());
          }
        }),
        (t.clearSession = function () {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null));
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
