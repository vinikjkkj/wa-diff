__d(
  "WAWebMexFetchMembershipApprovalRequestsJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormProto",
    "WAWebMexClient",
    "WAWebMexFetchMembershipApprovalRequestsJobQuery.graphql",
    "WAWebRequestMethodType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 500,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchMembershipApprovalRequestsJobQuery.graphql"));
    async function _(e, t) {
      var n;
      t === void 0 && (t = !1);
      var r = await o("WAWebMexClient").fetchQuery(p, {
          id: e.toString(),
          query_context: "INTERACTIVE",
          include_username: o(
            "WAWebUsernameGatingUtils",
          ).usernameDisplayedEnabled(),
          include_membership_form: t,
        }),
        a =
          (n = r.xwa2_group_query_by_id) == null ||
          (n = n.membership_approval_requests) == null
            ? void 0
            : n.edges;
      if (a == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          m,
          "missing membership approval requests in MEX response",
        );
      var i = [],
        l = 0;
      if (
        (a.forEach(function (e) {
          var t = e.node,
            n = f(t);
          n == null ? l++ : i.push(n);
        }),
        l > 0)
      )
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] ",
                  " malformed membership approval requests",
                ])),
              l,
            )
            .sendLogs("mex-membership-approval-requests-malformed"),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            m,
            "malformed membership approval requests in MEX response",
          )
        );
      return (
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] fetched ",
                " membership approval requests",
              ])),
            i.length,
          )
          .tags("GQL", "MEX"),
        i
      );
    }
    function f(e) {
      var t = y(e.user.jid),
        n = Number(e.request_time);
      if (t == null || !Number.isFinite(n)) return null;
      var r = e.requestor,
        a = r != null ? y(r.jid) : t;
      if (a == null) return null;
      var i = { id: t, t: n, addedBy: a, requestMethod: h(e.request_method) },
        l = g(e.membership_form);
      if (
        (l != null && (i.membershipFormAnswers = l),
        o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled())
      ) {
        var s = y(e.user.pn);
        s != null && (i.phoneNumber = s);
        var u = y(r == null ? void 0 : r.pn);
        u != null && (i.addedByPn = u);
      }
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var c = C(e.user);
        c != null && (i.username = c);
        var d = r != null ? C(r) : null;
        d != null && (i.addedByUsername = d);
      }
      return i;
    }
    function g(e) {
      var t = e == null ? void 0 : e.key_id,
        n = e == null ? void 0 : e.encrypted_payload;
      if (t == null || n == null) return null;
      var r;
      try {
        r = o("WAWebGroupMembershipFormProto").xwa2BinaryToBytes(n);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] membership form payload is not valid base64",
                ])),
            )
            .sendLogs("mex-membership-form-payload-malformed"),
          null
        );
      }
      return r.byteLength === 0
        ? null
        : {
            payload: r.slice().buffer,
            keyId: t,
            requestId: e == null ? void 0 : e.request_id,
          };
    }
    function h(e) {
      return e === "LINKED_GROUP_JOIN"
        ? o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin
        : e === "NON_ADMIN_ADD"
          ? o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
          : o("WAWebRequestMethodType").RequestMethod.InviteLink;
    }
    function y(e) {
      if (e == null) return null;
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function C(e) {
      var t;
      return (t = e.username_info) == null ? void 0 : t.username;
    }
    l.fetchMexMembershipApprovalRequests = _;
  },
  98,
);
