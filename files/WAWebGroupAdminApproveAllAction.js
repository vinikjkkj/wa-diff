__d(
  "WAWebGroupAdminApproveAllAction",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebFindCommonGroupsContactAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipRequestsService",
    "WAWebMembershipApprovalRequestAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 50,
      d = 409,
      m = 404,
      p = 500;
    async function _(t, n, a) {
      await o("WAWebFindCommonGroupsContactAction")
        .findCommonGroupsForContacts(
          n.map(function (e) {
            return e.contact;
          }),
        )
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "approveAllMembershipApprovalRequests: groups in common unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        });
      var i = f(n),
        l = [],
        c = [],
        _ = [],
        h = 0,
        y = 0,
        C = null,
        b = null,
        v = !1;
      return (
        await o("WAConcurrentIterate").concurrentIterate(
          i.length,
          async function (e) {
            if (v) {
              y += i[e].length;
              return;
            }
            try {
              var n = await o(
                "WAWebMembershipApprovalRequestAction",
              ).approveMembershipApprovalRequests(t, i[e], g, a);
              n.forEach(function (e) {
                var t = e.error,
                  n = e.request,
                  r = e.wid;
                if (
                  (t == null
                    ? l.push({ request: n, wid: r != null ? r : n.id })
                    : t.status === d && c.push(n),
                  t == null || t.status === d)
                ) {
                  h++;
                  return;
                }
                (t.status === m && _.push(n),
                  y++,
                  t.status === p
                    ? ((v = !0), (b = t.status))
                    : b != null || (b = t.status),
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "approveAllMembershipApprovalRequests: request failed with ",
                        "",
                      ])),
                    t.status,
                  ));
              });
            } catch (t) {
              ((v = !0),
                (C =
                  t instanceof
                  o("WAWebMembershipApprovalRequestAction").GroupError
                    ? t.status
                    : null),
                (y += i[e].length),
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "approveAllMembershipApprovalRequests: stopped after a group error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)));
            }
          },
          1,
        ),
        y > 0 &&
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupMembershipRequestsService")
                  .GroupMembershipRequestsService,
              ).queryAndUpdateGroupMembershipApprovalRequests
            : o("WAWebGroupGetMembershipApprovalRequestsJob")
                .queryAndUpdateGroupMembershipApprovalRequests)(t.id),
        {
          alreadyAdded: c,
          approved: l,
          approvedCount: h,
          failedCount: y,
          gone: _,
          groupErrorStatus: C,
          requestErrorStatus: b,
        }
      );
    }
    function f(e) {
      for (var t = [], n = 0; n < e.length; n += c) t.push(e.slice(n, n + c));
      return t;
    }
    function g(e) {
      var t, n;
      return (t =
        (n = o("WAWebFrontendContactGetters").getCommonGroups(e.contact)) ==
        null
          ? void 0
          : n.length) != null
        ? t
        : 0;
    }
    ((l.GROUP_FULL_STATUS = p), (l.approveAllMembershipApprovalRequests = _));
  },
  98,
);
