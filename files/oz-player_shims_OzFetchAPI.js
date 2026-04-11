__d(
  "oz-player/shims/OzFetchAPI",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (n, r) {
        return t.fetch(n, r);
      },
      l = function (n, r) {
        return new t.Response(n, r);
      };
    ((i.fetch = e), (i.Response = l));
  },
  66,
);
