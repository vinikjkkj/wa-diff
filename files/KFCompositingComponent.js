__d(
  "KFCompositingComponent",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a, i) {
        ((this.zIndex = e),
          (this.opacity = t),
          (this.isGroup = n),
          (this.isTrackMatte = r),
          (this.trackMatteType = o),
          (this.trackMatteId = a),
          (this.clippingPath = i),
          (this.inheritedOpacity = 1));
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return o("KFComponentNames").COMPOSITING;
        }),
        (t.update = function (t, n) {
          ((this.inheritedOpacity = n),
            this.opacity.update(t),
            this.clippingPath && this.clippingPath.update(t));
        }),
        (t.getOpacity = function () {
          return this.opacity.get() * this.inheritedOpacity;
        }),
        (t.getClippingPath = function () {
          return this.clippingPath && this.clippingPath.get();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
