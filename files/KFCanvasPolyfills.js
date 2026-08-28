__d(
  "KFCanvasPolyfills",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      e.getTransform === void 0 &&
        (e.currentTransform
          ? (e.getTransform = function () {
              var t = e.currentTransform;
              return { a: t.a, b: t.b, c: t.c, d: t.d, e: t.e, f: t.f };
            })
          : e.mozCurrentTransform !== void 0
            ? (e.getTransform = function () {
                var t = e.mozCurrentTransform;
                return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
              })
            : (e.getTransform = function () {
                return l;
              }));
    }
    var l = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    i.addGetTransformPolyfill = e;
  },
  66,
);
