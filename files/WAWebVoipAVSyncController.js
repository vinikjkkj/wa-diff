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
            (this.$6 = !1),
            (this.$7 = new Map()),
            (this.$8 = new Set()),
            (this.$9 = new (o(
              "WAWebVoipAVSyncMetricsCollector",
            ).WAWebVoipAVSyncMetricsCollector)(p)));
        }
        var n = t.prototype;
        return (
          (n.$10 = function (t) {
            var e = this.$7.get(t);
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
                  framesReordered: 0,
                  framesReorderPrevented: 0,
                  deltaSumMs: 0,
                  deltaSampleCount: 0,
                }),
                this.$7.set(t, e)),
              e
            );
          }),
          (n.enable = function (n, r, a, i, l) {
            ((this.$6 = (l == null ? void 0 : l.strictFifoDrain) === !0),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AVSync] Enabling, sampleRate=",
                    " strictFifoDrain=",
                    "",
                  ])),
                n,
                this.$6,
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
              this.$7.clear(),
              this.$8.clear(),
              (this.$2 = null),
              (this.$3 = null),
              (this.$4 = null));
          }),
          (n.reset = function () {
            for (var e of this.$7.values())
              ((e.calibration = null),
                (e.calibrationCandidate = null),
                (e.lastObservedFrame = null),
                (e.awaitingKeyFrame = !1),
                (e.pendingRecalibration = !1),
                (e.consecutiveLateCount = 0),
                (e.lastRecalibTimeMs = 0));
            this.$9.recordDeviceChangeReset();
          }),
          (n.isEnabled = function () {
            return this.$5;
          }),
          (n.removeParticipant = function (t) {
            (this.$7.delete(t), this.$8.delete(t));
          }),
          (n.consumeMetrics = function () {
            return !this.$5 && !this.$9.hasCalibrated()
              ? null
              : this.$9.consume();
          }),
          (n.peekPerParticipantMetrics = function (t) {
            var e = this.$7.get(t);
            if (e == null) return null;
            var n =
              e.deltaSampleCount > 0 ? e.deltaSumMs / e.deltaSampleCount : null;
            return {
              avgDeltaMs: n,
              recalibrationCount: e.recalibrationCount,
              framesHeld: e.framesHeld,
              framesLate: e.framesLate,
              framesReordered: e.framesReordered,
              framesReorderPrevented: e.framesReorderPrevented,
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
                o = t.source,
                a = babelHelpers.extends({}, t, {
                  arrivalAudioTimestamp: r,
                  continuityDriftMs: this.$11(o, r, t.timestamp),
                  skippedOver: !1,
                }),
                i = this.$10(o),
                l = i.frameQueue;
              for (
                l == null && ((l = []), (i.frameQueue = l), this.$8.add(o));
                l.length >= m;
              ) {
                var s = l.shift();
                (this.$9.recordFrameEvicted(),
                  i.framesEvicted++,
                  s != null &&
                    e != null &&
                    e(
                      s.source,
                      s.frameBuffer,
                      s.width,
                      s.height,
                      s.orientation,
                      s.format,
                      s.timestamp,
                      s.isKeyFrame,
                    ));
              }
              (l.push(a), this.$9.observeQueueDepth(l.length), this.$12());
            }
          }),
          (n.$12 = function () {
            var e = this.$3,
              t = this.$2;
            if (!(e == null || t == null)) {
              var n = e();
              if (n === 0) {
                this.$13(t);
                return;
              }
              for (var r of this.$8) {
                var o = this.$7.get(r);
                o != null && this.$14(r, o, n, t);
              }
            }
          }),
          (n.$14 = function (t, n, r, a) {
            var e = n.frameQueue;
            if (e != null) {
              for (var i = 0; i < e.length; ) {
                var l = e[i],
                  s = this.$15({
                    audioTimestamp: r,
                    state: n,
                    videoRtpTimestamp: l.timestamp,
                  });
                if (s == null) {
                  var c =
                    l.arrivalAudioTimestamp !== 0 ? l.arrivalAudioTimestamp : r;
                  (this.$16(t, n, l, c), (i = this.$17(e, i, a)));
                  continue;
                }
                if (
                  (this.$9.recordDelta(s),
                  (n.deltaSumMs += s),
                  n.deltaSampleCount++,
                  this.$18(l, s))
                ) {
                  ((i = this.$19(e, i, a)),
                    this.$20(t, n, l, r, s),
                    (i = this.$17(e, i, a)));
                  continue;
                }
                if (Math.abs(s) > h) {
                  (this.$21(t, n, r, l.timestamp, s), (i = this.$17(e, i, a)));
                  continue;
                }
                if (s > p) {
                  ((n.consecutiveLateCount = 0),
                    this.$9.recordFrameHeld(),
                    n.framesHeld++,
                    i++);
                  continue;
                }
                if (s < _) {
                  var d = n.consecutiveLateCount + 1;
                  if (
                    ((n.consecutiveLateCount = d),
                    this.$9.recordFrameRenderedLate(),
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
                      t.key,
                      d,
                      Math.round(s),
                    ),
                      (n.consecutiveLateCount = 0),
                      (n.lastRecalibTimeMs = Date.now()),
                      this.$22({
                        audioTimestamp: r,
                        source: t,
                        state: n,
                        videoRtpTimestamp: l.timestamp,
                      }),
                      this.$9.recordForceRecalibration(),
                      n.recalibrationCount++,
                      (i = this.$17(e, i, a)));
                    continue;
                  }
                  i = this.$17(e, i, a);
                  continue;
                }
                ((n.consecutiveLateCount = 0),
                  this.$9.recordFrameRenderedInSync(),
                  (i = this.$17(e, i, a)));
              }
              e.length === 0 && ((n.frameQueue = null), this.$8.delete(t));
            }
          }),
          (n.$15 = function (t) {
            var e = t.audioTimestamp,
              n = t.state,
              r = t.videoRtpTimestamp,
              o = n.calibration;
            if (o == null) return null;
            var a = this.$1;
            if (a === 0) return null;
            var i = (e - o.firstAudioTimestamp) / a,
              l = this.$23(r, o.firstVideoRtpTimestamp),
              s = l / S;
            return (s - i) * 1e3;
          }),
          (n.$22 = function (t) {
            var e = t.audioTimestamp,
              n = t.source,
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
                  this.$9.recordRecalibration())
                : a && this.$9.recordCalibration());
          }),
          (n.$21 = function (t, n, r, a, i) {
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
                  t.key,
                  i,
                ),
                (n.lastRecalibTimeMs = e),
                (n.pendingRecalibration = !1),
                this.$22({
                  audioTimestamp: r,
                  source: t,
                  state: n,
                  videoRtpTimestamp: a,
                }),
                this.$9.recordRecalibration(),
                n.recalibrationCount++,
                !0);
          }),
          (n.$11 = function (t, n, r) {
            var e = this.$10(t);
            if (n === 0) return ((e.lastObservedFrame = null), null);
            var o = e.lastObservedFrame,
              a = this.$24(n, o != null ? o.audioTimestamp : null);
            if (
              ((e.lastObservedFrame = {
                audioTimestamp: a,
                videoRtpTimestamp: r,
              }),
              o == null)
            )
              return null;
            var i = this.$25(a, o.audioTimestamp);
            if (i == null) return null;
            var l = this.$26(r, o.videoRtpTimestamp);
            return l - i;
          }),
          (n.$27 = function (t) {
            return t.isKeyFrame ? y : C;
          }),
          (n.$28 = function (t, n, r, o) {
            return n.awaitingKeyFrame
              ? r.isKeyFrame
                ? (this.$22({
                    audioTimestamp: o,
                    source: t,
                    state: n,
                    videoRtpTimestamp: r.timestamp,
                  }),
                  !0)
                : !1
              : null;
          }),
          (n.$29 = function (t, n, r, o) {
            var e = this.$27(r);
            return r.continuityDriftMs == null ||
              Math.abs(r.continuityDriftMs) <= e
              ? !1
              : (this.$20(t, n, r, o, null), !0);
          }),
          (n.$16 = function (t, n, r, o) {
            if (o === 0 || this.$1 === 0) return !1;
            var e = this.$28(t, n, r, o);
            if (e != null) return e;
            if (this.$29(t, n, r, o)) return !1;
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
            var i = this.$24(o, a.lastAudioTimestamp),
              l = this.$25(i, a.lastAudioTimestamp);
            if (l == null) return !1;
            var s = this.$26(r.timestamp, a.lastVideoRtpTimestamp),
              u = s - l,
              c = this.$27(r);
            if (Math.abs(u) > c) return (this.$20(t, n, r, o, null), !1);
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
              : (this.$22({
                  audioTimestamp: i,
                  source: t,
                  state: n,
                  videoRtpTimestamp: r.timestamp,
                }),
                !0);
          }),
          (n.$18 = function (t, n) {
            var e = this.$27(t);
            return (
              Math.abs(n) > e ||
              (t.continuityDriftMs != null && Math.abs(t.continuityDriftMs) > e)
            );
          }),
          (n.$20 = function (t, n, r, a, i) {
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
                t.key,
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
              this.$22({
                audioTimestamp: l,
                source: t,
                state: n,
                videoRtpTimestamp: r.timestamp,
              });
              return;
            }
            n.awaitingKeyFrame = !0;
            var c = this.$4;
            c != null && c(t);
          }),
          (n.$25 = function (t, n) {
            var e = this.$1;
            return e === 0 ? null : (Math.max(0, t - n) / e) * 1e3;
          }),
          (n.$24 = function (t, n) {
            return n != null ? Math.max(t, n) : t;
          }),
          (n.$26 = function (t, n) {
            return (this.$23(t, n) / S) * 1e3;
          }),
          (n.$23 = function (t, n) {
            var e = t - n;
            return (e > R / 2 ? (e -= R) : e < -(R / 2) && (e += R), e);
          }),
          (n.$17 = function (t, n, r) {
            var e = n;
            e > 0 &&
              (this.$6 ? (e = this.$19(t, e, r)) : this.$30(t, e, t[e].source));
            var o = t[e];
            return (t.splice(e, 1), this.$31(o, r), e);
          }),
          (n.$19 = function (t, n, r) {
            if (!this.$6 || n === 0) return n;
            var e = this.$7.get(t[n].source),
              o = t.splice(0, n);
            this.$9.recordReordersPrevented(o.length);
            for (var a of o)
              (this.$9.recordFrameRenderedLate(),
                e != null && (e.framesLate++, e.framesReorderPrevented++),
                this.$31(a, r));
            return 0;
          }),
          (n.$31 = function (t, n) {
            n(
              t.source,
              t.frameBuffer,
              t.width,
              t.height,
              t.orientation,
              t.format,
              t.timestamp,
              t.isKeyFrame,
            );
          }),
          (n.$30 = function (t, n, r) {
            for (var e = 0, o = 0; o < n; o++) {
              var a = t[o];
              a.skippedOver || ((a.skippedOver = !0), e++);
            }
            if (e !== 0) {
              this.$9.recordFramesReordered(e);
              var i = this.$7.get(r);
              i != null && (i.framesReordered += e);
            }
          }),
          (n.$13 = function (t) {
            for (var e of this.$8) {
              var n = this.$7.get(e);
              if (!(n == null || n.frameQueue == null)) {
                for (var r of n.frameQueue)
                  t(
                    r.source,
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
            this.$8.clear();
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
