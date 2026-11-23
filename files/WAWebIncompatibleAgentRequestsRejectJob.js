__d(
  "WAWebIncompatibleAgentRequestsRejectJob",
  [
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebGroupAgentMembershipRequest",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupsParticipantsApi",
    "WAWebSentGroupAgentRequests",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t, n, r) {
      try {
        (await o("WAWebSentGroupAgentRequests").removeSentGroupAgentRequests(
          e,
          n.filter(function (e) {
            return !r.some(function (t) {
              return t.equals(e);
            });
          }),
          t,
        ),
          await m(
            e,
            await o("WAWebSentGroupAgentRequests").claimSentGroupAgentRequests(
              e,
              r,
              t,
            ),
          ));
      } catch (e) {
        f(e);
      }
    }
    async function u(e, t) {
      try {
        await p(e, t);
      } catch (e) {
        f(e);
      }
    }
    async function c(e, t) {
      try {
        await m(
          e,
          await o("WAWebSentGroupAgentRequests").claimSentGroupAgentRequests(
            e,
            t,
          ),
        );
      } catch (e) {
        f(e);
      }
    }
    async function d(e) {
      await Promise.all(
        e.map(async function (e) {
          try {
            var t,
              n,
              r =
                (t =
                  (n = await o("WAWebGroupsParticipantsApi").getParticipants(
                    e,
                  )) == null
                    ? void 0
                    : n.participants) != null
                  ? t
                  : [];
            await c(
              e,
              r.map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              }),
            );
          } catch (e) {
            f(e);
          }
        }),
      );
    }
    async function m(e, t) {
      if (t.length !== 0)
        try {
          await o("WAWebSentGroupAgentRequests").removeSentGroupAgentRequests(
            e,
            await p(e, t),
          );
        } finally {
          o("WAWebSentGroupAgentRequests").unclaimSentGroupAgentRequests(e, t);
        }
    }
    async function p(e, t) {
      if (t.length === 0) return [];
      var n = (
        await o(
          "WAWebApiMembershipApprovalRequestStore",
        ).getMembershipApprovalRequests(e)
      )
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
      if (n.length === 0) return t;
      var r = await Promise.allSettled(
          n.map(function (t) {
            return _(e, t);
          }),
        ),
        a = [];
      return (
        r.forEach(function (e, t) {
          e.status === "rejected" && (f(e.reason), a.push(n[t]));
        }),
        await o(
          "WAWebGroupGetMembershipApprovalRequestsJob",
        ).queryAndUpdateGroupMembershipApprovalRequests(e),
        t.filter(function (e) {
          return !a.some(function (t) {
            return o(
              "WAWebGroupAgentMembershipRequest",
            ).isAgentRequestIncompatibleWithJoinedAgent(e, t);
          });
        })
      );
    }
    async function _(e, t) {
      var n = await o(
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
    }
    function f(t) {
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
    ((l.rejectIncompatibleAgentRequestsAfterAnswer = s),
      (l.rejectIncompatibleAgentRequestsOfJoinedAgents = u),
      (l.rejectIncompatibleAgentRequestsAfterAddNotification = c),
      (l.rejectIncompatibleAgentRequestsOfStoredSentAgents = d));
  },
  98,
);
