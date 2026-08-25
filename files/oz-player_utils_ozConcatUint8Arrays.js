__d(
  "oz-player/utils/ozConcatUint8Arrays",
  ["oz-player/utils/OzErrorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = 0, n = 0; n < e.length; ++n) t += e[n].byteLength;
      var r, a;
      try {
        ((r = new ArrayBuffer(t)), (a = new Uint8Array(r)));
      } catch (e) {
        throw o("oz-player/utils/OzErrorUtils").createOzError({
          type: "OZ_ALLOCATION_FAILURE",
          description: e.name + ": " + e.message,
        });
      }
      for (var i = 0, l = 0; l < e.length; ++l) {
        var s = e[l];
        (a.set(s, i), (i += s.byteLength));
      }
      return { buffer: r, view: a };
    }
    l.default = e;
  },
  98,
);
