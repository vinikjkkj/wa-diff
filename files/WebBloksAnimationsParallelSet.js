__d(
  "WebBloksAnimationsParallelSet",
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
          var e = Math.max.apply(
            Math,
            this.animations.map(function (e) {
              return e.getTotalDuration();
            }),
          );
          return e + this.startDelay;
        }),
        (n.getComputedTimes = function () {
          var e = [];
          for (var t of this.animations)
            ((t.isInfinite = this.isInfinite), e.push([this.startDelay, t]));
          return e;
        }),
        t
      );
    })(o("WebBloksAnimationsSet").WebBloksAnimationsSet);
    l.WebBloksAnimationsParallelSet = e;
  },
  98,
);
