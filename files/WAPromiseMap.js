__d(
  "WAPromiseMap",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r) {
      return (e || (e = n("Promise"))).resolve(t).then(function (t) {
        return (e || (e = n("Promise"))).all(
          t.map(function (e, t) {
            return r(e, t);
          }),
        );
      });
    }
    i.promiseMap = l;
  },
  66,
);
