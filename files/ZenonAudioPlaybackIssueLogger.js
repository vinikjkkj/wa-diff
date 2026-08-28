__d(
  "ZenonAudioPlaybackIssueLogger",
  ["ZenonMediaActionLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.detectAudioPlaybackIssue = function (n, r) {
            var t = this;
            n.filter(function (e) {
              return (
                e.webrtcTrack.enabled &&
                e.webrtcTrack.readyState === "live" &&
                e.contentType === "audio" &&
                e.remote
              );
            }).forEach(function (n) {
              var o = r.get(n.trackId);
              if (o != null) {
                var a = o.cumulativeStat,
                  i = a.bytesReceived,
                  l = a.totalAudioEnergy;
                if (
                  !(i == null || l == null || i.getTimeSinceLastUpdate() === 0)
                ) {
                  var s = l.getDeltaFromLastUpdate(),
                    u = i.getDeltaFromLastUpdate() * 8,
                    c = i.getTimeSinceLastUpdate() / 1e3,
                    d = u / c;
                  t.$1.has(n.trackId) || t.$1.set(n.trackId, !1);
                  var m = t.$1.get(n.trackId);
                  s === 0 && d > e
                    ? m === !1 &&
                      (t.logAudioPlaybackIssueCheckpoint(
                        "start",
                        n.trackId,
                        d,
                        s,
                      ),
                      t.$1.set(n.trackId, !0))
                    : m === !0 &&
                      (t.logAudioPlaybackIssueCheckpoint(
                        "end",
                        n.trackId,
                        d,
                        s,
                      ),
                      t.$1.set(n.trackId, !1));
                }
              }
            });
          }),
          (n.logAudioPlaybackIssueCheckpoint = function (t, n, o, a) {
            r("ZenonMediaActionLogger").logEvent({
              checkpoint:
                (t === "start" ? "Detected new" : "No longer detecting") +
                " audio playback issue for track " +
                n +
                ". Bitrate is " +
                o +
                " bps, audio energy delta is " +
                a +
                ".",
              mediaID: n,
            });
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
