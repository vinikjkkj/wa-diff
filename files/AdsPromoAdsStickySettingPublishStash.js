__d(
  "AdsPromoAdsStickySettingPublishStash",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      e.set(t, n);
    }
    function s() {
      return e;
    }
    function u() {
      e.clear();
    }
    ((i.stashFlags = l), (i.getStashedFlags = s), (i.clearStash = u));
  },
  66,
);
