__d(
  "WebBloksAnimationValue",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        var t = e.animatedValue,
          n = e.animation,
          r = e.id;
        ((this.isInfinite = !1),
          (this.animatedValue = null),
          (this.onUpdateListeners = new Set()),
          (this.onCompleteListeners = new Set()),
          (this.$1 = null),
          (this.$2 = null),
          (this.id = r),
          (this.animatedValue = t),
          (this.animation = n));
      }
      var t = e.prototype;
      return (
        (t.addUpdateListener = function (t) {
          this.onUpdateListeners.has(t) || this.onUpdateListeners.add(t);
        }),
        (t.removeUpdateListener = function (t) {
          this.onUpdateListeners.delete(t);
        }),
        (t.addOnCompleteListener = function (t) {
          this.onCompleteListeners.add(t);
        }),
        (t.removeOnCompleteListener = function (t) {
          this.onCompleteListeners.delete(t);
        }),
        (t.setAnimatedValue = function (t) {
          this.animatedValue = t;
        }),
        (t.getTotalDuration = function () {
          return this.animation.duration;
        }),
        (t.getCurrentTime = function () {
          var e;
          return (e = this.$2) != null ? e : 0;
        }),
        (t.setCurrentTime = function (t) {
          ((this.$2 = t), (this.$1 = window.performance.now() - this.$2));
        }),
        (t.calculateTimelineAnimatedValue = function (t) {
          var e = this.animation,
            n = e.duration,
            r = e.format,
            o = e.from,
            a = e.interpolator,
            i = e.to,
            l = [].concat(o),
            s = [].concat(i),
            u = t / n;
          Number.isNaN(u) && (u = 0);
          for (var c = [], d = 0; d < l.length; d++)
            s[d] > l[d]
              ? c.push(l[d] + a(u) * (s[d] - l[d]))
              : c.push(l[d] - a(u) * (l[d] - s[d]));
          return r.apply(void 0, c);
        }),
        e
      );
    })();
    i.WebBloksAnimationValue = e;
  },
  66,
);
