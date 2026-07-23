__d(
  "CometRouterFalcoLoggingUtils",
  ["CometRouterEventFalcoEvent", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("justknobx")._("4175") &&
        r("CometRouterEventFalcoEvent").log(function () {
          return { event: t, url_to_fetch: e };
        });
    }
    l.logRouteFetch = e;
  },
  98,
);
