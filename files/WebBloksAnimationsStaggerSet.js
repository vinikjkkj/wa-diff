__d(
  "WebBloksAnimationsStaggerSet",
  ["WebBloksAnimationsSet"],
  function (t, n, r, o, a, i, l) {
    var e = ["delay"],
      s = (function (t) {
        function n(n) {
          var r,
            o = n.delay,
            a = babelHelpers.objectWithoutPropertiesLoose(n, e);
          return (
            (r = t.call(this, a) || this),
            (r.delay = 0),
            (r.delay = o),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getTotalDuration = function () {
            var e = this,
              t = this.animations.map(function (t, n) {
                return t.getTotalDuration() + n * e.delay;
              }),
              n = Math.max.apply(Math, t);
            return n + this.startDelay;
          }),
          (r.getComputedTimes = function () {
            var e = this.startDelay,
              t = [];
            for (var n of this.animations)
              ((n.isInfinite = this.isInfinite),
                t.push([e, n]),
                (e += this.delay));
            return t;
          }),
          n
        );
      })(o("WebBloksAnimationsSet").WebBloksAnimationsSet);
    l.WebBloksAnimationsStaggerSet = s;
  },
  98,
);
