__d(
  "MessengerInfraReport",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = function () {
        for (var t of Object.keys(e)) delete e[Number(t)];
      },
      u = function () {
        return r("gkx")("23390");
      },
      c = 20,
      d = function (n, r, o) {
        var t = e[n];
        if (!t) {
          e[n] = new Map([
            [
              o,
              babelHelpers.extends({}, r, {
                latestTimestampMs: Date.now(),
                startTimestampMs: Date.now(),
              }),
            ],
          ]);
          return;
        }
        var a = t.get(o);
        if (a != null) {
          t.set(
            o,
            babelHelpers.extends({}, a, r, { latestTimestampMs: Date.now() }),
          );
          return;
        }
        if (t.size >= c) {
          e[n] = new Map([
            [
              o,
              babelHelpers.extends({}, r, {
                latestTimestampMs: Date.now(),
                startTimestampMs: Date.now(),
              }),
            ],
          ]);
          return;
        }
        t.set(
          o,
          babelHelpers.extends({}, r, {
            latestTimestampMs: Date.now(),
            startTimestampMs: Date.now(),
          }),
        );
      },
      m = function (n, r) {
        var t;
        return (t = e[n]) == null ? void 0 : t.get(r);
      },
      p = function (n, r) {
        var t;
        (t = e[n]) == null || t.delete(r);
      };
    ((l.reportedEvents = e),
      (l.clearReportedEvents = s),
      (l.isEPD = u),
      (l.MAX_SIZE = c),
      (l.storeEventData = d),
      (l.getEventData = m),
      (l.deleteEventData = p));
  },
  98,
);
