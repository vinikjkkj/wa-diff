__d(
  "WebBloksAnimationsSequenceSet",
  ["WebBloksAnimationsSet"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getTotalDuration = function () {
          var e = this.animations.reduce(function (e, t) {
            return e + t.getTotalDuration();
          }, 0);
          return e + this.startDelay;
        }),
        (n.getComputedTimes = function () {
          var e = this.startDelay,
            t = [];
          for (var n of this.animations)
            ((n.isInfinite = this.isInfinite),
              t.push([e, n]),
              (e += n.getTotalDuration()));
          return t;
        }),
        t
      );
    })(o("WebBloksAnimationsSet").WebBloksAnimationsSet);
    l.WebBloksAnimationsSequenceSet = e;
  },
  98,
);
