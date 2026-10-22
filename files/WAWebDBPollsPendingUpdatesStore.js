__d(
  "WAWebDBPollsPendingUpdatesStore",
  [
    "WATimeUtils",
    "WAWebModelStorageUtils",
    "WAWebPollsPendingUpdatesSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "poll-pending-updates";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable()
          )
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [e],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n.get(y(t));
                      (r != null &&
                        r.senderTimestampMs > t.senderTimestampMs) ||
                        (yield n.createOrReplace(
                          babelHelpers.extends({}, t, {
                            createdAtMs: Date.now(),
                          }),
                        ));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
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
          return o(
            "WAWebPollsPendingUpdatesSchema",
          ).canUsePollPendingUpdatesTable()
            ? o("WAWebPollsPendingUpdatesSchema")
                .getTable()
                .anyOf(["parentMsgKey"], [e])
            : [];
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.dependencyId,
            a = t.dependencyType,
            i = t.parentMsgKey;
          return o(
            "WAWebPollsPendingUpdatesSchema",
          ).canUsePollPendingUpdatesTable()
            ? o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [e],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e[0],
                          n = yield t.anyOf(
                            ["parentMsgKey", "dependencyType", "dependencyId"],
                            [[i, a, r]],
                          );
                        return (
                          n.length > 0 && (yield t.bulkRemove(n.map(y))),
                          n
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )
            : [];
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.length === 0 ||
            !o(
              "WAWebPollsPendingUpdatesSchema",
            ).canUsePollPendingUpdatesTable() ||
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [e],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n.anyOf(["parentMsgKey"], t);
                      r.length > 0 && (yield n.bulkRemove(r.map(y)));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(
              t <= 0 ||
              !o(
                "WAWebPollsPendingUpdatesSchema",
              ).canUsePollPendingUpdatesTable()
            )
          ) {
            var r = Date.now() - t * o("WATimeUtils").DAY_MILLISECONDS;
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [e],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = yield t.lessThan(["createdAtMs"], r);
                      n.length > 0 && (yield t.bulkRemove(n.map(y)));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return [e.parentMsgKey, e.sender, e.payloadType, e.payloadKey];
    }
    ((l.enqueuePollPendingUpdate = s),
      (l.fetchAllForPoll = c),
      (l.drainForDependency = m),
      (l.deleteForPollKeys = _),
      (l.purgeExpiredPendingUpdates = g));
  },
  98,
);
