__d(
  "KFTransformComponent",
  ["KFComponentNames", "KFMat2d"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = r),
          this.$5,
          (this.$6 = o("KFMat2d").createMat2d()),
          (this.$7 = o("KFMat2d").createMat2d()));
      }
      var t = e.prototype;
      return (
        (t.getLocalTransform = function (t) {
          if (t !== this.$5) {
            var e,
              n = this.$4.getValueAtProgress(t);
            ((this.$5 = t),
              (e = o("KFMat2d")).fromTranslation(
                this.$6,
                this.$1.getValueAtProgress(t),
              ),
              e.rotate(this.$6, this.$6, this.$2.getValueAtProgress(t)),
              e.scale(this.$6, this.$6, this.$3.getValueAtProgress(t)),
              e.translate(this.$6, this.$6, [-n[0], -n[1]]));
          }
          return this.$6;
        }),
        (t.getWorldTransform = function () {
          return this.$7;
        }),
        (t.update = function (t, n) {
          return (
            this.getLocalTransform(t),
            o("KFMat2d").multiply(this.$7, n, this.$6),
            this.$7
          );
        }),
        (t.toString = function () {
          return o("KFComponentNames").TRANSFORM;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
