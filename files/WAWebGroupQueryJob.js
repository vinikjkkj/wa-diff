__d(
  "WAWebGroupQueryJob",
  [
    "WALogger",
    "WASmaxGroupsBatchGetGroupInfoRPC",
    "WASmaxGroupsGetInviteGroupInfoRPC",
    "WASmaxGroupsGetParticipatingGroupsRPC",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebGroupDatabaseJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupsQueryApi",
    "WAWebMexFetchGroupIsInternalJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g() {
      o("WAWebApiParticipantStore").clearAdminshipCache();
      var t = await o(
        "WASmaxGroupsGetParticipatingGroupsRPC",
      ).sendGetParticipatingGroupsRPC({
        hasParticipants: !0,
        hasDescription: !0,
      });
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GetParticipatingGroupsResponseSuccess" &&
          "value" in n
        ) {
          var r = n.value,
            a = 0,
            i = r.groupsGroup.map(function (e) {
              var t = e.groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup,
                n = t.value;
              return (
                n.truncated && a++,
                n.truncated ? n : o("WAWebGroupsQueryApi").parseGroupSmax(n)
              );
            });
          return (
            a > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[get-participating-groups] ",
                    " truncated responses received",
                  ])),
                a,
              ),
            i
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GetParticipatingGroupsResponseClientError" &&
          "value" in n
        ) {
          var l = n.value,
            c =
              l.errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup
                .value,
            d = c.code,
            m = c.text;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "queryAllGroups failed: ",
                  ":",
                  "",
                ])),
              d,
              m,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(d), m),
            )
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GetParticipatingGroupsResponseServerError" &&
          "value" in n
        ) {
          var p = n.value,
            _ = p.errorServerErrors.value,
            f = _.code,
            g = _.text;
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryAllGroups failed: ",
                  ":",
                  "",
                ])),
              f,
              g,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(f), g),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function h(e) {
      var t = await o(
        "WASmaxGroupsGetInviteGroupInfoRPC",
      ).sendGetInviteGroupInfoRPC({ inviteCode: e });
      switch (t.name) {
        case "GetInviteGroupInfoResponseSuccess":
          return o("WAWebGroupsQueryApi").parseGroupSmax(
            t.value.groupInviteLinkGroupInfoMixin,
          );
        case "GetInviteGroupInfoResponseClientError": {
          var n = t.value.errorGetInviteGroupInfoClientErrors.value,
            r = n.code,
            a = n.text;
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupInvite failed: ",
                  ":",
                  "",
                ])),
              r,
              a,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(r), a),
            )
          );
        }
        case "GetInviteGroupInfoResponseServerError": {
          var i = t.value.errorServerErrors.value,
            l = i.code,
            s = i.text;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupInvite failed: ",
                  ":",
                  "",
                ])),
              l,
              s,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(l), s),
            )
          );
        }
      }
    }
    async function y(e) {
      var t = e.actionType,
        n = e.id,
        r = e.request,
        a =
          r === "enter_group_info" &&
          o("WAWebABProps").getABPropConfigValue("internal_group_indicator"),
        i = a
          ? o("WAWebMexFetchGroupIsInternalJob")
              .mexFetchGroupIsInternal(n.toString())
              .catch(function () {})
          : void 0,
        l = await o("WAWebGroupQueryGroupJob").queryGroupJob(n, r);
      if (l.status === "success") {
        var s = l.groupInfo;
        if (i != null) {
          var u = await i;
          u != null && (s = babelHelpers.extends({}, s, { isInternal: u }));
        }
        var c = await o(
            "WAWebApiParticipantStore",
          ).injectPastParticipantsFromDB([s], t),
          d = c[0],
          m = await o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([d]),
          p = m[0];
        (await o(
          "WAWebGroupDatabaseJob",
        ).updateGroupParticipantTableWithoutDeviceSyncJob([p]),
          o("WAWebBackendApi").frontendFireAndForget(
            "createOrUpdateGroupMetadataFromQuery",
            { groupInfo: p },
          ),
          await C(p));
      }
    }
    async function C(e) {
      if (
        e.membershipApprovalMode &&
        e.participants.some(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin;
        })
      ) {
        var t = await o("WAWebApiChatCommon").getChatRecord(e.id);
        return t
          ? o(
              "WAWebGroupGetMembershipApprovalRequestsJob",
            ).queryAndUpdateGroupMembershipApprovalRequests(e.id)
          : void 0;
      }
    }
    async function b(e, t) {
      var n = await o(
        "WASmaxGroupsBatchGetGroupInfoRPC",
      ).sendBatchGetGroupInfoRPC({
        queryContext: t,
        groupArgs: e.map(function (e) {
          return { groupJid: e };
        }),
      });
      switch (n.name) {
        case "BatchGetGroupInfoResponseSuccess": {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupsById: successfully received batch group info for ",
                "",
              ])),
            e.length,
          );
          var a = [],
            i = r("compactMap")(n.value.groupsGroup, function (e) {
              var t =
                e.groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup;
              if (t.name === "TruncatedGroupInfo") return t.value;
              if (t.name === "GroupInfo")
                return o("WAWebGroupsQueryApi").parseGroupSmax(t.value);
              (t.name, a.push(t.value));
            });
          return (
            a.length > 0 &&
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[batch-group-info] ",
                    " forbidden/not-exist groups",
                  ])),
                a.length,
              ),
              await Promise.all(
                a.map(function (e) {
                  var t = o("WAWebWidFactory").createWid(e.id + "@g.us");
                  return o("WAWebGroupQueryGroupJob").handleGroupInfoError(
                    t,
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      parseInt(e.error, 10),
                    ),
                  );
                }),
              )),
            i
          );
        }
        case "BatchGetGroupInfoResponseClientError": {
          var l = n.value.errorBatchGetGroupInfoClientErrors.value,
            s = l.code,
            u = l.text;
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupsById failed: ",
                  ":",
                  "",
                ])),
              s,
              u,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(s), u),
            )
          );
        }
        case "BatchGetGroupInfoResponseServerError": {
          var c = n.value.errorServerErrors.value,
            d = c.code,
            g = c.text;
          return (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupsById failed: ",
                  ":",
                  "",
                ])),
              d,
              g,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(d), g),
            )
          );
        }
      }
    }
    ((l.queryAllGroups = g),
      (l.queryGroupInvite = h),
      (l.queryAndUpdateGroupMetadataById = y),
      (l.maybeQueryAndUpdateMembershipApprovalRequests = C),
      (l.queryGroupsById_DO_NOT_USE_DIRECTLY = b));
  },
  98,
);
