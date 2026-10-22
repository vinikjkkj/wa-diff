__d(
  "WAWebGroupAdminApproveAllAction",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebFindCommonGroupsContactAction",
    "WAWebFrontendContactGetters",
    "WAWebGroupGetMembershipApprovalRequestsJob",
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
      m = 500;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
          var i = f(a),
            l = 0,
            c = 0,
            p = null,
            _ = null,
            h = !1;
          return (
            yield o("WAConcurrentIterate").concurrentIterate(
              i.length,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (h) {
                      c += i[e].length;
                      return;
                    }
                    try {
                      var n = yield o(
                        "WAWebMembershipApprovalRequestAction",
                      ).approveMembershipApprovalRequests(t, i[e], g);
                      n.forEach(function (e) {
                        var t = e.error;
                        if (t == null || t.status === d) {
                          l++;
                          return;
                        }
                        (c++,
                          t.status === m
                            ? ((h = !0), (_ = t.status))
                            : _ != null || (_ = t.status),
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
                      ((h = !0),
                        (p =
                          t instanceof
                          o("WAWebMembershipApprovalRequestAction").GroupError
                            ? t.status
                            : null),
                        (c += i[e].length),
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
            c > 0 &&
              o(
                "WAWebGroupGetMembershipApprovalRequestsJob",
              ).queryAndUpdateGroupMembershipApprovalRequests(t.id),
            {
              approvedCount: l,
              failedCount: c,
              groupErrorStatus: p,
              requestErrorStatus: _,
            }
          );
        })),
        _.apply(this, arguments)
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
    ((l.GROUP_FULL_STATUS = m), (l.approveAllMembershipApprovalRequests = p));
  },
  98,
);
