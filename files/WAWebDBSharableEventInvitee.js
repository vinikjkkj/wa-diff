__d(
  "WAWebDBSharableEventInvitee",
  [
    "Promise",
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInvitee",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.length === 0 ||
            !o("WAWebDBSharableEvent").canUseSharableEventStorage()
          )
            return [];
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
                ],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        a = n[1],
                        i = r,
                        l = a,
                        s = yield m(
                          i,
                          e.map(function (e) {
                            return e.eventId;
                          }),
                        ),
                        u = e.filter(function (e) {
                          return s.has(e.eventId);
                        }),
                        c = new Map(
                          (yield l.bulkGet(
                            u.map(
                              o("WAWebSchemaSharableEventInvitee")
                                .createSharableEventInviteePrimaryKey,
                            ),
                          ))
                            .filter(Boolean)
                            .map(function (e) {
                              return [_(e), e.createdTsSec];
                            }),
                        );
                      ((t = u.map(function (e) {
                        var t;
                        return babelHelpers.extends({}, e, {
                          createdTsSec:
                            (t = c.get(_(e))) != null ? t : e.createdTsSec,
                        });
                      })),
                        t.length > 0 && (yield l.bulkCreateOrReplace(t)));
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
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebDBSharableEvent").canUseSharableEventStorage())
            return !1;
          var r = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
                ],
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (a) {
                      var i = a[0],
                        l = a[1],
                        s = i,
                        u = l,
                        c = yield (e || (e = n("Promise"))).all([
                          s.get(t.eventId),
                          u.get(
                            o(
                              "WAWebSchemaSharableEventInvitee",
                            ).createSharableEventInviteePrimaryKey(t),
                          ),
                        ]),
                        d = c[0],
                        m = c[1];
                      d == null ||
                        m != null ||
                        (yield u.createOrReplace(t), (r = !0));
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              ),
            r
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
          var n = yield e.bulkGet(Array.from(new Set(t)));
          return new Set(
            n.filter(Boolean).map(function (e) {
              return e.eventId;
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return e.eventId + "|" + e.inviteeLid;
    }
    ((l.upsertSharableEventInvitees = s),
      (l.seedSharableEventInviteeIfAbsent = c));
  },
  98,
);
