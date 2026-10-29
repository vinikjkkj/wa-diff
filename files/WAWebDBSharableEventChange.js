__d(
  "WAWebDBSharableEventChange",
  [
    "Promise",
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventChange",
    "WAWebSharableEventChangeFlags",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebDBSharableEvent").canUseSharableEventStorage()
            ? o("WAWebSchemaSharableEventChange")
                .getSharableEventChangeTable()
                .all()
            : [];
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (
            r === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage()
          )
            return null;
          var i = null;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE,
                ],
                (function () {
                  var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (l) {
                      var s,
                        u,
                        c = l[0],
                        d = l[1],
                        m = c,
                        p = d,
                        _ = yield (e || (e = n("Promise"))).all([
                          m.get(t),
                          p.get(t),
                        ]),
                        f = _[0],
                        g = _[1];
                      if (f != null) {
                        var h = {
                          eventId: t,
                          changeFlags: o(
                            "WAWebSharableEventChangeFlags",
                          ).mergeSharableEventChangeFlags(
                            (s = g == null ? void 0 : g.changeFlags) != null
                              ? s
                              : 0,
                            r,
                          ),
                          lastChangeTsUsec: Math.max(
                            (u = g == null ? void 0 : g.lastChangeTsUsec) !=
                              null
                              ? u
                              : 0,
                            a,
                          ),
                        };
                        (yield p.createOrReplace(h), (i = h));
                      }
                    },
                  );
                  return function (e) {
                    return l.apply(this, arguments);
                  };
                })(),
              ),
            i
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebDBSharableEvent").canUseSharableEventStorage())
            return !1;
          var r = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBSharableEvent").SHARABLE_EVENT_CHANGE_TABLE],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        a = o,
                        i = yield a.get(e);
                      i == null ||
                        i.lastChangeTsUsec > t ||
                        (yield a.remove(e), (r = !0));
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            r
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getSharableEventChanges = s),
      (l.recordSharableEventChange = c),
      (l.markSharableEventChangeSeen = m));
  },
  98,
);
