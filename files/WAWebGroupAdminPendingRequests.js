__d(
  "WAWebGroupAdminPendingRequests",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n,
            r =
              (n = e.groupMetadata) == null
                ? void 0
                : n.membershipApprovalRequests.toArray();
          r != null && r.length > 0 && t.push({ chat: e, requests: r });
        }),
        t
      );
    }
    function l(e) {
      return e.reduce(function (e, t) {
        return e + t.requests.length;
      }, 0);
    }
    ((i.getPendingRequestGroups = e), (i.getPendingRequestCount = l));
  },
  66,
);
