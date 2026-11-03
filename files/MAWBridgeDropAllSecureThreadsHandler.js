__d(
  "MAWBridgeDropAllSecureThreadsHandler",
  ["I64", "LSIntEnum", "LSMessagingThreadTypeUtil", "Promise", "ReQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var r = o("ReQL")
        .fromTableAscending(t.threads_ranges_v2__generated)
        .filter(function (e) {
          return (
            (s || (s = o("I64"))).equal(
              e.parentThreadKey,
              (u || (u = o("LSIntEnum"))).ofNumber(-1),
            ) ||
            (s || (s = o("I64"))).equal(
              e.parentThreadKey,
              (u || (u = o("LSIntEnum"))).ofNumber(-10),
            )
          );
        });
      return o("ReQL")
        .toArrayAsync(r)
        .then(function (r) {
          return r.reduce(
            function (e, n) {
              return e.then(function () {
                return t.threads_ranges_v2__generated.delete(
                  n.parentThreadKey,
                  n.minThreadKey,
                  n.minLastActivityTimestampMs,
                );
              });
            },
            (e || (e = n("Promise"))).resolve(),
          );
        });
    }
    function d(t) {
      var r = o("ReQL")
        .fromTableAscending(t.threads)
        .filter(function (e) {
          return o("LSMessagingThreadTypeUtil").isArmadilloSecure(e.threadType);
        });
      return o("ReQL")
        .toArrayAsync(r)
        .then(function (r) {
          return r.reduce(
            function (e, n) {
              return e.then(function () {
                return t.threads.delete(n.threadKey);
              });
            },
            (e || (e = n("Promise"))).resolve(),
          );
        });
    }
    function m(t) {
      return (e || (e = n("Promise"))).all([c(t), d(t)]).then(function () {
        return (e || (e = n("Promise"))).resolve();
      });
    }
    l.call = m;
  },
  98,
);
