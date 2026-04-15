__d(
  "WAWebVoipAVSyncController",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 5,
      m = 60,
      p = -120,
      _ = 300,
      f = 2e3,
      g = 10,
      h = 9e4,
      y = 4294967296,
      C = 1e3,
      b = 3,
      v = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = !1),
            (this.$7 = new Map()),
            (this.$8 = new Map()),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$11 = 0),
            (this.$12 = 0),
            (this.$13 = 0),
            (this.$14 = 0),
            (this.$15 = 0),
            (this.$16 = 0),
            (this.$17 = 0),
            (this.$18 = 0),
            (this.$19 = 0),
            (this.$20 = 0),
            (this.$21 = []),
            (this.$22 = 0),
            (this.$23 = 0));
        }
        var n = t.prototype;
        return (
          (n.enable = function (n, r, a) {
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
              (this.$6 = !0));
          }),
          (n.disable = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AVSync] Disabling",
                ])),
            ),
              (this.$6 = !1),
              this.$4.clear(),
              this.$5.clear(),
              this.$7.clear(),
              this.$8.clear(),
              (this.$2 = null),
              (this.$3 = null));
          }),
          (n.reset = function () {
            (this.$5.clear(), this.$7.clear(), this.$8.clear(), this.$12++);
          }),
          (n.isEnabled = function () {
            return this.$6;
          }),
          (n.removeParticipant = function (t) {
            (this.$4.delete(t),
              this.$5.delete(t),
              this.$7.delete(t),
              this.$8.delete(t));
          }),
          (n.consumeMetrics = function () {
            if (!this.$6 && this.$9 === 0) return null;
            var e = this.$18 > 0 ? this.$19 / this.$18 : null,
              t = null,
              n = null;
            if (this.$21.length > 0) {
              var r = this.$21.slice().sort(function (e, t) {
                return e - t;
              });
              ((t = r[Math.floor(r.length * 0.5)]),
                (n = r[Math.floor(r.length * 0.95)]));
            }
            var o = {
              webAvSyncEnabled: !0,
              webAvSyncCalibrationCount: this.$9,
              webAvSyncRecalibrationCount: this.$10,
              webAvSyncForceRecalibrationCount: this.$11,
              webAvSyncDeviceChangeResetCount: this.$12,
              webAvSyncFramesHeldTotal: this.$13,
              webAvSyncFramesEvictedTotal: this.$14,
              webAvSyncMaxQueueDepth: this.$15,
              webAvSyncFramesRenderedInSync: this.$16,
              webAvSyncFramesRenderedLate: this.$17,
              webAvSyncAvgDeltaMs: e != null ? Math.round(e) : null,
              webAvSyncP50DeltaMs: t != null ? Math.round(t) : null,
              webAvSyncP95DeltaMs: n != null ? Math.round(n) : null,
              webAvSyncMaxAbsDeltaMs: Math.round(this.$20),
              webAvSyncTimeOutOfSyncMs: Math.round(this.$22),
            };
            return (this.$24(), o);
          }),
          (n.$24 = function () {
            ((this.$9 = 0),
              (this.$10 = 0),
              (this.$11 = 0),
              (this.$12 = 0),
              (this.$13 = 0),
              (this.$14 = 0),
              (this.$15 = 0),
              (this.$16 = 0),
              (this.$17 = 0),
              (this.$18 = 0),
              (this.$19 = 0),
              (this.$20 = 0),
              (this.$21 = []),
              (this.$22 = 0),
              (this.$23 = 0));
          }),
          (n.$25 = function (t) {
            (this.$18++, (this.$19 += t));
            var e = Math.abs(t);
            if ((e > this.$20 && (this.$20 = e), this.$21.length < C))
              this.$21.push(t);
            else {
              var n = this.$18 % (C * b);
              n < C && (this.$21[n] = t);
            }
            var r = Date.now();
            (this.$23 > 0 && e > m && (this.$22 += r - this.$23),
              (this.$23 = r));
          }),
          (n.enqueueVideoFrame = function (t) {
            if (this.$6) {
              var e = this.$2,
                n = t.userJid,
                r = this.$4.get(n);
              for (
                r == null && ((r = []), this.$4.set(n, r));
                r.length >= d;
              ) {
                var o = r.shift();
                (this.$14++,
                  o != null &&
                    e != null &&
                    e(
                      o.userJid,
                      o.frameBuffer,
                      o.width,
                      o.height,
                      o.orientation,
                      o.format,
                      o.timestamp,
                      o.isKeyFrame,
                    ));
              }
              (r.push(t),
                r.length > this.$15 && (this.$15 = r.length),
                this.$26());
            }
          }),
          (n.$26 = function () {
            var e = this.$3,
              t = this.$2;
            if (!(e == null || t == null)) {
              var n = e();
              if (n === 0) {
                this.$27(t);
                return;
              }
              for (var r of this.$4.entries()) {
                var o = r[0],
                  a = r[1];
                this.$28(o, a, n, t);
              }
            }
          }),
          (n.$28 = function (t, n, r, a) {
            for (var e = 0; e < n.length; ) {
              var i = n[e],
                l = this.$29(t, i.timestamp, r);
              if (l == null) {
                (this.$30(t, r, i.timestamp), this.$31(n, e, a));
                continue;
              }
              if ((this.$25(l), Math.abs(l) > _)) {
                (this.$32(t, r, i.timestamp, l), this.$31(n, e, a));
                continue;
              }
              if (l > m) {
                (this.$7.set(t, 0), this.$13++, e++);
                continue;
              }
              if (l < p) {
                var s,
                  c = ((s = this.$7.get(t)) != null ? s : 0) + 1;
                if ((this.$7.set(t, c), this.$17++, c >= g)) {
                  (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AVSync] force recalib jid=",
                        " late=",
                        " delta=",
                        "",
                      ])),
                    t,
                    c,
                    Math.round(l),
                  ),
                    this.$7.set(t, 0),
                    this.$8.set(t, Date.now()),
                    this.$30(t, r, i.timestamp),
                    this.$11++,
                    this.$31(n, e, a));
                  continue;
                }
                this.$31(n, e, a);
                continue;
              }
              (this.$7.set(t, 0), this.$16++, this.$31(n, e, a));
            }
            n.length === 0 && this.$4.delete(t);
          }),
          (n.$29 = function (t, n, r) {
            var e = this.$5.get(t);
            if (e == null) return null;
            var o = this.$1;
            if (o === 0) return null;
            var a = (r - e.firstAudioTimestamp) / o,
              i = n - e.firstVideoRtpTimestamp;
            i > y / 2 ? (i -= y) : i < -(y / 2) && (i += y);
            var l = i / h;
            return (l - a) * 1e3;
          }),
          (n.$30 = function (t, n, r) {
            var e = !this.$5.has(t);
            (this.$5.set(t, {
              firstAudioTimestamp: n,
              firstVideoRtpTimestamp: r,
            }),
              e && this.$9++);
          }),
          (n.$32 = function (t, n, r, a) {
            var e,
              i = Date.now(),
              l = (e = this.$8.get(t)) != null ? e : 0;
            return i - l < f
              ? !1
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AVSync] Recalibrating jid=",
                      ", deltaMs=",
                      "",
                    ])),
                  t,
                  a,
                ),
                this.$8.set(t, i),
                this.$30(t, n, r),
                this.$10++,
                !0);
          }),
          (n.$31 = function (t, n, r) {
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
          (n.$27 = function (t) {
            for (var e of this.$4.entries()) {
              var n = e[0],
                r = e[1];
              for (var o of r)
                t(
                  o.userJid,
                  o.frameBuffer,
                  o.width,
                  o.height,
                  o.orientation,
                  o.format,
                  o.timestamp,
                  o.isKeyFrame,
                );
              this.$4.delete(n);
            }
          }),
          t
        );
      })();
    l.WAWebVoipAVSyncController = v;
  },
  98,
);
