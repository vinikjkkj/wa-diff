__d(
  "GraphPreloadingTTL",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = e * o("DateConsts").SEC_PER_MIN * o("DateConsts").MS_PER_SEC,
      u = 10 * o("DateConsts").MS_PER_SEC;
    ((l.STALE_REQUEST_TIME_LIMIT_MIN = e),
      (l.STALE_REQUEST_TIME_LIMIT_MS = s),
      (l.DEFAULT_CACHE_TTL = u));
  },
  98,
);
