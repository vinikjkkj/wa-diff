__d(
  "WAWebACSTokenConfig",
  ["WATimeUtils", "keyMirror"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      WA_StatusMusic: {
        getMaxRedeemCount: function () {
          return 50;
        },
        getMaxExpirySeconds: function () {
          return o("WATimeUtils").DAY_SECONDS;
        },
      },
      WA_StatusMusicReporting: {
        getMaxRedeemCount: function () {
          return 50;
        },
        getMaxExpirySeconds: function () {
          return o("WATimeUtils").DAY_SECONDS;
        },
      },
      WA_ChannelsForwardCounter: {
        getMaxRedeemCount: function () {
          return 64;
        },
        getMaxExpirySeconds: function () {
          return o("WATimeUtils").DAY_SECONDS;
        },
      },
    };
    function s(t) {
      return {
        maxRedeemCount: e[t].getMaxRedeemCount(),
        maxExpirySeconds: e[t].getMaxExpirySeconds(),
      };
    }
    var u = r("keyMirror")(e);
    ((l.getACSTokenConfig = s), (l.ACS_PROJECTS = u));
  },
  98,
);
