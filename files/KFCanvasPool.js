__d(
  "KFCanvasPool",
  ["KFCanvasPolyfills"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$6 = function (e) {
          ((e.canvas.width = t.$1.width.physical),
            (e.canvas.height = t.$1.height.physical),
            (e.canvas.style.width = t.$1.width.logical + "px"),
            (e.canvas.style.height = t.$1.height.logical + "px"));
        }),
          (this.$1 = e),
          (this.$2 = []),
          (this.$3 = []),
          (this.$4 = []));
      }
      var t = e.prototype;
      return (
        (t.$5 = function () {
          var e = document.createElement("canvas"),
            t = e.getContext("2d");
          o("KFCanvasPolyfills").addGetTransformPolyfill(t);
          var n = { canvas: e, ctx: t };
          return (this.$6(n), n);
        }),
        (t.createPermanantCanvas = function () {
          var e = this.$5();
          return (this.$2.push(e), e);
        }),
        (t.getCanvas = function () {
          var e = this.$3.length ? this.$3.pop() : this.$5();
          return (this.$4.push(e), e);
        }),
        (t.clearAllAllocated = function () {
          var e = this;
          this.$4.forEach(function (t) {
            t.ctx.clearRect(0, 0, e.$1.width.physical, e.$1.height.physical);
          });
        }),
        (t.clearAllPermanant = function () {
          var e = this;
          this.$2.forEach(function (t) {
            t.ctx.clearRect(0, 0, e.$1.width.physical, e.$1.height.physical);
          });
        }),
        (t.freeAll = function () {
          ((this.$3 = [].concat(this.$4, this.$3)), (this.$4 = []));
        }),
        (t.resizeAll = function () {
          (this.$3.forEach(this.$6, this), this.$4.forEach(this.$6, this));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
