__d(
  "ZenonFirstMediaPacketFinder",
  ["Promise", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 500,
      c = 1e4,
      d = (function () {
        function t(e, t, n) {
          ((this.$1 = {
            audio: null,
            screen: null,
            screen_audio: null,
            video: null,
          }),
            (this.$2 = {
              audio: null,
              screen: null,
              screen_audio: null,
              video: null,
            }),
            (this.$3 = { audio: !1, screen: !1, screen_audio: !1, video: !1 }),
            (this.$4 = null),
            (this.$5 = e),
            (this.$6 = t),
            (this.$7 = n),
            (this.$8 = Date.now()));
        }
        var o = t.prototype;
        return (
          (o.setUpForTrackType = function (t) {
            var e = this;
            (this.$2[t] != null && this.$1[t] != null) ||
              ((this.$3[t] = !0),
              this.$4 == null &&
                ((this.$8 = Date.now()),
                (this.$4 = window.setInterval(function () {
                  (e.$9(),
                    Date.now() - e.$8 >= c &&
                      (window.clearInterval(e.$4), (e.$4 = null)));
                }, u)),
                this.$9()));
          }),
          (o.getFirstPacketTimes = function () {
            return this.$2;
          }),
          (o.getFirstSentPacketTimes = function () {
            return this.$1;
          }),
          (o.$10 = function () {
            var e = this,
              t = Object.keys(this.$3).some(function (t) {
                return e.$3[t] && e.$2[t] == null;
              }),
              n = Object.keys(this.$3).some(function (t) {
                return e.$3[t] && e.$1[t] == null;
              });
            return t || n;
          }),
          (o.$9 = function () {
            var t = this,
              o = this.$5.getTransceivers(),
              a = o
                .filter(function (e) {
                  return (
                    e.currentDirection === "sendrecv" ||
                    e.currentDirection === "recvonly"
                  );
                })
                .map(function (e) {
                  return e.receiver;
                })
                .filter(function (e) {
                  return e.track != null;
                }),
              i = o
                .filter(function (e) {
                  return (
                    e.currentDirection === "sendrecv" ||
                    e.currentDirection === "sendonly"
                  );
                })
                .map(function (e) {
                  return e.sender;
                })
                .filter(function (e) {
                  return e.track != null;
                }),
              l = [].concat(a, i).map(function (e) {
                var n = e.track;
                return n != null
                  ? e.getStats().then(function (e) {
                      for (var o of e.values()) {
                        var a = !1;
                        if (
                          o.type === "inbound-rtp" &&
                          Number(o.packetsReceived) > 0 &&
                          t.$2[n.kind] == null
                        ) {
                          var i = (s || (s = r("performanceNow")))();
                          ((t.$2[n.kind] = i), t.$6(n.kind, i), (a = !0));
                        }
                        if (
                          o.type === "outbound-rtp" &&
                          Number(o.packetsSent) > 0 &&
                          t.$1[n.kind] == null
                        ) {
                          var l = (s || (s = r("performanceNow")))();
                          ((t.$1[n.kind] = l), t.$7(n.kind, l), (a = !0));
                        }
                        a &&
                          t.$4 != null &&
                          !t.$10() &&
                          (window.clearInterval(t.$4), (t.$4 = null));
                      }
                    })
                  : null;
              });
            (e || (e = n("Promise"))).all(l);
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
