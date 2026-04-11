__d(
  "keyMirror",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      if (!(e instanceof Object && !Array.isArray(e)))
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "keyMirror(...): Argument must be an object.",
        );
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = n);
      return t;
    }
    l.default = e;
  },
  98,
);
