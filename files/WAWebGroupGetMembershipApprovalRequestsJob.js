__d(
  "WAWebGroupGetMembershipApprovalRequestsJob",
  [
    "WALogger",
    "WASmaxGroupsGetMembershipApprovalRequestsRPC",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebRequestMethodType",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["addedByPn", "addedByUsername", "phoneNumber", "username"],
      s;
    async function u(e) {
      var t = await o(
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
                  requestMethod: c(e.requestMethod),
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
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var s,
                  u = e.requestorUsername;
                u != null && (r.addedByUsername = u);
                var d =
                  ((s = e.identityMixin) == null ? void 0 : s.identityTypes) !=
                  null
                    ? o("WAWebGroupsQueryApi").extractUsernameFromIdentityTypes(
                        e.identityMixin.identityTypes,
                      )
                    : void 0;
                d != null && (r.username = d);
              }
              return r;
            },
          );
        case "GetMembershipApprovalRequestsResponseClientError": {
          var n = t.value.errorGetMembershipApprovalRequestsClientErrors;
          return d(n.value);
        }
        default:
          return (t.name, d(t.value.errorServerErrors.value));
      }
    }
    function c(e) {
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
    function d(e) {
      var t = e.code,
        n = e.text;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "queryMembershipApprovalRequests failed: ",
              ":",
              "",
            ])),
          t,
          n,
        ),
        Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), n),
        )
      );
    }
    async function m(t) {
      var n = await u(t),
        r = n.map(function (t) {
          var n = t.addedByPn,
            r = t.addedByUsername,
            o = t.phoneNumber,
            a = t.username,
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
          return i;
        }),
        a = await o(
          "WAWebApiMembershipApprovalRequestStore",
        ).getMembershipApprovalRequests(t),
        i = a.filter(function (e) {
          return !r.some(function (t) {
            return t.id.equals(e.id);
          });
        });
      if (
        (await o(
          "WAWebApiMembershipApprovalRequestStore",
        ).removeMembershipApprovalRequests(
          t,
          i.map(function (e) {
            return e.id;
          }),
        ),
        await o(
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
        await o(
          "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
        ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(l, !0);
      }
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var s = n.reduce(function (e, t) {
          return (
            t.username != null &&
              e.push({
                username: t.username,
                userId: o("WAWebWidFactory").asUserWidOrThrow(t.id),
              }),
            t.addedByUsername != null &&
              e.push({
                username: t.addedByUsername,
                userId: o("WAWebWidFactory").asUserWidOrThrow(t.addedBy),
              }),
            e
          );
        }, []);
        await o("WAWebSetUsernameJob").setUsernamesJob(s);
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
    }
    l.queryAndUpdateGroupMembershipApprovalRequests = m;
  },
  98,
);
