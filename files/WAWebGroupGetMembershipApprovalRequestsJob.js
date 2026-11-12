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
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["addedByPn", "addedByUsername", "phoneNumber", "username"],
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebMexFetchMembershipApprovalRequestsJob",
      ).__setRef("WAWebGroupGetMembershipApprovalRequestsJob");
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebGroupMembershipFormGating",
            ).isMexMembershipApprovalRequestsEnabled()
          )
            return p(e);
          var t = yield c.load(),
            n = t.fetchMexMembershipApprovalRequests;
          return n(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                      requestMethod: f(e.requestMethod),
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
              return g(n.value);
            }
            default:
              return (t.name, g(t.value.errorServerErrors.value));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e) {
      var t = e.code,
        r = e.text;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "queryMembershipApprovalRequests failed: ",
              ":",
              "",
            ])),
          t,
          r,
        ),
        (u || (u = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), r),
        )
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield d(t),
            r = n.map(function (t) {
              var n = t.addedByPn,
                r = t.addedByUsername,
                o = t.phoneNumber,
                a = t.username,
                i = babelHelpers.objectWithoutPropertiesLoose(t, e);
              return i;
            }),
            a = yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).getMembershipApprovalRequests(t),
            i = a.filter(function (e) {
              return !r.some(function (t) {
                return t.id.equals(e.id);
              });
            });
          if (
            (yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).removeMembershipApprovalRequests(
              t,
              i.map(function (e) {
                return e.id;
              }),
            ),
            yield o(
              "WAWebApiMembershipApprovalRequestStore",
            ).addMembershipApprovalRequests(t, r),
            o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled())
          ) {
            var l = n.reduce(function (e, t) {
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
            ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(l, !0);
          }
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var s = n.reduce(function (e, t) {
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
            yield o("WAWebSetUsernameJob").setUsernamesJob(s);
          }
          (o("WAWebBackendApi").frontendFireAndForget(
            "removeMembershipApprovalRequests",
            {
              groupId: t,
              requestIds: i.map(function (e) {
                return e.id;
              }),
            },
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "addMembershipApprovalRequests",
              { groupId: t, requests: r },
            ));
        })),
        y.apply(this, arguments)
      );
    }
    l.queryAndUpdateGroupMembershipApprovalRequests = h;
  },
  98,
);
