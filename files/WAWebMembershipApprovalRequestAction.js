__d(
  "WAWebMembershipApprovalRequestAction",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupAgentMembershipRequest",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 400,
      p = (function (e) {
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
      _ = (function (e) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        g.apply(this, arguments)
      );
    }
    var h = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = o("WAWebStateUtils").unproxy(e);
            try {
              var a = yield o(
                  "WAWebGroupMembershipRequestsActionJob",
                ).membershipApprovalRequestAction(r.id, [b(r, t)], n),
                i = a[0],
                l = i.error,
                s = i.phoneNumber,
                u = i.username,
                c = i.wid;
              if (l != null) {
                var d = l.name,
                  m = l.value;
                throw new _(Number(m.error), d);
              }
              var f = o(
                "WAWebUsernameGatingUtils",
              ).lidGroupMigrationNonMemberIQEnabled();
              if (f) {
                var g = [
                  {
                    id: o("WAWebWidFactory").asUserWidOrThrow(c),
                    lid: c.isLid() ? c : null,
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
                    userId: o("WAWebWidFactory").asUserWidOrThrow(c),
                    username: o("WAWebUsernameTypes").asUsername(u),
                  },
                ]));
            } catch (e) {
              throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? new p(e.status, e.message)
                : e;
            }
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a) {
            var i = o("WAWebStateUtils").unproxy(t);
            try {
              var l = n.map(function (e) {
                  return C(i, e);
                }),
                s = l.filter(Boolean),
                u =
                  s.length > 0
                    ? yield o(
                        "WAWebGroupMembershipRequestsActionJob",
                      ).membershipApprovalRequestAction(i.id, s, a)
                    : [],
                c = new Map();
              u.forEach(function (e) {
                (c.set(e.wid.toString(), e),
                  e.phoneNumber != null && c.set(e.phoneNumber.toString(), e));
              });
              var d = n.map(function (e, t) {
                var r = l[t];
                if (r == null)
                  return {
                    error: new _(m, "invalid-participant"),
                    request: e,
                    response: null,
                  };
                var o = u.length === 1 && n.length === 1 ? u[0] : L(c, r);
                return { error: R(o), request: e, response: o };
              });
              return (
                yield v(
                  d
                    .map(function (e) {
                      var t = e.error,
                        n = e.response;
                      return t == null ? n : null;
                    })
                    .filter(Boolean),
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
                d.map(function (e) {
                  var t = e.error,
                    n = e.request;
                  return { error: t, request: n };
                })
              );
            } catch (e) {
              throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? new p(e.status, e.message)
                : e;
            }
          },
        );
        return function (n, r, o) {
          return t.apply(this, arguments);
        };
      })();
    function C(e, t) {
      try {
        return b(e, t);
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
    function b(e, t) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      if (e == null) return new _(0, "missing-participant-result");
      var t = e.error;
      return t != null ? new _(Number(t.value.error), t.name) : null;
    }
    function L(e, t) {
      var n,
        r = t.lid,
        o = t.phoneNumber;
      return (n = r != null ? e.get(r.toString()) : null) != null
        ? n
        : o != null
          ? e.get(o.toString())
          : null;
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield h(
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
          $(e, [t.id]);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = null;
          try {
            return (
              (a = yield y(
                e,
                t,
                o("WAWebGroupMembershipRequestsActionJob")
                  .MembershipApprovalRequestAction.Approve,
              )),
              $(
                e,
                a
                  .filter(function (e) {
                    var t = e.error;
                    return t == null;
                  })
                  .map(function (e) {
                    var t = e.request;
                    return t.id;
                  }),
              ),
              a
            );
          } finally {
            var i = self.performance.now() - r;
            t.forEach(function (t, r) {
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove(
                {
                  groupId: e.id,
                  isSuccessful: a != null && a[r].error == null,
                  responseTime: i,
                  groupsInCommon: n(t),
                },
              );
            });
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield h(
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      var n = t.filter(function (e) {
        return e.isFbidBot();
      });
      n.length !== 0 &&
        P(e, n).catch(function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[membershipApproval] incompatible agent request reject failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("membership-approval-agent-reject-failed");
        });
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = o("WAWebStateUtils").unproxy(e),
            i = (yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(a.id))
              .filter(function (e) {
                return t.some(function (t) {
                  return o(
                    "WAWebGroupAgentMembershipRequest",
                  ).isAgentRequestIncompatibleWithJoinedAgent(t, e.id);
                });
              })
              .map(function (e) {
                return new (r("WAWebGroupMembershipApprovalRequestModel"))(e);
              });
          if (i.length !== 0) {
            var l = yield (d || (d = n("Promise"))).allSettled(
              i.map(function (e) {
                return h(
                  a,
                  e,
                  o("WAWebGroupMembershipRequestsActionJob")
                    .MembershipApprovalRequestAction.Reject,
                );
              }),
            );
            (l.forEach(function (e) {
              e.status === "rejected" &&
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[membershipApproval] incompatible agent request reject failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e.reason))
                  .sendLogs("membership-approval-agent-reject-failed");
            }),
              yield o(
                "WAWebGroupGetMembershipApprovalRequestsJob",
              ).queryAndUpdateGroupMembershipApprovalRequests(a.id));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                c = s.value;
              throw new _(Number(c.error), u);
            }
          } catch (e) {
            throw (
              (n = !1),
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? new p(e.status, e.message)
                : e
            );
          } finally {
            var d = self.performance.now() - t;
            o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCancel({
              groupId: e,
              isSuccessful: n,
              responseTime: d,
            });
          }
        })),
        w.apply(this, arguments)
      );
    }
    ((l.GroupError = p),
      (l.RequestError = _),
      (l.readMembershipApprovalRequestsFromDB = f),
      (l.approveMembershipApprovalRequest = E),
      (l.approveMembershipApprovalRequests = I),
      (l.rejectMembershipApprovalRequest = D),
      (l.rejectIncompatibleAgentRequests = P),
      (l.cancelMembershipApprovalRequest = M));
  },
  98,
);
