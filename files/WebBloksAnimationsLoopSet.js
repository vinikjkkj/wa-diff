__d(
  "WebBloksAnimationsLoopSet",
  ["WebBloksAnimationsSet"],
  function (t, n, r, o, a, i, l) {
    var e = ["limit"],
      s = (function (t) {
        function n(n) {
          var r,
            o = n.limit,
            a = babelHelpers.objectWithoutPropertiesLoose(n, e);
          return (
            (r = t.call(this, a) || this),
            (r.limit = 1 / 0),
            (r.limit = o || 1 / 0),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getTotalDuration = function () {
            if (this.limit === 1 / 0) return 1 / 0;
            var e = this.animations.reduce(function (e, t) {
              return e + t.getTotalDuration();
            }, 0);
            return e * this.limit + this.startDelay;
          }),
          (r.getComputedTimes = function () {
            var e = this.startDelay,
              t = [],
              n = this.animations[0];
            if (this.limit === 1 / 0) return ((n.isInfinite = !0), [[e, n]]);
            for (var r = 0; r < this.limit; r++)
              (t.push([e, n]), (e += n.getTotalDuration()));
            return t;
          }),
          n
        );
      })(o("WebBloksAnimationsSet").WebBloksAnimationsSet);
    l.WebBloksAnimationsLoopSet = s;
  },
  98,
);
