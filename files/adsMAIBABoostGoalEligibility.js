__d(
  "adsMAIBABoostGoalEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["VIDEO_VIEWS", "THRUPLAY"]),
      l = new Set(["REACH"]);
    function s(e) {
      if (e == null || e === "") return !1;
      var t = e.toUpperCase();
      return (
        t === "VIDEOS" ||
        t === "REELS" ||
        t === "UNIFIED_REELS" ||
        t === "LIVE" ||
        t.includes("VIDEO") ||
        t.includes("REEL")
      );
    }
    var u = new Set([
      "AB_TEST",
      "AUDIO",
      "EVENTS",
      "LINKS",
      "PHOTOS",
      "STORIES",
      "TEXT",
    ]);
    function c(t, n) {
      if (n == null || n === "") return t;
      var r = n.toUpperCase();
      if (s(n) || !u.has(r)) return t;
      var o = r === "TEXT";
      return t.filter(function (t) {
        return !e.has(t) && !(o && l.has(t));
      });
    }
    ((i.VIDEO_ONLY_OPTIMIZATION_GOALS = e),
      (i.isVideoPostType = s),
      (i.narrowGoalsToPostType = c));
  },
  66,
);
