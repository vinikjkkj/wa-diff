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
      C = (function () {
        function t() {
          ((this.$1 = 0),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = !1),
            (this.$7 = new Map()),
            (this.$8 = new Map()));
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
            (this.$5.clear(), this.$7.clear(), this.$8.clear());
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
                  );
              }
              (r.push(t), this.$9());
            }
          }),
          (n.$9 = function () {
            var e = this.$3,
              t = this.$2;
            if (!(e == null || t == null)) {
              var n = e();
              if (n === 0) {
                this.$10(t);
                return;
              }
              for (var r of this.$4.entries()) {
                var o = r[0],
                  a = r[1];
                this.$11(o, a, n, t);
              }
            }
          }),
          (n.$11 = function (t, n, r, a) {
            for (var e = 0; e < n.length; ) {
              var i = n[e],
                l = this.$12(t, i.timestamp, r);
              if (l == null) {
                (this.$13(t, r, i.timestamp), this.$14(n, e, a));
                continue;
              }
              if (Math.abs(l) > _) {
                (this.$15(t, r, i.timestamp, l), this.$14(n, e, a));
                continue;
              }
              if (l > m) {
                (this.$7.set(t, 0), e++);
                continue;
              }
              if (l < p) {
                var s,
                  c = ((s = this.$7.get(t)) != null ? s : 0) + 1;
                if ((this.$7.set(t, c), c >= g)) {
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
                    this.$13(t, r, i.timestamp),
                    this.$14(n, e, a));
                  continue;
                }
                this.$14(n, e, a);
                continue;
              }
              (this.$7.set(t, 0), this.$14(n, e, a));
            }
            n.length === 0 && this.$4.delete(t);
          }),
          (n.$12 = function (t, n, r) {
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
          (n.$13 = function (t, n, r) {
            this.$5.set(t, {
              firstAudioTimestamp: n,
              firstVideoRtpTimestamp: r,
            });
          }),
          (n.$15 = function (t, n, r, a) {
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
                this.$13(t, n, r),
                !0);
          }),
          (n.$14 = function (t, n, r) {
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
          (n.$10 = function (t) {
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
    l.WAWebVoipAVSyncController = C;
  },
  98,
);
