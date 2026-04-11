__d(
  "oz-player/configs/OzGlobalConfig",
  ["oz-player/shims/getOzGlobalConfigSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("oz-player/shims/getOzGlobalConfigSource")(),
      s = {
        getBool: function (n, r) {
          return e ? e.getBool(n, r) : r;
        },
        getNumber: function (n, r) {
          return e ? e.getNumber(n, r) : r;
        },
        getString: function (n, r) {
          return e ? e.getString(n, r) : r;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
