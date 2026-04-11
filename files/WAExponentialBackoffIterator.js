__d(
  "WAExponentialBackoffIterator",
  ["WAExponentialIterator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { factor: 2, jitter: 0, maxTimeout: 1 / 0 };
    function* s(t) {
      var n = babelHelpers.extends({}, e, t),
        o = n.factor,
        a = n.jitter,
        i = n.maxTimeout,
        l = n.minTimeout,
        s = n.retries,
        u = 0;
      for (var c of r("WAExponentialIterator")(o)) {
        if ((u++, u > s)) return;
        var d = 1 + (Math.random() * a * 2 - a);
        yield Math.min(l * c * d, i);
      }
    }
    ((l.defaults = e), (l.exponentialBackoffIterator = s));
  },
  98,
);
