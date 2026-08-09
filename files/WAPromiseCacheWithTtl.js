__d(
  "WAPromiseCacheWithTtl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = 0,
        r = null;
      return function () {
        var o = Date.now();
        return ((r != null && o - n <= e) || ((n = o), (r = t())), r);
      };
    }
    i.cacheWithTtl = e;
  },
  66,
);
