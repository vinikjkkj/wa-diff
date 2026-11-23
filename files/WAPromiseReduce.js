__d(
  "WAPromiseReduce",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = async function (t, n, r) {
      for (var e = r, o = t.length, a = 0; a < o; a++) e = await n(e, t[a], a);
      return e;
    };
    i.promiseReduce = e;
  },
  66,
);
