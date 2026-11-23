__d(
  "WAWebGroupQueryJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebGroupDatabaseJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupsQueryApi",
    "WAWebMexFetchGroupIsInternalJob",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = r("requireDeferred")("WASmaxGroupsBatchGetGroupInfoRPC").__setRef(
        "WAWebGroupQueryJob",
      ),
      y = r("requireDeferred")("WASmaxGroupsGetInviteGroupInfoRPC").__setRef(
        "WAWebGroupQueryJob",
      ),
      C = r("requireDeferred")(
        "WASmaxGroupsGetParticipatingGroupsRPC",
      ).__setRef("WAWebGroupQueryJob"),
      b = r("JSResourceForInteraction")(
        "WAWebMexFetchGroupInviteInfoJob",
      ).__setRef("WAWebGroupQueryJob"),
      v = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormStoreJob",
      ).__setRef("WAWebGroupQueryJob");
    async function S() {
      o("WAWebApiParticipantStore").clearAdminshipCache();
      var t = await C.load(),
        n = t.sendGetParticipatingGroupsRPC,
        r = await n({ hasParticipants: !0, hasDescription: !0 });
      e: {
        var a = r;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "GetParticipatingGroupsResponseSuccess" &&
          "value" in a
        ) {
          var i = a.value,
            l = 0,
            c = i.groupsGroup.map(function (e) {
              var t = e.groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup,
                n = t.value;
              return (
                n.truncated && l++,
                n.truncated ? n : o("WAWebGroupsQueryApi").parseGroupSmax(n)
              );
            });
          return (
            l > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[get-participating-groups] ",
                    " truncated responses received",
                  ])),
                l,
              ),
            c
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "GetParticipatingGroupsResponseClientError" &&
          "value" in a
        ) {
          var d = a.value,
            m =
              d.errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup
                .value,
            p = m.code,
            _ = m.text;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "queryAllGroups failed: ",
                  ":",
                  "",
                ])),
              p,
              _,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(p), _),
            )
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "GetParticipatingGroupsResponseServerError" &&
          "value" in a
        ) {
          var f = a.value,
            g = f.errorServerErrors.value,
            h = g.code,
            y = g.text;
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryAllGroups failed: ",
                  ":",
                  "",
                ])),
              h,
              y,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(h), y),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
    }
    async function R(e) {
      if (o("WAWebGroupMembershipFormGating").isMexGroupInviteInfoEnabled()) {
        var t = await b.load(),
          n = t.mexFetchGroupInviteInfoJob;
        return n(e);
      }
      var r = await y.load(),
        a = r.sendGetInviteGroupInfoRPC,
        i = await a({ inviteCode: e });
      switch (i.name) {
        case "GetInviteGroupInfoResponseSuccess":
          return o("WAWebGroupsQueryApi").parseGroupSmax(
            i.value.groupInviteLinkGroupInfoMixin,
          );
        case "GetInviteGroupInfoResponseClientError": {
          var l = i.value.errorGetInviteGroupInfoClientErrors.value,
            s = l.code,
            u = l.text;
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupInvite failed: ",
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
        case "GetInviteGroupInfoResponseServerError": {
          var m = i.value.errorServerErrors.value,
            p = m.code,
            _ = m.text;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupInvite failed: ",
                  ":",
                  "",
                ])),
              p,
              _,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(p), _),
            )
          );
        }
      }
    }
    async function L(e) {
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
          await k(p),
          l.membershipForm != null && (await E(n, l.membershipForm)));
      }
    }
    async function E(e, t) {
      var n = t.membershipForm,
        a = t.membershipFormKeyId;
      try {
        var i = await v.load(),
          l = i.storeGroupMembershipForm;
        await l(e, n, a);
      } catch (e) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[gmf] storing the membership form from group info failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("gmf-membership-form-group-info-store-failed");
      }
    }
    async function k(e) {
      if (
        e.membershipApprovalMode &&
        e.participants.some(function (e) {
          return o("WAWebUserUtils").isMeAccount(e.id) && e.isAdmin;
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
    async function I(e, t) {
      var n = {
          queryContext: t,
          groupArgs: e.map(function (e) {
            return { groupJid: e };
          }),
        },
        a = await h.load(),
        i = a.sendBatchGetGroupInfoRPC,
        l = await i(n);
      switch (l.name) {
        case "BatchGetGroupInfoResponseSuccess": {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupsById: successfully received batch group info for ",
                "",
              ])),
            e.length,
          );
          var s = [],
            u = r("compactMap")(l.value.groupsGroup, function (e) {
              var t =
                e.groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup;
              if (t.name === "TruncatedGroupInfo") return t.value;
              if (t.name === "GroupInfo")
                return o("WAWebGroupsQueryApi").parseGroupSmax(t.value);
              (t.name, s.push(t.value));
            });
          return (
            s.length > 0 &&
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[batch-group-info] ",
                    " forbidden/not-exist groups",
                  ])),
                s.length,
              ),
              await Promise.all(
                s.map(function (e) {
                  var t = o("WAWebWidFactory").createWid(e.id + "@g.us");
                  return o("WAWebGroupQueryGroupJob").handleGroupInfoError(
                    t,
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      parseInt(e.error, 10),
                    ),
                  );
                }),
              )),
            u
          );
        }
        case "BatchGetGroupInfoResponseClientError": {
          var c = l.value.errorBatchGetGroupInfoClientErrors.value,
            d = c.code,
            m = c.text;
          return (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupsById failed: ",
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
        }
        case "BatchGetGroupInfoResponseServerError": {
          var y = l.value.errorServerErrors.value,
            C = y.code,
            b = y.text;
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupsById failed: ",
                  ":",
                  "",
                ])),
              C,
              b,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(C), b),
            )
          );
        }
      }
    }
    ((l.queryAllGroups = S),
      (l.queryGroupInvite = R),
      (l.queryAndUpdateGroupMetadataById = L),
      (l.maybeQueryAndUpdateMembershipApprovalRequests = k),
      (l.queryGroupsById_DO_NOT_USE_DIRECTLY = I));
  },
  98,
);
