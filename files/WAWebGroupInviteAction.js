__d(
  "WAWebGroupInviteAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return _(o("WAWebStateUtils").unproxy(e));
    }
    function d(e) {
      return f(o("WAWebStateUtils").unproxy(e));
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebGroupInviteJob").joinGroupViaInvite(e, t),
            a = r.gid,
            i =
              n.hasCapi === !0
                ? {
                    actualActors: o("WAWebHandleMsgTypes.flow")
                      .ActualActorsEnumType.Capi,
                    hostStorage: o("WAWebHandleMsgTypes.flow")
                      .HostStorageEnumType.Facebook,
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      if (t.groupInviteCodePromise) return t.groupInviteCodePromise;
      var a = t.participants.iAmAdmin(),
        i = t.memberLinkMode;
      if (
        !a &&
        i !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
      ) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupInviteCode: expected admin",
              ])),
          )
          .sendLogs("query-group-invite-code-user-not-admin");
        var l = 401;
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(l),
        );
      }
      var s = o("WAWebMexFetchGroupInviteCodeJob")
        .fetchMexGroupInviteCode(t.id)
        .then(function (e) {
          return { code: e };
        });
      return (
        (t.groupInviteCodePromise = s.then(r("WAWebNoop"))),
        s
          .then(function (e) {
            t.inviteCode = e.code;
          })
          .finally(function () {
            t.groupInviteCodePromise = null;
          })
      );
    }
    function f(e) {
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
    ((l.queryGroupInviteCode = c),
      (l.revokeGroupInvite = d),
      (l.joinGroupViaInvite = m));
  },
  98,
);
