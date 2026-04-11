__d(
  "VideoPlayerOzWWWGlobalConfig",
  ["VideoPlayerShakaGlobalConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "oz_www_",
      s = {
        getBool: function (n, r) {
          return o("VideoPlayerShakaGlobalConfig").getBool(e + n, r);
        },
        getNumber: function (n, r) {
          return o("VideoPlayerShakaGlobalConfig").getNumber(e + n, r);
        },
        getString: function (n, r) {
          return o("VideoPlayerShakaGlobalConfig").getString(e + n, r);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
