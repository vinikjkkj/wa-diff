__d(
  "WAWebApiMembershipApprovalRequestStore",
  [
    "WALogger",
    "WAWebSchemaMembershipApprovalRequest",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .equals(["groupId"], e.toString())
        .then(function (e) {
          return e.map(c);
        });
    }
    function u() {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .all()
        .then(function (t) {
          return t.flatMap(function (t) {
            try {
              return [{ groupId: t.groupId, request: c(t) }];
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getAllMembershipApprovalRequests: skipped a malformed stored request",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                []
              );
            }
          });
        });
    }
    function c(e) {
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
        parentGroupId: r != null ? o("WAWebWidFactory").createWid(r) : void 0,
      };
    }
    function d(e, t) {
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
    function m(e, t) {
      var n = e.toString();
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemove(
          t.map(function (e) {
            return [n, e.toString()];
          }),
        );
    }
    function p(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemoveByIndex(["groupId"], [e.toString()]);
    }
    ((l.getMembershipApprovalRequests = s),
      (l.getAllMembershipApprovalRequests = u),
      (l.addMembershipApprovalRequests = d),
      (l.removeMembershipApprovalRequests = m),
      (l.removeAllMembershipApprovalRequests = p));
  },
  98,
);
