__d(
  "promiseLoadObjectsFromKeys",
  ["promiseLoadObjects"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e) {
          return n.set(e, t(e));
        }),
        r("promiseLoadObjects")(n)
      );
    }
    l.default = e;
  },
  98,
);
