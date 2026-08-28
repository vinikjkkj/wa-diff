__d(
  "ZenonScreensharingQPLLogger",
  ["$InternalEnum", "QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(292628906, "1082"),
      s = n("$InternalEnum").Mirrored([
        "IDLE",
        "AWAITING_USER_ACTION",
        "ADDING_SCREEN_TRACK",
        "REPLACING_SCREEN_TRACK",
        "SENDING_LOCAL_SDP_REQUEST",
        "SENDING_MEDIA_UPDATE_REQUEST",
      ]),
      u = (function () {
        function t() {
          ((this.$1 = s.IDLE), (this.$2 = {}));
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            ((this.$1 = s.IDLE), (this.$2 = {}));
          }),
          (n.onEntryPointClick = function () {
            (this.$3(),
              r("QPLUserFlow").start(e),
              (this.$1 = s.AWAITING_USER_ACTION));
          }),
          (n.onStartFetchingTracks = function (n, o, a) {
            (r("QPLUserFlow").addPoint(e, "fetch_tracks"),
              r("QPLUserFlow").addAnnotations(e, {
                bool: {
                  has_dual_stream: o,
                  should_fetch_screen_audio: n,
                  taking_over_screen_share: a,
                },
              }));
          }),
          (n.onAddScreenTrack = function () {
            ((this.$1 = s.ADDING_SCREEN_TRACK),
              r("QPLUserFlow").addPoint(e, "add_screen_track"));
          }),
          (n.onReplaceScreenTrack = function () {
            ((this.$1 = s.REPLACING_SCREEN_TRACK),
              r("QPLUserFlow").addPoint(e, "replace_screen_track"));
          }),
          (n.onExtensionUnavailable = function () {
            r("QPLUserFlow").addPoint(e, "no_extension");
          }),
          (n.onAddAudioTrack = function () {
            (r("QPLUserFlow").addPoint(e, "adding_screen_audio_track"),
              r("QPLUserFlow").addAnnotations(e, {
                bool: { audio_track_added: !0 },
              }));
          }),
          (n.onCancelScreenShareWithReason = function (n) {
            (r("QPLUserFlow").endCancel(e, {
              annotations: { string: { cancel_reason: n } },
            }),
              this.$3());
          }),
          (n.onScreenTrackNotFoundError = function () {
            (r("QPLUserFlow").endCancel(e, {
              annotations: {
                string: { cancel_reason: "no_screen_track_found" },
              },
            }),
              this.$3());
          }),
          (n.onStartScreenShareFailure = function (n) {
            (r("QPLUserFlow").endFailure(e, "start_screenshare_error", {
              annotations: {
                int: { error_number: n.number },
                string: { error_message: n.message, error_name: n.name },
              },
            }),
              this.$3());
          }),
          (n.$4 = function (t) {
            var e,
              n = t.find(function (e) {
                return (
                  e.eventName === "localSdpRequest" ||
                  e.eventName === "mediaUpdateRequest"
                );
              });
            return n == null
              ? !1
              : (n == null ||
                (e = n.mediaStates) == null ||
                (e = e.tracks) == null
                  ? void 0
                  : e.find(function (e) {
                      return e.type === "screen" && e.enabled;
                    })) != null;
          }),
          (n.$5 = function (t) {
            return (
              t.find(function (e) {
                return e.eventName === "mediaUpdateResponse";
              }) != null
            );
          }),
          (n.onMaybeScreenShareUpdateRequest = function (n) {
            if (
              this.$4(n.getEvents()) &&
              !(
                this.$1 !== s.ADDING_SCREEN_TRACK &&
                this.$1 !== s.REPLACING_SCREEN_TRACK
              )
            ) {
              var t = n.getEvents(),
                o = t.find(function (e) {
                  return (
                    e.eventName === "localSdpRequest" ||
                    e.eventName === "mediaUpdateRequest"
                  );
                });
              o != null &&
                (o.eventName === "localSdpRequest"
                  ? ((this.$1 = s.SENDING_LOCAL_SDP_REQUEST),
                    r("QPLUserFlow").addPoint(e, "send_local_sdp_request"))
                  : ((this.$1 = s.SENDING_MEDIA_UPDATE_REQUEST),
                    r("QPLUserFlow").addPoint(e, "send_media_update_request")),
                (this.$2.requestMessageId = n.getHeader().messageID));
            }
          }),
          (n.onMaybeMediaUpdateResponse = function (n) {
            this.$5(n.getEvents()) &&
              (this.$1 === s.SENDING_LOCAL_SDP_REQUEST ||
                this.$1 === s.SENDING_MEDIA_UPDATE_REQUEST) &&
              this.$2.requestMessageId === n.getHeader().messageID &&
              (r("QPLUserFlow").endSuccess(e), this.$3());
          }),
          t
        );
      })(),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
