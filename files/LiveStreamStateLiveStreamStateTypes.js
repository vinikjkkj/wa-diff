__d(
  "LiveStreamStateLiveStreamStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({ NONE: 0, STARTED: 1, IN_PROGRESS: 2 }),
      s = e({
        UNKNOWN: 0,
        SELF: 10,
        ALL_FRIENDS: 40,
        FRIENDS_OF_FRIENDS: 50,
        EVERYONE: 80,
      }),
      u = e({
        USER_PROFILE: 0,
        PAGE: 1,
        GROUP: 2,
        PUBLIC_GROUP: 3,
        PRIVATE_GROUP: 4,
        EVENT: 5,
        PUBLIC_EVENT: 6,
        PRIVATE_EVENT: 7,
        PAID_ONLINE_EVENT: 8,
      }),
      c = e({ AUDIO: 0, VIDEO: 1, SCREEN: 2 }),
      d = e({ NONE: 0, GRID: 1, DOMINANT: 2 }),
      m = e({ EXPLICIT_CLIENT_ACK: 0, SERVER_AUTO_ACK: 1 }),
      p = e({ MediaSourceType: "mediaSourceType" }),
      _ = e({
        GridLayoutExtra: "gridLayoutExtra",
        DominantLayoutExtra: "dominantLayoutExtra",
      });
    a.exports = {
      LayoutExtra$Types: _,
      LayoutType: d,
      LiveStreamAudience: s,
      LiveStreamStatus: l,
      LiveStreamTarget: u,
      MediaSourceId$Types: p,
      MediaSourceType: c,
      NegotiationMode: m,
    };
  },
  null,
);
