__d(
  "ZenonTSLogRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        ".": { counters: new Set(["ctime", "btime"]) },
        inbound_rtp_audio: {
          counters: new Set([
            "packetsLost_delta",
            "packetsReceived_delta",
            "bytesReceived",
            "bytesReceived_delta",
            "totalAudioEnergy_delta",
            "audioLevel",
          ]),
        },
        inbound_rtp_video: {
          counters: new Set([
            "packetsLost_delta",
            "packetsReceived_delta",
            "bytesReceived",
            "bytesReceived_delta",
            "framesDecoded",
            "framesDecoded_delta",
            "frameWidth",
            "frameHeight",
            "framesPerSecond",
            "avSync",
          ]),
        },
        outbound_rtp_audio: {
          counters: new Set([
            "bytesSent",
            "bytesSent_delta",
            "audioLevel",
            "packetsLost_delta",
            "totalAudioEnergy_delta",
          ]),
        },
        outbound_rtp_video: {
          counters: new Set([
            "video_videoCaptureIsStalled",
            "video_videoEncodeIsStalled",
            "video_videoSentIsStalled",
            "packetsSent_delta",
            "bytesSent",
            "bytesSent_delta",
            "framesEncoded",
            "framesEncoded_delta",
            "keyFramesEncoded_delta",
            "frameWidth",
            "frameHeight",
            "framesPerSecond",
            "packetsLost_delta",
          ]),
        },
      },
      l = (function () {
        function t(t) {
          ((this.$1 = e), (this.$2 = t.allAllowed));
        }
        var n = t.prototype;
        return (
          (n.isCounterAllowed = function (t, n) {
            var e, r;
            return (
              this.$2 ||
              ((e = (r = this.$1[t]) == null ? void 0 : r.counters.has(n)) !=
              null
                ? e
                : !1)
            );
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
