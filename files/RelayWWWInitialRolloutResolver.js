__d(
  "RelayWWWInitialRolloutResolver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "fake_live_config_id",
      "relay_bizkit_local_navigation_badging",
    ]);
    function l(t) {
      return !!e.has(t);
    }
    i.disableWWWInitial = l;
  },
  66,
);
