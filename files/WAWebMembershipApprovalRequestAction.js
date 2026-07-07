__d(
  "WAWebMembershipApprovalRequestAction",
  [
    "WACustomError",
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
    "asyncToGeneratorRuntime",
    "nullthrows",
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
      })(o("WACustomError").CustomError);
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebStateUtils").unproxy(e),
            n = (yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(t.id)).map(function (e) {
              return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
            });
          r("nullthrows")(t.groupMetadata).membershipApprovalRequests.add(n, {
            merge: !0,
          });
        })),
        c.apply(this, arguments)
      );
    }
    var d = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
        function* (t, n, r) {
          var a = o("WAWebStateUtils").unproxy(t);
          try {
            var i,
              l = yield o(
                "WAWebGroupMembershipRequestsActionJob",
              ).membershipApprovalRequestAction(
                a.id,
                [
                  o(
                    "WAWebGroupMutationParticipantUtils",
                  ).getGroupMutationParticipant(
                    n.contact,
                    ((i = a.groupMetadata) == null
                      ? void 0
                      : i.isLidAddressingMode) === !0,
                    "membershipApprovalRequest",
                  ),
                ],
                r,
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
              yield o(
                "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
              ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(h, !0);
            }
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              m != null &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob([
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
      );
      return function (n, r, o) {
        return t.apply(this, arguments);
      };
    })();
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield d(
              e,
              t,
              o("WAWebGroupMembershipRequestsActionJob")
                .MembershipApprovalRequestAction.Approve,
            );
          } catch (e) {
            throw ((a = !1), e);
          } finally {
            var i = self.performance.now() - r;
            o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
              groupId: e.id,
              isSuccessful: a,
              responseTime: i,
              groupsInCommon: n,
            });
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield d(
              e,
              t,
              o("WAWebGroupMembershipRequestsActionJob")
                .MembershipApprovalRequestAction.Reject,
            );
          } catch (e) {
            throw ((a = !1), e);
          } finally {
            var i = self.performance.now() - r;
            o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestReject({
              groupId: e.id,
              isSuccessful: a,
              responseTime: i,
              groupsInCommon: n,
            });
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = self.performance.now(),
            r = !0,
            a = o(
              "WAWebUsernameGatingUtils",
            ).lidGroupMigrationNonMemberIQEnabled(),
            i = a
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
          try {
            var l = yield o(
                "WAWebGroupCancelMembershipRequestJob",
              ).cancelMembershipApprovalRequestJob(t, [i]),
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
            var p = self.performance.now() - n;
            o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCancel({
              groupId: t,
              isSuccessful: r,
              responseTime: p,
            });
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.GroupError = e),
      (l.RequestError = s),
      (l.readMembershipApprovalRequestsFromDB = u),
      (l.approveMembershipApprovalRequest = m),
      (l.rejectMembershipApprovalRequest = _),
      (l.cancelMembershipApprovalRequest = g));
  },
  98,
);
