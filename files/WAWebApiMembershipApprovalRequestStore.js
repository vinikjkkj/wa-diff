__d(
  "WAWebApiMembershipApprovalRequestStore",
  ["WAWebSchemaMembershipApprovalRequest", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .equals(["groupId"], e.toString())
        .then(function (e) {
          return e.map(function (e) {
            var t = e.addedBy,
              n = e.id,
              r = e.parentGroupId,
              a = e.requestMethod,
              i = e.t;
            return {
              id: o("WAWebWidFactory").createWid(n),
              t: i,
              addedBy: o("WAWebWidFactory").createWid(t),
              requestMethod: a,
              parentGroupId:
                r != null ? o("WAWebWidFactory").createWid(r) : void 0,
            };
          });
        });
    }
    function s(e, t) {
      var n = t.map(function (t) {
        var n = t.addedBy,
          r = t.id,
          o = t.parentGroupId,
          a = t.requestMethod,
          i = t.t;
        return {
          groupId: e.toString(),
          id: r.toString(),
          t: i,
          addedBy: n.toString(),
          requestMethod: a,
          parentGroupId: o == null ? void 0 : o.toString(),
        };
      });
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkCreateOrReplace(n);
    }
    function u(e, t) {
      var n = e.toString();
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemove(
          t.map(function (e) {
            return [n, e.toString()];
          }),
        );
    }
    function c(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemoveByIndex(["groupId"], [e.toString()]);
    }
    ((l.getMembershipApprovalRequests = e),
      (l.addMembershipApprovalRequests = s),
      (l.removeMembershipApprovalRequests = u),
      (l.removeAllMembershipApprovalRequests = c));
  },
  98,
);
