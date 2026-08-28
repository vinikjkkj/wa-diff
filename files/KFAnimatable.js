__d(
  "KFAnimatable",
  ["KFAnimationConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e),
          (this.$2 = t ? t.values : void 0),
          (this.$3 = t ? t.keyframes : void 0),
          (this.$4 = t ? t.tweens : void 0));
      }
      var t = e.prototype;
      return (
        (t.__interpolate = function (t, n, r) {
          return n;
        }),
        (t.setValue = function (t) {
          this.$1 = t;
        }),
        (t.setValues = function (t) {
          this.$2 = t;
        }),
        (t.setKeyframes = function (t) {
          this.$3 = t;
        }),
        (t.setTweens = function (t) {
          this.$4 = t;
        }),
        (t.getValueAtProgress = function (t) {
          return (this.update(t), this.$1);
        }),
        (t.get = function () {
          return this.$1;
        }),
        (t.update = function (t) {
          if (!(!this.$2 || t === this.$5) && this.$2 && this.$3 && this.$4) {
            this.$5 = t;
            var e = this.$2.length;
            if (t <= this.$3[0]) this.$1 = this.$2[0];
            else if (t >= this.$3[e - 1]) this.$1 = this.$2[e - 1];
            else {
              for (var n = 0, r = e - 1; n + 1 < r; ) {
                var a = Math.floor((r - n) / 2 + n);
                this.$3[a] < t ? (n = a) : (r = a);
              }
              var i = (t - this.$3[n]) / (this.$3[n + 1] - this.$3[n]),
                l;
              (this.$4[n].type === o("KFAnimationConstants").TweenType.Hold
                ? (l = 0)
                : this.$4[n].type === o("KFAnimationConstants").TweenType.Linear
                  ? (l = i)
                  : (l = this.$4[n].bezier.solve(i)),
                (this.$1 = this.__interpolate(l, this.$2[n], this.$2[n + 1])));
            }
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
