__d(
  "LSBase64Encode.nop",
  ["EBBase64Encode", "LSResult", "LSSynchronousPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      return o("LSSynchronousPromise").makeSynchronousPromise(
        r("LSResult")(a ? r("EBBase64Encode")(a) : void 0),
      );
    };
    ((e.__nop_name__ = "LSBase64Encode"), (l.default = e));
  },
  98,
);
