__d(
  "WAWebGroupQueryJob",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
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
      ).__setRef("WAWebGroupQueryJob");
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebApiParticipantStore").clearAdminshipCache();
          var t = yield C.load(),
            r = t.sendGetParticipatingGroupsRPC,
            a = yield r({ hasParticipants: !0, hasDescription: !0 });
          e: {
            var i = a;
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "GetParticipatingGroupsResponseSuccess" &&
              "value" in i
            ) {
              var l = i.value,
                c = 0,
                d = l.groupsGroup.map(function (e) {
                  var t = e.groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup,
                    n = t.value;
                  return (
                    n.truncated && c++,
                    n.truncated ? n : o("WAWebGroupsQueryApi").parseGroupSmax(n)
                  );
                });
              return (
                c > 0 &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[get-participating-groups] ",
                        " truncated responses received",
                      ])),
                    c,
                  ),
                d
              );
              break e;
            }
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "GetParticipatingGroupsResponseClientError" &&
              "value" in i
            ) {
              var m = i.value,
                p =
                  m
                    .errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup
                    .value,
                _ = p.code,
                f = p.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "queryAllGroups failed: ",
                      ":",
                      "",
                    ])),
                  _,
                  f,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(_),
                    f,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "GetParticipatingGroupsResponseServerError" &&
              "value" in i
            ) {
              var h = i.value,
                y = h.errorServerErrors.value,
                b = y.code,
                v = y.text;
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "queryAllGroups failed: ",
                      ":",
                      "",
                    ])),
                  b,
                  v,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(b),
                    v,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                i,
            );
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
            o("WAWebGroupMembershipFormGating").isMexGroupInviteInfoEnabled()
          ) {
            var t = yield b.load(),
              r = t.mexFetchGroupInviteInfoJob;
            return r(e);
          }
          var a = yield y.load(),
            i = a.sendGetInviteGroupInfoRPC,
            l = yield i({ inviteCode: e });
          switch (l.name) {
            case "GetInviteGroupInfoResponseSuccess":
              return o("WAWebGroupsQueryApi").parseGroupSmax(
                l.value.groupInviteLinkGroupInfoMixin,
              );
            case "GetInviteGroupInfoResponseClientError": {
              var s = l.value.errorGetInviteGroupInfoClientErrors.value,
                u = s.code,
                m = s.text;
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInvite failed: ",
                      ":",
                      "",
                    ])),
                  u,
                  m,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(u),
                    m,
                  ),
                )
              );
            }
            case "GetInviteGroupInfoResponseServerError": {
              var p = l.value.errorServerErrors.value,
                _ = p.code,
                f = p.text;
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInvite failed: ",
                      ":",
                      "",
                    ])),
                  _,
                  f,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(_),
                    f,
                  ),
                )
              );
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield I(p));
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
          if (
            e.membershipApprovalMode &&
            e.participants.some(function (e) {
              return o("WAWebUserUtils").isMeAccount(e.id) && e.isAdmin;
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = {
              queryContext: t,
              groupArgs: e.map(function (e) {
                return { groupJid: e };
              }),
            },
            i = yield h.load(),
            l = i.sendBatchGetGroupInfoRPC,
            s = yield l(a);
          switch (s.name) {
            case "BatchGetGroupInfoResponseSuccess": {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupsById: successfully received batch group info for ",
                    "",
                  ])),
                e.length,
              );
              var u = [],
                c = r("compactMap")(s.value.groupsGroup, function (e) {
                  var t =
                    e.groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup;
                  if (t.name === "TruncatedGroupInfo") return t.value;
                  if (t.name === "GroupInfo")
                    return o("WAWebGroupsQueryApi").parseGroupSmax(t.value);
                  (t.name, u.push(t.value));
                });
              return (
                u.length > 0 &&
                  (o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[batch-group-info] ",
                        " forbidden/not-exist groups",
                      ])),
                    u.length,
                  ),
                  yield (g || (g = n("Promise"))).all(
                    u.map(function (e) {
                      var t = o("WAWebWidFactory").createWid(e.id + "@g.us");
                      return o("WAWebGroupQueryGroupJob").handleGroupInfoError(
                        t,
                        new (o("WAWebBackendErrors").ServerStatusCodeError)(
                          parseInt(e.error, 10),
                        ),
                      );
                    }),
                  )),
                c
              );
            }
            case "BatchGetGroupInfoResponseClientError": {
              var d = s.value.errorBatchGetGroupInfoClientErrors.value,
                y = d.code,
                C = d.text;
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  y,
                  C,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(y),
                    C,
                  ),
                )
              );
            }
            case "BatchGetGroupInfoResponseServerError": {
              var b = s.value.errorServerErrors.value,
                v = b.code,
                S = b.text;
              return (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  v,
                  S,
                ),
                (g || (g = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(v),
                    S,
                  ),
                )
              );
            }
          }
        })),
        x.apply(this, arguments)
      );
    }
    ((l.queryAllGroups = v),
      (l.queryGroupInvite = R),
      (l.queryAndUpdateGroupMetadataById = E),
      (l.maybeQueryAndUpdateMembershipApprovalRequests = I),
      (l.queryGroupsById_DO_NOT_USE_DIRECTLY = D));
  },
  98,
);
