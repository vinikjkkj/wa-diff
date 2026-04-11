__d(
  "WAWebPttPlaybackLogger",
  [
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttDailyUtils",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttPlaybackWamEvent",
    "WAWebPttPrefs",
    "WAWebPttTsExternalLogger",
    "WAWebWamEnumPttPlaybackSpeedType",
    "WAWebWamEnumPttStreamType",
    "WAWebWamEnumPttTriggerType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.isSequentialPlayback = !1),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = !1),
          (this.$8 = !1),
          (this.$9 = 0),
          (this.$10 = !1),
          (this.$11 = 0),
          (this.$14 = function () {
            n.$7 = !0;
          }),
          (this.$15 = function () {
            n.$3.playbackRate !== n.$12 &&
              ((n.$12 = n.$3.playbackRate), (n.$4 += 1));
          }),
          (this.$16 = function () {
            var e = o("WAWebPttCalculateAudioProgress").calculateAudioProgress(
              n.$3,
            );
            n.$6 = Math.max(e, n.$6);
          }),
          (this.$17 = function () {
            n.commit(!0);
          }),
          (this.$18 = function () {
            n.commit(!1);
          }),
          (this.$2 = e),
          (this.$3 = t),
          (this.$12 = this.$3.playbackRate),
          this.$3.addEventListener("playing", this.$14),
          this.$3.addEventListener("ratechange", this.$15),
          this.$3.addEventListener("timeupdate", this.$16),
          this.$3.addEventListener("ended", this.$17),
          this.$3.addEventListener("error", this.$18),
          e.type === "ptt" &&
            (this.$13 = o(
              "WAWebPttTsExternalLogger",
            ).attachPttPlayTimeSpentLogger(t)));
      }
      var t = e.prototype;
      return (
        (t.dispose = function () {
          var e;
          (this.$3.removeEventListener("playing", this.$14),
            this.$3.removeEventListener("ratechange", this.$15),
            this.$3.removeEventListener("timeupdate", this.$16),
            this.$3.removeEventListener("ended", this.$17),
            this.$3.removeEventListener("error", this.$17),
            (e = this.$13) == null || e.call(this));
        }),
        (t.$19 = function () {
          ((this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = !1),
            (this.$8 = !1),
            (this.$9 = 0),
            (this.$10 = !1),
            (this.$11 = 0),
            (this.$13 = null));
        }),
        (t.commit = function (t) {
          if (this.$7 && this.$2.type === "ptt") {
            var e = o("WAWebPttPrefs").PttPrefs.playbackRate,
              n = this.$2.mediaData,
              r = new (o("WAWebPttPlaybackWamEvent").PttPlaybackWamEvent)({
                pttSeekCnt: 0,
                pttPlaybackSpeedCnt: 0,
                pttTrigger: this.isSequentialPlayback
                  ? o("WAWebWamEnumPttTriggerType").PTT_TRIGGER_TYPE.SEQUENTIAL
                  : o("WAWebWamEnumPttTriggerType").PTT_TRIGGER_TYPE.MANUAL,
              });
            ((r.pttPlaybackFailed = !t),
              (r.pttType = s(n.mimetype)),
              (r.pttPlaybackSpeed = u(e)));
            var a = o(
              "WAWebPttGetDurationFromMediaOrProtobuf",
            ).getDurationFromMediaOrProtobuf(this.$3, n);
            ((r.pttDuration = Math.round(a) * 1e3),
              (r.pttPlaybackSpeedCnt = this.$4),
              (r.pttSeekCnt = this.$5),
              (r.pttPlayedPct = this.$6),
              (r.pttPlayedOutOfChat = this.$8),
              (r.pttMiniPlayerPauseCnt = this.$9),
              (r.pttMiniPlayerClose = this.$10),
              (r.pttMiniPlayerClick = this.$11),
              r.commit(),
              this.$19());
            var i = this.$2.id,
              l =
                i == null ? null : o("WAWebMsgCollection").MsgCollection.get(i),
              c =
                l == null
                  ? null
                  : o("WAWebFrontendChatGetters").getKind(
                      o("WAWebFrontendMsgGetters").getChat(l),
                    );
            c != null &&
              (o("WAWebPttDailyUtils").incrementPttDailyCount(
                o("WAWebPttDailyUtils").PttDailyCountKind.PLAYBACK,
                c,
              ),
              e > 1 &&
                o("WAWebPttDailyUtils").incrementPttDailyCount(
                  o("WAWebPttDailyUtils").PttDailyCountKind.FAST_PLAYBACK,
                  c,
                ));
          }
        }),
        (t.increasePttSeekCount = function () {
          this.$5 += 1;
        }),
        (t.markAsPlayedInOoc = function () {
          this.$8 = !0;
        }),
        (t.increaseOocPauseCount = function () {
          this.$9 += 1;
        }),
        (t.markAsOocClosedByUser = function () {
          this.$10 = !0;
        }),
        (t.increaseOocClickToChatCount = function () {
          this.$11 += 1;
        }),
        e
      );
    })();
    function s(e) {
      var t = e == null ? void 0 : e.split(";")[0];
      switch (t) {
        case "audio/ogg":
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.OPUS;
        case "audio/aac":
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AAC;
        case "audio/mpeg":
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.MP3;
        case "audio/amr-wb":
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AMR_WB;
        case "audio/amr":
        case "audio/3gpp2":
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AMR_NB;
        case "audio/3gpp":
        default:
          return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.UNKNOWN;
      }
    }
    function u(e) {
      switch (e) {
        case 1:
          return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE
            .SPEED_1;
        case 1.5:
          return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE
            .SPEED_1_5;
        case 2:
          return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE
            .SPEED_2;
        default:
          throw r("err")("Invalid playback rate: " + e);
      }
    }
    l.PttPlaybackLogger = e;
  },
  98,
);
