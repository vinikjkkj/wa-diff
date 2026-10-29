__d(
  "WAWebMembershipApprovalRequestAction",
  [
    "WACustomError",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebIncompatibleAgentRequestsRejectTriggers",
    "WAWebSentGroupAgentRequests",
    "WAWebSetUsernameJob",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    var _ = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = o("WAWebStateUtils").unproxy(e);
            try {
              var a = yield o(
                  "WAWebGroupMembershipRequestsActionJob",
                ).membershipApprovalRequestAction(r.id, [h(r, t)], n),
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
                var g = [
                  {
                    id: o("WAWebWidFactory").asUserWidOrThrow(m),
                    lid: m.isLid() ? m : null,
                    phoneNumber: s
                      ? o("WAWebWidFactory").asUserWidOrThrow(s)
                      : null,
                  },
                ];
                yield o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(g, !0);
              }
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                u != null &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob([
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
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })(),
      f = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a) {
            var i = o("WAWebStateUtils").unproxy(t);
            try {
              var l = n.map(function (e) {
                  return g(i, e);
                }),
                s = l.filter(Boolean),
                m =
                  s.length > 0
                    ? yield o(
                        "WAWebGroupMembershipRequestsActionJob",
                      ).membershipApprovalRequestAction(i.id, s, a)
                    : [],
                p = new Map();
              m.forEach(function (e) {
                (p.set(e.wid.toString(), e),
                  e.phoneNumber != null && p.set(e.phoneNumber.toString(), e));
              });
              var _ = n.map(function (e, t) {
                var r = l[t];
                if (r == null)
                  return {
                    error: new d(u, "invalid-participant"),
                    request: e,
                    response: null,
                  };
                var o = m.length === 1 && n.length === 1 ? m[0] : v(p, r);
                return { error: b(o), request: e, response: o };
              });
              return (
                yield y(
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
                    n = e.request;
                  return { error: t, request: n };
                })
              );
            } catch (e) {
              throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? new c(e.status, e.message)
                : e;
            }
          },
        );
        return function (n, r, o) {
          return t.apply(this, arguments);
        };
      })();
    function g(e, t) {
      try {
        return h(e, t);
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
    function h(e, t) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            if (
              o(
                "WAWebUsernameGatingUtils",
              ).lidGroupMigrationNonMemberIQEnabled()
            ) {
              var t = e.map(function (e) {
                var t = e.phoneNumber,
                  n = e.wid;
                return {
                  id: o("WAWebWidFactory").asUserWidOrThrow(n),
                  lid: n.isLid() ? n : null,
                  phoneNumber: t
                    ? o("WAWebWidFactory").asUserWidOrThrow(t)
                    : null,
                };
              });
              yield o(
                "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
              ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(t, !0);
            }
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              e.some(function (e) {
                var t = e.username;
                return t != null;
              }) &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      if (e == null) return new d(0, "missing-participant-result");
      var t = e.error;
      return t != null ? new d(Number(t.value.error), t.name) : null;
    }
    function v(e, t) {
      var n,
        r = t.lid,
        o = t.phoneNumber;
      return (n = r != null ? e.get(r.toString()) : null) != null
        ? n
        : o != null
          ? e.get(o.toString())
          : null;
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
              "WAWebSentGroupAgentRequests",
            ).recordSentGroupAgentRequests(e.id, [t.id], "approval"),
            a = self.performance.now(),
            i = !0;
          try {
            yield _(
              e,
              t,
              o("WAWebGroupMembershipRequestsActionJob")
                .MembershipApprovalRequestAction.Approve,
            );
          } catch (n) {
            throw ((i = !1), T(e, r, [t.id], n), n);
          } finally {
            var l = self.performance.now() - a;
            o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
              groupId: e.id,
              isSuccessful: i,
              responseTime: l,
              groupsInCommon: n,
            });
          }
          o(
            "WAWebIncompatibleAgentRequestsRejectTriggers",
          ).startIncompatibleAgentRequestRejectsAfterAnswer(
            e.id,
            r,
            [t.id],
            [t.id],
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.map(function (e) {
              var t = e.id;
              return t;
            }),
            a = yield o(
              "WAWebSentGroupAgentRequests",
            ).recordSentGroupAgentRequests(e.id, r, "approval"),
            i = self.performance.now(),
            l = null;
          try {
            return (
              (l = yield f(
                e,
                t,
                o("WAWebGroupMembershipRequestsActionJob")
                  .MembershipApprovalRequestAction.Approve,
              )),
              o(
                "WAWebIncompatibleAgentRequestsRejectTriggers",
              ).startIncompatibleAgentRequestRejectsAfterAnswer(
                e.id,
                a,
                r,
                l
                  .filter(function (e) {
                    var t = e.error;
                    return t == null;
                  })
                  .map(function (e) {
                    var t = e.request;
                    return t.id;
                  }),
              ),
              l
            );
          } catch (t) {
            throw (T(e, a, r, t), t);
          } finally {
            var s = self.performance.now() - i;
            t.forEach(function (t, r) {
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove(
                {
                  groupId: e.id,
                  isSuccessful: l != null && l[r].error == null,
                  responseTime: s,
                  groupsInCommon: n(t),
                },
              );
            });
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield _(
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
      (r instanceof c || r instanceof d) &&
        o(
          "WAWebIncompatibleAgentRequestsRejectTriggers",
        ).startIncompatibleAgentRequestRejectsAfterAnswer(e.id, t, n, []);
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = self.performance.now(),
            n = !0,
            r = o(
              "WAWebUsernameGatingUtils",
            ).lidGroupMigrationNonMemberIQEnabled(),
            a = r
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
          try {
            var i = yield o(
                "WAWebGroupCancelMembershipRequestJob",
              ).cancelMembershipApprovalRequestJob(e, [a]),
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
        })),
        x.apply(this, arguments)
      );
    }
    ((l.GroupError = c),
      (l.RequestError = d),
      (l.readMembershipApprovalRequestsFromDB = m),
      (l.approveMembershipApprovalRequest = S),
      (l.approveMembershipApprovalRequests = L),
      (l.rejectMembershipApprovalRequest = k),
      (l.cancelMembershipApprovalRequest = D));
  },
  98,
);
