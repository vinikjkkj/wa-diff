__d(
  "maybeScheduleFeedHydration",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1;
    function l(t) {
      if (!e && t != null) {
        var n = document.querySelector(".suspended-feed");
        n != null && (t.unstable_scheduleHydration(n), (e = !0));
      }
    }
    i.default = l;
  },
  66,
);
