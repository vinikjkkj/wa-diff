__d(
  "KFShapeComponent",
  ["KFTrimPath"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r, o, a, i, l, s, u, c, d) {
        ((this.path = e),
          (this.trimStart = t),
          (this.trimEnd = n),
          (this.trimOffset = r),
          (this.fillColor = o),
          (this.gradientFill = a),
          (this.strokeColor = i),
          (this.strokeWidth = l),
          (this.strokeLineCap = s),
          (this.strokeLineJoin = u),
          (this.miterLimit = c),
          (this.vectorCompositeOrder = d));
      }
      var t = e.prototype;
      return (
        (t.update = function (t) {
          (this.path && this.path.update(t),
            this.trimStart && this.trimStart.update(t),
            this.trimEnd && this.trimEnd.update(t),
            this.trimOffset && this.trimOffset.update(t),
            this.fillColor && this.fillColor.update(t),
            this.gradientFill && this.gradientFill.update(t),
            this.strokeColor && this.strokeColor.update(t),
            this.strokeWidth && this.strokeWidth.update(t),
            this.miterLimit && this.miterLimit.update(t));
        }),
        (t.getPath = function () {
          return o("KFTrimPath").trimPath(
            this.path.get(),
            this.trimStart ? this.trimStart.get() : void 0,
            this.trimEnd ? this.trimEnd.get() : void 0,
            this.trimOffset ? this.trimOffset.get() : void 0,
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
