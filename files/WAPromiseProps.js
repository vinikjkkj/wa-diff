__d(
  "WAPromiseProps",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      var r = Object.keys(t),
        o = (e || (e = n("Promise"))).all(
          r.map(function (e) {
            return t[e];
          }),
        );
      function a(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[r[n]] = e[n];
        return t;
      }
      return o.then(a);
    }
    i.promiseProps = l;
  },
  66,
);
