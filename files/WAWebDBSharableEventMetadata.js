__d(
  "WAWebDBSharableEventMetadata",
  ["WAWebDBSharableEvent", "WAWebModelStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
      countGoing: 0,
      countMaybe: 0,
      countNotGoing: 0,
      countNoResponse: 0,
      totalInvitedCount: 0,
      lastInvitationUpdatedTsUsec: 0,
    };
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.insertMissing;
          if (
            e.length === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage()
          )
            return [];
          var a = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        o = n,
                        i = m(e),
                        l = new Map(
                          (yield o.bulkGet(
                            i.map(function (e) {
                              return e.eventId;
                            }),
                          ))
                            .filter(Boolean)
                            .map(function (e) {
                              return [e.eventId, e];
                            }),
                        );
                      ((a = i.flatMap(function (e) {
                        return p(e, l.get(e.eventId), r);
                      })),
                        a.length > 0 &&
                          (yield o.bulkCreateOrReplace(
                            a.map(function (e) {
                              return e.row;
                            }),
                          )));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            a
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.size === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage()
          )
            return [];
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = r,
                        a = (yield o.bulkGet(Array.from(e.keys()))).filter(
                          Boolean,
                        );
                      ((t = a.flatMap(function (t) {
                        var n = e.get(t.eventId) === !0;
                        return (t.isScheduledCall === !0) === n
                          ? []
                          : [
                              babelHelpers.extends({}, t, {
                                isScheduledCall: n,
                              }),
                            ];
                      })),
                        t.length > 0 && (yield o.bulkCreateOrReplace(t)));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = t.get(e.eventId);
          (n == null || e.lastUpdatedTsUsec > n.lastUpdatedTsUsec) &&
            t.set(e.eventId, e);
        }),
        Array.from(t.values())
      );
    }
    function p(t, n, r) {
      return n == null
        ? r
          ? [{ previous: null, row: babelHelpers.extends({}, e, t) }]
          : []
        : t.lastUpdatedTsUsec <= n.lastUpdatedTsUsec
          ? []
          : [{ previous: n, row: babelHelpers.extends({}, t, f(n), _(n)) }];
    }
    function _(e) {
      return e.isScheduledCall == null
        ? {}
        : { isScheduledCall: e.isScheduledCall };
    }
    function f(e) {
      return {
        countGoing: e.countGoing,
        countMaybe: e.countMaybe,
        countNotGoing: e.countNotGoing,
        countNoResponse: e.countNoResponse,
        totalInvitedCount: e.totalInvitedCount,
        lastInvitationUpdatedTsUsec: e.lastInvitationUpdatedTsUsec,
      };
    }
    ((l.upsertSharableEventMetadataIfNewer = s),
      (l.updateSharableEventsScheduledCall = c));
  },
  98,
);
