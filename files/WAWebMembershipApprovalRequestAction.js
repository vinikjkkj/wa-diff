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
              var a,
                i = yield o(
                  "WAWebGroupMembershipRequestsActionJob",
                ).membershipApprovalRequestAction(
                  r.id,
                  [
                    o(
                      "WAWebGroupMutationParticipantUtils",
                    ).getGroupMutationParticipant(
                      t.contact,
                      ((a = r.groupMetadata) == null
                        ? void 0
                        : a.isLidAddressingMode) === !0,
                      "membershipApprovalRequest",
                    ),
                  ],
                  n,
                ),
                l = i[0],
                s = l.error,
                u = l.phoneNumber,
                m = l.username,
                p = l.wid;
              if (s != null) {
                var _ = s.name,
                  f = s.value;
                throw new d(Number(f.error), _);
              }
              var g = o(
                "WAWebUsernameGatingUtils",
              ).lidGroupMigrationNonMemberIQEnabled();
              if (g) {
                var h = [
                  {
                    id: o("WAWebWidFactory").asUserWidOrThrow(p),
                    lid: p.isLid() ? p : null,
                    phoneNumber: u
                      ? o("WAWebWidFactory").asUserWidOrThrow(u)
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
                var o = m.length === 1 && n.length === 1 ? m[0] : b(p, r);
                return { error: C(o), request: e, response: o };
              });
              return (
                yield h(
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
        var n;
        return o(
          "WAWebGroupMutationParticipantUtils",
        ).getGroupMutationParticipant(
          t.contact,
          ((n = e.groupMetadata) == null ? void 0 : n.isLidAddressingMode) ===
            !0,
          "membershipApprovalRequest",
        );
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      if (e == null) return new d(0, "missing-participant-result");
      var t = e.error;
      return t != null ? new d(Number(t.value.error), t.name) : null;
    }
    function b(e, t) {
      var n,
        r = t.lid,
        o = t.phoneNumber;
      return (n = r != null ? e.get(r.toString()) : null) != null
        ? n
        : o != null
          ? e.get(o.toString())
          : null;
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0;
          try {
            yield _(
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
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = null;
          try {
            return (
              (a = yield f(
                e,
                t,
                o("WAWebGroupMembershipRequestsActionJob")
                  .MembershipApprovalRequestAction.Approve,
              )),
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
        L.apply(this, arguments)
      );
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        T.apply(this, arguments)
      );
    }
    ((l.GroupError = c),
      (l.RequestError = d),
      (l.readMembershipApprovalRequestsFromDB = m),
      (l.approveMembershipApprovalRequest = v),
      (l.approveMembershipApprovalRequests = R),
      (l.rejectMembershipApprovalRequest = E),
      (l.cancelMembershipApprovalRequest = I));
  },
  98,
);
