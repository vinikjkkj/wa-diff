__d(
  "WAWebMexFetchMembershipApprovalRequestsJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchMembershipApprovalRequestsJobQuery.graphql",
    "WAWebRequestMethodType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 500,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchMembershipApprovalRequestsJobQuery.graphql"));
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebMexClient").fetchQuery(m, {
              id: e.toString(),
              query_context: "INTERACTIVE",
              include_username: o(
                "WAWebUsernameGatingUtils",
              ).usernameDisplayedEnabled(),
            }),
            r =
              (t = n.xwa2_group_query_by_id) == null ||
              (t = t.membership_approval_requests) == null
                ? void 0
                : t.edges;
          if (r == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              d,
              "missing membership approval requests in MEX response",
            );
          var a = [],
            i = 0;
          if (
            (r.forEach(function (e) {
              var t = e.node,
                n = f(t);
              n == null ? i++ : a.push(n);
            }),
            i > 0)
          )
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][GROUP] ",
                      " malformed membership approval requests",
                    ])),
                  i,
                )
                .sendLogs("mex-membership-approval-requests-malformed"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                d,
                "malformed membership approval requests in MEX response",
              )
            );
          return (
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][GROUP] fetched ",
                    " membership approval requests",
                  ])),
                a.length,
              )
              .tags("GQL", "MEX"),
            a
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = h(e.user.jid),
        n = Number(e.request_time);
      if (t == null || !Number.isFinite(n)) return null;
      var r = e.requestor,
        a = r != null ? h(r.jid) : t;
      if (a == null) return null;
      var i = { id: t, t: n, addedBy: a, requestMethod: g(e.request_method) };
      if (o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled()) {
        var l = h(e.user.pn);
        l != null && (i.phoneNumber = l);
        var s = h(r == null ? void 0 : r.pn);
        s != null && (i.addedByPn = s);
      }
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var u = y(e.user);
        u != null && (i.username = u);
        var c = r != null ? y(r) : null;
        c != null && (i.addedByUsername = c);
      }
      return i;
    }
    function g(e) {
      return e === "LINKED_GROUP_JOIN"
        ? o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin
        : e === "NON_ADMIN_ADD"
          ? o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
          : o("WAWebRequestMethodType").RequestMethod.InviteLink;
    }
    function h(e) {
      if (e == null) return null;
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] membership request has an invalid user jid: ",
                  "",
                ])),
              r("getErrorSafe")(e).name,
            )
            .sendLogs("mex-membership-request-invalid-user-jid"),
          null
        );
      }
    }
    function y(e) {
      var t;
      return (t = e.username_info) == null ? void 0 : t.username;
    }
    l.fetchMexMembershipApprovalRequests = p;
  },
  98,
);
