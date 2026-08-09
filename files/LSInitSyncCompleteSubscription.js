__d(
  "LSInitSyncCompleteSubscription",
  ["I64", "LSIntEnum", "Promise", "ReQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, r) {
      return new (u || (u = n("Promise")))(function (n, a) {
        var i = o("ReQL")
          .fromTableAscending(t.tables.sync_groups)
          .getKeyRange(r)
          .subscribe(function (t, r) {
            if (
              r.operation !== "delete" &&
              (e || (e = o("I64"))).equal(
                r.value.syncStatus,
                (s || (s = o("LSIntEnum"))).ofNumber(2),
              )
            )
              return (i(), n());
          });
      });
    }
    function d(t, n) {
      return o("ReQL")
        .firstAsync(
          o("ReQL").fromTableAscending(t.tables.sync_groups).getKeyRange(n),
        )
        .then(function (r) {
          if (
            !(
              r != null &&
              (e || (e = o("I64"))).equal(
                r.syncStatus,
                (s || (s = o("LSIntEnum"))).ofNumber(2),
              )
            )
          )
            return c(t, n);
        });
    }
    function m(e) {
      return c(e, (s || (s = o("LSIntEnum"))).ofNumber(1));
    }
    ((l.maybeWaitForSyncGroup = d), (l.use = m));
  },
  98,
);
