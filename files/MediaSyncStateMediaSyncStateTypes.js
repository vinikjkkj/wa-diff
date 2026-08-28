__d(
  "MediaSyncStateMediaSyncStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        UNKNOWN: 0,
        INSTAGRAM: 1,
        FACEBOOK_VIDEO: 2,
        FACEBOOK_POST: 3,
        MESSAGING: 4,
      }),
      s = e({ PLAY: 1, PAUSE: 2, STOP: 3 }),
      u = e({ UNKNOWN: 0, IMAGE: 1, VIDEO: 2, IGTV: 3, CAROUSEL: 4 }),
      c = e({ UNKNOWN: 0, FEED: 1, REELS: 2 }),
      d = e({
        NONE: 0,
        PLAY: 1,
        PAUSE: 2,
        STOP: 3,
        RESUME: 4,
        SEEK_FORWARD: 5,
        SEEK_BACKWARD: 6,
        AUTOPLAY: 7,
      }),
      m = e({
        UNKNOWN: 0,
        NOT_SAVABLE: 1,
        NOT_SAVED: 2,
        SAVED: 3,
        ARCHIVED: 4,
      }),
      p = e({ UNKNOWN: 0, FORWARD: 1, BACKWARD: 2 });
    a.exports = {
      Action: s,
      AdminMessageType: d,
      InstagramMediaType: u,
      InstagramProductType: c,
      PlayMediaSwipeDirection: p,
      SavedState: m,
      Source: l,
    };
  },
  null,
);
