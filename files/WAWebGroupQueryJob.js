__d(
  "WAWebGroupQueryJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebApiParticipantStore").clearAdminshipCache();
          var t = yield o(
            "WASmaxGroupsGetParticipatingGroupsRPC",
          ).sendGetParticipatingGroupsRPC({
            hasParticipants: !0,
            hasDescription: !0,
          });
          e: {
            var r = t;
            if (
              ((typeof r == "object" && r !== null) ||
                typeof r == "function") &&
              r.name === "GetParticipatingGroupsResponseSuccess" &&
              "value" in r
            ) {
              var a = r.value,
                i = 0,
                l = a.groupsGroup.map(function (e) {
                  var t = e.groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup,
                    n = t.value;
                  return (
                    n.truncated && i++,
                    n.truncated ? n : o("WAWebGroupsQueryApi").parseGroupSmax(n)
                  );
                });
              return (
                i > 0 &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[get-participating-groups] ",
                        " truncated responses received",
                      ])),
                    i,
                  ),
                l
              );
              break e;
            }
            if (
              ((typeof r == "object" && r !== null) ||
                typeof r == "function") &&
              r.name === "GetParticipatingGroupsResponseClientError" &&
              "value" in r
            ) {
              var c = r.value,
                d =
                  c
                    .errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup
                    .value,
                m = d.code,
                p = d.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "queryAllGroups failed: ",
                      ":",
                      "",
                    ])),
                  m,
                  p,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(m),
                    p,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof r == "object" && r !== null) ||
                typeof r == "function") &&
              r.name === "GetParticipatingGroupsResponseServerError" &&
              "value" in r
            ) {
              var _ = r.value,
                f = _.errorServerErrors.value,
                h = f.code,
                y = f.text;
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
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(h),
                    y,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r,
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WASmaxGroupsGetInviteGroupInfoRPC",
          ).sendGetInviteGroupInfoRPC({ inviteCode: e });
          switch (t.name) {
            case "GetInviteGroupInfoResponseSuccess":
              return o("WAWebGroupsQueryApi").parseGroupSmax(
                t.value.groupInviteLinkGroupInfoMixin,
              );
            case "GetInviteGroupInfoResponseClientError": {
              var r = t.value.errorGetInviteGroupInfoClientErrors.value,
                a = r.code,
                i = r.text;
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInvite failed: ",
                      ":",
                      "",
                    ])),
                  a,
                  i,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(a),
                    i,
                  ),
                )
              );
            }
            case "GetInviteGroupInfoResponseServerError": {
              var l = t.value.errorServerErrors.value,
                s = l.code,
                u = l.text;
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInvite failed: ",
                      ":",
                      "",
                    ])),
                  s,
                  u,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(s),
                    u,
                  ),
                )
              );
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.actionType,
            n = e.id,
            r = e.request,
            a =
              r === "enter_group_info" &&
              o("WAWebABProps").getABPropConfigValue(
                "internal_group_indicator",
              ),
            i = a
              ? o("WAWebMexFetchGroupIsInternalJob")
                  .mexFetchGroupIsInternal(n.toString())
                  .catch(function () {})
              : void 0,
            l = yield o("WAWebGroupQueryGroupJob").queryGroupJob(n, r);
          if (l.status === "success") {
            var s = l.groupInfo;
            if (i != null) {
              var u = yield i;
              u != null && (s = babelHelpers.extends({}, s, { isInternal: u }));
            }
            var c = yield o(
                "WAWebApiParticipantStore",
              ).injectPastParticipantsFromDB([s], t),
              d = c[0],
              m = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                d,
              ]),
              p = m[0];
            (yield o(
              "WAWebGroupDatabaseJob",
            ).updateGroupParticipantTableWithoutDeviceSyncJob([p]),
              o("WAWebBackendApi").frontendFireAndForget(
                "createOrUpdateGroupMetadataFromQuery",
                { groupInfo: p },
              ),
              yield R(p));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.membershipApprovalMode &&
            e.participants.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin;
            })
          ) {
            var t = yield o("WAWebApiChatCommon").getChatRecord(e.id);
            return t
              ? o(
                  "WAWebGroupGetMembershipApprovalRequestsJob",
                ).queryAndUpdateGroupMembershipApprovalRequests(e.id)
              : void 0;
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield o(
            "WASmaxGroupsBatchGetGroupInfoRPC",
          ).sendBatchGetGroupInfoRPC({
            queryContext: t,
            groupArgs: e.map(function (e) {
              return { groupJid: e };
            }),
          });
          switch (a.name) {
            case "BatchGetGroupInfoResponseSuccess": {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupsById: successfully received batch group info for ",
                    "",
                  ])),
                e.length,
              );
              var i = [],
                l = r("compactMap")(a.value.groupsGroup, function (e) {
                  var t =
                    e.groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup;
                  if (t.name === "TruncatedGroupInfo") return t.value;
                  if (t.name === "GroupInfo")
                    return o("WAWebGroupsQueryApi").parseGroupSmax(t.value);
                  (t.name, i.push(t.value));
                });
              return (
                i.length > 0 &&
                  (o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[batch-group-info] ",
                        " forbidden/not-exist groups",
                      ])),
                    i.length,
                  ),
                  yield (g || (g = n("Promise"))).all(
                    i.map(function (e) {
                      var t = o("WAWebWidFactory").createWid(e.id + "@g.us");
                      return o("WAWebGroupQueryGroupJob").handleGroupInfoError(
                        t,
                        new (o("WAWebBackendErrors").ServerStatusCodeError)(
                          parseInt(e.error, 10),
                        ),
                      );
                    }),
                  )),
                l
              );
            }
            case "BatchGetGroupInfoResponseClientError": {
              var s = a.value.errorBatchGetGroupInfoClientErrors.value,
                u = s.code,
                c = s.text;
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  u,
                  c,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(u),
                    c,
                  ),
                )
              );
            }
            case "BatchGetGroupInfoResponseServerError": {
              var d = a.value.errorServerErrors.value,
                h = d.code,
                y = d.text;
              return (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  h,
                  y,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(h),
                    y,
                  ),
                )
              );
            }
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.queryAllGroups = h),
      (l.queryGroupInvite = C),
      (l.queryAndUpdateGroupMetadataById = v),
      (l.maybeQueryAndUpdateMembershipApprovalRequests = R),
      (l.queryGroupsById_DO_NOT_USE_DIRECTLY = E));
  },
  98,
);
