__d(
  "stableStringifyPrefetchedRelayVariablesWithActor",
  ["stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("stableStringify")(
        babelHelpers.extends({}, t, { $actorID: String(e) }),
        !0,
      );
    }
    l.default = e;
  },
  98,
);
