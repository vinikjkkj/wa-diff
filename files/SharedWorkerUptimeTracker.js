__d(
  "SharedWorkerUptimeTracker",
  [
    "FBLogger",
    "ODS",
    "SharedWorkerEventManager",
    "clearInterval",
    "performanceNow",
    "setInterval",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e4,
      c = 45e3,
      d = new Map();
    function m(e) {
      return Math.floor(((s || (s = r("performanceNow")))() - e) / 1e3);
    }
    function p(t, n) {
      var a = 0,
        i = {};
      return (
        o("SharedWorkerEventManager").registerUptimeTrackerListener(
          t,
          function (t) {
            var r = t.trackerID,
              a = i[r];
            a != null &&
              ((e || (e = o("ODS"))).bumpFraction(
                6653,
                "shared_worker_infra",
                "worker_uptime." + n,
                1,
                0,
              ),
              e.bumpEntityKey(
                6653,
                "shared_worker_infra",
                "worker_uptime_elapsed_time_to_response_sec." +
                  m(a.createdMs) +
                  "." +
                  n,
              ),
              delete i[r]);
          },
        ),
        r("setInterval")(function () {
          var l = a++;
          (r("setTimeout")(function () {
            var e = i[l];
            e != null && delete i[l];
          }, c),
            (i[l] = { createdMs: (s || (s = r("performanceNow")))() }),
            (e || (e = o("ODS"))).bumpFraction(
              6653,
              "shared_worker_infra",
              "worker_uptime." + n,
              0,
              1,
            ),
            o("SharedWorkerEventManager").emitUptimeTracking(t, {
              trackerID: l,
            }));
        }, u)
      );
    }
    function _(e, t) {
      if (d.has(t)) {
        r("FBLogger")("worker").mustfix(
          'Uptime tracking for worker "%s" already started.',
          t,
        );
        return;
      }
      d.set(t, { intervalID: p(e, t) });
    }
    function f(e) {
      var t = d.get(e);
      t != null && (r("clearInterval")(t.intervalID), d.delete(e));
    }
    ((l.startUptimeTracking = _), (l.stopUptimeTracking = f));
  },
  98,
);
