__d(
  "WAWebOrgAdminGroupChatAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebWidFactory",
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
    function c(e, t) {
      var n,
        r,
        a,
        i =
          e == null || (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (i == null || t == null) return null;
      var l;
      try {
        l = o("WAWebWidFactory").createUserLidOrThrow(t, "lid");
      } catch (e) {
        return null;
      }
      var s = o("WAWebApiContact").getAlternateUserWid(l),
        u = (r = i.get(l)) != null ? r : s == null ? null : i.get(s);
      return u == null || !i.canVerifyIdentity(u)
        ? null
        : u.id.isLid()
          ? u.contact
          : (a = o("WAWebContactCollection").ContactCollection.get(l)) != null
            ? a
            : null;
    }
    ((l.getOrgAdminGroupChat = s),
      (l.openOrgAdminGroupChat = u),
      (l.getOrgAdminGroupVerifyContact = c));
  },
  98,
);
