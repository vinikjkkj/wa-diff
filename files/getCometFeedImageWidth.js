__d(
  "getCometFeedImageWidth",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 680,
      u = 1320,
      c = 790,
      d = 700,
      m = 590,
      p = 500;
    function _(t, n) {
      var o = t,
        a = n;
      if (o == null || a == null) {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return s;
        ((o = window.innerWidth), (a = window.innerHeight));
      }
      return o >= u || a >= c ? s : a >= d ? m : p;
    }
    ((l.COMET_FEED_PHOTO_WIDTH = s), (l.getCometFeedImageWidth = _));
  },
  98,
);
