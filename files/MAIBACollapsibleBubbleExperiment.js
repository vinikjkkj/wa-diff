__d(
  "MAIBACollapsibleBubbleExperiment",
  ["BanzaiLazyQueue", "MAIBACollapsibleBubbleConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s() {
      var t = r("MAIBACollapsibleBubbleConfig").exposure_logging_id,
        n = r("MAIBACollapsibleBubbleConfig").is_enabled;
      return t == null
        ? !1
        : (e.has(t) ||
            (e.add(t), o("BanzaiLazyQueue").queuePost("qex", { l: t })),
          n);
    }
    l.resolveVisibleCollapsibleBubble = s;
  },
  98,
);
