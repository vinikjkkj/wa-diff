__d(
  "VideoPlayerNextgendashHostAPIComet",
  [
    "CometThrottle",
    "NetworkStatus",
    "Random",
    "VideoPlayerNextgendashHostAPIDefault",
    "clearInterval",
    "clearTimeout",
    "setInterval",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("VideoPlayerNextgendashHostAPIDefault"),
        {
          networkIsOnline: function () {
            var e = r("NetworkStatus").isOnline();
            return e && navigator.onLine;
          },
          random: { coinflip: o("Random").coinflip },
          timers: {
            clearInterval: r("clearInterval"),
            clearTimeout: r("clearTimeout"),
            setInterval: r("setInterval"),
            setTimeout: r("setTimeout"),
            throttle: r("CometThrottle"),
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
