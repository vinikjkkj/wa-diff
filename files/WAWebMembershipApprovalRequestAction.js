__d(
  "WAWebMembershipApprovalRequestAction",
  [
    "WACustomError",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupMembershipRequestsService",
    "WAWebGroupMutationParticipantUtils",
    "WAWebIncompatibleAgentRequestsRejectTriggers",
    "WAWebLidMappingService",
    "WAWebSentGroupAgentRequests",
    "WAWebSetUsernameJob",
    "WAWebStateUtils",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 400,
      c = (function (e) {
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
      d = (function (e) {
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
    async function m(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = (
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupMembershipRequestsService")
                    .GroupMembershipRequestsService,
                ).getMembershipApprovalRequests
              : o("WAWebApiMembershipApprovalRequestStore")
                  .getMembershipApprovalRequests
          )(t.id)
        ).map(function (e) {
          return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
        });
      r("nullthrows")(t.groupMetadata).membershipApprovalRequests.add(n, {
        merge: !0,
      });
    }
    var p = async function (t, n, r) {
        var e = o("WAWebStateUtils").unproxy(t);
        try {
          var a = await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebGroupMembershipRequestsService")
                      .GroupMembershipRequestsService,
                  ).membershipApprovalRequestAction
                : o("WAWebGroupMembershipRequestsActionJob")
                    .membershipApprovalRequestAction
            )(e.id, [g(e, n)], r),
            i = a[0],
            l = i.error,
            s = i.phoneNumber,
            u = i.username,
            m = i.wid;
          if (l != null) {
            var p = l.name,
              _ = l.value;
            throw new d(Number(_.error), p);
          }
          var f = o(
            "WAWebUsernameGatingUtils",
          ).lidGroupMigrationNonMemberIQEnabled();
          if (f) {
            var h = [
              {
                id: o("WAWebWidFactory").asUserWidOrThrow(m),
                lid: m.isLid() ? m : null,
                phoneNumber: s
                  ? o("WAWebWidFactory").asUserWidOrThrow(s)
                  : null,
              },
            ];
            await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebLidMappingService").LidMappingService,
                  ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches
                : o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob")
                    .createOrReplaceDisplayNamesAndLidPnMappingsInBatches
            )(h, !0);
          }
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            u != null &&
            (await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebLidMappingService").LidMappingService,
                  ).setUsernamesJob
                : o("WAWebSetUsernameJob").setUsernamesJob
            )([
              {
                userId: o("WAWebWidFactory").asUserWidOrThrow(m),
                username: o("WAWebUsernameTypes").asUsername(u),
              },
            ]));
        } catch (e) {
          throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError
            ? new c(e.status, e.message)
            : e;
        }
      },
      _ = async function (n, a, i) {
        var t = o("WAWebStateUtils").unproxy(n);
        try {
          var l = a.map(function (e) {
              return f(t, e);
            }),
            s = l.filter(Boolean),
            m =
              s.length > 0
                ? await (
                    o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebGroupMembershipRequestsService")
                            .GroupMembershipRequestsService,
                        ).membershipApprovalRequestAction
                      : o("WAWebGroupMembershipRequestsActionJob")
                          .membershipApprovalRequestAction
                  )(t.id, s, i)
                : [],
            p = new Map();
          m.forEach(function (e) {
            (p.set(e.wid.toString(), e),
              e.phoneNumber != null && p.set(e.phoneNumber.toString(), e));
          });
          var _ = a.map(function (e, t) {
            var n = l[t];
            if (n == null)
              return {
                error: new d(u, "invalid-participant"),
                request: e,
                response: null,
              };
            var r = m.length === 1 && a.length === 1 ? m[0] : C(p, n);
            return { error: y(r), request: e, response: r };
          });
          return (
            await h(
              _.map(function (e) {
                var t = e.error,
                  n = e.response;
                return t == null ? n : null;
              }).filter(Boolean),
            ).catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "membershipApprovalRequestsActionProxy: could not store the requesters' identities",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            }),
            _.map(function (e) {
              var t = e.error,
                n = e.request,
                r = e.response;
              return { error: t, request: n, wid: r == null ? void 0 : r.wid };
            })
          );
        } catch (e) {
          throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError
            ? new c(e.status, e.message)
            : e;
        }
      };
    function f(e, t) {
      try {
        return g(e, t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "membershipApprovalRequestsActionProxy: skipped a requester without a usable id",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    function g(e, t) {
      var n,
        r = o("WAWebWidFactory").asUserWidOrThrow(t.id);
      return r.isFbidBot()
        ? { phoneNumber: r }
        : o("WAWebGroupMutationParticipantUtils").getGroupMutationParticipant(
            t.contact,
            ((n = e.groupMetadata) == null ? void 0 : n.isLidAddressingMode) ===
              !0,
            "membershipApprovalRequest",
          );
    }
    async function h(e) {
      if (e.length !== 0) {
        if (
          o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled()
        ) {
          var t = e.map(function (e) {
            var t = e.phoneNumber,
              n = e.wid;
            return {
              id: o("WAWebWidFactory").asUserWidOrThrow(n),
              lid: n.isLid() ? n : null,
              phoneNumber: t ? o("WAWebWidFactory").asUserWidOrThrow(t) : null,
            };
          });
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebLidMappingService").LidMappingService,
                ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches
              : o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob")
                  .createOrReplaceDisplayNamesAndLidPnMappingsInBatches
          )(t, !0);
        }
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          e.some(function (e) {
            var t = e.username;
            return t != null;
          }) &&
          (await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebLidMappingService").LidMappingService,
                ).setUsernamesJob
              : o("WAWebSetUsernameJob").setUsernamesJob
          )(
            e.flatMap(function (e) {
              var t = e.username,
                n = e.wid;
              return t != null
                ? [
                    {
                      userId: o("WAWebWidFactory").asUserWidOrThrow(n),
                      username: o("WAWebUsernameTypes").asUsername(t),
                    },
                  ]
                : [];
            }),
          ));
      }
    }
    function y(e) {
      if (e == null) return new d(0, "missing-participant-result");
      var t = e.error;
      return t != null ? new d(Number(t.value.error), t.name) : null;
    }
    function C(e, t) {
      var n,
        r = t.lid,
        o = t.phoneNumber;
      return (n = r != null ? e.get(r.toString()) : null) != null
        ? n
        : o != null
          ? e.get(o.toString())
          : null;
    }
    async function b(e, t, n, r) {
      var a = await o(
          "WAWebSentGroupAgentRequests",
        ).recordSentGroupAgentRequests(e.id, [t.id], "approval"),
        i = self.performance.now(),
        l = !0;
      try {
        await p(
          e,
          t,
          o("WAWebGroupMembershipRequestsActionJob")
            .MembershipApprovalRequestAction.Approve,
        );
      } catch (n) {
        throw ((l = !1), L(e, a, [t.id], n), n);
      } finally {
        var s = self.performance.now() - i;
        o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
          entrypoint: r,
          groupId: e.id,
          isSuccessful: l,
          responseTime: s,
          groupsInCommon: n,
        });
      }
      o(
        "WAWebIncompatibleAgentRequestsRejectTriggers",
      ).startIncompatibleAgentRequestRejectsAfterAnswer(
        e.id,
        a,
        [t.id],
        [t.id],
      );
    }
    async function v(e, t, n, r) {
      var a = t.map(function (e) {
          var t = e.id;
          return t;
        }),
        i = await o("WAWebSentGroupAgentRequests").recordSentGroupAgentRequests(
          e.id,
          a,
          "approval",
        ),
        l = self.performance.now(),
        s = null;
      try {
        return (
          (s = await _(
            e,
            t,
            o("WAWebGroupMembershipRequestsActionJob")
              .MembershipApprovalRequestAction.Approve,
          )),
          o(
            "WAWebIncompatibleAgentRequestsRejectTriggers",
          ).startIncompatibleAgentRequestRejectsAfterAnswer(
            e.id,
            i,
            a,
            s
              .filter(function (e) {
                var t = e.error;
                return t == null;
              })
              .map(function (e) {
                var t = e.request;
                return t.id;
              }),
          ),
          s
        );
      } catch (t) {
        throw (L(e, i, a, t), t);
      } finally {
        var u = self.performance.now() - l;
        t.forEach(function (t, a) {
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
            entrypoint: r,
            groupId: e.id,
            isSuccessful: s != null && s[a].error == null,
            responseTime: u,
            groupsInCommon: n(t),
          });
        });
      }
    }
    async function S(e, t, n, r) {
      var a = self.performance.now(),
        i = !0;
      try {
        await p(
          e,
          t,
          o("WAWebGroupMembershipRequestsActionJob")
            .MembershipApprovalRequestAction.Reject,
        );
      } catch (e) {
        throw ((i = !1), e);
      } finally {
        var l = self.performance.now() - a;
        o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestReject({
          entrypoint: r,
          groupId: e.id,
          isSuccessful: i,
          responseTime: l,
          groupsInCommon: n,
        });
      }
    }
    async function R(e, t, n, r) {
      var a = self.performance.now(),
        i = null;
      try {
        return (
          (i = await _(
            e,
            t,
            o("WAWebGroupMembershipRequestsActionJob")
              .MembershipApprovalRequestAction.Reject,
          )),
          i
        );
      } finally {
        var l = self.performance.now() - a;
        t.forEach(function (t, a) {
          var s,
            u = (s = i) == null ? void 0 : s[a];
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestReject({
            entrypoint: r,
            groupId: e.id,
            isSuccessful: u != null && u.error == null,
            responseTime: l,
            groupsInCommon: n(t),
          });
        });
      }
    }
    function L(e, t, n, r) {
      (r instanceof c || r instanceof d) &&
        o(
          "WAWebIncompatibleAgentRequestsRejectTriggers",
        ).startIncompatibleAgentRequestRejectsAfterAnswer(e.id, t, n, []);
    }
    async function E(e) {
      var t = self.performance.now(),
        n = !0,
        r = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled(),
        a = r
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : o("WAWebUserUtils").getMeUserOrThrow();
      try {
        var i = await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupMembershipRequestsService")
                    .GroupMembershipRequestsService,
                ).cancelMembershipApprovalRequestJob
              : o("WAWebGroupCancelMembershipRequestJob")
                  .cancelMembershipApprovalRequestJob
          )(e, [a]),
          l = i[0],
          s = l.error;
        if (s != null) {
          var u = s.name,
            m = s.value;
          throw new d(Number(m.error), u);
        }
      } catch (e) {
        throw (
          (n = !1),
          e instanceof o("WAWebBackendErrors").ServerStatusCodeError
            ? new c(e.status, e.message)
            : e
        );
      } finally {
        var p = self.performance.now() - t;
        o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCancel({
          groupId: e,
          isSuccessful: n,
          responseTime: p,
        });
      }
    }
    ((l.GroupError = c),
      (l.RequestError = d),
      (l.readMembershipApprovalRequestsFromDB = m),
      (l.approveMembershipApprovalRequest = b),
      (l.approveMembershipApprovalRequests = v),
      (l.rejectMembershipApprovalRequest = S),
      (l.rejectMembershipApprovalRequests = R),
      (l.cancelMembershipApprovalRequest = E));
  },
  98,
);
