__d(
  "WAWebACSTokenConfig",
  ["WATimeUtils", "cr:17794", "keyMirror", "nullthrows"],
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
      WA_ChannelsMusic: {
        getMaxRedeemCount: function () {
          return 50;
        },
        getMaxExpirySeconds: function () {
          return o("WATimeUtils").DAY_SECONDS;
        },
      },
      WA_ChatsMusic: {
        getMaxRedeemCount: function () {
          return 50;
        },
        getMaxExpirySeconds: function () {
          return o("WATimeUtils").DAY_SECONDS;
        },
      },
      WA_ChatsMusicReporting: {
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
      var o = e,
        a = o[t];
      return a == null
        ? r("nullthrows")(
            n("cr:17794") == null
              ? void 0
              : n("cr:17794").getNonProdTokenConfig(t),
          )
        : {
            maxRedeemCount: a.getMaxRedeemCount(),
            maxExpirySeconds: a.getMaxExpirySeconds(),
          };
    }
    var u = r("keyMirror")(e);
    ((l.getACSTokenConfig = s), (l.ACS_PROJECTS = u));
  },
  98,
);
