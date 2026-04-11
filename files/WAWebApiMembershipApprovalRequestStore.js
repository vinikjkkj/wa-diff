__d(
  "WAWebApiMembershipApprovalRequestStore",
  ["WAWebSchemaMembershipApprovalRequest", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        return o("WAWebSchemaMembershipApprovalRequest")
          .getMembershipApprovalRequestTable()
          .equals(["groupId"], t.toString())
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
      },
      s = function (t, n) {
        var e = n.map(function (e) {
          var n = e.addedBy,
            r = e.id,
            o = e.parentGroupId,
            a = e.requestMethod,
            i = e.t;
          return {
            groupId: t.toString(),
            id: r.toString(),
            t: i,
            addedBy: n.toString(),
            requestMethod: a,
            parentGroupId: o == null ? void 0 : o.toString(),
          };
        });
        return o("WAWebSchemaMembershipApprovalRequest")
          .getMembershipApprovalRequestTable()
          .bulkCreateOrReplace(e);
      },
      u = function (t, n) {
        var e = t.toString();
        return o("WAWebSchemaMembershipApprovalRequest")
          .getMembershipApprovalRequestTable()
          .bulkRemove(
            n.map(function (t) {
              return [e, t.toString()];
            }),
          );
      },
      c = function (t) {
        return o("WAWebSchemaMembershipApprovalRequest")
          .getMembershipApprovalRequestTable()
          .bulkRemoveByIndex(["groupId"], [t.toString()]);
      };
    ((l.getMembershipApprovalRequests = e),
      (l.addMembershipApprovalRequests = s),
      (l.removeMembershipApprovalRequests = u),
      (l.removeAllMembershipApprovalRequests = c));
  },
  98,
);
