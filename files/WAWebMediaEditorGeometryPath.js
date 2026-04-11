__d(
  "WAWebMediaEditorGeometryPath",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        var t = e.color,
          n = e.points,
          r = e.smoothing,
          o = e.thickness;
        ((this.$1 = [].concat(n)),
          (this.$2 = t),
          (this.$3 = o),
          (this.$4 = r),
          Object.freeze(this));
      }
      var t = e.prototype;
      return (
        (t.update = function (n) {
          var t = this.getPoints(),
            r = this.getColor(),
            o = this.getThickness(),
            a = this.getSmoothing();
          return (
            n.points != null && (t = n.points),
            n.color != null && (r = n.color),
            n.thickness != null && (o = n.thickness),
            n.smoothing != null && (a = n.smoothing),
            new e({ points: t, color: r, thickness: o, smoothing: a })
          );
        }),
        (t.clone = function () {
          var t = {
            points: [].concat(this.getPoints()),
            color: this.getColor().clone(),
            thickness: this.getThickness(),
            smoothing: this.getSmoothing(),
          };
          return new e(t);
        }),
        (t.toString = function () {
          var e = this.getPoints()
            .map(function (e) {
              return e.toString();
            })
            .join(", ");
          return (
            "points: [" +
            e +
            "]\ncolor: " +
            this.getColor().toString() +
            "\nthickness: " +
            this.getThickness()
          );
        }),
        (t.equals = function (t) {
          return (
            this.getColor().equals(t.getColor()) &&
            Math.abs(this.getThickness() - t.getThickness()) < Number.EPSILON &&
            this.getPoints().length === t.getPoints().length &&
            this.getPoints().every(function (e, n) {
              return e.equals(t.getPoints()[n]);
            })
          );
        }),
        (t.isDrag = function () {
          return this.getPoints().length > 1;
        }),
        (t.isSmooth = function () {
          return this.getSmoothing() || this.isDrag();
        }),
        (t.getPoints = function () {
          return this.$1;
        }),
        (t.getColor = function () {
          return this.$2;
        }),
        (t.getThickness = function () {
          return this.$3;
        }),
        (t.getSmoothing = function () {
          return this.$4;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
