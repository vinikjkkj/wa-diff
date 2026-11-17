__d(
  "WAWebDBSharableEventInviteLinkToken",
  [
    "WAWebDBSharableEvent",
    "WAWebModelStorageUtils",
    "WAWebSchemaSharableEventInviteLinkToken",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return o("WAWebDBSharableEvent").canUseSharableEventStorage()
            ? (t = yield o("WAWebSchemaSharableEventInviteLinkToken")
                .getSharableEventInviteLinkTokenTable()
                .get(e)) == null
              ? void 0
              : t.token
            : null;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebDBSharableEvent").canUseSharableEventStorage())
            return !1;
          var r = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [
                  o("WAWebDBSharableEvent").SHARABLE_EVENT_TABLE,
                  o("WAWebDBSharableEvent")
                    .SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE,
                ],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        a = n[1],
                        i = o,
                        l = a;
                      (yield i.get(e)) != null &&
                        (yield l.createOrReplace({ eventId: e, token: t }),
                        (r = !0));
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
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebDBSharableEvent").canUseSharableEventStorage() &&
            (yield o("WAWebSchemaSharableEventInviteLinkToken")
              .getSharableEventInviteLinkTokenTable()
              .remove(e));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getSharableEventInviteLinkToken = e),
      (l.saveSharableEventInviteLinkToken = u),
      (l.clearSharableEventInviteLinkToken = d));
  },
  98,
);
