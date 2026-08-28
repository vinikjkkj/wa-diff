__d(
  "shouldDeferHeroTracing",
  ["qpl", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    try {
      r("requireWeak")("AdsEditorTransitionConfig", function (t) {
        e = t;
      });
    } catch (e) {}
    var s = new Set([
      r("qpl")._(270219248, "6605"),
      r("qpl")._(270214612, "2521"),
      r("qpl")._(270221124, "1888"),
    ]);
    function u(t) {
      return s.has(t) && e != null && e.shouldUseTransitions();
    }
    l.default = u;
  },
  98,
);
