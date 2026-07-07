__d(
  "WAWebVoipAVSyncController",
  ["WALogger", "WAWebVoipAVSyncMetricsCollector"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 30,
      p = 40,
      _ = -120,
      f = 150,
      g = 2,
      h = 600,
      y = 1e3,
      C = 2e3,
      b = 2e3,
      v = 10,
      S = 9e4,
      R = 4294967296,
      L = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = !1),
            (this.$6 = new Map()),
            (this.$7 = new Set()),
            (this.$8 = new (o(
              "WAWebVoipAVSyncMetricsCollector",
            ).WAWebVoipAVSyncMetricsCollector)(p)));
        }
        var n = t.prototype;
        return (
          (n.$9 = function (t) {
            var e = this.$6.get(t);
            return (
              e == null &&
                ((e = {
                  frameQueue: null,
                  calibration: null,
                  calibrationCandidate: null,
                  lastObservedFrame: null,
                  awaitingKeyFrame: !1,
                  pendingRecalibration: !1,
                  consecutiveLateCount: 0,
                  lastRecalibTimeMs: 0,
                  recalibrationCount: 0,
                  framesHeld: 0,
                  framesLate: 0,
                  framesEvicted: 0,
                  deltaSumMs: 0,
                  deltaSampleCount: 0,
                }),
                this.$6.set(t, e)),
              e
            );
          }),
          (n.enable = function (n, r, a, i) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AVSync] Enabling, sampleRate=",
                  "",
                ])),
              n,
            ),
              (this.$1 = n),
              (this.$2 = r),
              (this.$3 = a),
              (this.$4 = i != null ? i : null),
              (this.$5 = !0));
          }),
          (n.disable = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AVSync] Disabling",
                ])),
            ),
              (this.$5 = !1),
              this.$6.clear(),
              this.$7.clear(),
              (this.$2 = null),
              (this.$3 = null),
              (this.$4 = null));
          }),
          (n.reset = function () {
            for (var e of this.$6.values())
              ((e.calibration = null),
                (e.calibrationCandidate = null),
                (e.lastObservedFrame = null),
                (e.awaitingKeyFrame = !1),
                (e.pendingRecalibration = !1),
                (e.consecutiveLateCount = 0),
                (e.lastRecalibTimeMs = 0));
            this.$8.recordDeviceChangeReset();
          }),
          (n.isEnabled = function () {
            return this.$5;
          }),
          (n.removeParticipant = function (t) {
            (this.$6.delete(t), this.$7.delete(t));
          }),
          (n.consumeMetrics = function () {
            return !this.$5 && !this.$8.hasCalibrated()
              ? null
              : this.$8.consume();
          }),
          (n.peekPerParticipantMetrics = function (t) {
            var e = this.$6.get(t);
            if (e == null) return null;
            var n =
              e.deltaSampleCount > 0 ? e.deltaSumMs / e.deltaSampleCount : null;
            return {
              avgDeltaMs: n,
              recalibrationCount: e.recalibrationCount,
              framesHeld: e.framesHeld,
              framesLate: e.framesLate,
              framesEvicted: e.framesEvicted,
              isCalibrated: e.calibration != null,
              consecutiveLateCount: e.consecutiveLateCount,
            };
          }),
          (n.enqueueVideoFrame = function (t) {
            if (this.$5) {
              var e = this.$2,
                n = this.$3,
                r = n != null ? n() : 0,
                o = t.userJid,
                a = babelHelpers.extends({}, t, {
                  arrivalAudioTimestamp: r,
                  continuityDriftMs: this.$10(o, r, t.timestamp),
                }),
                i = this.$9(o),
                l = i.frameQueue;
              for (
                l == null && ((l = []), (i.frameQueue = l), this.$7.add(o));
                l.length >= m;
              ) {
                var s = l.shift();
                (this.$8.recordFrameEvicted(),
                  i.framesEvicted++,
                  s != null &&
                    e != null &&
                    e(
                      s.userJid,
                      s.frameBuffer,
                      s.width,
                      s.height,
                      s.orientation,
                      s.format,
                      s.timestamp,
                      s.isKeyFrame,
                    ));
              }
              (l.push(a), this.$8.observeQueueDepth(l.length), this.$11());
            }
          }),
          (n.$11 = function () {
            var e = this.$3,
              t = this.$2;
            if (!(e == null || t == null)) {
              var n = e();
              if (n === 0) {
                this.$12(t);
                return;
              }
              for (var r of this.$7) {
                var o = this.$6.get(r);
                o != null && this.$13(r, o, n, t);
              }
            }
          }),
          (n.$13 = function (t, n, r, a) {
            var e = n.frameQueue;
            if (e != null) {
              for (var i = 0; i < e.length; ) {
                var l = e[i],
                  s = this.$14(n, l.timestamp, r);
                if (s == null) {
                  var c =
                    l.arrivalAudioTimestamp !== 0 ? l.arrivalAudioTimestamp : r;
                  (this.$15(t, n, l, c), this.$16(e, i, a));
                  continue;
                }
                if (
                  (this.$8.recordDelta(s),
                  (n.deltaSumMs += s),
                  n.deltaSampleCount++,
                  this.$17(l, s))
                ) {
                  (this.$18(t, n, l, r, s), this.$16(e, i, a));
                  continue;
                }
                if (Math.abs(s) > h) {
                  (this.$19(t, n, r, l.timestamp, s), this.$16(e, i, a));
                  continue;
                }
                if (s > p) {
                  ((n.consecutiveLateCount = 0),
                    this.$8.recordFrameHeld(),
                    n.framesHeld++,
                    i++);
                  continue;
                }
                if (s < _) {
                  var d = n.consecutiveLateCount + 1;
                  if (
                    ((n.consecutiveLateCount = d),
                    this.$8.recordFrameRenderedLate(),
                    n.framesLate++,
                    d >= v)
                  ) {
                    (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AVSync] force recalib jid=",
                          " late=",
                          " delta=",
                          "",
                        ])),
                      t,
                      d,
                      Math.round(s),
                    ),
                      (n.consecutiveLateCount = 0),
                      (n.lastRecalibTimeMs = Date.now()),
                      this.$20({
                        audioTimestamp: r,
                        jid: t,
                        state: n,
                        videoRtpTimestamp: l.timestamp,
                      }),
                      this.$8.recordForceRecalibration(),
                      n.recalibrationCount++,
                      this.$16(e, i, a));
                    continue;
                  }
                  this.$16(e, i, a);
                  continue;
                }
                ((n.consecutiveLateCount = 0),
                  this.$8.recordFrameRenderedInSync(),
                  this.$16(e, i, a));
              }
              e.length === 0 && ((n.frameQueue = null), this.$7.delete(t));
            }
          }),
          (n.$14 = function (t, n, r) {
            var e = t.calibration;
            if (e == null) return null;
            var o = this.$1;
            if (o === 0) return null;
            var a = (r - e.firstAudioTimestamp) / o,
              i = this.$21(n, e.firstVideoRtpTimestamp),
              l = i / S;
            return (l - a) * 1e3;
          }),
          (n.$20 = function (t) {
            var e = t.audioTimestamp,
              n = t.jid,
              r = t.state,
              o = t.videoRtpTimestamp,
              a = r.calibration == null,
              i = r.pendingRecalibration;
            ((r.calibration = {
              firstAudioTimestamp: e,
              firstVideoRtpTimestamp: o,
            }),
              (r.calibrationCandidate = null),
              (r.awaitingKeyFrame = !1),
              (r.consecutiveLateCount = 0),
              i
                ? ((r.pendingRecalibration = !1),
                  (r.lastRecalibTimeMs = Date.now()),
                  this.$8.recordRecalibration())
                : a && this.$8.recordCalibration());
          }),
          (n.$19 = function (t, n, r, a, i) {
            var e = Date.now();
            return e - n.lastRecalibTimeMs < b
              ? !1
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AVSync] Recalibrating jid=",
                      ", deltaMs=",
                      "",
                    ])),
                  t,
                  i,
                ),
                (n.lastRecalibTimeMs = e),
                (n.pendingRecalibration = !1),
                this.$20({
                  audioTimestamp: r,
                  jid: t,
                  state: n,
                  videoRtpTimestamp: a,
                }),
                this.$8.recordRecalibration(),
                n.recalibrationCount++,
                !0);
          }),
          (n.$10 = function (t, n, r) {
            var e = this.$9(t);
            if (n === 0) return ((e.lastObservedFrame = null), null);
            var o = e.lastObservedFrame,
              a = this.$22(n, o != null ? o.audioTimestamp : null);
            if (
              ((e.lastObservedFrame = {
                audioTimestamp: a,
                videoRtpTimestamp: r,
              }),
              o == null)
            )
              return null;
            var i = this.$23(a, o.audioTimestamp);
            if (i == null) return null;
            var l = this.$24(r, o.videoRtpTimestamp);
            return l - i;
          }),
          (n.$25 = function (t) {
            return t.isKeyFrame ? y : C;
          }),
          (n.$26 = function (t, n, r, o) {
            return n.awaitingKeyFrame
              ? r.isKeyFrame
                ? (this.$20({
                    audioTimestamp: o,
                    jid: t,
                    state: n,
                    videoRtpTimestamp: r.timestamp,
                  }),
                  !0)
                : !1
              : null;
          }),
          (n.$27 = function (t, n, r, o) {
            var e = this.$25(r);
            return r.continuityDriftMs == null ||
              Math.abs(r.continuityDriftMs) <= e
              ? !1
              : (this.$18(t, n, r, o, null), !0);
          }),
          (n.$15 = function (t, n, r, o) {
            if (o === 0 || this.$1 === 0) return !1;
            var e = this.$26(t, n, r, o);
            if (e != null) return e;
            if (this.$27(t, n, r, o)) return !1;
            var a = n.calibrationCandidate;
            if (a == null)
              return (
                (n.calibrationCandidate = {
                  lastAudioTimestamp: o,
                  lastVideoRtpTimestamp: r.timestamp,
                  stableFramePairs: 0,
                }),
                !1
              );
            var i = this.$22(o, a.lastAudioTimestamp),
              l = this.$23(i, a.lastAudioTimestamp);
            if (l == null) return !1;
            var s = this.$24(r.timestamp, a.lastVideoRtpTimestamp),
              u = s - l,
              c = this.$25(r);
            if (Math.abs(u) > c) return (this.$18(t, n, r, o, null), !1);
            if (Math.abs(u) > f)
              return (
                (n.calibrationCandidate = {
                  lastAudioTimestamp: i,
                  lastVideoRtpTimestamp: r.timestamp,
                  stableFramePairs: 0,
                }),
                !1
              );
            var d = a.stableFramePairs + 1;
            return d < g
              ? ((n.calibrationCandidate = {
                  lastAudioTimestamp: i,
                  lastVideoRtpTimestamp: r.timestamp,
                  stableFramePairs: d,
                }),
                !1)
              : (this.$20({
                  audioTimestamp: i,
                  jid: t,
                  state: n,
                  videoRtpTimestamp: r.timestamp,
                }),
                !0);
          }),
          (n.$17 = function (t, n) {
            var e = this.$25(t);
            return (
              Math.abs(n) > e ||
              (t.continuityDriftMs != null && Math.abs(t.continuityDriftMs) > e)
            );
          }),
          (n.$18 = function (t, n, r, a, i) {
            var e = n.calibration != null,
              l = r.arrivalAudioTimestamp !== 0 ? r.arrivalAudioTimestamp : a,
              s = i != null ? Math.round(i) : "n/a",
              u =
                r.continuityDriftMs != null
                  ? Math.round(r.continuityDriftMs)
                  : "n/a";
            if (
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AVSync] Video reset jid=",
                    " delta=",
                    " contDrift=",
                    " kf=",
                    "",
                  ])),
                t,
                s,
                u,
                r.isKeyFrame,
              ),
              (n.calibration = null),
              (n.calibrationCandidate = null),
              (n.consecutiveLateCount = 0),
              (n.lastRecalibTimeMs = 0),
              e && (n.pendingRecalibration = !0),
              r.isKeyFrame)
            ) {
              this.$20({
                audioTimestamp: l,
                jid: t,
                state: n,
                videoRtpTimestamp: r.timestamp,
              });
              return;
            }
            n.awaitingKeyFrame = !0;
            var c = this.$4;
            c != null && c(t);
          }),
          (n.$23 = function (t, n) {
            var e = this.$1;
            return e === 0 ? null : (Math.max(0, t - n) / e) * 1e3;
          }),
          (n.$22 = function (t, n) {
            return n != null ? Math.max(t, n) : t;
          }),
          (n.$24 = function (t, n) {
            return (this.$21(t, n) / S) * 1e3;
          }),
          (n.$21 = function (t, n) {
            var e = t - n;
            return (e > R / 2 ? (e -= R) : e < -(R / 2) && (e += R), e);
          }),
          (n.$16 = function (t, n, r) {
            var e = t[n];
            (t.splice(n, 1),
              r(
                e.userJid,
                e.frameBuffer,
                e.width,
                e.height,
                e.orientation,
                e.format,
                e.timestamp,
                e.isKeyFrame,
              ));
          }),
          (n.$12 = function (t) {
            for (var e of this.$7) {
              var n = this.$6.get(e);
              if (!(n == null || n.frameQueue == null)) {
                for (var r of n.frameQueue)
                  t(
                    r.userJid,
                    r.frameBuffer,
                    r.width,
                    r.height,
                    r.orientation,
                    r.format,
                    r.timestamp,
                    r.isKeyFrame,
                  );
                n.frameQueue = null;
              }
            }
            this.$7.clear();
          }),
          t
        );
      })();
    ((l.MAX_QUEUE_SIZE = m),
      (l.SYNC_THRESHOLD_AHEAD_MS = p),
      (l.RECALIBRATION_THRESHOLD_MS = h),
      (l.WAWebVoipAVSyncController = L));
  },
  98,
);
