__d(
  "oz-player/utils/ozConcatUint8Arrays",
  ["getErrorSafe", "oz-player/utils/OzErrorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = 0, n = 0; n < e.length; ++n) t += e[n].byteLength;
      var a, i;
      try {
        ((a = new ArrayBuffer(t)), (i = new Uint8Array(a)));
      } catch (e) {
        var l = r("getErrorSafe")(e);
        throw o("oz-player/utils/OzErrorUtils").createOzError({
          type: "OZ_ALLOCATION_FAILURE",
          description: l.name + ": " + l.message,
        });
      }
      for (var s = 0, u = 0; u < e.length; ++u) {
        var c = e[u];
        (i.set(c, s), (s += c.byteLength));
      }
      return { buffer: a, view: i };
    }
    l.default = e;
  },
  98,
);
