__d(
  "WAWebDBPollsPendingUpdatesStore",
  [
    "WAWebModelStorageUtils",
    "WAWebPollsPendingUpdatesSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "poll-pending-updates";
    function s(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          [e],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  r = yield n.get(p(t));
                (r != null && r.senderTimestampMs > t.senderTimestampMs) ||
                  (yield n.createOrReplace(
                    babelHelpers.extends({}, t, { createdAtMs: Date.now() }),
                  ));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function u(e) {
      return o("WAWebPollsPendingUpdatesSchema")
        .getTable()
        .anyOf(["parentMsgKey"], [e]);
    }
    function c(t) {
      var r = t.dependencyId,
        a = t.dependencyType,
        i = t.parentMsgKey;
      return o("WAWebModelStorageUtils")
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
                return (n.length > 0 && (yield t.bulkRemove(n.map(p))), n);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t.length !== 0 &&
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [e],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n.anyOf(["parentMsgKey"], t);
                      r.length > 0 && (yield n.bulkRemove(r.map(p)));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return [e.parentMsgKey, e.sender, e.payloadType, e.payloadKey];
    }
    ((l.enqueuePollPendingUpdate = s),
      (l.fetchAllForPoll = u),
      (l.drainForDependency = c),
      (l.deleteForPollKeys = d));
  },
  98,
);
