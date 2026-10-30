__d(
  "WAWebVoipBridgeCallReachabilityHandlers",
  ["WAWebCallReachability", "WAWebMuteCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getVoipCallReachability: function () {
        return o("WAWebMuteCollection").MuteCollection.hasRestoredGlobalSettings
          ? o("WAWebCallReachability").readCallReachability({
              backgroundSync: o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalOfflineNotifications(),
              callNotifications: o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications(),
              callSound: o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallRingtone(),
            })
          : o("WAWebCallReachability").readCallReachability({
              backgroundSync: null,
              callNotifications: null,
              callSound: null,
            });
      },
    };
    l.VoipBridgeCallReachabilityHandlers = e;
  },
  98,
);
