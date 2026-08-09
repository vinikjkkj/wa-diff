__d(
  "LSBase64Decode.nop",
  ["LSBase64Decode", "LSResult", "LSSynchronousPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      return o("LSSynchronousPromise").makeSynchronousPromise(
        r("LSResult")(o("LSBase64Decode").decode(a)),
      );
    };
    ((e.__nop_name__ = "LSBase64Decode"), (l.default = e));
  },
  98,
);
