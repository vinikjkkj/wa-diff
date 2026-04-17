__d(
  "logNoRoutingNavigation",
  ["CometMetricsNavigationFalcoEvent", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      if (!(i == null || i === "")) {
        var l = r("uuidv4")();
        r("CometMetricsNavigationFalcoEvent").logImmediately(function () {
          return {
            dest_module: e,
            event_trace_id: l,
            extra_fields: t,
            href: n,
            tn: o.join(""),
            ts: a.toString(),
            xt: i,
          };
        });
      }
    }
    l.default = e;
  },
  98,
);
