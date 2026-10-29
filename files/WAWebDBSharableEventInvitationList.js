__d(
  "WAWebDBSharableEventInvitationList",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInvitee",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebDBSharableEvent").canUseSharableEventStorage()
            ? o("WAWebSchemaSharableEventInvitee")
                .getSharableEventInviteeTable()
                .equals(["eventId"], e)
            : [];
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (!o("WAWebDBSharableEvent").canUseSharableEventStorage())
            return null;
          var a = null;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_INVITEE_TABLE,
                ],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        i = n[1],
                        l = o,
                        s = i,
                        u = yield l.get(e);
                      if (
                        !(
                          u == null ||
                          t.lastInvitationUpdatedTsUsec <=
                            u.lastInvitationUpdatedTsUsec
                        )
                      ) {
                        var c = babelHelpers.extends({}, u, t);
                        (yield l.createOrReplace(c),
                          yield s.bulkRemoveByIndex(["eventId"], [e]),
                          r.length > 0 &&
                            (yield s.bulkCreateOrReplace(
                              r.map(function (t) {
                                return babelHelpers.extends({}, t, {
                                  eventId: e,
                                });
                              }),
                            )),
                          (a = c));
                      }
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            a
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getSharableEventInvitees = e),
      (l.replaceSharableEventInvitationsIfNewer = u));
  },
  98,
);
