__d(
  "KFGradient",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a, i, l, s) {
        ((this.type = e),
          (this.colors = n),
          (this.positions = t),
          (this.rampStart = r),
          (this.rampEnd = o),
          (this.highlightAngle = a),
          (this.highlightLength = i),
          (this.colorStart = l),
          (this.colorEnd = s));
      }
      var t = e.prototype;
      return (
        (t.update = function (t) {
          var e, n, r, o, a, i, l, s;
          ((e = this.colors) == null || e.update(t),
            (n = this.positions) == null || n.update(t),
            (r = this.rampStart) == null || r.update(t),
            (o = this.rampEnd) == null || o.update(t),
            (a = this.highlightAngle) == null || a.update(t),
            (i = this.highlightLength) == null || i.update(t),
            (l = this.colorStart) == null || l.update(t),
            (s = this.colorEnd) == null || s.update(t));
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
