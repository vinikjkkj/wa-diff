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
    "asyncToGeneratorRuntime",
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          yield o("WAWebFindCommonGroupsContactAction")
            .findCommonGroupsForContacts(
              a.map(function (e) {
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
          var l = g(a),
            c = [],
            _ = [],
            f = [],
            y = 0,
            C = 0,
            b = null,
            v = null,
            S = !1;
          return (
            yield o("WAConcurrentIterate").concurrentIterate(
              l.length,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (S) {
                      C += l[e].length;
                      return;
                    }
                    try {
                      var n = yield o(
                        "WAWebMembershipApprovalRequestAction",
                      ).approveMembershipApprovalRequests(t, l[e], h, i);
                      n.forEach(function (e) {
                        var t = e.error,
                          n = e.request,
                          r = e.wid;
                        if (
                          (t == null
                            ? c.push({ request: n, wid: r != null ? r : n.id })
                            : t.status === d && _.push(n),
                          t == null || t.status === d)
                        ) {
                          y++;
                          return;
                        }
                        (t.status === m && f.push(n),
                          C++,
                          t.status === p
                            ? ((S = !0), (v = t.status))
                            : v != null || (v = t.status),
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
                      ((S = !0),
                        (b =
                          t instanceof
                          o("WAWebMembershipApprovalRequestAction").GroupError
                            ? t.status
                            : null),
                        (C += l[e].length),
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
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              1,
            ),
            C > 0 &&
              (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebGroupMembershipRequestsService")
                      .GroupMembershipRequestsService,
                  ).queryAndUpdateGroupMembershipApprovalRequests
                : o("WAWebGroupGetMembershipApprovalRequestsJob")
                    .queryAndUpdateGroupMembershipApprovalRequests)(t.id),
            {
              alreadyAdded: _,
              approved: c,
              approvedCount: y,
              failedCount: C,
              gone: f,
              groupErrorStatus: b,
              requestErrorStatus: v,
            }
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      for (var t = [], n = 0; n < e.length; n += c) t.push(e.slice(n, n + c));
      return t;
    }
    function h(e) {
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
