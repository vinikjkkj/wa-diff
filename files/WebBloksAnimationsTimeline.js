__d(
  "WebBloksAnimationsTimeline",
  ["WebBloksAnimationValue", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.id = null),
          (this.isCancelled = !1),
          (this.isPaused = !1),
          (this.$1 = new Set()),
          (this.$2 = []),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$14 = function () {
            document.visibilityState === "hidden" && !t.isPaused
              ? t.pause()
              : document.visibilityState === "visible" &&
                t.isPaused &&
                t.resume();
          }),
          (this.$2 = this.$6(e)));
      }
      var t = e.prototype;
      return (
        (t.setID = function (t) {
          this.id = t;
        }),
        (t.getID = function () {
          return this.id;
        }),
        (t.play = function (t, n) {
          var e = this;
          ((this.isCancelled = !1), (this.isPaused = !1));
          var r = this.$4,
            a = function (l) {
              if (!(n != null && !(t != null && t.has(n)))) {
                r = r != null ? r : l;
                var i = Math.floor(l - r);
                e.$3 = i;
                var s = e.$7(i);
                for (var u of s) {
                  var c = u[0],
                    d = u[1],
                    m = d.calculateTimelineAnimatedValue(i - c);
                  m != null &&
                    (d.setAnimatedValue(m),
                    d.onUpdateListeners.forEach(function (e) {
                      return e();
                    }));
                }
                if (i / e.getTotalDuration() < 1)
                  e.$5 = window.requestAnimationFrame(a);
                else {
                  var p = e.$8(),
                    _ = p[1];
                  _.isInfinite
                    ? (e.$9(), (e.$5 = window.requestAnimationFrame(a)))
                    : e.$10();
                }
                o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
                  "--web-bloks-animation-frame",
                  {
                    detail: {
                      animationID: e.id,
                      timestamp: e.getCurrentTime(),
                    },
                  },
                );
              }
            };
          ((this.$5 = window.requestAnimationFrame(a)), this.$11());
        }),
        (t.pause = function () {
          this.isPaused ||
            ((this.isPaused = !0),
            this.$5 != null &&
              (window.cancelAnimationFrame(this.$5), (this.$5 = null)),
            (this.$4 = null));
        }),
        (t.resume = function () {
          var e;
          this.isPaused &&
            ((this.isPaused = !1),
            this.setCurrentTime((e = this.$3) != null ? e : 0),
            this.play(),
            o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-animation-resume",
            ));
        }),
        (t.addOnCompleteListener = function (t) {
          this.$1.has(t) || this.$1.add(t);
        }),
        (t.removeOnCompleteListener = function (t) {
          this.$1.delete(t);
        }),
        (t.cancel = function () {
          ((this.isCancelled = !0),
            this.$5 != null &&
              (window.cancelAnimationFrame(this.$5), (this.$5 = null)),
            this.$12());
        }),
        (t.getStartTimeToAnimationInstance = function () {
          return this.$2;
        }),
        (t.getTotalDuration = function () {
          var e = this.$8(),
            t = e[0],
            n = e[1];
          return t + n.getTotalDuration();
        }),
        (t.getCurrentTime = function () {
          var e;
          return (e = this.$3) != null ? e : 0;
        }),
        (t.setCurrentTime = function (t) {
          this.$4 = window.performance.now() - t;
        }),
        (t.$9 = function () {
          for (
            var e = this.$13(),
              t = this.$2.slice(e),
              n = t[0],
              r = n[0],
              o = this.getTotalDuration() - r,
              a = 0;
            a < e;
            a++
          )
            this.$2.pop();
          for (var i of t) {
            var l = i[0],
              s = i[1];
            this.$2.push([o + l, s]);
          }
        }),
        (t.$7 = function (t) {
          return this.$2.filter(function (e) {
            var n = e[0],
              r = e[1];
            return t >= n && t <= n + r.getTotalDuration();
          });
        }),
        (t.$13 = function () {
          for (var e = this.$2.length - 1; e > 0; ) {
            var t = this.$2[e],
              n = t[0],
              r = t[1];
            r.isInfinite && e--;
          }
          return e;
        }),
        (t.$10 = function () {
          (this.$2.forEach(function (e) {
            var t = e[1];
            return t.onCompleteListeners.forEach(function (e) {
              return e(!0);
            });
          }),
            this.$1.forEach(function (e) {
              return e(!0);
            }),
            (this.$4 = null),
            this.$12());
        }),
        (t.$8 = function () {
          var e = Array.from(this.$2);
          return e[e.length - 1];
        }),
        (t.$6 = function (t) {
          var e = [],
            n = function (r) {
              if (!(!r || !r.length)) {
                var t = r[0],
                  a = r[1];
                if (
                  a instanceof
                  o("WebBloksAnimationValue").WebBloksAnimationValue
                ) {
                  e.push([t, a]);
                  return;
                }
                for (var i of a.getComputedTimes()) {
                  var l = i[0],
                    s = i[1];
                  n([t + l, s]);
                }
              }
            };
          return (n([0, t]), e);
        }),
        (t.$11 = function () {
          window.addEventListener("visibilitychange", this.$14);
        }),
        (t.$12 = function () {
          window.removeEventListener("visibilitychange", this.$14);
        }),
        e
      );
    })();
    l.WebBloksAnimationsTimeline = e;
  },
  98,
);
