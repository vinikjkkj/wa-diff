__d(
  "WAWebGroupInviteAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebFindChatAction",
    "WAWebGroupInviteJob",
    "WAWebGroupInviteService",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebHandleMsgTypes",
    "WAWebMexFetchGroupInviteCodeJob",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return m(o("WAWebStateUtils").unproxy(e));
    }
    function c(e) {
      return p(o("WAWebStateUtils").unproxy(e));
    }
    async function d(e, t, n) {
      var r =
          o("WAWebGroupMetadataGetters").getGroupType(n) ===
          o("WAWebGroupType").GroupType.COMMUNITY
            ? null
            : n.id,
        a = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupInviteService").GroupInviteService,
              ).joinGroupViaInvite
            : o("WAWebGroupInviteJob").joinGroupViaInvite
        )(e, t, r),
        i = a.gid,
        l =
          n.hasCapi === !0
            ? {
                actualActors: o("WAWebHandleMsgTypes").ActualActorsEnumType
                  .Capi,
                hostStorage: o("WAWebHandleMsgTypes").HostStorageEnumType
                  .Facebook,
                privacyModeTs: 0,
              }
            : void 0;
      return o("WAWebFindChatAction")
        .findOrCreateLatestChat(i, "queryGroupInviteCode", {
          isGroupJoin: !0,
          nextPrivacyMode: l,
        })
        .then(function (e) {
          var t = e.chat;
          return t;
        });
    }
    function m(t) {
      if (t.groupInviteCodePromise) return t.groupInviteCodePromise;
      var n = t.participants.iAmAdmin(),
        r = t.memberLinkMode;
      if (
        !n &&
        r !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
      ) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupInviteCode: expected admin",
              ])),
          )
          .sendLogs("query-group-invite-code-user-not-admin");
        var a = 401;
        return Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(a),
        );
      }
      var i = (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebGroupInviteService").GroupInviteService,
            ).fetchMexGroupInviteCode
          : o("WAWebMexFetchGroupInviteCodeJob").fetchMexGroupInviteCode
      )(t.id)
        .then(function (e) {
          t.inviteCode = e;
        })
        .finally(function () {
          t.groupInviteCodePromise = null;
        });
      return ((t.groupInviteCodePromise = i), i);
    }
    function p(e) {
      return e.revokeGroupInvitePromise
        ? e.revokeGroupInvitePromise
        : (e.revokeGroupInvitePromise = (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupInviteService").GroupInviteService,
                ).resetGroupInviteCode
              : o("WAWebGroupInviteJob").resetGroupInviteCode
          )(e.id)
            .then(function (t) {
              e.inviteCode = t.code;
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  throw e;
                },
              ),
            )
            .catch(function (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMetadata] revokeGroupInvite dropped",
                  ])),
              );
            })
            .finally(function () {
              e.revokeGroupInvitePromise = null;
            }));
    }
    ((l.queryGroupInviteCode = u),
      (l.revokeGroupInvite = c),
      (l.joinGroupViaInvite = d));
  },
  98,
);
