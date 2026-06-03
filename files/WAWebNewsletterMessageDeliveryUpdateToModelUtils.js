__d(
  "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
  [
    "Promise",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
              r.map(function (e) {
                return e.id;
              }),
              t,
            ),
            l = [],
            s = r.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e.id,
                      r = i.get(e.id);
                    if (r == null) {
                      var a = yield o(
                          "WAWebNewsletterGetMessagesJob",
                        ).getNewsletterMessages(t, 1, { after: n - 1 }),
                        s = a.msgs[0];
                      if (s == null) return null;
                      ((r = s), l.push(r));
                    }
                    return babelHelpers.extends({}, e, {
                      msgData: r,
                      serverId: e.id,
                      id: r.id,
                    });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          l.length > 0 &&
            (yield o(
              "WAWebNewsletterUpdateMsgsRecordsJob",
            ).addNewsletterMsgsRecords(l));
          var u = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
              a,
              t,
            ),
            c = a.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = u.get(e);
                    return t == null ? null : t.id;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return {
            modelUpdatesToAdd: (yield (e || (e = n("Promise"))).all(s)).filter(
              Boolean,
            ),
            modelUpdatesToRemove: (yield e.all(c)).filter(Boolean),
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.getMessageDeliveryUpdatesModelToUpdate = s;
  },
  98,
);
