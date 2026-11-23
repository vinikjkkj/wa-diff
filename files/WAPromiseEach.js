__d(
  "WAPromiseEach",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = async function (t, n) {
      for (var e = [], r = 0; r < t.length; r++) e.push(await n(t[r], r));
      return e;
    };
    i.promiseEach = e;
  },
  66,
);
