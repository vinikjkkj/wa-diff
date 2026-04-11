__d(
  "WAWebPttAudioManager",
  ["WAWebPttAudioProxy"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          var t = this,
            n;
          ((this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.__TEST_ONLY__ = {
              getActiveAudio: function (n) {
                return t.$2.get(n);
              },
              getAllAudios: function () {
                return [].concat(
                  Array.from(t.$2.values()),
                  Array.from(t.$3.values()),
                );
              },
            }),
            (this.$5 =
              (n = e == null ? void 0 : e.minPoolSize) != null ? n : 1));
        }
        var t = e.prototype;
        return (
          (t.addAudioListener = function (t, n, r) {
            var e, o;
            ((e = this.$2.get(t)) == null || e.addEventListener(n, r),
              (o = this.$3.get(t)) == null || o.addEventListener(n, r));
            var a = this.$1.get(t);
            (a == null && ((a = new Set()), this.$1.set(t, a)),
              a.add({ type: n, listener: r }));
          }),
          (t.removeAudioListener = function (t, n, r) {
            var e, o;
            ((e = this.$2.get(t)) == null || e.removeEventListener(n, r),
              (o = this.$3.get(t)) == null || o.removeEventListener(n, r));
            var a = this.$1.get(t);
            if (a != null) {
              for (var i of a)
                if (i.type === n && i.listener === r) {
                  a.delete(i);
                  break;
                }
              a.size === 0 && this.$1.delete(t);
            }
          }),
          (t.createAudioProxy = function () {
            return new (o("WAWebPttAudioProxy").AudioProxy)(this);
          }),
          (t.$6 = function (t) {
            var e = this,
              n,
              r = this.$2.get(t);
            if (r != null)
              return (self.clearTimeout(this.$4.get(r)), this.$4.delete(r), r);
            var o = this.$3.get(t);
            if (o != null) return (this.$3.delete(t), this.$2.set(t, o), o);
            var a = this.$2.size + this.$3.size;
            if (a >= this.$5) {
              var i = function () {
                  var n,
                    r,
                    o = s[0],
                    a = s[1];
                  return (
                    e.$3.delete(o),
                    e.$2.set(t, a),
                    (n = e.$1.get(o)) == null ||
                      n.forEach(function (e) {
                        var t = e.listener,
                          n = e.type;
                        a.removeEventListener(n, t);
                      }),
                    (r = e.$1.get(t)) == null ||
                      r.forEach(function (e) {
                        var t = e.listener,
                          n = e.type;
                        a.addEventListener(n, t);
                      }),
                    { v: a }
                  );
                },
                l;
              for (var s of this.$3) if (((l = i()), l)) return l.v;
            }
            var u = new Audio();
            (this.$2.set(t, u),
              (n = this.$1.get(t)) == null ||
                n.forEach(function (e) {
                  var t = e.listener,
                    n = e.type;
                  u.addEventListener(n, t);
                }));
            var c = function () {
              for (var t of e.$2) {
                var n = t[0],
                  r = t[1];
                if (r === u) {
                  (e.$2.delete(n), e.$3.set(n, u));
                  break;
                }
              }
            };
            return (
              u.addEventListener("pause", function () {
                e.$4.set(u, self.setTimeout(c, 1e3));
              }),
              u
            );
          }),
          (t.play = function (t, n) {
            var e = this.$6(t);
            return (
              (e.src = t.src),
              (e.currentTime = n.currentTime),
              (e.playbackRate = n.playbackRate),
              (e.defaultPlaybackRate = n.defaultPlaybackRate),
              e.play()
            );
          }),
          (t.pause = function (t) {
            var e;
            (e = this.$2.get(t)) == null || e.pause();
          }),
          (t.load = function (t) {
            var e = this.$6(t);
            ((e.src = t.src), e == null || e.load());
          }),
          (t.setDefaultPlaybackRate = function (t, n) {
            var e = this.$2.get(t);
            e != null && (e.defaultPlaybackRate = n);
          }),
          (t.setPlaybackRate = function (t, n) {
            var e = this.$2.get(t);
            e != null && (e.playbackRate = n);
          }),
          (t.getCurrentTime = function (t) {
            var e, n;
            return (e =
              (n = this.$2.get(t)) == null ? void 0 : n.currentTime) != null
              ? e
              : null;
          }),
          (t.setCurrentTime = function (t, n) {
            var e = this.$2.get(t);
            if (e == null) {
              var r;
              (r = this.$1.get(t)) == null ||
                r.forEach(function (e) {
                  var t = e.listener,
                    n = e.type;
                  n === "timeupdate" && t();
                });
              return;
            }
            e.currentTime = n;
          }),
          (t.getDuration = function (t) {
            var e, n;
            return (e = (n = this.$2.get(t)) == null ? void 0 : n.duration) !=
              null
              ? e
              : null;
          }),
          (t.getPaused = function (t) {
            var e, n;
            return (e = (n = this.$2.get(t)) == null ? void 0 : n.paused) !=
              null
              ? e
              : !0;
          }),
          e
        );
      })(),
      s = new e();
    ((l.AudioManagerImpl = e), (l.AudioManager = s));
  },
  98,
);
