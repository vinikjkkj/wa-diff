__d(
  "WAWebGroupInviteAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebFindChatAction",
    "WAWebGroupInviteJob",
    "WAWebGroupMemberLinkMode",
    "WAWebHandleMsgTypes.flow",
    "WAWebMexFetchGroupInviteCodeJob",
    "WAWebNoop",
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
      var r = await o("WAWebGroupInviteJob").joinGroupViaInvite(e, t),
        a = r.gid,
        i =
          n.hasCapi === !0
            ? {
                actualActors: o("WAWebHandleMsgTypes.flow").ActualActorsEnumType
                  .Capi,
                hostStorage: o("WAWebHandleMsgTypes.flow").HostStorageEnumType
                  .Facebook,
                privacyModeTs: 0,
              }
            : void 0;
      return o("WAWebFindChatAction")
        .findOrCreateLatestChat(a, "queryGroupInviteCode", {
          isGroupJoin: !0,
          nextPrivacyMode: i,
        })
        .then(function (e) {
          var t = e.chat;
          return t;
        });
    }
    function m(t) {
      if (t.groupInviteCodePromise) return t.groupInviteCodePromise;
      var n = t.participants.iAmAdmin(),
        a = t.memberLinkMode;
      if (
        !n &&
        a !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
      ) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupInviteCode: expected admin",
              ])),
          )
          .sendLogs("query-group-invite-code-user-not-admin");
        var i = 401;
        return Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(i),
        );
      }
      var l = o("WAWebMexFetchGroupInviteCodeJob")
        .fetchMexGroupInviteCode(t.id)
        .then(function (e) {
          return { code: e };
        });
      return (
        (t.groupInviteCodePromise = l.then(r("WAWebNoop"))),
        l
          .then(function (e) {
            t.inviteCode = e.code;
          })
          .finally(function () {
            t.groupInviteCodePromise = null;
          })
      );
    }
    function p(e) {
      return e.revokeGroupInvitePromise
        ? e.revokeGroupInvitePromise
        : (e.revokeGroupInvitePromise = o("WAWebGroupInviteJob")
            .resetGroupInviteCode(e.id)
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
