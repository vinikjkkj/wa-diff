__d(
  "LSArrayGetObjectAt",
  ["I64", "LSSynchronousPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r, a) {
      return o("LSSynchronousPromise").makeSynchronousPromise([
        r[(e || (e = o("I64"))).to_int32(a)],
        r,
      ]);
    }
    l.call = s;
  },
  98,
);
