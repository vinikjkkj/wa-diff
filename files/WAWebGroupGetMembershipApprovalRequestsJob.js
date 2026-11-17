__d(
  "WAWebGroupGetMembershipApprovalRequestsJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WASmaxGroupsGetMembershipApprovalRequestsRPC",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupMembershipFormAnswersFetchGating",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebRequestMethodType",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["addedByPn", "addedByUsername", "phoneNumber", "username"],
      s = ["membershipFormAnswers"],
      u,
      c,
      d,
      m = r("JSResourceForInteraction")(
        "WAWebMexFetchMembershipApprovalRequestsJob",
      ).__setRef("WAWebGroupGetMembershipApprovalRequestsJob");
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o(
              "WAWebGroupMembershipFormAnswersFetchGating",
            ).shouldFetchGroupMembershipFormAnswers(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] membership form answers gating failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("gmf-answers-gating-failed"),
              null
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !t &&
            !o(
              "WAWebGroupMembershipFormGating",
            ).isMexMembershipApprovalRequestsEnabled()
          )
            return h(e);
          var n = yield m.load(),
            r = n.fetchMexMembershipApprovalRequests;
          return r(e, t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WASmaxGroupsGetMembershipApprovalRequestsRPC",
          ).sendGetMembershipApprovalRequestsRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(e),
          });
          switch (t.name) {
            case "GetMembershipApprovalRequestsResponseSuccess":
              return t.value.membershipApprovalRequestsMembershipApprovalRequest.map(
                function (e) {
                  var t = o("WAWebJidToWid").userJidToUserWid(e.jid),
                    n = e.requestor,
                    r = {
                      id: t,
                      t: e.requestTime,
                      addedBy:
                        n != null ? o("WAWebJidToWid").userJidToUserWid(n) : t,
                      requestMethod: C(e.requestMethod),
                      parentGroupId:
                        e.parentGroupJid != null
                          ? o("WAWebJidToWid").groupJidToWid(e.parentGroupJid)
                          : void 0,
                    };
                  if (
                    o(
                      "WAWebUsernameGatingUtils",
                    ).lidGroupMigrationNonMemberIQEnabled()
                  ) {
                    var a,
                      i =
                        (a = e.identityMixin) == null
                          ? void 0
                          : a.identityTypes.value.phoneNumber;
                    i != null &&
                      (r.phoneNumber = o("WAWebJidToWid").userJidToUserWid(i));
                    var l = e.requestorPn;
                    l != null &&
                      (r.addedByPn = o("WAWebJidToWid").userJidToUserWid(l));
                  }
                  if (
                    o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
                  ) {
                    var s,
                      u = e.requestorUsername;
                    u != null && (r.addedByUsername = u);
                    var c =
                      ((s = e.identityMixin) == null
                        ? void 0
                        : s.identityTypes) != null
                        ? o(
                            "WAWebGroupsQueryApi",
                          ).extractUsernameFromIdentityTypes(
                            e.identityMixin.identityTypes,
                          )
                        : void 0;
                    c != null && (r.username = c);
                  }
                  return r;
                },
              );
            case "GetMembershipApprovalRequestsResponseClientError": {
              var n = t.value.errorGetMembershipApprovalRequestsClientErrors;
              return b(n.value);
            }
            default:
              return (t.name, b(t.value.errorServerErrors.value));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e === "invite_link"
        ? o("WAWebRequestMethodType").RequestMethod.InviteLink
        : e === "linked_group_join"
          ? o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin
          : e === "non_admin_add"
            ? o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function b(e) {
      var t = e.code,
        r = e.text;
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "queryMembershipApprovalRequests failed: ",
              ":",
              "",
            ])),
          t,
          r,
        ),
        (d || (d = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), r),
        )
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n != null ? n : yield p(t),
            a = yield f(t, r === !0),
            i = a.map(function (t) {
              var n = t.addedByPn,
                r = t.addedByUsername,
                o = t.phoneNumber,
                a = t.username,
                i = babelHelpers.objectWithoutPropertiesLoose(t, e);
              return i;
            }),
            l = r == null ? yield R(t, i) : i,
            u = yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(t),
            c = u.filter(function (e) {
              return !l.some(function (t) {
                return t.id.equals(e.id);
              });
            });
          if (
            (yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).removeMembershipApprovalRequests(
              t,
              c.map(function (e) {
                return e.id;
              }),
            ),
            yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).addMembershipApprovalRequests(t, l),
            o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled())
          ) {
            var d = a.reduce(function (e, t) {
              var n = t.addedBy,
                r = t.addedByPn,
                o = t.id,
                a = t.phoneNumber;
              return (
                e.push({
                  id: o,
                  lid: o.isLid() ? o : null,
                  phoneNumber: a != null ? a : null,
                }),
                e.push({
                  id: n,
                  lid: n.isLid() ? n : null,
                  phoneNumber: r != null ? r : null,
                }),
                e
              );
            }, []);
            yield o(
              "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
            ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(d, !0);
          }
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var m = a.reduce(function (e, t) {
              return (
                t.username != null &&
                  e.push({
                    username: o("WAWebUsernameTypes").asUsername(t.username),
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t.id),
                  }),
                t.addedByUsername != null &&
                  e.push({
                    username: o("WAWebUsernameTypes").asUsername(
                      t.addedByUsername,
                    ),
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t.addedBy),
                  }),
                e
              );
            }, []);
            yield o("WAWebSetUsernameJob").setUsernamesJob(m);
          }
          (o("WAWebBackendApi").frontendFireAndForget(
            "removeMembershipApprovalRequests",
            {
              groupId: t,
              requestIds: c.map(function (e) {
                return e.id;
              }),
            },
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "addMembershipApprovalRequests",
              {
                groupId: t,
                requests: l.map(function (e) {
                  var t = e.membershipFormAnswers,
                    n = babelHelpers.objectWithoutPropertiesLoose(e, s);
                  return babelHelpers.extends({}, n, {
                    hasMembershipFormAnswers: t != null,
                    membershipFormRequestId: t == null ? void 0 : t.requestId,
                    membershipFormAnswersVersion:
                      t != null
                        ? o(
                            "WAWebApiMembershipApprovalRequestStore",
                          ).getMembershipFormAnswersVersion(t)
                        : void 0,
                  });
                }),
              },
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebApiMembershipApprovalRequestStore",
          ).getMembershipApprovalRequestsWithFormAnswers(e);
          return t.map(function (e) {
            var t,
              r =
                (t = n.find(function (t) {
                  return t.id.equals(e.id);
                })) == null
                  ? void 0
                  : t.membershipFormAnswers;
            return r != null
              ? babelHelpers.extends({}, e, { membershipFormAnswers: r })
              : e;
          });
        })),
        L.apply(this, arguments)
      );
    }
    l.queryAndUpdateGroupMembershipApprovalRequests = v;
  },
  98,
);
