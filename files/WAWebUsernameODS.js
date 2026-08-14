__d(
  "WAWebUsernameODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebODS").incr("web.username.side_sub.hash_collision");
    }
    function s() {
      r("WAWebODS").incr("web.username.side_sub.no_lid_for_hash");
    }
    ((l.logUsernameSideSubHashCollision = e),
      (l.logUsernameSideSubNoLidForHash = s));
  },
  98,
);
