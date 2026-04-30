__d(
  "WAWebVoipAVSyncMetricsCollector",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 3,
      s = (function () {
        function t(e) {
          ((this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$11 = 0),
            (this.$12 = 0),
            (this.$13 = 0),
            (this.$14 = []),
            (this.$15 = 0),
            (this.$16 = 0),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.recordCalibration = function () {
            this.$2++;
          }),
          (n.recordRecalibration = function () {
            this.$3++;
          }),
          (n.recordForceRecalibration = function () {
            this.$4++;
          }),
          (n.recordDeviceChangeReset = function () {
            this.$5++;
          }),
          (n.recordFrameHeld = function () {
            this.$6++;
          }),
          (n.recordFrameEvicted = function () {
            this.$7++;
          }),
          (n.recordFrameRenderedInSync = function () {
            this.$9++;
          }),
          (n.recordFrameRenderedLate = function () {
            this.$10++;
          }),
          (n.observeQueueDepth = function (t) {
            t > this.$8 && (this.$8 = t);
          }),
          (n.recordDelta = function (n) {
            (this.$11++, (this.$12 += n));
            var t = Math.abs(n);
            if ((t > this.$13 && (this.$13 = t), this.$14.length < e))
              this.$14.push(n);
            else {
              var r = this.$11 % (e * l);
              r < e && (this.$14[r] = n);
            }
            var o = Date.now();
            (this.$16 > 0 && t > this.$1 && (this.$15 += o - this.$16),
              (this.$16 = o));
          }),
          (n.hasCalibrated = function () {
            return this.$2 > 0;
          }),
          (n.consume = function () {
            var e = this.$11 > 0 ? this.$12 / this.$11 : null,
              t = null,
              n = null;
            if (this.$14.length > 0) {
              var r = this.$14.slice().sort(function (e, t) {
                return e - t;
              });
              ((t = r[Math.floor(r.length * 0.5)]),
                (n = r[Math.floor(r.length * 0.95)]));
            }
            var o = {
              webAvSyncEnabled: !0,
              webAvSyncCalibrationCount: this.$2,
              webAvSyncRecalibrationCount: this.$3,
              webAvSyncForceRecalibrationCount: this.$4,
              webAvSyncDeviceChangeResetCount: this.$5,
              webAvSyncFramesHeldTotal: this.$6,
              webAvSyncFramesEvictedTotal: this.$7,
              webAvSyncMaxQueueDepth: this.$8,
              webAvSyncFramesRenderedInSync: this.$9,
              webAvSyncFramesRenderedLate: this.$10,
              webAvSyncAvgDeltaMs: e != null ? Math.round(e) : null,
              webAvSyncP50DeltaMs: t != null ? Math.round(t) : null,
              webAvSyncP95DeltaMs: n != null ? Math.round(n) : null,
              webAvSyncMaxAbsDeltaMs: Math.round(this.$13),
              webAvSyncTimeOutOfSyncMs: Math.round(this.$15),
            };
            return (this.$17(), o);
          }),
          (n.$17 = function () {
            ((this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = 0),
              (this.$5 = 0),
              (this.$6 = 0),
              (this.$7 = 0),
              (this.$8 = 0),
              (this.$9 = 0),
              (this.$10 = 0),
              (this.$11 = 0),
              (this.$12 = 0),
              (this.$13 = 0),
              (this.$14 = []),
              (this.$15 = 0),
              (this.$16 = 0));
          }),
          t
        );
      })();
    i.WAWebVoipAVSyncMetricsCollector = s;
  },
  66,
);
