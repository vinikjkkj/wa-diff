__d(
  "WaJobInMemoryAccessors",
  ["Promise", "WARandomHex", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = -1,
        r = new Map();
      return {
        deletePersistedJob: function (o) {
          return (e || (e = n("Promise"))).resolve(r.delete(o));
        },
        loadAllJobs: function () {
          return (e || (e = n("Promise"))).resolve(Array.from(r.values()));
        },
        maybeCreateJob: function (i) {
          var a,
            l = JSON.stringify([
              i.type,
              (a = i.uniqKey) != null ? a : o("WARandomHex").randomHex(32),
            ]),
            s = {
              backedOffCount: 0,
              current: i.args,
              original: i.args,
              startTime: o("WATimeUtils").unixTime(),
              step: "$unstarted",
              stepFirstStartTime: null,
              stepHardStartCountAfterTimeout: 0,
              stepUnexpectedErrorCount: 0,
              type: i.type,
              uniqKey: l,
              version: i.version,
              waitUntil: null,
              scheduleConfig: i.scheduleConfig,
            },
            u = function () {
              var o = t--,
                a = babelHelpers.extends({}, s, { jobId: o });
              return (
                r.set(o, a),
                (e || (e = n("Promise"))).resolve({ id: o, newlyCreated: !0 })
              );
            };
          if (i.uniqKey != null) {
            var c = Array.from(r.values()).filter(function (e) {
              return e.uniqKey === l;
            });
            if (c.length === 0) return u();
            var d = null;
            return (
              c.forEach(function (e) {
                e.step !== "$finished" ? (d = e) : r.delete(e.jobId);
              }),
              d != null
                ? (e || (e = n("Promise"))).resolve({
                    id: d.jobId,
                    newlyCreated: !1,
                  })
                : u()
            );
          }
          return u();
        },
        readPersistedJob: function (o) {
          var t = r.get(o);
          return (e || (e = n("Promise"))).resolve(
            t && babelHelpers.extends({}, t),
          );
        },
        updatePersistedJob: function (o) {
          return (e || (e = n("Promise"))).resolve(
            r.set(o.jobId, babelHelpers.extends({}, o)),
          );
        },
      };
    }
    l.getJobInMemoryAccessors = s;
  },
  98,
);
