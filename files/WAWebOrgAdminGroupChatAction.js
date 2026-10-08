__d(
  "WAWebOrgAdminGroupChatAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebOrgAdminGroupParticipantsAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(e),
      );
      return t == null || t.isLocked ? null : t;
    }
    function u(t) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
        o("WAWebCmd")
          .Cmd.openChatFromUnread({
            chat: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] opening a managed group chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("org-admin-open-group-chat-failed");
          }));
    }
    ((l.getOrgAdminGroupChat = s), (l.openOrgAdminGroupChat = u));
  },
  98,
);
