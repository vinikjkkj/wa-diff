__d(
  "WAWebApiMembershipApprovalRequestStore",
  [
    "WABinary",
    "WACrc32",
    "WALogger",
    "WAWebSchemaMembershipApprovalRequest",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .equals(["groupId"], e.toString())
        .then(function (e) {
          return e.map(d);
        });
    }
    function u(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .equals(["groupId"], e.toString())
        .then(function (e) {
          return e.map(function (e) {
            return babelHelpers.extends({}, d(e), {
              membershipFormAnswers: p(e),
            });
          });
        });
    }
    function c() {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .all()
        .then(function (t) {
          return t.flatMap(function (t) {
            try {
              return [{ groupId: t.groupId, request: d(t) }];
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
    function d(e) {
      var t = e.addedBy,
        n = e.id,
        r = e.parentGroupId,
        a = e.requestMethod,
        i = e.t,
        l = p(e);
      return {
        id: o("WAWebWidFactory").createWid(n),
        t: i,
        addedBy: o("WAWebWidFactory").createWid(t),
        requestMethod: a,
        parentGroupId: r != null ? o("WAWebWidFactory").createWid(r) : void 0,
        hasMembershipFormAnswers: l != null,
        membershipFormRequestId: l == null ? void 0 : l.requestId,
        membershipFormAnswersVersion: l != null ? m(l) : void 0,
      };
    }
    function m(e) {
      var t = e.keyId,
        n = e.payload;
      return t + ":" + r("WACrc32")(o("WABinary").Binary.build(n));
    }
    function p(e) {
      var t = e.membershipFormKeyId,
        n = e.membershipFormPayload,
        r = e.membershipFormRequestId;
      return n == null || t == null
        ? null
        : { payload: n, keyId: t, requestId: r };
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaMembershipApprovalRequest")
            .getMembershipApprovalRequestTable()
            .get([e.toString(), t.toString()]);
          return n != null ? p(n) : null;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = t.map(function (t) {
        var n = t.addedBy,
          r = t.id,
          o = t.membershipFormAnswers,
          a = t.parentGroupId,
          i = t.requestMethod,
          l = t.t;
        return {
          groupId: e.toString(),
          id: r.toString(),
          t: l,
          addedBy: n.toString(),
          requestMethod: i,
          parentGroupId: a == null ? void 0 : a.toString(),
          membershipFormPayload: o == null ? void 0 : o.payload,
          membershipFormKeyId: o == null ? void 0 : o.keyId,
          membershipFormRequestId: o == null ? void 0 : o.requestId,
        };
      });
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkCreateOrReplace(n);
    }
    function h(e, t) {
      var n = e.toString();
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemove(
          t.map(function (e) {
            return [n, e.toString()];
          }),
        );
    }
    function y(e) {
      return o("WAWebSchemaMembershipApprovalRequest")
        .getMembershipApprovalRequestTable()
        .bulkRemoveByIndex(["groupId"], [e.toString()]);
    }
    ((l.getMembershipApprovalRequests = s),
      (l.getMembershipApprovalRequestsWithFormAnswers = u),
      (l.getAllMembershipApprovalRequests = c),
      (l.getMembershipFormAnswersVersion = m),
      (l.getMembershipApprovalRequestFormAnswers = _),
      (l.addMembershipApprovalRequests = g),
      (l.removeMembershipApprovalRequests = h),
      (l.removeAllMembershipApprovalRequests = y));
  },
  98,
);
