__d(
  "WAWebIncompatibleAgentRequestsRejectJob",
  [
    "Promise",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebGroupAgentMembershipRequest",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupsParticipantsApi",
    "WAWebSentGroupAgentRequests",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              (yield o(
                "WAWebSentGroupAgentRequests",
              ).removeSentGroupAgentRequests(
                e,
                n.filter(function (e) {
                  return !r.some(function (t) {
                    return t.equals(e);
                  });
                }),
                t,
              ),
                yield h(
                  e,
                  yield o(
                    "WAWebSentGroupAgentRequests",
                  ).claimSentGroupAgentRequests(e, r, t),
                ));
            } catch (e) {
              R(e);
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield C(e, t);
          } catch (e) {
            R(e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield h(
              e,
              yield o(
                "WAWebSentGroupAgentRequests",
              ).claimSentGroupAgentRequests(e, t),
            );
          } catch (e) {
            R(e);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (s || (s = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var t,
                        n,
                        r =
                          (t =
                            (n = yield o(
                              "WAWebGroupsParticipantsApi",
                            ).getParticipants(e)) == null
                              ? void 0
                              : n.participants) != null
                            ? t
                            : [];
                      yield p(
                        e,
                        r.map(function (e) {
                          return o("WAWebWidFactory").createWid(e);
                        }),
                      );
                    } catch (e) {
                      R(e);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length !== 0)
            try {
              yield o(
                "WAWebSentGroupAgentRequests",
              ).removeSentGroupAgentRequests(e, yield C(e, t));
            } finally {
              o("WAWebSentGroupAgentRequests").unclaimSentGroupAgentRequests(
                e,
                t,
              );
            }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length === 0) return [];
          var r = (yield o(
            "WAWebApiMembershipApprovalRequestStore",
          ).getMembershipApprovalRequests(e))
            .map(function (e) {
              var t = e.id;
              return t;
            })
            .filter(function (e) {
              return t.some(function (t) {
                return o(
                  "WAWebGroupAgentMembershipRequest",
                ).isAgentRequestIncompatibleWithJoinedAgent(t, e);
              });
            });
          if (r.length === 0) return t;
          var a = yield (s || (s = n("Promise"))).allSettled(
              r.map(function (t) {
                return v(e, t);
              }),
            ),
            i = [];
          return (
            a.forEach(function (e, t) {
              e.status === "rejected" && (R(e.reason), i.push(r[t]));
            }),
            yield o(
              "WAWebGroupGetMembershipApprovalRequestsJob",
            ).queryAndUpdateGroupMembershipApprovalRequests(e),
            t.filter(function (e) {
              return !i.some(function (t) {
                return o(
                  "WAWebGroupAgentMembershipRequest",
                ).isAgentRequestIncompatibleWithJoinedAgent(e, t);
              });
            })
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebGroupMembershipRequestsActionJob",
            ).membershipApprovalRequestAction(
              e,
              [{ phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(t) }],
              o("WAWebGroupMembershipRequestsActionJob")
                .MembershipApprovalRequestAction.Reject,
            ),
            r = n[0];
          if (r == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              0,
              "missing-participant-result",
            );
          var a = r.error;
          if (a != null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(a.value.error),
              a.name,
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[membershipApproval] incompatible agent request reject failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("membership-approval-agent-reject-failed");
    }
    ((l.rejectIncompatibleAgentRequestsAfterAnswer = u),
      (l.rejectIncompatibleAgentRequestsOfJoinedAgents = d),
      (l.rejectIncompatibleAgentRequestsAfterAddNotification = p),
      (l.rejectIncompatibleAgentRequestsOfStoredSentAgents = f));
  },
  98,
);
