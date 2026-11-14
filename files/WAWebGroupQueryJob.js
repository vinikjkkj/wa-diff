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
      h,
      y = r("requireDeferred")("WASmaxGroupsBatchGetGroupInfoRPC").__setRef(
        "WAWebGroupQueryJob",
      ),
      C = r("requireDeferred")("WASmaxGroupsGetInviteGroupInfoRPC").__setRef(
        "WAWebGroupQueryJob",
      ),
      b = r("requireDeferred")(
        "WASmaxGroupsGetParticipatingGroupsRPC",
      ).__setRef("WAWebGroupQueryJob"),
      v = r("JSResourceForInteraction")(
        "WAWebMexFetchGroupInviteInfoJob",
      ).__setRef("WAWebGroupQueryJob"),
      S = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormStoreJob",
      ).__setRef("WAWebGroupQueryJob");
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebApiParticipantStore").clearAdminshipCache();
          var t = yield b.load(),
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
                (h || (h = n("Promise"))).reject(
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
              var g = i.value,
                y = g.errorServerErrors.value,
                C = y.code,
                v = y.text;
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "queryAllGroups failed: ",
                      ":",
                      "",
                    ])),
                  C,
                  v,
                ),
                (h || (h = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(C),
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebGroupMembershipFormGating").isMexGroupInviteInfoEnabled()
          ) {
            var t = yield v.load(),
              r = t.mexFetchGroupInviteInfoJob;
            return r(e);
          }
          var a = yield C.load(),
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
                (h || (h = n("Promise"))).reject(
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
                (h || (h = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(_),
                    f,
                  ),
                )
              );
            }
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
              yield $(p),
              l.membershipForm != null && (yield D(n, l.membershipForm)));
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
          var n = t.membershipForm,
            a = t.membershipFormKeyId;
          try {
            var i = yield S.load(),
              l = i.storeGroupMembershipForm;
            yield l(e, n, a);
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = {
              queryContext: t,
              groupArgs: e.map(function (e) {
                return { groupJid: e };
              }),
            },
            i = yield y.load(),
            l = i.sendBatchGetGroupInfoRPC,
            s = yield l(a);
          switch (s.name) {
            case "BatchGetGroupInfoResponseSuccess": {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[batch-group-info] ",
                        " forbidden/not-exist groups",
                      ])),
                    u.length,
                  ),
                  yield (h || (h = n("Promise"))).all(
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
                m = d.code,
                C = d.text;
              return (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  m,
                  C,
                ),
                (h || (h = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(m),
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupsById failed: ",
                      ":",
                      "",
                    ])),
                  v,
                  S,
                ),
                (h || (h = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(v),
                    S,
                  ),
                )
              );
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    ((l.queryAllGroups = R),
      (l.queryGroupInvite = E),
      (l.queryAndUpdateGroupMetadataById = I),
      (l.maybeQueryAndUpdateMembershipApprovalRequests = $),
      (l.queryGroupsById_DO_NOT_USE_DIRECTLY = N));
  },
  98,
);
