__d(
  "KFDimensions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = window.devicePixelRatio,
      l = (function () {
        function t(e) {
          ((this.intrinsic = e), this.$1(e));
        }
        var n = t.prototype;
        return (
          (n.$1 = function (n) {
            ((this.logical = n),
              (this.physical = Math.floor(this.logical * e)));
          }),
          (n.scale = function (t, n) {
            this.$1(t * n);
          }),
          (n.override = function (t) {
            ((this.overridden = !0), this.$1(t));
          }),
          (n.reset = function () {
            ((this.overridden = !1), this.$1(this.intrinsic));
          }),
          (n.getPhysicalChangeRatio = function () {
            return this.physical / this.intrinsic;
          }),
          t
        );
      })(),
      s = (function () {
        function e(e, t) {
          ((this.ratio = t ? e / t : 0),
            (this.width = new l(e)),
            (this.height = new l(t)),
            (this.wasUpdated = !1));
        }
        var t = e.prototype;
        return (
          (t.setWidth = function (t) {
            (this.width.override(t),
              this.height.overridden ||
                this.height.scale(t, this.ratio ? 1 / this.ratio : 0),
              (this.wasUpdated = !0));
          }),
          (t.setHeight = function (t) {
            (this.height.override(t),
              this.width.overridden || this.width.scale(t, this.ratio),
              (this.wasUpdated = !0));
          }),
          (t.reset = function () {
            (this.height.reset(), this.width.reset());
          }),
          e
        );
      })();
    i.default = s;
  },
  66,
);
