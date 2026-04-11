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
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebStateUtils").unproxy(e),
            n = (yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(t.id)).map(function (e) {
              return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
            });
          r("WANullthrows")(t.groupMetadata).membershipApprovalRequests.add(n, {
            merge: !0,
          });
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      c = (function () {
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
                    username: m,
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
      })(),
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = self.performance.now(),
              a = !0;
            try {
              yield c(
                e,
                t,
                o("WAWebGroupMembershipRequestsActionJob")
                  .MembershipApprovalRequestAction.Approve,
              );
            } catch (e) {
              throw ((a = !1), e);
            } finally {
              var i = self.performance.now() - r;
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove(
                {
                  groupId: e.id,
                  isSuccessful: a,
                  responseTime: i,
                  groupsInCommon: n,
                },
              );
            }
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })(),
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = self.performance.now(),
              a = !0;
            try {
              yield c(
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
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })(),
      p = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = self.performance.now(),
            r = !0,
            a = o(
              "WAWebUsernameGatingUtils",
            ).lidGroupMigrationNonMemberIQEnabled(),
            i = a
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUser();
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
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    ((l.GroupError = e),
      (l.RequestError = s),
      (l.readMembershipApprovalRequestsFromDB = u),
      (l.approveMembershipApprovalRequest = d),
      (l.rejectMembershipApprovalRequest = m),
      (l.cancelMembershipApprovalRequest = p));
  },
  98,
);
