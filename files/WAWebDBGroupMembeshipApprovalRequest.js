__d(
  "WAWebDBGroupMembeshipApprovalRequest",
  ["WABatcher", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 3e3,
      s = (function () {
        return o("WABatcher").batch({ delayMs: e }, async function (e) {
          var t = e.flatMap(function (e) {
            var t = e.id.toString();
            return e.requests.map(function (e) {
              return [t, e.toString()];
            });
          });
          return (
            await o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["pending-membership-approval-request"], function (e) {
                var n = e[0];
                return n.bulkRemove(t);
              }),
            t.map(function (e) {})
          );
        });
      })();
    function u(e, t, n) {
      if ((n === void 0 && (n = !1), n)) return s({ id: e, requests: t });
      var r = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["pending-membership-approval-request"], function (e) {
          var n = e[0];
          return n.bulkRemove(
            t.map(function (e) {
              return [r, e.toString()];
            }),
          );
        });
    }
    l.removeMembershipApprovalRequests = u;
  },
  98,
);
