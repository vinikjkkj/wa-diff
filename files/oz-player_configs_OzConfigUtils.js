__d(
  "oz-player/configs/OzConfigUtils",
  ["oz-player/configs/OzPlayerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("oz-player/configs/OzPlayerConfig"))(),
      s = function (n) {
        return {
          getBool: function (r) {
            return n.getBool(r, e.getBool(r));
          },
          getNumber: function (r) {
            return n.getNumber(r, e.getNumber(r));
          },
          getString: function (r) {
            return n.getString(r, e.getString(r));
          },
          getLegacyConfig: function () {
            return n;
          },
        };
      };
    l.provideConfigWithDefaults = s;
  },
  98,
);
