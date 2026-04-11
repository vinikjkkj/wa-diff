__d(
  "WAPromiseTimeout",
  ["Promise", "WACustomError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r, a, i) {
        var t = null,
          l = new (e || (e = n("Promise")))(function (e, n) {
            t = setTimeout(function () {
              (n(new (o("WACustomError").TimeoutError)(i)), clearTimeout(t));
            }, a);
          });
        return e.race([r, l]).finally(function () {
          clearTimeout(t);
        });
      };
    l.promiseTimeout = s;
  },
  98,
);
