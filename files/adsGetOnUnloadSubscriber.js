__d(
  "adsGetOnUnloadSubscriber",
  ["Run"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = null;
      return {
        subscribe: function () {
          t == null && (t = o("Run").onBeforeUnload(e));
        },
        unsubscribe: function () {
          t != null && (t.remove(), (t = null));
        },
      };
    }
    l.default = e;
  },
  98,
);
