__d(
  "WAWebDBSharableEventCreatorPushName",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventCreatorPushName",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.length === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage()
          )
            return new Map();
          var t = yield o("WAWebSchemaSharableEventCreatorPushName")
            .getSharableEventCreatorPushNameTable()
            .bulkGet(Array.from(new Set(e)));
          return new Map(
            t.filter(Boolean).map(function (e) {
              return [e.creatorLid, e];
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebDBSharableEvent").canUseSharableEventStorage())
            return !1;
          var t = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent")
                    .SHARABLE_EVENT_CREATOR_PUSH_NAME_TABLE,
                ],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = r,
                        a = yield o.get(e.creatorLid);
                      (a != null && a.publishedTsUsec >= e.publishedTsUsec) ||
                        (yield o.createOrReplace(e), (t = !0));
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
        c.apply(this, arguments)
      );
    }
    ((l.getSharableEventCreatorPushNames = e),
      (l.saveSharableEventCreatorPushNameIfNewer = u));
  },
  98,
);
