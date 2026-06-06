__d(
  "WAWebMembershipApprovalRequestAction",
  [
    "WACustomError",
    "WANullthrows",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebSetUsernameJob",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : "GroupError") || this),
            (r.name = "GroupError"),
            (r.status = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : "RequestError") || this),
            (r.name = "RequestError"),
            (r.status = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      u = async function (t) {
        var e = o("WAWebStateUtils").unproxy(t),
          n = (
            await o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(e.id)
          ).map(function (e) {
            return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
          });
        r("WANullthrows")(e.groupMetadata).membershipApprovalRequests.add(n, {
          merge: !0,
        });
      },
      c = async function (n, r, a) {
        var t = o("WAWebStateUtils").unproxy(n);
        try {
          var i,
            l = await o(
              "WAWebGroupMembershipRequestsActionJob",
            ).membershipApprovalRequestAction(
              t.id,
              [
                o(
                  "WAWebGroupMutationParticipantUtils",
                ).getGroupMutationParticipant(
                  r.contact,
                  ((i = t.groupMetadata) == null
                    ? void 0
                    : i.isLidAddressingMode) === !0,
                  "membershipApprovalRequest",
                ),
              ],
              a,
            ),
            u = l[0],
            c = u.error,
            d = u.phoneNumber,
            m = u.username,
            p = u.wid;
          if (c != null) {
            var _ = c.name,
              f = c.value;
            throw new s(Number(f.error), _);
          }
          var g = o(
            "WAWebUsernameGatingUtils",
          ).lidGroupMigrationNonMemberIQEnabled();
          if (g) {
            var h = [
              {
                id: o("WAWebWidFactory").asUserWidOrThrow(p),
                lid: p.isLid() ? p : null,
                phoneNumber: d
                  ? o("WAWebWidFactory").asUserWidOrThrow(d)
                  : null,
              },
            ];
            await o(
              "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
            ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(h, !0);
          }
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            m != null &&
            (await o("WAWebSetUsernameJob").setUsernamesJob([
              {
                userId: o("WAWebWidFactory").asUserWidOrThrow(p),
                username: o("WAWebUsernameTypes").asUsername(m),
              },
            ]));
        } catch (t) {
          throw t instanceof o("WAWebBackendErrors").ServerStatusCodeError
            ? new e(t.status, t.message)
            : t;
        }
      },
      d = async function (t, n, r) {
        var e = self.performance.now(),
          a = !0;
        try {
          await c(
            t,
            n,
            o("WAWebGroupMembershipRequestsActionJob")
              .MembershipApprovalRequestAction.Approve,
          );
        } catch (e) {
          throw ((a = !1), e);
        } finally {
          var i = self.performance.now() - e;
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
            groupId: t.id,
            isSuccessful: a,
            responseTime: i,
            groupsInCommon: r,
          });
        }
      },
      m = async function (t, n, r) {
        var e = self.performance.now(),
          a = !0;
        try {
          await c(
            t,
            n,
            o("WAWebGroupMembershipRequestsActionJob")
              .MembershipApprovalRequestAction.Reject,
          );
        } catch (e) {
          throw ((a = !1), e);
        } finally {
          var i = self.performance.now() - e;
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestReject({
            groupId: t.id,
            isSuccessful: a,
            responseTime: i,
            groupsInCommon: r,
          });
        }
      },
      p = async function (n) {
        var t = self.performance.now(),
          r = !0,
          a = o(
            "WAWebUsernameGatingUtils",
          ).lidGroupMigrationNonMemberIQEnabled(),
          i = a
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMeUser();
        try {
          var l = await o(
              "WAWebGroupCancelMembershipRequestJob",
            ).cancelMembershipApprovalRequestJob(n, [i]),
            u = l[0],
            c = u.error;
          if (c != null) {
            var d = c.name,
              m = c.value;
            throw new s(Number(m.error), d);
          }
        } catch (t) {
          throw (
            (r = !1),
            t instanceof o("WAWebBackendErrors").ServerStatusCodeError
              ? new e(t.status, t.message)
              : t
          );
        } finally {
          var p = self.performance.now() - t;
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCancel({
            groupId: n,
            isSuccessful: r,
            responseTime: p,
          });
        }
      };
    ((l.GroupError = e),
      (l.RequestError = s),
      (l.readMembershipApprovalRequestsFromDB = u),
      (l.approveMembershipApprovalRequest = d),
      (l.rejectMembershipApprovalRequest = m),
      (l.cancelMembershipApprovalRequest = p));
  },
  98,
);
